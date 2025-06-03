"use server"

// Cache for geocoding results
const geocodingCache = new Map<string, any>()
const reverseGeocodingCache = new Map<string, any>()

// Cache expiration time (1 hour in milliseconds)
const CACHE_EXPIRATION = 60 * 60 * 1000

// This function securely provides the Google Maps configuration
export async function getGoogleMapsConfig() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY

  if (!apiKey) {
    console.error("Google Maps API key is not configured")
  }

  return {
    apiKey,
    libraries: ["places"] as const,
  }
}

// This function handles geocoding on the server side with caching
export async function getAddressFromCoordinates(lat: number, lng: number) {
  try {
    const cacheKey = `${lat},${lng}`

    // Check cache first
    if (reverseGeocodingCache.has(cacheKey)) {
      const cachedResult = reverseGeocodingCache.get(cacheKey)

      // Check if cache is still valid
      if (Date.now() - cachedResult.timestamp < CACHE_EXPIRATION) {
        console.log("Using cached reverse geocoding result")
        return cachedResult.data
      }

      // Cache expired, remove it
      reverseGeocodingCache.delete(cacheKey)
    }

    const apiKey = process.env.GOOGLE_MAPS_API_KEY

    if (!apiKey) {
      return {
        success: false,
        address: "API key not configured",
        error: "Google Maps API key is missing",
      }
    }

    // Use the Google Maps Geocoding API to get the address from coordinates
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`,
      { cache: "no-store" }, // Ensure we get fresh results
    )

    if (!response.ok) {
      throw new Error(`Geocoding API request failed with status: ${response.status}`)
    }

    const data = await response.json()

    if (data.status === "REQUEST_DENIED") {
      console.error("Google Maps API request denied:", data.error_message)
      return {
        success: false,
        address: "Request denied",
        error: data.error_message || "API request denied",
      }
    }

    if (data.status !== "OK" || !data.results || data.results.length === 0) {
      return {
        success: false,
        address: "Address not found",
        error: data.status || "No results found",
      }
    }

    // Prepare result
    const result = {
      success: true,
      address: data.results[0].formatted_address,
      addressComponents: data.results[0].address_components,
    }

    // Cache the result
    reverseGeocodingCache.set(cacheKey, {
      data: result,
      timestamp: Date.now(),
    })

    return result
  } catch (error) {
    console.error("Error in getAddressFromCoordinates:", error)
    return {
      success: false,
      address: "Error retrieving address",
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

// This function handles reverse geocoding (address to coordinates) on the server side with caching
export async function getCoordinatesFromAddress(address: string) {
  try {
    // Check cache first
    if (geocodingCache.has(address)) {
      const cachedResult = geocodingCache.get(address)

      // Check if cache is still valid
      if (Date.now() - cachedResult.timestamp < CACHE_EXPIRATION) {
        console.log("Using cached geocoding result")
        return cachedResult.data
      }

      // Cache expired, remove it
      geocodingCache.delete(address)
    }

    const apiKey = process.env.GOOGLE_MAPS_API_KEY

    if (!apiKey) {
      return {
        success: false,
        coordinates: null,
        error: "Google Maps API key is missing",
      }
    }

    // Use the Google Maps Geocoding API to get coordinates from an address
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`,
      { cache: "no-store" }, // Ensure we get fresh results
    )

    if (!response.ok) {
      throw new Error(`Geocoding API request failed with status: ${response.status}`)
    }

    const data = await response.json()

    if (data.status === "REQUEST_DENIED") {
      console.error("Google Maps API request denied:", data.error_message)
      return {
        success: false,
        coordinates: null,
        error: data.error_message || "API request denied",
      }
    }

    if (data.status !== "OK" || !data.results || data.results.length === 0) {
      return {
        success: false,
        coordinates: null,
        error: data.status || "No results found",
      }
    }

    // Prepare result
    const location = data.results[0].geometry.location
    const result = {
      success: true,
      coordinates: { lat: location.lat, lng: location.lng },
      formattedAddress: data.results[0].formatted_address,
    }

    // Cache the result
    geocodingCache.set(address, {
      data: result,
      timestamp: Date.now(),
    })

    return result
  } catch (error) {
    console.error("Error in getCoordinatesFromAddress:", error)
    return {
      success: false,
      coordinates: null,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

// Validate address
export async function validateAddress(address: {
  street: string
  city: string
  state: string
  zipCode?: string
}) {
  try {
    const { street, city, state, zipCode } = address
    const fullAddress = `${street}, ${city}, ${state} ${zipCode || ""}`.trim()

    // Use geocoding to validate the address
    const result = await getCoordinatesFromAddress(fullAddress)

    if (!result.success) {
      return {
        isValid: false,
        message: "Address could not be verified",
        error: result.error,
      }
    }

    return {
      isValid: true,
      coordinates: result.coordinates,
      formattedAddress: result.formattedAddress,
    }
  } catch (error) {
    console.error("Error validating address:", error)
    return {
      isValid: false,
      message: "Error validating address",
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

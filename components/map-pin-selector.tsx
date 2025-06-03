"use client"

import { useState, useCallback } from "react"
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"
import { Button } from "@/components/ui/button"
import { Compass, Plus, Minus, AlertCircle } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { getAddressFromCoordinates } from "@/actions/maps-actions"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Define the center type
interface MapCenter {
  lat: number
  lng: number
}

// Define the component props
interface MapPinSelectorProps {
  initialLocation?: MapCenter
  onLocationSelect: (location: MapCenter, address: string) => void
  googleMapsConfig: {
    apiKey: string | undefined
    libraries: readonly ["places"]
  }
}

// Default center (Sri Lanka)
const defaultCenter: MapCenter = {
  lat: 6.9271,
  lng: 79.8612,
}

const containerStyle = {
  width: "100%",
  height: "400px",
}

// Cache for address lookups
const addressCache = new Map<string, string>()

const MapPinSelector = ({
  initialLocation = defaultCenter,
  onLocationSelect,
  googleMapsConfig,
}: MapPinSelectorProps) => {
  const [center, setCenter] = useState<MapCenter>(initialLocation)
  const [markerPosition, setMarkerPosition] = useState<MapCenter>(initialLocation)
  const [address, setAddress] = useState<string>("")
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [fetchError, setFetchError] = useState<string | null>(null)
  const [isLoadingAddress, setIsLoadingAddress] = useState(false)

  // Load the Google Maps API
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleMapsConfig.apiKey || "",
    libraries: googleMapsConfig.libraries,
  })

  // Get address from coordinates using server action with caching
  const fetchAddressFromCoordinates = useCallback(async (location: MapCenter) => {
    try {
      setIsLoadingAddress(true)
      setFetchError(null)

      // Check cache first
      const cacheKey = `${location.lat.toFixed(6)},${location.lng.toFixed(6)}`
      if (addressCache.has(cacheKey)) {
        setAddress(addressCache.get(cacheKey) || "")
        setIsLoadingAddress(false)
        return
      }

      const result = await getAddressFromCoordinates(location.lat, location.lng)

      if (!result.success) {
        setFetchError(result.error || "Failed to get address")
        setAddress("Address not found")
        return
      }

      setAddress(result.address)

      // Cache the result
      addressCache.set(cacheKey, result.address)
    } catch (error) {
      console.error("Error fetching address:", error)
      setFetchError("Failed to get address information")
      setAddress("Error retrieving address")
    } finally {
      setIsLoadingAddress(false)
    }
  }, [])

  // Handle map load
  const onLoad = useCallback(
    (map: google.maps.Map) => {
      setMap(map)

      // Try to get user's current location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            }
            setCenter(userLocation)
            setMarkerPosition(userLocation)
            map.panTo(userLocation)
            fetchAddressFromCoordinates(userLocation)
          },
          () => {
            // If user denies location access, use the default center
            fetchAddressFromCoordinates(initialLocation)
          },
        )
      } else {
        // Browser doesn't support geolocation
        fetchAddressFromCoordinates(initialLocation)
      }
    },
    [initialLocation, fetchAddressFromCoordinates],
  )

  // Handle map click to move the marker
  const onMapClick = useCallback(
    (e: google.maps.MapMouseEvent) => {
      if (e.latLng) {
        const newPosition = {
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        }
        setMarkerPosition(newPosition)
        fetchAddressFromCoordinates(newPosition)
      }
    },
    [fetchAddressFromCoordinates],
  )

  // Handle marker drag
  const onMarkerDragEnd = useCallback(
    (e: google.maps.MapMouseEvent) => {
      if (e.latLng) {
        const newPosition = {
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        }
        setMarkerPosition(newPosition)
        fetchAddressFromCoordinates(newPosition)
      }
    },
    [fetchAddressFromCoordinates],
  )

  // Handle zoom in
  const handleZoomIn = useCallback(() => {
    if (map) {
      map.setZoom(map.getZoom()! + 1)
    }
  }, [map])

  // Handle zoom out
  const handleZoomOut = useCallback(() => {
    if (map) {
      map.setZoom(map.getZoom()! - 1)
    }
  }, [map])

  // Handle recenter to user's location
  const handleRecenter = useCallback(() => {
    if (navigator.geolocation && map) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
        setCenter(userLocation)
        setMarkerPosition(userLocation)
        map.panTo(userLocation)
        fetchAddressFromCoordinates(userLocation)
      })
    }
  }, [map, fetchAddressFromCoordinates])

  // Handle confirm location
  const handleConfirmLocation = useCallback(() => {
    onLocationSelect(markerPosition, address)
  }, [markerPosition, address, onLocationSelect])

  if (loadError) {
    return (
      <div className="h-[400px] w-full flex items-center justify-center bg-gray-100 rounded-md">
        <div className="text-center p-6">
          <AlertCircle className="h-10 w-10 text-red-500 mx-auto mb-4" />
          <p className="text-red-500 font-medium mb-2">Error loading Google Maps</p>
          <p className="text-sm text-gray-600 mb-4">{loadError.message || "Failed to load Google Maps"}</p>
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Please check your internet connection and make sure your Google Maps API key is properly configured.
            </AlertDescription>
          </Alert>
          <Button variant="outline" onClick={() => window.location.reload()} className="mx-auto">
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div className="h-[400px] w-full flex items-center justify-center bg-gray-50 rounded-md">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-t-green-600 border-gray-200 rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600">Loading Google Maps...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        onClick={onMapClick}
        onLoad={onLoad}
        options={{
          fullscreenControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          zoomControl: false,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
        }}
      >
        <Marker
          position={markerPosition}
          draggable={true}
          onDragEnd={onMarkerDragEnd}
          animation={window.google?.maps?.Animation.DROP}
          label={{
            text: "Meet driver here",
            className:
              "bg-black text-white px-4 py-2 rounded-full absolute -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap",
          }}
        />
      </GoogleMap>

      {/* Compass button for recenter */}
      <div
        className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-md cursor-pointer"
        onClick={handleRecenter}
      >
        <Compass className="h-5 w-5" />
      </div>

      {/* Zoom controls */}
      <div className="absolute bottom-4 right-16 flex flex-col bg-white rounded-md shadow-md">
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleZoomIn}>
          <Plus className="h-4 w-4" />
        </Button>
        <Separator />
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleZoomOut}>
          <Minus className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-2 text-center text-sm text-gray-600">
        Move the pin to highlight the correct door or entrance to help your delivery person drop-off easier.
      </div>
    </div>
  )
}

export default MapPinSelector

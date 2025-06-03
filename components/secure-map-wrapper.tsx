"use client"

import { useEffect, useState } from "react"
import { getGoogleMapsConfig } from "@/actions/maps-actions"
import MapPinSelector from "./map-pin-selector"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Define the center type
interface MapCenter {
  lat: number
  lng: number
}

interface SecureMapWrapperProps {
  initialLocation?: MapCenter
  onLocationSelect: (location: MapCenter, address: string) => void
}

// Cache for Google Maps config to avoid repeated server calls
let configCache: {
  apiKey: string | undefined
  libraries: readonly ["places"]
} | null = null

export default function SecureMapWrapper({ initialLocation, onLocationSelect }: SecureMapWrapperProps) {
  const [googleMapsConfig, setGoogleMapsConfig] = useState<{
    apiKey: string | undefined
    libraries: readonly ["places"]
  } | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    async function loadConfig() {
      try {
        setIsLoading(true)
        setError(null)

        // Use cached config if available
        if (configCache) {
          setGoogleMapsConfig(configCache)
          setIsLoading(false)
          return
        }

        // Get Google Maps config securely from server action
        const config = await getGoogleMapsConfig()

        if (!config.apiKey) {
          throw new Error("Google Maps API key is missing. Please check your environment variables.")
        }

        // Cache the config for future use
        configCache = config
        setGoogleMapsConfig(config)
      } catch (err) {
        console.error("Failed to load Google Maps config:", err)
        setError(err instanceof Error ? err.message : "Failed to load map configuration")
      } finally {
        setIsLoading(false)
      }
    }

    loadConfig()
  }, [retryCount])

  const handleRetry = () => {
    // Clear cache on retry
    configCache = null
    setRetryCount((prev) => prev + 1)
  }

  if (isLoading) {
    return (
      <div className="h-[400px] w-full flex items-center justify-center bg-gray-50 rounded-md">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-t-green-600 border-gray-200 rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>
    )
  }

  if (error || !googleMapsConfig) {
    return (
      <div className="h-[400px] w-full flex items-center justify-center bg-gray-100 rounded-md">
        <div className="text-center p-6">
          <AlertCircle className="h-10 w-10 text-red-500 mx-auto mb-4" />
          <p className="text-red-500 font-medium mb-2">Error loading map</p>
          <p className="text-sm text-gray-600 mb-4">{error || "Configuration not available"}</p>
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Please make sure your Google Maps API key is properly configured and has the necessary permissions.
            </AlertDescription>
          </Alert>
          <Button variant="outline" onClick={handleRetry} className="mx-auto">
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <MapPinSelector
      initialLocation={initialLocation}
      onLocationSelect={onLocationSelect}
      googleMapsConfig={googleMapsConfig}
    />
  )
}

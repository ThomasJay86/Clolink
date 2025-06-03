"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import dynamic from "next/dynamic"

// Dynamically import the SecureMapWrapper to avoid SSR issues with Google Maps
const SecureMapWrapper = dynamic(() => import("@/components/secure-map-wrapper"), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full flex items-center justify-center">Loading map...</div>,
})

interface MapCenter {
  lat: number
  lng: number
}

export default function EditLocationDialog() {
  const [open, setOpen] = useState(false)
  const [location, setLocation] = useState<MapCenter>()
  const [address, setAddress] = useState<string>("")

  const handleLocationSelect = (newLocation: MapCenter, newAddress: string) => {
    setLocation(newLocation)
    setAddress(newAddress)
    setOpen(false)
  }

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Edit Delivery Location</Button>

      {address && (
        <div className="mt-4">
          <p className="font-medium">Selected Address:</p>
          <p>{address}</p>
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Set Delivery Location</DialogTitle>
          </DialogHeader>

          <SecureMapWrapper initialLocation={location} onLocationSelect={handleLocationSelect} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

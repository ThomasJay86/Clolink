"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

interface AdminStatusUpdateProps {
  currentStatus: string
  onUpdateStatus: (status: string, note: string) => void
}

export function AdminStatusUpdate({ currentStatus, onUpdateStatus }: AdminStatusUpdateProps) {
  const [status, setStatus] = useState(currentStatus)
  const [note, setNote] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsUpdating(true)

    // Simulate API call
    setTimeout(() => {
      onUpdateStatus(status, note)
      setNote("")
      setIsUpdating(false)
    }, 500)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "preparing":
        return "bg-yellow-100 text-yellow-800"
      case "ready":
        return "bg-blue-100 text-blue-800"
      case "out-for-delivery":
        return "bg-purple-100 text-purple-800"
      case "delivered":
        return "bg-green-100 text-green-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const formatStatus = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1).replace(/-/g, " ")
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <p className="font-medium">Current Status:</p>
        <Badge className={getStatusColor(currentStatus)}>{formatStatus(currentStatus)}</Badge>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="status" className="block text-sm font-medium mb-1">
            Update Status
          </label>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger id="status" className="w-full">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="received">Received</SelectItem>
              <SelectItem value="preparing">Preparing</SelectItem>
              <SelectItem value="ready">Ready</SelectItem>
              <SelectItem value="out-for-delivery">Out for Delivery</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="note" className="block text-sm font-medium mb-1">
            Status Note (optional)
          </label>
          <Textarea
            id="note"
            placeholder="Add a note about this status update"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
          />
        </div>

        <Button type="submit" disabled={status === currentStatus || isUpdating} className="w-full">
          {isUpdating ? "Updating..." : "Update Status"}
        </Button>
      </form>
    </div>
  )
}

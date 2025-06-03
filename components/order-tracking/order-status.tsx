"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Check, Clock, ChefHat, Bike, Package, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export type OrderStatus = "pending" | "confirmed" | "preparing" | "ready" | "out_for_delivery" | "delivered"

interface OrderStatusProps {
  initialStatus: OrderStatus
  orderId: string
  estimatedDeliveryTime?: string
  isDelivery: boolean
}

interface StatusStep {
  status: OrderStatus
  label: string
  description: string
  icon: React.ReactNode
  completedColor: string
}

export function OrderStatusTracker({ initialStatus, orderId, estimatedDeliveryTime, isDelivery }: OrderStatusProps) {
  const [currentStatus, setCurrentStatus] = useState<OrderStatus>(initialStatus)
  const [progress, setProgress] = useState(0)

  // In a real app, this would be a WebSocket or polling connection
  useEffect(() => {
    // Simulate real-time updates for demo purposes
    const interval = setInterval(() => {
      // This is just for demo - in production, you'd fetch the actual status
      const statusOrder: OrderStatus[] = [
        "pending",
        "confirmed",
        "preparing",
        "ready",
        isDelivery ? "out_for_delivery" : "ready",
        "delivered",
      ]

      const currentIndex = statusOrder.indexOf(currentStatus)
      if (currentIndex < statusOrder.length - 1) {
        // 20% chance of progressing to next status every 10 seconds
        if (Math.random() < 0.2) {
          const nextStatus = statusOrder[currentIndex + 1]
          setCurrentStatus(nextStatus)
        }
      }
    }, 10000)

    return () => clearInterval(interval)
  }, [currentStatus, isDelivery])

  // Update progress bar based on status
  useEffect(() => {
    const statusValues: Record<OrderStatus, number> = {
      pending: 0,
      confirmed: 20,
      preparing: 40,
      ready: 60,
      out_for_delivery: 80,
      delivered: 100,
    }

    setProgress(statusValues[currentStatus])
  }, [currentStatus])

  // Define the steps for delivery and pickup
  const deliverySteps: StatusStep[] = [
    {
      status: "confirmed",
      label: "Order Confirmed",
      description: "Your order has been received",
      icon: <Check className="h-6 w-6" />,
      completedColor: "text-green-500",
    },
    {
      status: "preparing",
      label: "Preparing",
      description: "Your food is being prepared",
      icon: <ChefHat className="h-6 w-6" />,
      completedColor: "text-amber-500",
    },
    {
      status: "ready",
      label: "Ready",
      description: "Your order is ready for pickup/delivery",
      icon: <Package className="h-6 w-6" />,
      completedColor: "text-blue-500",
    },
    {
      status: "out_for_delivery",
      label: "Out for Delivery",
      description: "Your order is on the way",
      icon: <Bike className="h-6 w-6" />,
      completedColor: "text-purple-500",
    },
    {
      status: "delivered",
      label: "Delivered",
      description: "Your order has been delivered",
      icon: <MapPin className="h-6 w-6" />,
      completedColor: "text-green-600",
    },
  ]

  const pickupSteps: StatusStep[] = [
    {
      status: "confirmed",
      label: "Order Confirmed",
      description: "Your order has been received",
      icon: <Check className="h-6 w-6" />,
      completedColor: "text-green-500",
    },
    {
      status: "preparing",
      label: "Preparing",
      description: "Your food is being prepared",
      icon: <ChefHat className="h-6 w-6" />,
      completedColor: "text-amber-500",
    },
    {
      status: "ready",
      label: "Ready for Pickup",
      description: "Your order is ready for pickup",
      icon: <Package className="h-6 w-6" />,
      completedColor: "text-blue-500",
    },
    {
      status: "delivered",
      label: "Picked Up",
      description: "Your order has been picked up",
      icon: <MapPin className="h-6 w-6" />,
      completedColor: "text-green-600",
    },
  ]

  const steps = isDelivery ? deliverySteps : pickupSteps

  // Filter out steps that don't apply to the current order type
  const filteredSteps = steps.filter((step) => {
    if (!isDelivery && step.status === "out_for_delivery") {
      return false
    }
    return true
  })

  const getStepStatus = (stepStatus: OrderStatus) => {
    const statusOrder: OrderStatus[] = ["pending", "confirmed", "preparing", "ready", "out_for_delivery", "delivered"]

    const currentIndex = statusOrder.indexOf(currentStatus)
    const stepIndex = statusOrder.indexOf(stepStatus)

    if (stepIndex < currentIndex) return "completed"
    if (stepIndex === currentIndex) return "current"
    return "upcoming"
  }

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Order #{orderId}</h3>
            <span className="text-sm text-muted-foreground">
              {estimatedDeliveryTime ? (
                <>
                  Estimated {isDelivery ? "delivery" : "pickup"}: {estimatedDeliveryTime}
                </>
              ) : (
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Calculating time...
                </span>
              )}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="space-y-6">
          {filteredSteps.map((step, index) => {
            const status = getStepStatus(step.status)
            return (
              <div key={step.status} className="flex items-start">
                <div
                  className={`
                  flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4
                  ${
                    status === "completed"
                      ? "bg-primary/10"
                      : status === "current"
                        ? "bg-primary/10 animate-pulse"
                        : "bg-muted"
                  }
                `}
                >
                  <div
                    className={`
                    ${
                      status === "completed"
                        ? step.completedColor
                        : status === "current"
                          ? "text-primary"
                          : "text-muted-foreground"
                    }
                  `}
                  >
                    {step.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <h4
                    className={`font-medium ${
                      status === "completed"
                        ? "text-foreground"
                        : status === "current"
                          ? "text-primary"
                          : "text-muted-foreground"
                    }`}
                  >
                    {step.label}
                  </h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {status === "current" && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    Current
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

export function OrderStatusBadge({ status, updatedAt }: { status: OrderStatus; updatedAt: string }) {
  const [timeAgo, setTimeAgo] = useState<string>("")

  useEffect(() => {
    const calculateTimeAgo = () => {
      const now = new Date()
      const updateTime = new Date(updatedAt)
      const diffInMinutes = Math.floor((now.getTime() - updateTime.getTime()) / (1000 * 60))

      if (diffInMinutes < 1) {
        return "just now"
      } else if (diffInMinutes < 60) {
        return `${diffInMinutes} min ago`
      } else {
        const hours = Math.floor(diffInMinutes / 60)
        return `${hours} ${hours === 1 ? "hour" : "hours"} ago`
      }
    }

    setTimeAgo(calculateTimeAgo())

    const timer = setInterval(() => {
      setTimeAgo(calculateTimeAgo())
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [updatedAt])

  const getStatusConfig = (status: OrderStatus) => {
    switch (status) {
      case "pending":
        return { label: "Pending", variant: "outline" as const }
      case "confirmed":
        return { label: "Confirmed", variant: "secondary" as const }
      case "preparing":
        return { label: "Preparing", variant: "warning" as const }
      case "ready":
        return { label: "Ready", variant: "default" as const }
      case "out_for_delivery":
        return { label: "Out for Delivery", variant: "default" as const }
      case "delivered":
        return { label: "Delivered", variant: "success" as const }
      default:
        return { label: "Unknown", variant: "outline" as const }
    }
  }

  const { label, variant } = getStatusConfig(status)

  return (
    <div className="flex flex-col space-y-1">
      <Badge variant={variant} className="w-fit">
        {label}
      </Badge>
      <span className="text-xs text-gray-500">{timeAgo}</span>
    </div>
  )
}

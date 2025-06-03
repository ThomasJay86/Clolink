"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Clock, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import SharedLayout from "@/components/shared-layout"

// Mock order data - in a real app, this would come from a database
const mockOrders = {
  "123456": {
    id: "123456",
    status: "preparing",
    items: [
      { id: "item1", name: "Signature Pasta", quantity: 1, price: 16.99 },
      { id: "item2", name: "Caesar Salad", quantity: 1, price: 8.99 },
      { id: "item3", name: "Garlic Bread", quantity: 1, price: 4.99 },
    ],
    subtotal: 30.97,
    tax: 2.63,
    deliveryFee: 3.99,
    tip: 4.65,
    total: 42.24,
    deliveryMethod: "delivery",
    deliveryAddress: "123 Main St, Cityville, 12345",
    estimatedDeliveryTime: "2023-05-01T19:45:00",
    placedAt: "2023-05-01T19:15:00",
    customer: {
      name: "John Doe",
      phone: "(555) 123-4567",
    },
    restaurant: {
      name: "Delicious Bistro",
      address: "456 Restaurant Ave, Foodtown, 67890",
      phone: "(555) 987-6543",
    },
    driver: {
      name: "Michael Smith",
      phone: "(555) 234-5678",
      photo: "/placeholder.svg?height=80&width=80",
    },
    statusHistory: [
      { status: "placed", timestamp: "2023-05-01T19:15:00", message: "Order received" },
      { status: "confirmed", timestamp: "2023-05-01T19:17:00", message: "Order confirmed by restaurant" },
      { status: "preparing", timestamp: "2023-05-01T19:20:00", message: "Food preparation started" },
    ],
  },
  "234567": {
    id: "234567",
    status: "delivered",
    items: [
      { id: "item4", name: "Margherita Pizza", quantity: 1, price: 14.99 },
      { id: "item5", name: "Tiramisu", quantity: 1, price: 7.99 },
    ],
    subtotal: 22.98,
    tax: 1.95,
    deliveryFee: 3.99,
    tip: 3.45,
    total: 32.37,
    deliveryMethod: "delivery",
    deliveryAddress: "789 Oak St, Cityville, 12345",
    estimatedDeliveryTime: "2023-04-30T18:30:00",
    placedAt: "2023-04-30T18:00:00",
    customer: {
      name: "Jane Smith",
      phone: "(555) 876-5432",
    },
    restaurant: {
      name: "Delicious Bistro",
      address: "456 Restaurant Ave, Foodtown, 67890",
      phone: "(555) 987-6543",
    },
    driver: {
      name: "Robert Johnson",
      phone: "(555) 345-6789",
      photo: "/placeholder.svg?height=80&width=80",
    },
    statusHistory: [
      { status: "placed", timestamp: "2023-04-30T18:00:00", message: "Order received" },
      { status: "confirmed", timestamp: "2023-04-30T18:02:00", message: "Order confirmed by restaurant" },
      { status: "preparing", timestamp: "2023-04-30T18:05:00", message: "Food preparation started" },
      { status: "ready", timestamp: "2023-04-30T18:15:00", message: "Order ready for pickup" },
      { status: "in_transit", timestamp: "2023-04-30T18:17:00", message: "Driver picked up your order" },
      { status: "delivered", timestamp: "2023-04-30T18:28:00", message: "Order delivered" },
    ],
  },
  "345678": {
    id: "345678",
    status: "ready",
    items: [
      { id: "item6", name: "Chicken Sandwich", quantity: 2, price: 12.99 },
      { id: "item7", name: "French Fries", quantity: 1, price: 4.99 },
      { id: "item8", name: "Chocolate Milkshake", quantity: 2, price: 5.99 },
    ],
    subtotal: 42.95,
    tax: 3.65,
    tip: 6.44,
    total: 53.04,
    deliveryMethod: "pickup",
    estimatedPickupTime: "2023-05-01T12:20:00",
    placedAt: "2023-05-01T12:00:00",
    customer: {
      name: "Alex Johnson",
      phone: "(555) 456-7890",
    },
    restaurant: {
      name: "Delicious Bistro",
      address: "456 Restaurant Ave, Foodtown, 67890",
      phone: "(555) 987-6543",
    },
    statusHistory: [
      { status: "placed", timestamp: "2023-05-01T12:00:00", message: "Order received" },
      { status: "confirmed", timestamp: "2023-05-01T12:02:00", message: "Order confirmed by restaurant" },
      { status: "preparing", timestamp: "2023-05-01T12:05:00", message: "Food preparation started" },
      { status: "ready", timestamp: "2023-05-01T12:15:00", message: "Order ready for pickup" },
    ],
  },
}

// Status definitions
const statusDefinitions = {
  placed: {
    label: "Order Placed",
    description: "We've received your order",
    color: "bg-gray-500",
  },
  confirmed: {
    label: "Order Confirmed",
    description: "Restaurant has confirmed your order",
    color: "bg-blue-500",
  },
  preparing: {
    label: "Preparing",
    description: "Your food is being prepared",
    color: "bg-yellow-500",
  },
  ready: {
    label: "Ready for Pickup",
    description: "Your order is ready for pickup or delivery",
    color: "bg-purple-500",
  },
  in_transit: {
    label: "On the Way",
    description: "Your order is on the way to you",
    color: "bg-indigo-500",
  },
  delivered: {
    label: "Delivered",
    description: "Your order has been delivered",
    color: "bg-green-500",
  },
  completed: {
    label: "Completed",
    description: "Your order is complete",
    color: "bg-green-500",
  },
}

// Helper function to format date
function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
}

// Helper function to calculate estimated delivery time
function calculateETA(order: any) {
  if (order.deliveryMethod === "delivery") {
    return order.estimatedDeliveryTime ? formatDate(order.estimatedDeliveryTime) : "Calculating..."
  } else {
    return order.estimatedPickupTime ? formatDate(order.estimatedPickupTime) : "Calculating..."
  }
}

// Helper function to get status percentage for progress bar
function getStatusPercentage(status: string) {
  const statusOrder = ["placed", "confirmed", "preparing", "ready", "in_transit", "delivered"]
  const index = statusOrder.indexOf(status)
  return Math.round(((index + 1) / statusOrder.length) * 100)
}

export default function TrackOrder() {
  const params = useParams()
  const router = useRouter()
  const orderId = params.orderId as string
  const [order, setOrder] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Simulate fetching order data
  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true)
      try {
        // In a real app, this would be an API call
        await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate network delay

        const orderData = mockOrders[orderId]
        if (!orderData) {
          setError("Order not found")
        } else {
          setOrder(orderData)
        }
      } catch (err) {
        setError("Failed to load order details")
      } finally {
        setLoading(false)
      }
    }

    fetchOrder()
  }, [orderId])

  // Simulate real-time updates
  useEffect(() => {
    if (!order || order.status === "delivered" || order.status === "completed") return

    // This simulates receiving updates from a real-time service like WebSockets
    const updateInterval = setInterval(() => {
      setOrder((prevOrder: any) => {
        if (!prevOrder) return null

        const statusOrder = ["placed", "confirmed", "preparing", "ready", "in_transit", "delivered"]
        const currentIndex = statusOrder.indexOf(prevOrder.status)

        // Don't update if already at the end
        if (currentIndex === statusOrder.length - 1) return prevOrder

        // 20% chance of updating status in this demo
        if (Math.random() > 0.8) {
          const newStatus = statusOrder[currentIndex + 1]
          const now = new Date().toISOString()

          const statusMessages = {
            placed: "Order received",
            confirmed: "Order confirmed by restaurant",
            preparing: "Food preparation started",
            ready: "Order ready for pickup",
            in_transit: "Driver picked up your order",
            delivered: "Order delivered",
          }

          return {
            ...prevOrder,
            status: newStatus,
            statusHistory: [
              ...prevOrder.statusHistory,
              {
                status: newStatus,
                timestamp: now,
                message: statusMessages[newStatus as keyof typeof statusMessages],
              },
            ],
          }
        }

        return prevOrder
      })
    }, 10000) // Check for updates every 10 seconds

    return () => clearInterval(updateInterval)
  }, [order])

  if (loading) {
    return (
      <SharedLayout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-t-green-600 border-gray-200 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading order details...</p>
          </div>
        </div>
      </SharedLayout>
    )
  }

  if (error || !order) {
    return (
      <SharedLayout>
        <div className="min-h-screen bg-gray-50 p-6">
          <div className="max-w-md mx-auto text-center bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Not Found</h2>
            <p className="text-gray-600 mb-6">{error || "We couldn't find the order you're looking for."}</p>
            <Button onClick={() => router.push("/products/menu-demo")}>Return to Menu</Button>
          </div>
        </div>
      </SharedLayout>
    )
  }

  const currentStatus = order.status
  const statusPercentage = getStatusPercentage(currentStatus)

  return (
    <SharedLayout>
      <div className="min-h-screen bg-gray-50 pb-20">
        {/* Header */}
        <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-30">
          <div className="max-w-3xl mx-auto flex items-center">
            <Link href="/products/menu-demo/checkout" className="text-gray-600 hover:text-gray-900 mr-4">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Order Tracking</h1>
          </div>
        </header>

        <div className="max-w-3xl mx-auto py-8 px-6">
          {/* Order Status Card */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-lg font-bold">Order #{order.id}</h2>
                  <p className="text-sm text-gray-500">
                    Placed on {new Date(order.placedAt).toLocaleDateString()} at{" "}
                    {new Date(order.placedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
                <Badge
                  className={`${
                    currentStatus === "delivered" || currentStatus === "completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {statusDefinitions[currentStatus as keyof typeof statusDefinitions]?.label || "Processing"}
                </Badge>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-600 transition-all duration-500 ease-in-out"
                    style={{ width: `${statusPercentage}%` }}
                  ></div>
                </div>

                {/* Status Timeline */}
                <div className="mt-6 relative">
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>

                  {order.statusHistory.map((historyItem: any, index: number) => (
                    <div key={index} className="relative pl-8 pb-8 last:pb-0">
                      <div
                        className={`absolute left-0 top-0 w-5 h-5 rounded-full border-4 ${
                          index === order.statusHistory.length - 1
                            ? "border-green-600 bg-white"
                            : "border-gray-300 bg-white"
                        }`}
                      ></div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">
                          {statusDefinitions[historyItem.status as keyof typeof statusDefinitions]?.label}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(historyItem.timestamp).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                        <span className="text-sm text-gray-600 mt-1">{historyItem.message}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery/Pickup Info */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                    {order.deliveryMethod === "delivery" ? (
                      <MapPin className="h-5 w-5 text-green-600" />
                    ) : (
                      <Clock className="h-5 w-5 text-green-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">
                      {order.deliveryMethod === "delivery" ? "Delivery Details" : "Pickup Details"}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Estimated {order.deliveryMethod === "delivery" ? "delivery" : "pickup"} by {calculateETA(order)}
                    </p>
                  </div>
                </div>

                {order.deliveryMethod === "delivery" && order.status === "in_transit" && order.driver && (
                  <div className="flex items-center p-3 bg-white rounded-lg mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                      <Image
                        src={order.driver.photo || "/placeholder.svg"}
                        alt={order.driver.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium">{order.driver.name}</h4>
                      <p className="text-sm text-gray-600">Your delivery driver</p>
                    </div>
                    <Button variant="outline" size="sm" className="flex-shrink-0">
                      <Phone className="h-4 w-4 mr-1" /> Contact
                    </Button>
                  </div>
                )}

                <div className="text-sm">
                  {order.deliveryMethod === "delivery" ? (
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-0.5" />
                      <span>{order.deliveryAddress}</span>
                    </div>
                  ) : (
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-0.5" />
                      <div>
                        <p>{order.restaurant.name}</p>
                        <p>{order.restaurant.address}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Restaurant Info */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <span role="img" aria-label="restaurant" className="text-lg">
                      🍽️
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium">{order.restaurant.name}</h3>
                    <p className="text-sm text-gray-600">{order.restaurant.phone}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4 mr-1" /> Call
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Order Details Card */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4">Order Details</h3>

              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {order.items.map((item: any) => (
                  <div key={item.id} className="flex justify-between">
                    <span>
                      {item.quantity}x {item.name}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              {/* Order Summary */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${order.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span>${order.tax.toFixed(2)}</span>
                </div>
                {order.deliveryMethod === "delivery" && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span>${order.deliveryFee.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tip</span>
                  <span>${order.tip.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold mt-2">
                  <span>Total</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <Button variant="outline" onClick={() => router.push("/products/menu-demo")}>
                  Return to Menu
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SharedLayout>
  )
}

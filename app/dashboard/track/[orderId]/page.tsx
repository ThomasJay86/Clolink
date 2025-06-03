"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin, Phone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { OrderStatus } from "@/components/order-tracking/order-status"
import { OrderTimeline } from "@/components/order-tracking/order-timeline"

// Mock order data
const mockOrderData = {
  id: "",
  status: "preparing",
  items: [
    { name: "Margherita Pizza", quantity: 1, price: 12.99 },
    { name: "Caesar Salad", quantity: 1, price: 8.99 },
    { name: "Garlic Bread", quantity: 1, price: 4.99 },
  ],
  subtotal: 26.97,
  tax: 2.16,
  deliveryFee: 3.99,
  tip: 4.05,
  total: 37.17,
  deliveryAddress: "123 Main St, Cityville, 12345",
  estimatedDeliveryTime: "30-45 minutes",
  restaurant: {
    name: "Delicious Bistro",
    address: "456 Restaurant Ave, Cityville",
    phone: "(555) 123-4567",
  },
  driver: {
    name: "John D.",
    phone: "(555) 987-6543",
    vehicle: "Honda Civic",
    licensePlate: "ABC123",
  },
  timeline: [
    { status: "ordered", time: "12:30 PM", message: "Order placed" },
    { status: "confirmed", time: "12:35 PM", message: "Restaurant confirmed order" },
    { status: "preparing", time: "12:40 PM", message: "Restaurant is preparing your order" },
    { status: "ready", time: null, message: "Order is ready for pickup" },
    { status: "delivering", time: null, message: "Driver is on the way" },
    { status: "delivered", time: null, message: "Order delivered" },
  ],
}

export default function TrackOrderPage() {
  const params = useParams()
  const router = useRouter()
  const [order, setOrder] = useState(mockOrderData)

  useEffect(() => {
    // Set the order ID from the URL parameter
    setOrder((prev) => ({ ...prev, id: params.orderId as string }))

    // Simulate order status updates
    const timer = setTimeout(() => {
      setOrder((prev) => {
        const timeline = [...prev.timeline]
        if (prev.status === "preparing") {
          return {
            ...prev,
            status: "ready",
            timeline: timeline.map((item) =>
              item.status === "ready"
                ? { ...item, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }
                : item,
            ),
          }
        }
        return prev
      })
    }, 30000) // Update after 30 seconds for demo purposes

    return () => clearTimeout(timer)
  }, [params.orderId])

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/dashboard/view-menu" className="text-gray-600 hover:text-gray-900 mr-4">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Track Order #{order.id}</h1>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto py-8 px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Order Status */}
          <div className="md:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Order Status</CardTitle>
              </CardHeader>
              <CardContent>
                <OrderStatus status={order.status} />
                <OrderTimeline timeline={order.timeline} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <div>
                        <span className="font-medium">{item.quantity}x </span>
                        <span>{item.name}</span>
                      </div>
                      <span>${item.price.toFixed(2)}</span>
                    </div>
                  ))}
                  <Separator />
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${order.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>${order.tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Delivery Fee</span>
                    <span>${order.deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tip</span>
                    <span>${order.tip.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${order.total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Delivery Info */}
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Delivery Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">Delivery Address</p>
                      <p className="text-gray-600">{order.deliveryAddress}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">Estimated Delivery Time</p>
                      <p className="text-gray-600">{order.estimatedDeliveryTime}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Restaurant</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">{order.restaurant.name}</p>
                  <p className="text-gray-600">{order.restaurant.address}</p>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-500 mr-2" />
                    <p className="text-gray-600">{order.restaurant.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {order.status === "delivering" && (
              <Card>
                <CardHeader>
                  <CardTitle>Delivery Driver</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">{order.driver.name}</p>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-gray-500 mr-2" />
                      <p className="text-gray-600">{order.driver.phone}</p>
                    </div>
                    <p className="text-gray-600">
                      {order.driver.vehicle} • {order.driver.licensePlate}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

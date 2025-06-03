"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, MapPin, Phone, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { mockOrders } from "@/data/orders"
import { AdminStatusUpdate } from "@/components/order-tracking/admin-status-update"
import { OrderTimeline } from "@/components/order-tracking/order-timeline"

export default function OrderDetailPage({ params }: { params: { orderId: string } }) {
  const { orderId } = params
  const order = mockOrders.find((o) => o.id === orderId)

  const [currentOrder, setCurrentOrder] = useState(order)

  if (!currentOrder) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Order not found</h1>
        <p className="mb-6">The order you're looking for doesn't exist or has been removed.</p>
        <Link href="/dashboard/orders">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Orders
          </Button>
        </Link>
      </div>
    )
  }

  const updateOrderStatus = (status: string, note: string) => {
    const updatedOrder = {
      ...currentOrder,
      status,
      statusHistory: [
        ...currentOrder.statusHistory,
        {
          status,
          timestamp: new Date().toISOString(),
          note,
        },
      ],
    }
    setCurrentOrder(updatedOrder)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Link href="/dashboard/orders">
          <Button variant="ghost" className="pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Orders
          </Button>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-2xl font-bold mb-2">Order {currentOrder.id}</h1>
                <p className="text-gray-500">Placed on {formatDate(currentOrder.date)}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">Total</p>
                <p className="text-2xl font-bold">${currentOrder.total.toFixed(2)}</p>
              </div>
            </div>

            <AdminStatusUpdate currentStatus={currentOrder.status} onUpdateStatus={updateOrderStatus} />
          </div>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Order Items</h2>
              <div className="space-y-4">
                {currentOrder.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    {item.image && (
                      <div className="h-16 w-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      <p className="text-gray-500 text-sm">${item.price.toFixed(2)} each</p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-6" />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${(currentOrder.total * 0.9).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${(currentOrder.total * 0.1).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg mt-4">
                  <span>Total</span>
                  <span>${currentOrder.total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full lg:w-96">
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Customer Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">{currentOrder.customer.name}</p>
                    <p className="text-gray-500">{currentOrder.customer.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-500">{currentOrder.customer.phone}</p>
                  </div>
                </div>
                {currentOrder.type === "delivery" && currentOrder.address && (
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Delivery Address</p>
                      <p className="text-gray-500">
                        {currentOrder.address.street}
                        <br />
                        {currentOrder.address.city}, {currentOrder.address.state} {currentOrder.address.zipCode}
                      </p>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Order Type</p>
                    <p className="text-gray-500 capitalize">{currentOrder.type}</p>
                    {currentOrder.estimatedDeliveryTime && (
                      <p className="text-gray-500 mt-1">Est. Time: {currentOrder.estimatedDeliveryTime}</p>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Order Timeline</h2>
              <OrderTimeline statusHistory={currentOrder.statusHistory} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

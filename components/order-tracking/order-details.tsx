"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Phone, MapPin, Clock, ChevronDown, ChevronUp } from "lucide-react"
import { OrderStatusBadge } from "./order-status"
import type { OrderStatus } from "./order-timeline"

export interface OrderItem {
  id: string
  name: string
  quantity: number
  price: number
  options?: { name: string; value: string }[]
}

export interface OrderDetails {
  id: string
  status: OrderStatus
  items: OrderItem[]
  subtotal: number
  tax: number
  deliveryFee: number
  total: number
  createdAt: string
  updatedAt: string
  estimatedDeliveryTime: string
  customer: {
    name: string
    phone: string
    email: string
  }
  delivery: {
    address: string
    instructions?: string
  } | null
  isPickup: boolean
  restaurant: {
    name: string
    address: string
    phone: string
  }
}

interface OrderDetailsProps {
  order: OrderDetails
}

export function OrderDetailsCard({ order }: OrderDetailsProps) {
  const [showItems, setShowItems] = useState(true)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Order #{order.id.slice(-6)}</CardTitle>
            <CardDescription>
              Placed on {new Date(order.createdAt).toLocaleDateString()} at{" "}
              {new Date(order.createdAt).toLocaleTimeString()}
            </CardDescription>
          </div>
          <OrderStatusBadge status={order.status} updatedAt={order.updatedAt} />
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Restaurant Info */}
        <div>
          <h3 className="font-medium text-sm mb-2">Restaurant</h3>
          <p className="text-sm">{order.restaurant.name}</p>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{order.restaurant.address}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <Phone className="h-4 w-4 mr-1" />
            <span>{order.restaurant.phone}</span>
          </div>
        </div>

        <Separator />

        {/* Delivery/Pickup Info */}
        <div>
          <h3 className="font-medium text-sm mb-2">{order.isPickup ? "Pickup Information" : "Delivery Information"}</h3>

          {order.isPickup ? (
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span>Pickup time: {order.estimatedDeliveryTime}</span>
            </div>
          ) : (
            <>
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{order.delivery?.address}</span>
              </div>
              {order.delivery?.instructions && (
                <p className="text-sm text-gray-500 mt-1">Instructions: {order.delivery.instructions}</p>
              )}
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <Clock className="h-4 w-4 mr-1" />
                <span>Estimated delivery: {order.estimatedDeliveryTime}</span>
              </div>
            </>
          )}
        </div>

        <Separator />

        {/* Order Items */}
        <div>
          <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowItems(!showItems)}>
            <h3 className="font-medium text-sm">Order Items ({order.items.length})</h3>
            {showItems ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </div>

          {showItems && (
            <div className="mt-2 space-y-3">
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium">
                      {item.quantity} × {item.name}
                    </p>
                    {item.options && item.options.length > 0 && (
                      <ul className="mt-1 text-xs text-gray-500">
                        {item.options.map((option, index) => (
                          <li key={index}>
                            {option.name}: {option.value}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <p className="text-sm">{formatCurrency(item.price * item.quantity)}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <Separator />

        {/* Order Summary */}
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>{formatCurrency(order.subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Tax</span>
            <span>{formatCurrency(order.tax)}</span>
          </div>
          {!order.isPickup && (
            <div className="flex justify-between text-sm">
              <span>Delivery Fee</span>
              <span>{formatCurrency(order.deliveryFee)}</span>
            </div>
          )}
          <div className="flex justify-between font-medium mt-2">
            <span>Total</span>
            <span>{formatCurrency(order.total)}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="outline">Contact Support</Button>
        <Button variant="default">Reorder</Button>
      </CardFooter>
    </Card>
  )
}

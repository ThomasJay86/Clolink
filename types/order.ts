export interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
}

export interface Customer {
  name: string
  email: string
  phone: string
}

export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
}

export interface OrderStatus {
  status: string
  timestamp: string
  note?: string
}

export interface Order {
  id: string
  customer: Customer
  items: OrderItem[]
  total: number
  status: string
  statusHistory: OrderStatus[]
  date: string
  address?: Address
  type: "delivery" | "pickup"
  estimatedDeliveryTime?: string
  paymentMethod: string
}

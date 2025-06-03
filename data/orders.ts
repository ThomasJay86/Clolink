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

export const mockOrders: Order[] = [
  {
    id: "ORD-1234",
    customer: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "555-123-4567",
    },
    items: [
      {
        id: "item1",
        name: "Margherita Pizza",
        price: 12.99,
        quantity: 2,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: "item2",
        name: "Caesar Salad",
        price: 8.99,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    total: 34.97,
    status: "delivered",
    statusHistory: [
      {
        status: "received",
        timestamp: "2023-05-01T10:00:00Z",
        note: "Order received and confirmed",
      },
      {
        status: "preparing",
        timestamp: "2023-05-01T10:05:00Z",
        note: "Chef started preparing your order",
      },
      {
        status: "ready",
        timestamp: "2023-05-01T10:25:00Z",
        note: "Your order is ready for pickup/delivery",
      },
      {
        status: "out-for-delivery",
        timestamp: "2023-05-01T10:30:00Z",
        note: "Driver is on the way",
      },
      {
        status: "delivered",
        timestamp: "2023-05-01T10:45:00Z",
        note: "Order delivered successfully",
      },
    ],
    date: "2023-05-01T10:00:00Z",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
    },
    type: "delivery",
    estimatedDeliveryTime: "30-45 minutes",
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-5678",
    customer: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "555-987-6543",
    },
    items: [
      {
        id: "item3",
        name: "Chicken Burger",
        price: 10.99,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: "item4",
        name: "French Fries",
        price: 4.99,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: "item5",
        name: "Chocolate Milkshake",
        price: 5.99,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    total: 21.97,
    status: "preparing",
    statusHistory: [
      {
        status: "received",
        timestamp: "2023-05-01T11:30:00Z",
        note: "Order received and confirmed",
      },
      {
        status: "preparing",
        timestamp: "2023-05-01T11:35:00Z",
        note: "Chef started preparing your order",
      },
    ],
    date: "2023-05-01T11:30:00Z",
    type: "pickup",
    paymentMethod: "Cash",
  },
  {
    id: "ORD-9012",
    customer: {
      name: "Robert Johnson",
      email: "robert.johnson@example.com",
      phone: "555-456-7890",
    },
    items: [
      {
        id: "item6",
        name: "Vegetable Pasta",
        price: 14.99,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: "item7",
        name: "Garlic Bread",
        price: 3.99,
        quantity: 2,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: "item8",
        name: "Tiramisu",
        price: 6.99,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    total: 29.96,
    status: "out-for-delivery",
    statusHistory: [
      {
        status: "received",
        timestamp: "2023-05-01T12:15:00Z",
        note: "Order received and confirmed",
      },
      {
        status: "preparing",
        timestamp: "2023-05-01T12:20:00Z",
        note: "Chef started preparing your order",
      },
      {
        status: "ready",
        timestamp: "2023-05-01T12:40:00Z",
        note: "Your order is ready for delivery",
      },
      {
        status: "out-for-delivery",
        timestamp: "2023-05-01T12:45:00Z",
        note: "Driver is on the way",
      },
    ],
    date: "2023-05-01T12:15:00Z",
    address: {
      street: "456 Oak Ave",
      city: "Somewhere",
      state: "NY",
      zipCode: "67890",
    },
    type: "delivery",
    estimatedDeliveryTime: "20-35 minutes",
    paymentMethod: "PayPal",
  },
  {
    id: "ORD-3456",
    customer: {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "555-789-0123",
    },
    items: [
      {
        id: "item9",
        name: "Sushi Combo",
        price: 24.99,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: "item10",
        name: "Miso Soup",
        price: 3.99,
        quantity: 2,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    total: 32.97,
    status: "ready",
    statusHistory: [
      {
        status: "received",
        timestamp: "2023-05-01T13:00:00Z",
        note: "Order received and confirmed",
      },
      {
        status: "preparing",
        timestamp: "2023-05-01T13:05:00Z",
        note: "Chef started preparing your order",
      },
      {
        status: "ready",
        timestamp: "2023-05-01T13:25:00Z",
        note: "Your order is ready for pickup",
      },
    ],
    date: "2023-05-01T13:00:00Z",
    type: "pickup",
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-7890",
    customer: {
      name: "Michael Wilson",
      email: "michael.wilson@example.com",
      phone: "555-321-6547",
    },
    items: [
      {
        id: "item11",
        name: "Steak Dinner",
        price: 29.99,
        quantity: 2,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: "item12",
        name: "Baked Potato",
        price: 4.99,
        quantity: 2,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: "item13",
        name: "Cheesecake",
        price: 7.99,
        quantity: 2,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    total: 85.94,
    status: "cancelled",
    statusHistory: [
      {
        status: "received",
        timestamp: "2023-05-01T18:30:00Z",
        note: "Order received and confirmed",
      },
      {
        status: "cancelled",
        timestamp: "2023-05-01T18:40:00Z",
        note: "Customer requested cancellation",
      },
    ],
    date: "2023-05-01T18:30:00Z",
    address: {
      street: "789 Pine St",
      city: "Elsewhere",
      state: "TX",
      zipCode: "54321",
    },
    type: "delivery",
    paymentMethod: "Credit Card",
  },
]

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// This is a sample template detail - in a real app, you would fetch this based on the ID
const templates = {
  classic: {
    id: "classic",
    name: "Classic Menu",
    description: "Clean and simple design for any restaurant",
    longDescription:
      "The Classic Menu template offers a timeless design that works well for any type of restaurant. With its clean layout and easy-to-read typography, your customers will have no trouble navigating your menu items.",
    image: "/placeholder.svg?height=600&width=300",
    profileImage: "/placeholder.svg?height=80&width=80",
    color: "bg-gradient-to-br from-gray-100 to-gray-200",
    isPro: false,
    category: "casual",
    rating: 4.8,
    reviewCount: 124,
    features: [
      "Clean, minimalist design",
      "Easy-to-read typography",
      "Customizable color scheme",
      "Mobile-friendly layout",
      "Category organization",
      "Item descriptions and prices",
    ],
    sampleItems: [
      {
        name: "Classic Burger",
        description: "Beef patty with lettuce, tomato, onion, and special sauce",
        price: "$12",
      },
      {
        name: "Caesar Salad",
        description: "Romaine lettuce, croutons, parmesan cheese with Caesar dressing",
        price: "$10",
      },
      {
        name: "Chocolate Cake",
        description: "Rich chocolate cake with vanilla ice cream",
        price: "$8",
      },
    ],
  },
  bistro: {
    id: "bistro",
    name: "Bistro",
    description: "Elegant design for fine dining establishments",
    longDescription:
      "The Bistro template is perfect for fine dining restaurants looking to create a sophisticated digital menu. With its elegant typography and refined layout, this template helps showcase your culinary creations in style.",
    image: "/placeholder.svg?height=600&width=300",
    profileImage: "/placeholder.svg?height=80&width=80",
    color: "bg-gradient-to-br from-amber-100 to-amber-200",
    isPro: true,
    category: "fine",
    rating: 4.9,
    reviewCount: 87,
    features: [
      "Elegant typography",
      "High-quality food imagery",
      "Sophisticated color palette",
      "Wine list integration",
      "Chef's specials section",
      "Seasonal menu support",
    ],
    sampleItems: [
      {
        name: "Beef Wellington",
        description: "Prime beef fillet, wild mushrooms, Parma ham, wrapped in puff pastry",
        price: "$38",
      },
      {
        name: "Lobster Bisque",
        description: "Creamy lobster soup with brandy and fresh herbs",
        price: "$16",
      },
      {
        name: "Chocolate Soufflé",
        description: "Warm chocolate soufflé with vanilla ice cream",
        price: "$12",
      },
    ],
  },
  "street-food": {
    id: "street-food",
    name: "Street Food",
    description: "Bold and vibrant design for casual eateries",
    longDescription:
      "The Street Food template brings energy and excitement to your menu with its bold colors and vibrant design. Perfect for food trucks, casual eateries, and any restaurant with a fun, energetic vibe.",
    image: "/placeholder.svg?height=600&width=300",
    profileImage: "/placeholder.svg?height=80&width=80",
    color: "bg-gradient-to-br from-red-100 to-orange-200",
    isPro: false,
    category: "fast",
    rating: 4.7,
    reviewCount: 156,
    features: [
      "Bold, vibrant colors",
      "Fun typography",
      "Visual food categories",
      "Special combo highlights",
      "Quick-view pricing",
      "Mobile-optimized design",
    ],
    sampleItems: [
      {
        name: "Loaded Street Tacos",
        description: "Three corn tortillas with your choice of protein, onions, cilantro, and salsa",
        price: "$9",
      },
      {
        name: "Loaded Fries",
        description: "Crispy fries topped with cheese sauce, bacon bits, and green onions",
        price: "$7",
      },
      {
        name: "Churros",
        description: "Fried dough pastry with cinnamon sugar and chocolate dipping sauce",
        price: "$5",
      },
    ],
  },
}

export default function TemplateDetail({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the template data based on the ID
  const template = templates[params.id as keyof typeof templates] || templates.classic

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto">
        <Link href="/templates" className="flex items-center text-purple-600 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to templates
        </Link>

        <div className="bg-purple-100 p-8 rounded-xl text-center">
          <h1 className="text-3xl font-bold mb-4">Template ID: {params.id}</h1>
          <p className="text-lg mb-6">
            This is a template detail page that will show information about the selected template.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700">Use This Template</Button>
        </div>
      </div>
    </div>
  )
}

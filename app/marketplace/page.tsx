import Image from "next/image"
import { Search, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import SharedLayout from "@/components/shared-layout"

const categories = [
  { id: "all", name: "All Apps" },
  { id: "ordering", name: "Online Ordering" },
  { id: "reservations", name: "Reservations" },
  { id: "analytics", name: "Analytics" },
  { id: "marketing", name: "Marketing" },
  { id: "payments", name: "Payments" },
  { id: "delivery", name: "Delivery" },
]

const apps = [
  {
    id: "online-orders",
    name: "Online Orders",
    description: "Accept online orders directly from your menu",
    image: "/placeholder.svg?height=80&width=80",
    category: "ordering",
    featured: true,
    rating: 4.8,
    reviews: 324,
  },
  {
    id: "table-reservations",
    name: "Table Reservations",
    description: "Let customers book tables directly from your menu",
    image: "/placeholder.svg?height=80&width=80",
    category: "reservations",
    featured: true,
    rating: 4.7,
    reviews: 256,
  },
  {
    id: "menu-analytics",
    name: "Menu Analytics",
    description: "Track which menu items are most popular",
    image: "/placeholder.svg?height=80&width=80",
    category: "analytics",
    featured: false,
    rating: 4.9,
    reviews: 189,
  },
  {
    id: "email-marketing",
    name: "Email Marketing",
    description: "Send promotions and updates to your customers",
    image: "/placeholder.svg?height=80&width=80",
    category: "marketing",
    featured: true,
    rating: 4.6,
    reviews: 210,
  },
  {
    id: "payment-processor",
    name: "Payment Processor",
    description: "Accept payments online with ease",
    image: "/placeholder.svg?height=80&width=80",
    category: "payments",
    featured: false,
    rating: 4.8,
    reviews: 302,
  },
  {
    id: "delivery-integration",
    name: "Delivery Integration",
    description: "Connect with popular delivery services",
    image: "/placeholder.svg?height=80&width=80",
    category: "delivery",
    featured: false,
    rating: 4.5,
    reviews: 178,
  },
  {
    id: "loyalty-program",
    name: "Loyalty Program",
    description: "Reward your regular customers",
    image: "/placeholder.svg?height=80&width=80",
    category: "marketing",
    featured: false,
    rating: 4.7,
    reviews: 245,
  },
  {
    id: "qr-code-generator",
    name: "QR Code Generator",
    description: "Create custom QR codes for your menu",
    image: "/placeholder.svg?height=80&width=80",
    category: "marketing",
    featured: false,
    rating: 4.9,
    reviews: 156,
  },
]

export default function Marketplace() {
  return (
    <SharedLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Enhance your menu with powerful apps
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Discover apps and integrations that help you grow your restaurant business and delight your customers
          </p>

          <div className="mt-10 max-w-md mx-auto relative">
            <Input
              type="text"
              placeholder="Search apps..."
              className="pl-10 pr-4 py-6 rounded-full border-blue-300 bg-white/10 backdrop-blur-sm text-white placeholder:text-blue-200"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-200" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Featured Apps */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Apps</h2>
            <Button variant="ghost" className="text-blue-600 hover:text-blue-800 font-medium">
              View all <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps
              .filter((app) => app.featured)
              .map((app) => (
                <div
                  key={app.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 overflow-hidden mr-4 flex-shrink-0">
                        <Image
                          src={app.image || "/placeholder.svg"}
                          alt={app.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{app.name}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="flex text-yellow-400 mr-1">
                            <Star className="h-3 w-3 fill-current" />
                            <Star className="h-3 w-3 fill-current" />
                            <Star className="h-3 w-3 fill-current" />
                            <Star className="h-3 w-3 fill-current" />
                            <Star className="h-3 w-3 fill-current" />
                          </div>
                          <span>
                            {app.rating} ({app.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{app.description}</p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Add to Menu</Button>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* All Apps */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Browse All Apps</h2>

          <Tabs defaultValue="all" className="space-y-8">
            <div className="overflow-x-auto pb-2">
              <TabsList className="bg-transparent border-b w-full justify-start rounded-none h-auto p-0">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none bg-transparent px-4 py-2"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {apps
                    .filter((app) => category.id === "all" || app.category === category.id)
                    .map((app) => (
                      <div
                        key={app.id}
                        className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="p-6">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 overflow-hidden mr-4 flex-shrink-0">
                              <Image
                                src={app.image || "/placeholder.svg"}
                                alt={app.name}
                                width={48}
                                height={48}
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-bold text-lg">{app.name}</h3>
                              <div className="flex items-center text-sm text-gray-500">
                                <div className="flex text-yellow-400 mr-1">
                                  <Star className="h-3 w-3 fill-current" />
                                  <Star className="h-3 w-3 fill-current" />
                                  <Star className="h-3 w-3 fill-current" />
                                  <Star className="h-3 w-3 fill-current" />
                                  <Star className="h-3 w-3 fill-current" />
                                </div>
                                <span>
                                  {app.rating} ({app.reviews} reviews)
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-6">{app.description}</p>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">Add to Menu</Button>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Developer CTA */}
        <section className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-800 mb-4">FOR DEVELOPERS</Badge>
              <h2 className="text-3xl font-bold mb-4">Build apps for FoodTree</h2>
              <p className="text-lg text-gray-700 mb-6">
                Join our developer community and create apps that help restaurants grow their business.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">Developer Portal</Button>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
              <h3 className="font-bold mb-4">Popular API Endpoints</h3>
              <ul className="space-y-3 text-sm">
                <li className="p-2 bg-gray-50 rounded">
                  <code className="text-blue-600">GET /api/menu</code>
                  <p className="text-gray-600 mt-1">Retrieve menu items and categories</p>
                </li>
                <li className="p-2 bg-gray-50 rounded">
                  <code className="text-blue-600">POST /api/orders</code>
                  <p className="text-gray-600 mt-1">Create a new customer order</p>
                </li>
                <li className="p-2 bg-gray-50 rounded">
                  <code className="text-blue-600">GET /api/analytics</code>
                  <p className="text-gray-600 mt-1">Access menu performance data</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to enhance your menu?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore our marketplace and find the perfect apps to grow your restaurant business
          </p>
          <Button className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-3 rounded-full">
            Browse All Apps
          </Button>
        </div>
      </div>
    </SharedLayout>
  )
}

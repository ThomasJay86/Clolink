import { Search, ArrowRight, Star, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import SharedLayout from "@/components/shared-layout"

const categories = [
  { id: "all", name: "All Apps" },
  { id: "ordering", name: "Ordering" },
  { id: "reservations", name: "Reservations" },
  { id: "analytics", name: "Analytics" },
  { id: "marketing", name: "Marketing" },
  { id: "payments", name: "Payments" },
]

const apps = [
  {
    id: "online-orders",
    name: "Online Orders",
    description: "Accept online orders directly from your menu with zero commission fees.",
    image: "/placeholder.svg?height=80&width=80",
    category: "ordering",
    featured: true,
    rating: 4.8,
    reviews: 324,
    color: "bg-blue-500",
  },
  {
    id: "table-reservations",
    name: "Table Reservations",
    description: "Let customers book tables directly from your menu. Syncs with Google Calendar.",
    image: "/placeholder.svg?height=80&width=80",
    category: "reservations",
    featured: true,
    rating: 4.7,
    reviews: 256,
    color: "bg-purple-500",
  },
  {
    id: "menu-analytics",
    name: "Menu Analytics",
    description: "Track which menu items are most popular and optimize your pricing.",
    image: "/placeholder.svg?height=80&width=80",
    category: "analytics",
    featured: false,
    rating: 4.9,
    reviews: 189,
    color: "bg-emerald-500",
  },
  {
    id: "email-marketing",
    name: "Email Marketing",
    description: "Send automated promotions and updates to your customer database.",
    image: "/placeholder.svg?height=80&width=80",
    category: "marketing",
    featured: true,
    rating: 4.6,
    reviews: 210,
    color: "bg-orange-500",
  },
  {
    id: "payment-processor",
    name: "Stripe Connect",
    description: "Accept credit cards, Apple Pay, and Google Pay securely.",
    image: "/placeholder.svg?height=80&width=80",
    category: "payments",
    featured: false,
    rating: 4.8,
    reviews: 302,
    color: "bg-indigo-500",
  },
  {
    id: "delivery-integration",
    name: "Delivery Hub",
    description: "Connect with UberEats, DoorDash, and GrubHub in one dashboard.",
    image: "/placeholder.svg?height=80&width=80",
    category: "delivery",
    featured: false,
    rating: 4.5,
    reviews: 178,
    color: "bg-pink-500",
  },
  {
    id: "loyalty-program",
    name: "Loyalty Rewards",
    description: "Create a digital punch card system to reward regular customers.",
    image: "/placeholder.svg?height=80&width=80",
    category: "marketing",
    featured: false,
    rating: 4.7,
    reviews: 245,
    color: "bg-red-500",
  },
  {
    id: "qr-code-generator",
    name: "Smart QR Codes",
    description: "Create dynamic QR codes that you can update without reprinting.",
    image: "/placeholder.svg?height=80&width=80",
    category: "marketing",
    featured: false,
    rating: 4.9,
    reviews: 156,
    color: "bg-cyan-500",
  },
]

export default function Marketplace() {
  return (
    <SharedLayout>
      {/* Modern Hero Section */}
      <div className="bg-gray-900 text-white pt-24 pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border-none mb-6">App Store</Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
              Supercharge your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                restaurant operations
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl">
              Discover powerful apps and integrations to automate your workflow, increase sales, and delight customers.
            </p>

            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for apps, integrations, and tools..."
                className="pl-12 pr-4 h-14 rounded-2xl border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder:text-gray-500 focus:bg-white/10 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with negative margin to overlap hero */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20 pb-24">
        {/* Featured Apps Carousel Style */}
        <section className="mb-16">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-bold text-white">Featured Apps</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {apps
              .filter((app) => app.featured)
              .slice(0, 3)
              .map((app) => (
                <div
                  key={app.id}
                  className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:transform hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl ${app.color} flex items-center justify-center text-white shadow-lg`}
                    >
                      {/* Placeholder icon based on name first letter */}
                      <span className="text-2xl font-bold">{app.name.charAt(0)}</span>
                    </div>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                      Featured
                    </Badge>
                  </div>

                  <h3 className="font-bold text-xl mb-2 group-hover:text-blue-600 transition-colors">{app.name}</h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">{app.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-medium">{app.rating}</span>
                      <span className="text-xs text-gray-400">({app.reviews})</span>
                    </div>
                    <Button size="sm" variant="ghost" className="text-blue-600 hover:bg-blue-50">
                      Install <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* All Apps with Modern Tabs */}
        <section>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <h2 className="text-2xl font-bold text-gray-900">Browse Categories</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-full border-gray-200 bg-transparent">
                <Filter className="w-4 h-4 mr-2" /> Filter
              </Button>
              <Button variant="outline" size="sm" className="rounded-full border-gray-200 bg-transparent">
                Sort by: Popular
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="space-y-8">
            <TabsList className="bg-transparent p-0 h-auto flex flex-wrap gap-2 justify-start">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="rounded-full border border-gray-200 bg-white px-6 py-2.5 data-[state=active]:bg-gray-900 data-[state=active]:text-white data-[state=active]:border-gray-900 transition-all shadow-sm"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {apps
                    .filter((app) => category.id === "all" || app.category === category.id)
                    .map((app) => (
                      <div
                        key={app.id}
                        className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div
                            className={`w-12 h-12 rounded-xl ${app.color} flex items-center justify-center text-white text-lg font-bold shadow-sm`}
                          >
                            {app.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 leading-tight">{app.name}</h3>
                            <p className="text-xs text-gray-500 capitalize">{app.category}</p>
                          </div>
                        </div>

                        <p className="text-sm text-gray-600 mb-4 flex-grow">{app.description}</p>

                        <Button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200 shadow-none">
                          Add to Menu
                        </Button>
                      </div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Developer Banner */}
        <section className="mt-20">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <Badge className="bg-blue-500/20 text-blue-300 border-none mb-4">Developers</Badge>
                <h2 className="text-3xl font-bold mb-4">Build for the FoodTree Ecosystem</h2>
                <p className="text-gray-300 mb-8">
                  Create apps that help thousands of restaurants grow. Access our powerful API and developer tools.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-white text-gray-900 hover:bg-gray-100">Read Documentation</Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                    Get API Key
                  </Button>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-md border border-white/10 rounded-xl p-6 w-full max-w-md font-mono text-sm">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>
                    <span className="text-purple-400">const</span> <span className="text-blue-400">order</span> ={" "}
                    <span className="text-purple-400">await</span> foodtree.
                    <span className="text-yellow-400">createOrder</span>({`{`}
                  </p>
                  <p className="pl-4">
                    <span className="text-blue-300">items</span>: [<span className="text-green-400">"burger"</span>,{" "}
                    <span className="text-green-400">"fries"</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-blue-300">total</span>: <span className="text-orange-400">24.50</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-blue-300">customer</span>: <span className="text-green-400">"user_123"</span>
                  </p>
                  <p>{`}`});</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SharedLayout>
  )
}

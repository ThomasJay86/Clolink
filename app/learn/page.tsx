"use client"

import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Video, FileText, Search, PlayCircle, Clock, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import SharedLayout from "@/components/shared-layout"

const categories = [
  { id: "all", name: "All Resources" },
  { id: "guides", name: "Guides" },
  { id: "tutorials", name: "Tutorials" },
  { id: "case-studies", name: "Case Studies" },
  { id: "webinars", name: "Webinars" },
]

const resources = [
  {
    id: "getting-started",
    title: "Getting Started with FoodTree",
    description: "Learn how to set up your restaurant menu in minutes",
    image: "/placeholder.svg?height=400&width=600",
    category: "guides",
    type: "guide",
    readTime: "5 min read",
    featured: true,
    author: "Sarah Wilson",
    date: "Oct 12, 2023",
  },
  {
    id: "menu-optimization",
    title: "Menu Optimization Tips",
    description: "Best practices for organizing your digital menu",
    image: "/placeholder.svg?height=400&width=600",
    category: "guides",
    type: "guide",
    readTime: "8 min read",
    featured: true,
    author: "Mike Chen",
    date: "Oct 15, 2023",
  },
  {
    id: "qr-code-tutorial",
    title: "Creating QR Codes for Your Menu",
    description: "Step-by-step tutorial for generating and using QR codes",
    image: "/placeholder.svg?height=400&width=600",
    category: "tutorials",
    type: "video",
    readTime: "12 min video",
    featured: false,
    author: "Alex Johnson",
    date: "Oct 18, 2023",
  },
  {
    id: "italian-restaurant",
    title: "How Bella Italia Increased Orders by 35%",
    description: "Case study of a successful Italian restaurant using FoodTree",
    image: "/placeholder.svg?height=400&width=600",
    category: "case-studies",
    type: "case-study",
    readTime: "10 min read",
    featured: true,
    author: "Lisa Ray",
    date: "Oct 20, 2023",
  },
  {
    id: "food-photography",
    title: "Food Photography for Menus",
    description: "Tips for taking appetizing photos of your dishes",
    image: "/placeholder.svg?height=400&width=600",
    category: "tutorials",
    type: "guide",
    readTime: "15 min read",
    featured: false,
    author: "David Miller",
    date: "Oct 22, 2023",
  },
  {
    id: "online-ordering",
    title: "Setting Up Online Ordering",
    description: "How to integrate online ordering with your menu",
    image: "/placeholder.svg?height=400&width=600",
    category: "tutorials",
    type: "video",
    readTime: "20 min video",
    featured: false,
    author: "Sarah Wilson",
    date: "Oct 25, 2023",
  },
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case "guide":
      return <BookOpen className="h-4 w-4" />
    case "video":
      return <PlayCircle className="h-4 w-4" />
    case "case-study":
      return <TrendingUp className="h-4 w-4" />
    case "webinar":
      return <Video className="h-4 w-4" />
    default:
      return <FileText className="h-4 w-4" />
  }
}

export default function Learn() {
  return (
    <SharedLayout>
      {/* Modern Hero Section */}
      <div className="relative bg-gray-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-900/20 to-transparent" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Badge className="bg-white/10 text-white hover:bg-white/20 border-none mb-6 px-4 py-1.5 backdrop-blur-sm">
            FoodTree Academy
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
            Master the art of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              digital hospitality
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Expert guides, tutorials, and insights to help you grow your restaurant business in the digital age.
          </p>

          <div className="max-w-2xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-20" />
            <div className="relative bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/10">
              <div className="flex items-center">
                <Search className="absolute left-4 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for guides, tutorials, or topics..."
                  className="pl-12 pr-4 py-6 bg-transparent border-0 text-white placeholder:text-gray-400 focus:ring-0 rounded-full text-lg"
                />
                <Button className="rounded-full px-8 bg-white text-gray-900 hover:bg-gray-100 font-medium">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Featured Resources Grid */}
        <section className="mb-20">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Resources</h2>
              <p className="text-gray-500">Hand-picked guides to get you started</p>
            </div>
            <Button variant="ghost" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50">
              View all <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources
              .filter((resource) => resource.featured)
              .map((resource) => (
                <Link href={`/learn/${resource.id}`} key={resource.id} className="group">
                  <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={resource.image || "/placeholder.svg"}
                        alt={resource.title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-gray-900 backdrop-blur-sm shadow-sm hover:bg-white">
                          {resource.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center text-gray-500 text-xs font-medium mb-3 gap-3">
                        <div className="flex items-center">
                          {getTypeIcon(resource.type)}
                          <span className="ml-1 capitalize">{resource.type}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{resource.readTime}</span>
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">{resource.description}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gray-200" />
                          <span className="text-xs font-medium text-gray-700">{resource.author}</span>
                        </div>
                        <span className="text-xs text-gray-400">{resource.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>

        {/* Categories Tabs */}
        <section>
          <Tabs defaultValue="all" className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h2 className="text-2xl font-bold text-gray-900">Browse Library</h2>
              <TabsList className="bg-gray-100 p-1 rounded-xl h-auto inline-flex">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="rounded-lg px-4 py-2 text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {resources
                    .filter((resource) => category.id === "all" || resource.category === category.id)
                    .map((resource) => (
                      <Link href={`/learn/${resource.id}`} key={resource.id} className="group">
                        <div className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                          <div className="w-32 h-24 relative rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={resource.image || "/placeholder.svg"}
                              alt={resource.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge
                                variant="outline"
                                className="text-[10px] px-1.5 py-0 h-5 border-gray-200 text-gray-500"
                              >
                                {resource.category}
                              </Badge>
                              <span className="text-[10px] text-gray-400">{resource.readTime}</span>
                            </div>
                            <h3 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2 mb-1">
                              {resource.title}
                            </h3>
                            <p className="text-xs text-gray-500 line-clamp-1">{resource.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Newsletter Section */}
        <section className="mt-24">
          <div className="bg-gray-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Join 50,000+ restaurant owners</h2>
              <p className="text-gray-400 mb-8 text-lg">
                Get the latest industry insights, tips, and guides delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  placeholder="Enter your email address"
                  className="h-12 bg-white/10 border-white/10 text-white placeholder:text-gray-500 focus:bg-white/20 rounded-xl"
                />
                <Button className="h-12 px-8 bg-white text-gray-900 hover:bg-gray-100 rounded-xl font-semibold">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-4">No spam, ever. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>
      </div>
    </SharedLayout>
  )
}

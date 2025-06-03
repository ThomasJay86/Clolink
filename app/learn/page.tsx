import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Video, FileText } from "lucide-react"
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
    image: "/placeholder.svg?height=200&width=400",
    category: "guides",
    type: "guide",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: "menu-optimization",
    title: "Menu Optimization Tips",
    description: "Best practices for organizing your digital menu",
    image: "/placeholder.svg?height=200&width=400",
    category: "guides",
    type: "guide",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: "qr-code-tutorial",
    title: "Creating QR Codes for Your Menu",
    description: "Step-by-step tutorial for generating and using QR codes",
    image: "/placeholder.svg?height=200&width=400",
    category: "tutorials",
    type: "video",
    readTime: "12 min video",
    featured: false,
  },
  {
    id: "italian-restaurant",
    title: "How Bella Italia Increased Orders by 35%",
    description: "Case study of a successful Italian restaurant using FoodTree",
    image: "/placeholder.svg?height=200&width=400",
    category: "case-studies",
    type: "case-study",
    readTime: "10 min read",
    featured: true,
  },
  {
    id: "food-photography",
    title: "Food Photography for Menus",
    description: "Tips for taking appetizing photos of your dishes",
    image: "/placeholder.svg?height=200&width=400",
    category: "tutorials",
    type: "guide",
    readTime: "15 min read",
    featured: false,
  },
  {
    id: "online-ordering",
    title: "Setting Up Online Ordering",
    description: "How to integrate online ordering with your menu",
    image: "/placeholder.svg?height=200&width=400",
    category: "tutorials",
    type: "video",
    readTime: "20 min video",
    featured: false,
  },
  {
    id: "menu-analytics",
    title: "Understanding Menu Analytics",
    description: "Learn how to use analytics to improve your menu",
    image: "/placeholder.svg?height=200&width=400",
    category: "webinars",
    type: "webinar",
    readTime: "45 min webinar",
    featured: false,
  },
  {
    id: "cafe-success",
    title: "Urban Café's Digital Transformation",
    description: "How a small café modernized their menu experience",
    image: "/placeholder.svg?height=200&width=400",
    category: "case-studies",
    type: "case-study",
    readTime: "12 min read",
    featured: false,
  },
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case "guide":
      return <BookOpen className="h-4 w-4" />
    case "video":
      return <Video className="h-4 w-4" />
    case "case-study":
      return <FileText className="h-4 w-4" />
    case "webinar":
      return <Video className="h-4 w-4" />
    default:
      return <BookOpen className="h-4 w-4" />
  }
}

export default function Learn() {
  return (
    <SharedLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Learn how to grow your restaurant
          </h1>
          <p className="mt-6 text-xl text-purple-100 max-w-3xl mx-auto">
            Discover resources, guides, and best practices to help you make the most of your digital menu
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Featured Resources */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Resources</h2>
            <Button variant="ghost" className="text-purple-600 hover:text-purple-800 font-medium">
              View all <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources
              .filter((resource) => resource.featured)
              .map((resource) => (
                <Link href={`/learn/${resource.id}`} key={resource.id} className="group">
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video relative">
                      <Image
                        src={resource.image || "/placeholder.svg"}
                        alt={resource.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 mr-2">
                          {resource.category}
                        </Badge>
                        <div className="flex items-center text-gray-500 text-sm">
                          {getTypeIcon(resource.type)}
                          <span className="ml-1">{resource.readTime}</span>
                        </div>
                      </div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-purple-700 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600">{resource.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>

        {/* All Resources */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Browse All Resources</h2>

          <Tabs defaultValue="all" className="space-y-8">
            <div className="overflow-x-auto pb-2">
              <TabsList className="bg-transparent border-b w-full justify-start rounded-none h-auto p-0">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:text-purple-600 data-[state=active]:shadow-none bg-transparent px-4 py-2"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {resources
                    .filter((resource) => category.id === "all" || resource.category === category.id)
                    .map((resource) => (
                      <Link href={`/learn/${resource.id}`} key={resource.id} className="group">
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="aspect-video relative">
                            <Image
                              src={resource.image || "/placeholder.svg"}
                              alt={resource.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-6">
                            <div className="flex items-center mb-2">
                              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 mr-2">
                                {resource.category}
                              </Badge>
                              <div className="flex items-center text-gray-500 text-sm">
                                {getTypeIcon(resource.type)}
                                <span className="ml-1">{resource.readTime}</span>
                              </div>
                            </div>
                            <h3 className="font-bold text-lg mb-2 group-hover:text-purple-700 transition-colors">
                              {resource.title}
                            </h3>
                            <p className="text-gray-600">{resource.description}</p>
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
        <section className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Stay updated with restaurant tips</h2>
              <p className="text-lg text-gray-700 mb-6">
                Subscribe to our newsletter for the latest guides, tutorials, and industry insights.
              </p>
              <div className="flex gap-4">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button className="bg-purple-600 hover:bg-purple-700">Subscribe</Button>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Newsletter"
                width={400}
                height={300}
                className="rounded-xl"
              />
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to grow your restaurant?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Create your digital menu today and start connecting with more customers
          </p>
          <Button className="bg-white text-purple-900 hover:bg-gray-100 text-lg px-8 py-3 rounded-full">
            Get Started for Free
          </Button>
        </div>
      </div>
    </SharedLayout>
  )
}

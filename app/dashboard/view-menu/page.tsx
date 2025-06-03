"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Search, ShoppingBag, Heart, Filter, ChevronDown, Star, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { menuCategories } from "@/app/products/menu-demo/menu-data"

export default function ViewMenu() {
  const [activeCategory, setActiveCategory] = useState("featured")
  const [searchQuery, setSearchQuery] = useState("")
  const [cart, setCart] = useState<{ id: string; quantity: number }[]>([])
  const [showFilters, setShowFilters] = useState(false)
  const [dietaryFilters, setDietaryFilters] = useState<string[]>([])
  const router = useRouter()

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("foodtree-cart")
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (e) {
        console.error("Failed to parse saved cart")
      }
    }
  }, [])

  // Add item to cart
  const addToCart = (itemId: string) => {
    const existingItem = cart.find((item) => item.id === itemId)
    if (existingItem) {
      setCart(cart.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCart([...cart, { id: itemId, quantity: 1 }])
    }
  }

  // Toggle dietary filter
  const toggleFilter = (filter: string) => {
    if (dietaryFilters.includes(filter)) {
      setDietaryFilters(dietaryFilters.filter((f) => f !== filter))
    } else {
      setDietaryFilters([...dietaryFilters, filter])
    }
  }

  // Filter menu items based on search and dietary preferences
  const filterItems = (items: any[]) => {
    return items.filter((item) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())

      // Dietary filter
      const matchesDietary = dietaryFilters.length === 0 || dietaryFilters.some((filter) => item.tags.includes(filter))

      return matchesSearch && matchesDietary
    })
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 mr-4">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Delicious Bistro</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="relative"
              onClick={() => {
                if (cart.length > 0) {
                  localStorage.setItem("foodtree-cart", JSON.stringify(cart))
                  router.push("/dashboard/checkout")
                }
              }}
            >
              <ShoppingBag className="h-5 w-5" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="sm">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="bg-white border-b py-4 px-6 sticky top-16 z-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search menu..."
                className="pl-10 pr-4 py-2 rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4" />
              Filters
              <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </Button>
          </div>

          {/* Dietary Filters */}
          {showFilters && (
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge
                variant={dietaryFilters.includes("vegetarian") ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleFilter("vegetarian")}
              >
                Vegetarian
              </Badge>
              <Badge
                variant={dietaryFilters.includes("vegan") ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleFilter("vegan")}
              >
                Vegan
              </Badge>
              <Badge
                variant={dietaryFilters.includes("gluten-free") ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleFilter("gluten-free")}
              >
                Gluten-Free
              </Badge>
              <Badge
                variant={dietaryFilters.includes("non-alcoholic") ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleFilter("non-alcoholic")}
              >
                Non-Alcoholic
              </Badge>
            </div>
          )}
        </div>
      </div>

      {/* Menu Categories */}
      <div className="bg-white border-b py-2 px-6 sticky top-[112px] z-10">
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <div className="overflow-x-auto pb-2">
              <TabsList className="bg-transparent w-full justify-start rounded-none h-auto p-0">
                {menuCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="rounded-full data-[state=active]:bg-green-100 data-[state=active]:text-green-800 data-[state=active]:shadow-none bg-transparent px-4 py-2"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-6xl mx-auto py-8 px-6">
        <Tabs value={activeCategory} onValueChange={setActiveCategory}>
          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {filterItems(category.items).length > 0 ? (
                  filterItems(category.items).map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div className="flex">
                        <div className="w-1/3 relative">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={120}
                            height={120}
                            className="object-cover w-full h-full"
                          />
                          {item.tags.includes("popular") && (
                            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                              Popular
                            </div>
                          )}
                        </div>
                        <div className="w-2/3 p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold text-lg">{item.name}</h3>
                              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                            </div>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button variant="ghost" size="sm" className="p-1 h-auto">
                                    <Info className="h-4 w-4 text-gray-400" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <div className="text-xs">
                                    <p className="font-bold mb-1">Nutritional Info</p>
                                    <p>Calories: {item.nutritionalInfo.calories}</p>
                                    <p>Protein: {item.nutritionalInfo.protein}</p>
                                    <p>Carbs: {item.nutritionalInfo.carbs}</p>
                                    <p>Fat: {item.nutritionalInfo.fat}</p>
                                  </div>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {item.tags
                              .filter((tag) => tag !== "popular")
                              .map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                                </Badge>
                              ))}
                          </div>
                          <div className="flex justify-between items-center mt-4">
                            <div className="font-bold text-lg">${item.price.toFixed(2)}</div>
                            <Button
                              size="sm"
                              className="rounded-full bg-green-600 hover:bg-green-700"
                              onClick={() => addToCart(item.id)}
                            >
                              Add to Order
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 py-12 text-center">
                    <p className="text-gray-500">No items match your search or filters.</p>
                    <Button
                      variant="link"
                      onClick={() => {
                        setSearchQuery("")
                        setDietaryFilters([])
                      }}
                    >
                      Clear filters
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Restaurant Info */}
      <div className="bg-white border-t py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3">About Delicious Bistro</h3>
              <p className="text-gray-600">
                Fine dining restaurant offering a blend of modern and traditional cuisine using locally sourced
                ingredients.
              </p>
              <div className="flex items-center mt-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">4.8 (243 reviews)</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Hours</h3>
              <ul className="space-y-1 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span>11:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday - Saturday</span>
                  <span>11:00 AM - 11:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>12:00 PM - 9:00 PM</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Contact & Location</h3>
              <p className="text-gray-600 mb-2">123 Main Street, Cityville</p>
              <p className="text-gray-600 mb-2">(555) 123-4567</p>
              <p className="text-gray-600">info@deliciousbistro.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Order Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
        <div className="max-w-6xl mx-auto">
          <Button
            className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg"
            onClick={() => {
              if (cart.length > 0) {
                // Store cart in localStorage before navigating
                localStorage.setItem("foodtree-cart", JSON.stringify(cart))
                router.push("/dashboard/checkout")
              }
            }}
          >
            <ShoppingBag className="h-5 w-5 mr-2" />
            {cart.length > 0 ? (
              <>View Order ({cart.reduce((total, item) => total + item.quantity, 0)} items)</>
            ) : (
              <>Start Order</>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

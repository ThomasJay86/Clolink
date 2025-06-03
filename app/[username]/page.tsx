import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Share2, ShoppingBag, Heart, Clock, MapPin, Star, QrCode, ChevronDown } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// This is sample data - in a real app, you would fetch this from a database
const SAMPLE_RESTAURANT = {
  username: "deliciousbistro",
  name: "Delicious Bistro",
  bio: "Fine dining in your city",
  profileImage: "/placeholder.svg?height=120&width=120",
  coverImage: "/placeholder.svg?height=200&width=600",
  rating: 4.8,
  reviewCount: 243,
  address: "123 Main Street, Cityville",
  hours: "Mon-Sat: 11am-10pm, Sun: 12pm-9pm",
  categories: ["Italian", "Mediterranean", "Fine Dining"],
  menuCategories: [
    {
      id: "appetizers",
      name: "Appetizers",
      items: [
        {
          id: 3,
          name: "Vegetarian Platter",
          description: "Selection of fresh vegetables and dips",
          price: "$16",
          image: "/placeholder.svg?height=60&width=60",
          color: "green",
          popular: true,
          dietary: ["vegetarian", "gluten-free"],
        },
        {
          id: 7,
          name: "Bruschetta",
          description: "Toasted bread topped with tomatoes, garlic, and basil",
          price: "$12",
          image: "/placeholder.svg?height=60&width=60",
          color: "red",
          dietary: ["vegetarian"],
        },
        {
          id: 8,
          name: "Calamari",
          description: "Crispy fried calamari with lemon aioli",
          price: "$14",
          image: "/placeholder.svg?height=60&width=60",
          color: "yellow",
        },
      ],
    },
    {
      id: "main-courses",
      name: "Main Courses",
      items: [
        {
          id: 1,
          name: "Signature Pasta",
          description: "Homemade pasta with our secret sauce",
          price: "$18",
          image: "/placeholder.svg?height=60&width=60",
          color: "pink",
          popular: true,
        },
        {
          id: 2,
          name: "Grilled Salmon",
          description: "Fresh salmon with seasonal vegetables",
          price: "$24",
          image: "/placeholder.svg?height=60&width=60",
          color: "blue",
          dietary: ["gluten-free"],
        },
        {
          id: 6,
          name: "Seafood Risotto",
          description: "Creamy risotto with fresh seafood",
          price: "$22",
          image: "/placeholder.svg?height=60&width=60",
          color: "cyan",
        },
        {
          id: 9,
          name: "Filet Mignon",
          description: "Premium cut steak with truffle mashed potatoes",
          price: "$32",
          image: "/placeholder.svg?height=60&width=60",
          color: "purple",
          popular: true,
          dietary: ["gluten-free"],
        },
      ],
    },
    {
      id: "desserts",
      name: "Desserts",
      items: [
        {
          id: 4,
          name: "Dessert Special",
          description: "Chef's special dessert of the day",
          price: "$9",
          image: "/placeholder.svg?height=60&width=60",
          color: "yellow",
          popular: true,
        },
        {
          id: 10,
          name: "Tiramisu",
          description: "Classic Italian dessert with coffee and mascarpone",
          price: "$10",
          image: "/placeholder.svg?height=60&width=60",
          color: "brown",
          popular: true,
        },
        {
          id: 11,
          name: "Chocolate Lava Cake",
          description: "Warm chocolate cake with a molten center",
          price: "$11",
          image: "/placeholder.svg?height=60&width=60",
          color: "orange",
        },
      ],
    },
    {
      id: "drinks",
      name: "Drinks",
      items: [
        {
          id: 5,
          name: "House Wine",
          description: "Glass of our premium house wine",
          price: "$12",
          image: "/placeholder.svg?height=60&width=60",
          color: "purple",
        },
        {
          id: 12,
          name: "Craft Cocktails",
          description: "Handcrafted signature cocktails",
          price: "$14",
          image: "/placeholder.svg?height=60&width=60",
          color: "blue",
        },
        {
          id: 13,
          name: "Italian Soda",
          description: "Refreshing flavored soda",
          price: "$6",
          image: "/placeholder.svg?height=60&width=60",
          color: "green",
          dietary: ["non-alcoholic"],
        },
      ],
    },
  ],
}

// Helper function to get background color based on the color name
const getBackgroundColor = (color: string) => {
  const colorMap: Record<string, string> = {
    pink: "bg-gradient-to-r from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200",
    blue: "bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200",
    green: "bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200",
    yellow: "bg-gradient-to-r from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200",
    purple: "bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200",
    cyan: "bg-gradient-to-r from-cyan-50 to-cyan-100 hover:from-cyan-100 hover:to-cyan-200",
    red: "bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200",
    orange: "bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200",
    brown: "bg-gradient-to-r from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200",
  }

  return colorMap[color] || "bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200"
}

// Helper function to get emoji based on the color
const getEmoji = (color: string) => {
  const emojiMap: Record<string, string> = {
    pink: "🍝",
    blue: "🐟",
    green: "🥗",
    yellow: "🍰",
    purple: "🍷",
    cyan: "🦐",
    red: "🍅",
    orange: "🍫",
    brown: "☕",
  }

  return emojiMap[color] || "🍽️"
}

export default function RestaurantProfile({ params }: { params: { username: string } }) {
  // In a real app, you would fetch the restaurant data based on the username
  const restaurant = SAMPLE_RESTAURANT

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <header className="bg-white py-4 px-6 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-green-800 font-bold flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M11 2a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0V2zm8.293 8.293a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414zM18 12a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-7 7a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm-4.707-4.707a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414zM5 12a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-.293-4.293a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 0 1 1.414 1.414L6.121 7.707a1 1 0 0 1-1.414 0zM12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
            </svg>
            FoodTree
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-gray-600">
              <QrCode className="h-4 w-4 mr-2" />
              QR Code
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto pb-20">
        {/* Cover Image */}
        <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-400 relative">
          <Image src={restaurant.coverImage || "/placeholder.svg"} alt="Cover" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Profile Info */}
        <div className="relative px-6">
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
            <div className="h-32 w-32 rounded-full border-4 border-white bg-white overflow-hidden shadow-xl">
              <Image
                src={restaurant.profileImage || "/placeholder.svg"}
                alt={restaurant.name}
                width={120}
                height={120}
                className="object-cover"
              />
            </div>
          </div>

          <div className="pt-20 text-center">
            <h1 className="text-3xl font-bold">{restaurant.name}</h1>
            <p className="text-gray-600 mt-1">{restaurant.bio}</p>

            <div className="mt-2 flex justify-center items-center gap-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="ml-1 font-medium">{restaurant.rating}</span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{restaurant.reviewCount} reviews</span>
            </div>

            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {restaurant.categories.map((category, index) => (
                <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                  {category}
                </Badge>
              ))}
            </div>

            <div className="mt-4 flex justify-center space-x-3">
              <Button variant="default" size="sm" className="rounded-full bg-green-600 hover:bg-green-700">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Order Online
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-left">{restaurant.address}</span>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-left">{restaurant.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Tabs */}
        <div className="mt-8 px-4">
          <Tabs defaultValue="appetizers" className="w-full">
            <div className="border-b overflow-x-auto scrollbar-hide">
              <TabsList className="h-auto p-0 bg-transparent w-full justify-start">
                {restaurant.menuCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-green-600 data-[state=active]:text-green-600 rounded-none bg-transparent"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {restaurant.menuCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6 space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold">{category.name}</h2>
                  <Button variant="ghost" size="sm" className="text-gray-500">
                    <ChevronDown className="h-4 w-4 mr-1" />
                    Filter
                  </Button>
                </div>

                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className={`${getBackgroundColor(
                      item.color,
                    )} rounded-xl p-4 transition-all hover:shadow-md hover:scale-[1.01] cursor-pointer relative overflow-hidden`}
                  >
                    {item.popular && (
                      <div className="absolute top-0 right-0">
                        <div className="bg-red-500 text-white text-xs px-2 py-1 transform rotate-45 translate-y-2 translate-x-6 shadow-sm">
                          Popular
                        </div>
                      </div>
                    )}
                    <div className="flex items-center">
                      <div className="h-14 w-14 rounded-full bg-white p-1 shadow-md overflow-hidden mr-4 flex-shrink-0">
                        <div className="h-full w-full rounded-full flex items-center justify-center bg-gray-100">
                          <span role="img" aria-label="food" className="text-xl">
                            {getEmoji(item.color)}
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <h3 className="font-medium">{item.name}</h3>
                          {item.dietary && item.dietary.length > 0 && (
                            <div className="ml-2 flex gap-1">
                              {item.dietary.includes("vegetarian") && (
                                <Badge
                                  variant="outline"
                                  className="text-xs px-1 py-0 h-5 border-green-500 text-green-600"
                                >
                                  V
                                </Badge>
                              )}
                              {item.dietary.includes("gluten-free") && (
                                <Badge
                                  variant="outline"
                                  className="text-xs px-1 py-0 h-5 border-amber-500 text-amber-600"
                                >
                                  GF
                                </Badge>
                              )}
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      </div>
                      <div className="ml-4 text-right">
                        <span className="font-bold">{item.price}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-green-600 hover:text-green-700 hover:bg-green-50 p-1 h-auto mt-1"
                        >
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Dietary Key */}
        <div className="mt-8 px-6 py-4 bg-white rounded-lg shadow-sm mx-4">
          <h3 className="font-medium mb-2">Dietary Information</h3>
          <div className="flex gap-4 text-sm">
            <div className="flex items-center">
              <Badge variant="outline" className="mr-2 border-green-500 text-green-600">
                V
              </Badge>
              <span>Vegetarian</span>
            </div>
            <div className="flex items-center">
              <Badge variant="outline" className="mr-2 border-amber-500 text-amber-600">
                GF
              </Badge>
              <span>Gluten-Free</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center px-6">
          <p className="text-sm text-gray-500">
            Powered by <span className="font-medium">FoodTree*</span>
          </p>
        </div>
      </div>

      {/* Sticky Order Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
        <div className="max-w-2xl mx-auto">
          <Button className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg">
            <ShoppingBag className="h-5 w-5 mr-2" />
            Start Order
          </Button>
        </div>
      </div>
    </div>
  )
}

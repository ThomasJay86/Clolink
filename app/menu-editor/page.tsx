import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ChevronDown, ChevronUp, Eye, Grid, Plus, Save, Trash2, Upload, List } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MenuEditor() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm z-10 sticky top-0">
        <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/dashboard" className="text-gray-500 hover:text-gray-700 mr-4">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-lg font-semibold text-gray-900">Menu Editor</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </header>

      <main className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="categories" className="space-y-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <TabsList className="grid grid-cols-3 gap-4">
                <TabsTrigger value="categories">Categories</TabsTrigger>
                <TabsTrigger value="items">Menu Items</TabsTrigger>
                <TabsTrigger value="appearance">Appearance</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="categories" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Menu Categories</h2>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Category
                </Button>
              </div>

              <div className="grid gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle>Appetizers</CardTitle>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronUp className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardDescription>3 items</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="category-name-1">Category Name</Label>
                          <Input id="category-name-1" defaultValue="Appetizers" />
                        </div>
                        <div>
                          <Label htmlFor="category-description-1">Description (Optional)</Label>
                          <Input
                            id="category-description-1"
                            defaultValue="Start your meal with these delicious options"
                          />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="category-active-1" defaultChecked />
                        <Label htmlFor="category-active-1">Active</Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle>Main Courses</CardTitle>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronUp className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardDescription>4 items</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="category-name-2">Category Name</Label>
                          <Input id="category-name-2" defaultValue="Main Courses" />
                        </div>
                        <div>
                          <Label htmlFor="category-description-2">Description (Optional)</Label>
                          <Input id="category-description-2" defaultValue="Our chef's signature dishes" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="category-active-2" defaultChecked />
                        <Label htmlFor="category-active-2">Active</Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle>Desserts</CardTitle>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronUp className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardDescription>3 items</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="category-name-3">Category Name</Label>
                          <Input id="category-name-3" defaultValue="Desserts" />
                        </div>
                        <div>
                          <Label htmlFor="category-description-3">Description (Optional)</Label>
                          <Input id="category-description-3" defaultValue="Sweet treats to finish your meal" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="category-active-3" defaultChecked />
                        <Label htmlFor="category-active-3">Active</Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="items" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Menu Items</h2>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Item
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Signature Pasta</CardTitle>
                  <CardDescription>Main Courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="border rounded-lg p-2 text-center">
                          <div className="aspect-square relative mb-2 bg-gray-100 rounded-md overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=200&width=200"
                              alt="Food item"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <Button variant="outline" size="sm" className="w-full">
                            <Upload className="h-4 w-4 mr-2" />
                            Change Image
                          </Button>
                        </div>
                      </div>
                      <div className="md:w-2/3 grid gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="item-name">Item Name</Label>
                            <Input id="item-name" defaultValue="Signature Pasta" />
                          </div>
                          <div>
                            <Label htmlFor="item-price">Price</Label>
                            <Input id="item-price" defaultValue="18.00" type="number" min="0" step="0.01" />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="item-description">Description</Label>
                          <Textarea
                            id="item-description"
                            defaultValue="Homemade pasta with our secret sauce"
                            className="resize-none"
                            rows={3}
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="item-category">Category</Label>
                            <Select defaultValue="main-courses">
                              <SelectTrigger id="item-category">
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="appetizers">Appetizers</SelectItem>
                                <SelectItem value="main-courses">Main Courses</SelectItem>
                                <SelectItem value="desserts">Desserts</SelectItem>
                                <SelectItem value="drinks">Drinks</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label>Dietary Options</Label>
                            <div className="flex flex-wrap gap-2 mt-2">
                              <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                                Vegetarian
                              </Badge>
                              <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                                Gluten-Free
                              </Badge>
                              <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                                Vegan
                              </Badge>
                              <Badge
                                variant="outline"
                                className="bg-gray-100 cursor-pointer hover:bg-gray-200 border-dashed"
                              >
                                <Plus className="h-3 w-3 mr-1" />
                                Add
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <Switch id="item-active" defaultChecked />
                              <Label htmlFor="item-active">Active</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Switch id="item-popular" defaultChecked />
                              <Label htmlFor="item-popular">Mark as Popular</Label>
                            </div>
                          </div>
                          <Button variant="destructive" size="sm">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Item
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Vegetarian Platter</CardTitle>
                  <CardDescription>Appetizers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="border rounded-lg p-2 text-center">
                          <div className="aspect-square relative mb-2 bg-gray-100 rounded-md overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=200&width=200"
                              alt="Food item"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <Button variant="outline" size="sm" className="w-full">
                            <Upload className="h-4 w-4 mr-2" />
                            Change Image
                          </Button>
                        </div>
                      </div>
                      <div className="md:w-2/3 grid gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="item-name-2">Item Name</Label>
                            <Input id="item-name-2" defaultValue="Vegetarian Platter" />
                          </div>
                          <div>
                            <Label htmlFor="item-price-2">Price</Label>
                            <Input id="item-price-2" defaultValue="16.00" type="number" min="0" step="0.01" />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="item-description-2">Description</Label>
                          <Textarea
                            id="item-description-2"
                            defaultValue="Selection of fresh vegetables and dips"
                            className="resize-none"
                            rows={3}
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="item-category-2">Category</Label>
                            <Select defaultValue="appetizers">
                              <SelectTrigger id="item-category-2">
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="appetizers">Appetizers</SelectItem>
                                <SelectItem value="main-courses">Main Courses</SelectItem>
                                <SelectItem value="desserts">Desserts</SelectItem>
                                <SelectItem value="drinks">Drinks</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label>Dietary Options</Label>
                            <div className="flex flex-wrap gap-2 mt-2">
                              <Badge
                                variant="outline"
                                className="bg-green-100 cursor-pointer hover:bg-green-200 border-green-500"
                              >
                                Vegetarian
                              </Badge>
                              <Badge
                                variant="outline"
                                className="bg-amber-100 cursor-pointer hover:bg-amber-200 border-amber-500"
                              >
                                Gluten-Free
                              </Badge>
                              <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                                Vegan
                              </Badge>
                              <Badge
                                variant="outline"
                                className="bg-gray-100 cursor-pointer hover:bg-gray-200 border-dashed"
                              >
                                <Plus className="h-3 w-3 mr-1" />
                                Add
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <Switch id="item-active-2" defaultChecked />
                              <Label htmlFor="item-active-2">Active</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Switch id="item-popular-2" defaultChecked />
                              <Label htmlFor="item-popular-2">Mark as Popular</Label>
                            </div>
                          </div>
                          <Button variant="destructive" size="sm">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Item
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="appearance" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Menu Appearance</h2>
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Theme Settings</CardTitle>
                    <CardDescription>Customize how your menu looks</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="theme-color">Primary Color</Label>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="w-10 h-10 rounded-full bg-green-600 border-4 border-white shadow-sm cursor-pointer"></div>
                        <div className="w-10 h-10 rounded-full bg-blue-600 border-2 border-white shadow-sm cursor-pointer"></div>
                        <div className="w-10 h-10 rounded-full bg-purple-600 border-2 border-white shadow-sm cursor-pointer"></div>
                        <div className="w-10 h-10 rounded-full bg-pink-600 border-2 border-white shadow-sm cursor-pointer"></div>
                        <div className="w-10 h-10 rounded-full bg-amber-600 border-2 border-white shadow-sm cursor-pointer"></div>
                        <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-white shadow-sm cursor-pointer"></div>
                        <Input type="color" id="theme-color" defaultValue="#16a34a" className="w-10 h-10 p-1" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="font-family">Font Style</Label>
                      <Select defaultValue="inter">
                        <SelectTrigger id="font-family">
                          <SelectValue placeholder="Select font" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="inter">Inter</SelectItem>
                          <SelectItem value="poppins">Poppins</SelectItem>
                          <SelectItem value="roboto">Roboto</SelectItem>
                          <SelectItem value="montserrat">Montserrat</SelectItem>
                          <SelectItem value="playfair">Playfair Display</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Layout Style</Label>
                      <div className="grid grid-cols-2 gap-4 mt-2">
                        <div className="border-2 border-green-600 rounded-lg p-2 cursor-pointer">
                          <div className="aspect-video bg-gray-100 rounded-md mb-2 flex items-center justify-center">
                            <Grid className="h-6 w-6 text-gray-400" />
                          </div>
                          <div className="text-center text-sm font-medium">Card View</div>
                        </div>
                        <div className="border-2 border-gray-200 rounded-lg p-2 cursor-pointer">
                          <div className="aspect-video bg-gray-100 rounded-md mb-2 flex items-center justify-center">
                            <List className="h-6 w-6 text-gray-400" />
                          </div>
                          <div className="text-center text-sm font-medium">List View</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label>Display Options</Label>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center space-x-2">
                          <Switch id="show-images" defaultChecked />
                          <Label htmlFor="show-images">Show Item Images</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="show-descriptions" defaultChecked />
                          <Label htmlFor="show-descriptions">Show Item Descriptions</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="show-dietary" defaultChecked />
                          <Label htmlFor="show-dietary">Show Dietary Information</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="show-popular" defaultChecked />
                          <Label htmlFor="show-popular">Highlight Popular Items</Label>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Profile Settings</CardTitle>
                    <CardDescription>Customize your restaurant profile</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label>Profile Image</Label>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="w-20 h-20 rounded-full bg-gray-100 relative overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=80&width=80"
                            alt="Profile"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <Button variant="outline" size="sm">
                          <Upload className="h-4 w-4 mr-2" />
                          Change Image
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label>Cover Image</Label>
                      <div className="mt-2">
                        <div className="aspect-[3/1] bg-gray-100 rounded-lg relative overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=200&width=600"
                            alt="Cover"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <Button variant="outline" size="sm" className="mt-2">
                          <Upload className="h-4 w-4 mr-2" />
                          Change Cover
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="restaurant-name">Restaurant Name</Label>
                      <Input id="restaurant-name" defaultValue="Delicious Bistro" />
                    </div>

                    <div>
                      <Label htmlFor="restaurant-bio">Bio</Label>
                      <Textarea
                        id="restaurant-bio"
                        defaultValue="Fine dining in your city"
                        className="resize-none"
                        rows={2}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="restaurant-address">Address</Label>
                        <Input id="restaurant-address" defaultValue="123 Main Street, Cityville" />
                      </div>
                      <div>
                        <Label htmlFor="restaurant-hours">Hours</Label>
                        <Input id="restaurant-hours" defaultValue="Mon-Sat: 11am-10pm, Sun: 12pm-9pm" />
                      </div>
                    </div>

                    <div>
                      <Label>Categories</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge>Italian</Badge>
                        <Badge>Mediterranean</Badge>
                        <Badge>Fine Dining</Badge>
                        <Badge variant="outline" className="border-dashed">
                          <Plus className="h-3 w-3 mr-1" />
                          Add
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

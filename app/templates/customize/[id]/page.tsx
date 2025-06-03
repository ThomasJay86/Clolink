import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Palette, Type, Layout, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// This is a sample template data - in a real app, you would fetch this based on the ID
const templates = {
  classic: {
    id: "classic",
    name: "Classic Menu",
    description: "Clean and simple design for any restaurant",
    image: "/placeholder.svg?height=600&width=300",
    profileImage: "/placeholder.svg?height=80&width=80",
    color: "bg-gradient-to-br from-gray-100 to-gray-200",
    isPro: false,
    category: "casual",
  },
  bistro: {
    id: "bistro",
    name: "Bistro",
    description: "Elegant design for fine dining establishments",
    image: "/placeholder.svg?height=600&width=300",
    profileImage: "/placeholder.svg?height=80&width=80",
    color: "bg-gradient-to-br from-amber-100 to-amber-200",
    isPro: true,
    category: "fine",
  },
}

export default function TemplateCustomize({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the template data based on the ID
  const template = templates[params.id as keyof typeof templates] || templates.classic

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white py-4 px-6 border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href={`/templates/${params.id}`} className="text-gray-600 hover:text-gray-900 mr-4">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <Link href="/" className="text-green-800 text-2xl font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M11 2a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0V2zm8.293 8.293a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414zM18 12a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-7 7a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm-4.707-4.707a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414zM5 12a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-.293-4.293a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 0 1 1.414 1.414L6.121 7.707a1 1 0 0 1-1.414 0zM12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
              </svg>
              FoodTree*
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="rounded-full">
              Preview
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-8 px-6">
        <div className="flex items-center mb-6">
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 mr-2">{template.category}</Badge>
          <h1 className="text-2xl font-bold">Customize {template.name} Template</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Customization Panel */}
          <div className="md:col-span-1">
            <Tabs defaultValue="theme" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="theme">
                  <Palette className="h-4 w-4 mr-2" />
                  Theme
                </TabsTrigger>
                <TabsTrigger value="typography">
                  <Type className="h-4 w-4 mr-2" />
                  Typography
                </TabsTrigger>
                <TabsTrigger value="layout">
                  <Layout className="h-4 w-4 mr-2" />
                  Layout
                </TabsTrigger>
              </TabsList>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <TabsContent value="theme" className="space-y-6 mt-0">
                  <div>
                    <Label htmlFor="primary-color">Primary Color</Label>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="w-10 h-10 rounded-full bg-purple-600 border-4 border-white shadow-sm cursor-pointer"></div>
                      <div className="w-10 h-10 rounded-full bg-green-600 border-2 border-white shadow-sm cursor-pointer"></div>
                      <div className="w-10 h-10 rounded-full bg-blue-600 border-2 border-white shadow-sm cursor-pointer"></div>
                      <div className="w-10 h-10 rounded-full bg-amber-600 border-2 border-white shadow-sm cursor-pointer"></div>
                      <div className="w-10 h-10 rounded-full bg-pink-600 border-2 border-white shadow-sm cursor-pointer"></div>
                      <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-white shadow-sm cursor-pointer"></div>
                      <Input type="color" id="primary-color" defaultValue="#7c3aed" className="w-10 h-10 p-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="secondary-color">Secondary Color</Label>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="w-10 h-10 rounded-full bg-amber-500 border-4 border-white shadow-sm cursor-pointer"></div>
                      <div className="w-10 h-10 rounded-full bg-emerald-500 border-2 border-white shadow-sm cursor-pointer"></div>
                      <div className="w-10 h-10 rounded-full bg-sky-500 border-2 border-white shadow-sm cursor-pointer"></div>
                      <div className="w-10 h-10 rounded-full bg-rose-500 border-2 border-white shadow-sm cursor-pointer"></div>
                      <div className="w-10 h-10 rounded-full bg-orange-500 border-2 border-white shadow-sm cursor-pointer"></div>
                      <Input type="color" id="secondary-color" defaultValue="#f59e0b" className="w-10 h-10 p-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="background">Background Style</Label>
                    <Select defaultValue="solid">
                      <SelectTrigger id="background" className="mt-2">
                        <SelectValue placeholder="Select background style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="solid">Solid Color</SelectItem>
                        <SelectItem value="gradient">Gradient</SelectItem>
                        <SelectItem value="image">Image Background</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="menu-style">Menu Item Style</Label>
                    <Select defaultValue="cards">
                      <SelectTrigger id="menu-style" className="mt-2">
                        <SelectValue placeholder="Select menu item style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cards">Card Style</SelectItem>
                        <SelectItem value="list">List Style</SelectItem>
                        <SelectItem value="minimal">Minimal Style</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>

                <TabsContent value="typography" className="space-y-6 mt-0">
                  <div>
                    <Label htmlFor="heading-font">Heading Font</Label>
                    <Select defaultValue="inter">
                      <SelectTrigger id="heading-font" className="mt-2">
                        <SelectValue placeholder="Select font" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inter">Inter</SelectItem>
                        <SelectItem value="poppins">Poppins</SelectItem>
                        <SelectItem value="playfair">Playfair Display</SelectItem>
                        <SelectItem value="montserrat">Montserrat</SelectItem>
                        <SelectItem value="roboto">Roboto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="body-font">Body Font</Label>
                    <Select defaultValue="inter">
                      <SelectTrigger id="body-font" className="mt-2">
                        <SelectValue placeholder="Select font" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inter">Inter</SelectItem>
                        <SelectItem value="poppins">Poppins</SelectItem>
                        <SelectItem value="playfair">Playfair Display</SelectItem>
                        <SelectItem value="montserrat">Montserrat</SelectItem>
                        <SelectItem value="roboto">Roboto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="heading-size">Heading Size</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger id="heading-size" className="mt-2">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="text-alignment">Text Alignment</Label>
                    <Select defaultValue="left">
                      <SelectTrigger id="text-alignment" className="mt-2">
                        <SelectValue placeholder="Select alignment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="left">Left</SelectItem>
                        <SelectItem value="center">Center</SelectItem>
                        <SelectItem value="right">Right</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>

                <TabsContent value="layout" className="space-y-6 mt-0">
                  <div>
                    <Label htmlFor="layout-type">Layout Type</Label>
                    <Select defaultValue="grid">
                      <SelectTrigger id="layout-type" className="mt-2">
                        <SelectValue placeholder="Select layout" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="grid">Grid Layout</SelectItem>
                        <SelectItem value="list">List Layout</SelectItem>
                        <SelectItem value="compact">Compact Layout</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="item-spacing">Item Spacing</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger id="item-spacing" className="mt-2">
                        <SelectValue placeholder="Select spacing" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="compact">Compact</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="spacious">Spacious</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="image-style">Image Style</Label>
                    <Select defaultValue="rounded">
                      <SelectTrigger id="image-style" className="mt-2">
                        <SelectValue placeholder="Select image style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rounded">Rounded</SelectItem>
                        <SelectItem value="circle">Circle</SelectItem>
                        <SelectItem value="square">Square</SelectItem>
                        <SelectItem value="none">No Images</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="menu-sections">Menu Sections</Label>
                    <Select defaultValue="tabs">
                      <SelectTrigger id="menu-sections" className="mt-2">
                        <SelectValue placeholder="Select section style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tabs">Tabs</SelectItem>
                        <SelectItem value="accordion">Accordion</SelectItem>
                        <SelectItem value="sections">Scrollable Sections</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>
              </div>
            </Tabs>

            <div className="mt-6 bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-medium mb-4">Template Information</h3>
              <p className="text-sm text-gray-600 mb-4">
                {template.description}. Customize this template to match your restaurant's branding and style.
              </p>

              <div className="flex items-center mt-4">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm">Changes are saved automatically</span>
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6 h-full">
              <h2 className="text-lg font-medium mb-4">Live Preview</h2>

              <div className="flex justify-center">
                <div
                  className={`${template.color} rounded-3xl p-6 w-[320px] h-[600px] flex items-center justify-center`}
                >
                  <div className="w-[90%] h-[95%] bg-white rounded-2xl shadow-lg overflow-hidden">
                    <Image
                      src={template.image || "/placeholder.svg"}
                      alt={template.name}
                      width={300}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  This is a preview of how your menu will look with the current customization settings.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <Button variant="outline" className="rounded-full">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Template
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Save className="h-4 w-4 mr-2" />
            Save and Continue
          </Button>
        </div>
      </div>
    </div>
  )
}

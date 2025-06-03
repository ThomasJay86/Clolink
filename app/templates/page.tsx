"use client"

import { Search, ArrowRight, Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import SharedLayout from "@/components/shared-layout"
import { templates } from "@/data/templates"
import { TemplateVisual } from "@/components/template-preview/template-visual"
import { useState } from "react"
import type { Template } from "@/data/templates"

const categories = [
  { id: "all", name: "All Templates" },
  { id: "casual", name: "Casual Dining" },
  { id: "fine", name: "Fine Dining" },
  { id: "cafe", name: "Cafés & Bakeries" },
  { id: "fast", name: "Fast Food" },
  { id: "ethnic", name: "Ethnic Cuisine" },
  { id: "bar", name: "Bars & Pubs" },
]

export default function Templates() {
  const [searchTerm, setSearchTerm] = useState("")

  const handlePreview = (template: Template) => {
    // Open preview in new window or modal
    window.open(`/templates/preview/${template.id}`, "_blank", "width=400,height=800")
  }

  const handleUseTemplate = (template: Template) => {
    // Store template in localStorage
    const savedTemplates = JSON.parse(localStorage.getItem("savedTemplates") || "[]")
    const newTemplate = { ...template, savedAt: new Date().toISOString() }
    localStorage.setItem("savedTemplates", JSON.stringify([...savedTemplates, newTemplate]))
    alert(`${template.name} has been added to your themes!`)
  }

  const filteredTemplates = templates.filter(
    (template) =>
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <SharedLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Find the perfect menu template for your restaurant
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-purple-100 max-w-3xl mx-auto">
            Choose from our collection of professionally designed templates to showcase your menu and delight your
            customers
          </p>

          <div className="mt-6 md:mt-10 max-w-md mx-auto relative">
            <Input
              type="text"
              placeholder="Search templates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-4 md:py-6 rounded-full border-purple-300 bg-white/10 backdrop-blur-sm text-white placeholder:text-purple-200"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-purple-200" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Featured Templates */}
        <section className="mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 md:mb-8 gap-4">
            <h2 className="text-xl md:text-2xl font-bold">Featured Templates</h2>
            <Button
              variant="ghost"
              className="text-purple-600 hover:text-purple-800 font-medium self-start sm:self-auto"
            >
              View all <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {filteredTemplates
              .filter((t) => t.featured)
              .map((template) => (
                <div key={template.id} className="group">
                  <div className="rounded-2xl overflow-hidden aspect-[1/2] relative transition-all group-hover:shadow-lg bg-white border border-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <div className="w-full h-full bg-white rounded-xl shadow-lg overflow-hidden border">
                        <TemplateVisual template={template} className="w-full h-full" />
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                      {template.isPro && (
                        <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-0 px-2 py-1 text-xs">
                          PRO
                        </Badge>
                      )}
                      {template.new && (
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-2 py-1 text-xs">
                          NEW
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="mt-3 md:mt-4">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400 text-xs mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        {template.rating} ({template.reviewCount} reviews)
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm md:text-base">{template.name}</h3>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">{template.description}</p>
                  </div>

                  <div className="mt-3 md:mt-4 flex flex-col sm:flex-row gap-2">
                    <Button
                      variant="outline"
                      className="rounded-full text-xs md:text-sm flex-1"
                      onClick={() => handlePreview(template)}
                    >
                      Preview
                    </Button>
                    <Button
                      className={`rounded-full text-xs md:text-sm flex-1 ${
                        template.isPro ? "bg-amber-500 hover:bg-amber-600" : "bg-purple-600 hover:bg-purple-700"
                      }`}
                      onClick={() => handleUseTemplate(template)}
                    >
                      {template.isPro ? "Upgrade to Use" : "Use Template"}
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* All Templates */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Browse All Templates</h2>

          <Tabs defaultValue="all" className="space-y-6 md:space-y-8">
            <div className="overflow-x-auto pb-2">
              <TabsList className="bg-transparent border-b w-full justify-start rounded-none h-auto p-0 min-w-max">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:text-purple-600 data-[state=active]:shadow-none bg-transparent px-3 md:px-4 py-2 text-sm whitespace-nowrap"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-4 md:mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                  {filteredTemplates
                    .filter((t) => category.id === "all" || t.category === category.id)
                    .map((template) => (
                      <div key={template.id} className="group">
                        <div className="rounded-2xl overflow-hidden aspect-[1/2] relative transition-all group-hover:shadow-lg bg-white border border-gray-200">
                          <div className="absolute inset-0 flex items-center justify-center p-4">
                            <div className="w-full h-full bg-white rounded-xl shadow-lg overflow-hidden border">
                              <TemplateVisual template={template} className="w-full h-full" />
                            </div>
                          </div>
                          <div className="absolute top-3 right-3 flex flex-col gap-2">
                            {template.isPro && (
                              <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-0 px-2 py-1 text-xs">
                                PRO
                              </Badge>
                            )}
                            {template.new && (
                              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-2 py-1 text-xs">
                                NEW
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="mt-3 md:mt-4">
                          <div className="flex items-center mb-2">
                            <div className="flex text-yellow-400 text-xs mr-2">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-current" />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500">
                              {template.rating} ({template.reviewCount} reviews)
                            </span>
                          </div>
                          <h3 className="font-bold text-gray-900 text-sm md:text-base">{template.name}</h3>
                          <p className="text-xs md:text-sm text-gray-500 mt-1">{template.description}</p>
                        </div>

                        <div className="mt-3 md:mt-4 flex flex-col sm:flex-row gap-2">
                          <Button
                            variant="outline"
                            className="rounded-full text-xs md:text-sm flex-1"
                            onClick={() => handlePreview(template)}
                          >
                            Preview
                          </Button>
                          <Button
                            className={`rounded-full text-xs md:text-sm flex-1 ${
                              template.isPro ? "bg-amber-500 hover:bg-amber-600" : "bg-purple-600 hover:bg-purple-700"
                            }`}
                            onClick={() => handleUseTemplate(template)}
                          >
                            {template.isPro ? "Upgrade to Use" : "Use Template"}
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </div>

      {/* Pro Templates Section */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 py-12 md:py-16 px-4 md:px-6 border-y border-amber-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <Badge className="bg-amber-500 text-white border-0 mb-4">PRO TEMPLATES</Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Unlock premium menu templates with FoodTree Pro</h2>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                Get access to our exclusive collection of professionally designed templates to make your restaurant menu
                stand out.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">Access to all premium templates</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">Advanced customization options</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">Priority support from our design team</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">Early access to new template releases</span>
                </li>
              </ul>

              <Button className="bg-amber-500 hover:bg-amber-600 text-base md:text-lg px-6 md:px-8 py-2 md:py-3 rounded-full">
                Upgrade to Pro
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {templates
                .filter((t) => t.isPro)
                .slice(0, 4)
                .map((template, idx) => (
                  <div
                    key={template.id}
                    className={`rounded-2xl overflow-hidden aspect-[1/2] relative shadow-lg bg-white border border-gray-200 ${
                      idx % 2 === 0 ? "mt-6 md:mt-12" : "mb-6 md:mb-12"
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-3">
                      <div className="w-full h-full bg-white rounded-xl shadow-lg overflow-hidden border">
                        <TemplateVisual template={template} className="w-full h-full" />
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-0 px-2 py-1 text-xs">
                        PRO
                      </Badge>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to showcase your menu?</h2>
          <p className="text-lg md:text-xl text-purple-100 mb-6 md:mb-8">
            Sign up for free and start building your digital menu with our beautiful templates today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-900 hover:bg-gray-100 text-base md:text-lg px-6 md:px-8 py-2 md:py-3 rounded-full">
              Get Started for Free
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-base md:text-lg px-6 md:px-8 py-2 md:py-3 rounded-full"
            >
              View All Templates
            </Button>
          </div>
        </div>
      </div>
    </SharedLayout>
  )
}

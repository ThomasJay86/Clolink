"use client"

import { Search, ArrowRight, Check, Star, Filter, Grid3X3, List, Sparkles } from "lucide-react"
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
  { id: "all", name: "All Templates", count: templates.length },
  { id: "casual", name: "Casual Dining", count: templates.filter((t) => t.category === "casual").length },
  { id: "fine", name: "Fine Dining", count: templates.filter((t) => t.category === "fine").length },
  { id: "cafe", name: "Cafés & Bakeries", count: templates.filter((t) => t.category === "cafe").length },
  { id: "fast", name: "Fast Food", count: templates.filter((t) => t.category === "fast").length },
  { id: "ethnic", name: "Ethnic Cuisine", count: templates.filter((t) => t.category === "ethnic").length },
  { id: "bar", name: "Bars & Pubs", count: templates.filter((t) => t.category === "bar").length },
]

export default function Templates() {
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const handlePreview = (template: Template) => {
    window.open(`/templates/preview/${template.id}`, "_blank", "width=400,height=800")
  }

  const handleUseTemplate = (template: Template) => {
    const savedTemplates = JSON.parse(localStorage.getItem("savedTemplates") || "[]")
    const newTemplate = { ...template, savedAt: new Date().toISOString() }
    localStorage.setItem("savedTemplates", JSON.stringify([...savedTemplates, newTemplate]))

    // Create a success notification effect
    const notification = document.createElement("div")
    notification.className =
      "fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300"
    notification.textContent = `${template.name} added to your themes!`
    document.body.appendChild(notification)

    setTimeout(() => {
      notification.style.transform = "translateX(100%)"
      setTimeout(() => document.body.removeChild(notification), 300)
    }, 2000)
  }

  const filteredTemplates = templates.filter(
    (template) =>
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <SharedLayout>
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-16 md:py-24 px-4 md:px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span className="text-sm font-medium">50+ Professional Templates</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
            Beautiful menu templates for every restaurant
          </h1>

          <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Choose from our curated collection of professionally designed templates. Each template is crafted with
            modern UI/UX principles to showcase your menu beautifully.
          </p>

          <div className="max-w-lg mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-30"></div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-full p-1">
              <div className="flex items-center">
                <Search className="absolute left-4 h-5 w-5 text-purple-200" />
                <Input
                  type="text"
                  placeholder="Search templates by style, cuisine, or name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 bg-transparent border-0 text-white placeholder:text-purple-200 focus:ring-2 focus:ring-purple-300 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        {/* Featured Templates Section */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Featured Templates</h2>
              <p className="text-gray-600">Hand-picked designs that convert visitors into customers</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="h-8 w-8 p-0"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="h-8 w-8 p-0"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>

          <div
            className={`grid gap-8 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}
          >
            {filteredTemplates
              .filter((t) => t.featured)
              .map((template) => (
                <div key={template.id} className="group relative">
                  {/* Template Card with iPhone 16 Pro dimensions */}
                  <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-200 hover:-translate-y-2">
                    {/* iPhone 16 Pro Preview Container - 393x852px scaled down */}
                    <div className="relative mx-auto" style={{ width: "196px", height: "426px" }}>
                      {/* iPhone Frame */}
                      <div className="absolute inset-0 bg-black rounded-[2.5rem] p-2">
                        {/* Screen */}
                        <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                          {/* Dynamic Island */}
                          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10"></div>

                          {/* Template Content */}
                          <div className="w-full h-full pt-8">
                            <TemplateVisual template={template} className="w-full h-full" />
                          </div>
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="absolute -top-2 -right-2 flex flex-col gap-2 z-20">
                        {template.isPro && (
                          <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-0 px-3 py-1 text-xs font-semibold shadow-lg">
                            PRO
                          </Badge>
                        )}
                        {template.new && (
                          <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-3 py-1 text-xs font-semibold shadow-lg">
                            NEW
                          </Badge>
                        )}
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-2 bg-black/70 backdrop-blur-sm rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-30">
                        <div className="flex flex-col gap-3">
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => handlePreview(template)}
                            className="bg-white/95 hover:bg-white text-gray-900 shadow-lg px-6"
                          >
                            Preview
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => handleUseTemplate(template)}
                            className={`shadow-lg px-6 ${
                              template.isPro
                                ? "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600"
                                : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                            }`}
                          >
                            Use Template
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Template Info */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex text-yellow-400 text-sm">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 font-medium">
                          {template.rating} ({template.reviewCount})
                        </span>
                      </div>

                      <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-purple-700 transition-colors">
                        {template.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{template.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-gray-500 font-medium">Mobile optimized</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {template.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* All Templates Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">All Templates</h2>
              <p className="text-gray-600">Browse our complete collection of restaurant menu templates</p>
            </div>
          </div>

          <Tabs defaultValue="all" className="space-y-8">
            <div className="overflow-x-auto pb-2">
              <TabsList className="bg-gray-100 rounded-xl p-1 h-auto min-w-max">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="rounded-lg px-4 py-2.5 text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm whitespace-nowrap"
                  >
                    {category.name}
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {category.count}
                    </Badge>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <div
                  className={`grid gap-8 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}
                >
                  {filteredTemplates
                    .filter((t) => category.id === "all" || t.category === category.id)
                    .map((template) => (
                      <div key={template.id} className="group relative">
                        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-200 hover:-translate-y-2">
                          {/* iPhone 16 Pro Preview Container */}
                          <div className="relative mx-auto" style={{ width: "196px", height: "426px" }}>
                            {/* iPhone Frame */}
                            <div className="absolute inset-0 bg-black rounded-[2.5rem] p-2">
                              {/* Screen */}
                              <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                                {/* Dynamic Island */}
                                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10"></div>

                                {/* Template Content */}
                                <div className="w-full h-full pt-8">
                                  <TemplateVisual template={template} className="w-full h-full" />
                                </div>
                              </div>
                            </div>

                            <div className="absolute -top-2 -right-2 flex flex-col gap-2 z-20">
                              {template.isPro && (
                                <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-0 px-3 py-1 text-xs font-semibold shadow-lg">
                                  PRO
                                </Badge>
                              )}
                              {template.new && (
                                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-3 py-1 text-xs font-semibold shadow-lg">
                                  NEW
                                </Badge>
                              )}
                            </div>

                            <div className="absolute inset-2 bg-black/70 backdrop-blur-sm rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-30">
                              <div className="flex flex-col gap-3">
                                <Button
                                  size="sm"
                                  variant="secondary"
                                  onClick={() => handlePreview(template)}
                                  className="bg-white/95 hover:bg-white text-gray-900 shadow-lg px-6"
                                >
                                  Preview
                                </Button>
                                <Button
                                  size="sm"
                                  onClick={() => handleUseTemplate(template)}
                                  className={`shadow-lg px-6 ${
                                    template.isPro
                                      ? "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600"
                                      : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                                  }`}
                                >
                                  Use Template
                                </Button>
                              </div>
                            </div>
                          </div>

                          <div className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="flex text-yellow-400 text-sm">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                                ))}
                              </div>
                              <span className="text-sm text-gray-500 font-medium">
                                {template.rating} ({template.reviewCount})
                              </span>
                            </div>

                            <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-purple-700 transition-colors">
                              {template.name}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">{template.description}</p>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-xs text-gray-500 font-medium">Mobile optimized</span>
                              </div>
                              <Badge variant="secondary" className="text-xs">
                                {template.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </div>

      {/* Enhanced Pro Section */}
      <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 mb-6 px-4 py-2">
                <Sparkles className="h-4 w-4 mr-2" />
                PRO TEMPLATES
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Unlock premium templates with
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  {" "}
                  FoodTree Pro
                </span>
              </h2>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Get access to our exclusive collection of professionally designed templates, advanced customization
                options, and priority support.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Access to all premium templates",
                  "Advanced customization options",
                  "Priority support from our design team",
                  "Early access to new template releases",
                  "Commercial usage rights",
                  "White-label options available",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Upgrade to Pro
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {templates
                .filter((t) => t.isPro)
                .slice(0, 4)
                .map((template, idx) => (
                  <div
                    key={template.id}
                    className={`relative bg-white rounded-3xl shadow-lg overflow-hidden border border-amber-200 ${
                      idx % 2 === 0 ? "mt-8" : "mb-8"
                    }`}
                    style={{ width: "148px", height: "320px" }}
                  >
                    {/* Mini iPhone Frame */}
                    <div className="absolute inset-0 bg-black rounded-3xl p-1.5">
                      <div className="w-full h-full bg-white rounded-[1.25rem] overflow-hidden relative">
                        {/* Mini Dynamic Island */}
                        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black rounded-full z-10"></div>

                        {/* Template Content */}
                        <div className="w-full h-full pt-6">
                          <TemplateVisual template={template} className="w-full h-full" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute -top-2 -right-2 z-20">
                      <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-0 px-2 py-1 text-xs font-semibold shadow-lg">
                        PRO
                      </Badge>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to showcase your menu?</h2>
          <p className="text-xl text-purple-100 mb-10 leading-relaxed">
            Join thousands of restaurants using FoodTree to create beautiful digital menus that convert visitors into
            customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-900 hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-full backdrop-blur-sm bg-transparent"
            >
              View All Templates
            </Button>
          </div>
        </div>
      </div>
    </SharedLayout>
  )
}

"use client"

import { useState } from "react"
import { Heart, Share2, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { Template } from "@/data/templates"
import { ClassicTemplate } from "./classic-template"
import { BistroTemplate } from "./bistro-template"
import { StreetFoodTemplate } from "./street-food-template"
import { ModernCafeTemplate } from "./modern-cafe-template"

interface TemplatePreviewModalProps {
  template: Template | null
  isOpen: boolean
  onClose: () => void
  onUseTemplate: (template: Template) => void
}

export function TemplatePreviewModal({ template, isOpen, onClose, onUseTemplate }: TemplatePreviewModalProps) {
  const [isFavorited, setIsFavorited] = useState(false)

  if (!template) return null

  const renderTemplate = () => {
    switch (template.id) {
      case "classic":
        return <ClassicTemplate template={template} />
      case "bistro":
        return <BistroTemplate template={template} />
      case "street-food":
        return <StreetFoodTemplate template={template} />
      case "modern-cafe":
        return <ModernCafeTemplate template={template} />
      default:
        return <ClassicTemplate template={template} />
    }
  }

  const handleUseTemplate = () => {
    onUseTemplate(template)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <DialogTitle className="text-xl font-bold">{template.name}</DialogTitle>
              {template.isPro && (
                <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-0">PRO</Badge>
              )}
              {template.new && (
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">NEW</Badge>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsFavorited(!isFavorited)}
                className={isFavorited ? "text-red-500" : "text-gray-500"}
              >
                <Heart className={`h-4 w-4 ${isFavorited ? "fill-current" : ""}`} />
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Template Preview */}
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center min-h-[500px]">
              {renderTemplate()}
            </div>

            {/* Mobile Preview Toggle */}
            <div className="flex justify-center">
              <div className="bg-gray-200 rounded-full p-1 flex">
                <button className="px-3 py-1 rounded-full bg-white text-sm font-medium">Mobile</button>
                <button className="px-3 py-1 text-sm text-gray-600">Desktop</button>
              </div>
            </div>
          </div>

          {/* Template Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">About this template</h3>
              <p className="text-gray-600">{template.longDescription}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Features included:</h4>
              <ul className="space-y-2">
                {template.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Template Details:</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Category:</span>
                  <p className="font-medium capitalize">{template.category}</p>
                </div>
                <div>
                  <span className="text-gray-500">Style:</span>
                  <p className="font-medium capitalize">{template.design.style}</p>
                </div>
                <div>
                  <span className="text-gray-500">Layout:</span>
                  <p className="font-medium capitalize">{template.design.layout}</p>
                </div>
                <div>
                  <span className="text-gray-500">Font:</span>
                  <p className="font-medium">{template.design.fontFamily}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Customer Reviews:</h4>
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="font-medium">{template.rating}</span>
                <span className="text-gray-500">({template.reviewCount} reviews)</span>
              </div>
              <p className="text-sm text-gray-600">
                "Perfect template for our restaurant. Easy to customize and looks professional!"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t">
              <Button
                onClick={handleUseTemplate}
                className={`w-full ${template.isPro ? "bg-amber-500 hover:bg-amber-600" : "bg-purple-600 hover:bg-purple-700"}`}
              >
                {template.isPro ? "Upgrade to Use Template" : "Use This Template"}
              </Button>
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download Preview
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

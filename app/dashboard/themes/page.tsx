"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  BarChart3,
  Calendar,
  CreditCard,
  DollarSign,
  FileText,
  Grid,
  LayoutDashboard,
  List,
  MessageSquare,
  Package,
  QrCode,
  Settings,
  ShoppingBag,
  Truck,
  UserCheck,
  Users,
  Eye,
  Trash2,
  Download,
  Star,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TemplateVisual } from "@/components/template-preview/template-visual"
import type { Template } from "@/data/templates"

export default function ThemesPage() {
  const [savedTemplates, setSavedTemplates] = useState<Template[]>([])
  const [activeTheme, setActiveTheme] = useState<string | null>(null)

  useEffect(() => {
    // Load saved templates from localStorage
    const saved = JSON.parse(localStorage.getItem("savedTemplates") || "[]")
    setSavedTemplates(saved)

    // Load active theme
    const active = localStorage.getItem("activeTheme")
    setActiveTheme(active)
  }, [])

  const handleSetActive = (templateId: string) => {
    setActiveTheme(templateId)
    localStorage.setItem("activeTheme", templateId)
  }

  const handleRemoveTemplate = (templateId: string) => {
    const updated = savedTemplates.filter((t) => t.id !== templateId)
    setSavedTemplates(updated)
    localStorage.setItem("savedTemplates", JSON.stringify(updated))

    if (activeTheme === templateId) {
      setActiveTheme(null)
      localStorage.removeItem("activeTheme")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="hidden md:flex w-64 flex-col bg-white border-r">
          <div className="p-4 border-b">
            <Link href="/" className="text-green-800 text-xl font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M11 2a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0V2zm8.293 8.293a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414zM18 12a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-7 7a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm-4.707-4.707a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414zM5 12a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-.293-4.293a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 0 1 1.414 1.414L6.121 7.707a1 1 0 0 1-1.414 0zM12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
              </svg>
              FoodTree
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="space-y-1 px-2">
              <Link
                href="/dashboard"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <LayoutDashboard className="mr-3 h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="/dashboard/menu"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <FileText className="mr-3 h-5 w-5" />
                Menu Editor
              </Link>
              <Link
                href="/dashboard/orders"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <ShoppingBag className="mr-3 h-5 w-5" />
                Orders
              </Link>
              <Link
                href="/dashboard/reservations"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <Calendar className="mr-3 h-5 w-5" />
                Table Reservations
              </Link>
              <Link
                href="/dashboard/inventory"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <Package className="mr-3 h-5 w-5" />
                Inventory
              </Link>
              <Link
                href="/dashboard/staff"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <UserCheck className="mr-3 h-5 w-5" />
                Staff Management
              </Link>
              <Link
                href="/dashboard/analytics"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <BarChart3 className="mr-3 h-5 w-5" />
                Analytics
              </Link>
              <Link
                href="/dashboard/accounting"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <DollarSign className="mr-3 h-5 w-5" />
                Accounting
              </Link>
              <Link
                href="/dashboard/customers"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <Users className="mr-3 h-5 w-5" />
                Customers
              </Link>
              <Link
                href="/dashboard/delivery"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <Truck className="mr-3 h-5 w-5" />
                Delivery
              </Link>
              <Link
                href="/dashboard/payments"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <CreditCard className="mr-3 h-5 w-5" />
                Payments
              </Link>
              <Link
                href="/dashboard/reviews"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <MessageSquare className="mr-3 h-5 w-5" />
                Reviews
              </Link>
              <Link
                href="/dashboard/qr-codes"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <QrCode className="mr-3 h-5 w-5" />
                QR Codes
              </Link>
              <Link
                href="/dashboard/themes"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-green-50 text-green-700"
              >
                <Grid className="mr-3 h-5 w-5" />
                Themes
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <Settings className="mr-3 h-5 w-5" />
                Settings
              </Link>
            </nav>
          </div>
          <div className="p-4 border-t">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  className="h-8 w-8 rounded-full"
                  src="/placeholder.svg?height=32&width=32"
                  alt="User"
                  width={32}
                  height={32}
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">Delicious Bistro</p>
                <p className="text-xs text-gray-500">View Profile</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Navigation */}
          <header className="bg-white shadow-sm z-10">
            <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <button className="md:hidden mr-2 text-gray-500">
                  <List className="h-6 w-6" />
                </button>
                <h1 className="text-lg font-semibold text-gray-900">Themes</h1>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/templates">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Browse Templates
                  </Button>
                </Link>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto bg-gray-100 p-4 sm:p-6 lg:p-8">
            {/* Active Theme Section */}
            {activeTheme && (
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">Active Theme</h2>
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    {(() => {
                      const activeTemplate = savedTemplates.find((t) => t.id === activeTheme)
                      if (!activeTemplate) return null

                      return (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-24 bg-white rounded-lg shadow-md overflow-hidden border">
                              <TemplateVisual template={activeTemplate} className="w-full h-full" />
                            </div>
                            <div>
                              <h3 className="font-bold text-lg text-green-800">{activeTemplate.name}</h3>
                              <p className="text-green-600 mb-2">{activeTemplate.description}</p>
                              <div className="flex items-center">
                                <Check className="h-4 w-4 text-green-600 mr-1" />
                                <span className="text-sm text-green-600">Currently Active</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-2" />
                              Preview
                            </Button>
                            <Button variant="outline" size="sm">
                              Customize
                            </Button>
                          </div>
                        </div>
                      )
                    })()}
                  </CardContent>
                </Card>
              </section>
            )}

            {/* Saved Templates Section */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Your Saved Themes</h2>
                <Badge variant="secondary">{savedTemplates.length} templates</Badge>
              </div>

              {savedTemplates.length === 0 ? (
                <Card>
                  <CardContent className="text-center py-12">
                    <Grid className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No themes saved yet</h3>
                    <p className="text-gray-500 mb-6">
                      Browse our template collection and save your favorites to get started.
                    </p>
                    <Link href="/templates">
                      <Button>
                        <Eye className="h-4 w-4 mr-2" />
                        Browse Templates
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedTemplates.map((template) => (
                    <Card
                      key={template.id}
                      className={`group hover:shadow-lg transition-shadow ${
                        activeTheme === template.id ? "ring-2 ring-green-500 bg-green-50" : ""
                      }`}
                    >
                      <CardContent className="p-4">
                        <div className="aspect-[1/2] bg-white rounded-lg shadow-md overflow-hidden border mb-4">
                          <TemplateVisual template={template} className="w-full h-full" />
                        </div>

                        <div className="space-y-3">
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="font-bold text-gray-900">{template.name}</h3>
                              {template.isPro && <Badge className="bg-amber-100 text-amber-800 text-xs">PRO</Badge>}
                            </div>
                            <p className="text-sm text-gray-600">{template.description}</p>
                            <div className="flex items-center mt-2">
                              <div className="flex text-yellow-400 text-xs mr-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="h-3 w-3 fill-current" />
                                ))}
                              </div>
                              <span className="text-xs text-gray-500">
                                {template.rating} ({template.reviewCount} reviews)
                              </span>
                            </div>
                          </div>

                          <div className="flex space-x-2">
                            {activeTheme === template.id ? (
                              <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                                <Check className="h-4 w-4 mr-1" />
                                Active
                              </Button>
                            ) : (
                              <Button size="sm" className="flex-1" onClick={() => handleSetActive(template.id)}>
                                Set Active
                              </Button>
                            )}
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(`/templates/preview/${template.id}`, "_blank")}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleRemoveTemplate(template.id)}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </section>

            {/* Quick Actions */}
            <section className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Theme Management</CardTitle>
                  <CardDescription>Manage your menu themes and appearance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Link href="/templates">
                      <Button
                        variant="outline"
                        className="h-auto flex flex-col items-center justify-center p-4 gap-2 w-full"
                      >
                        <Eye className="h-6 w-6" />
                        <span className="text-sm">Browse Templates</span>
                      </Button>
                    </Link>
                    <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2">
                      <Download className="h-6 w-6" />
                      <span className="text-sm">Export Theme</span>
                    </Button>
                    <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2">
                      <Grid className="h-6 w-6" />
                      <span className="text-sm">Customize</span>
                    </Button>
                    <Link href="/dashboard/view-menu">
                      <Button
                        variant="outline"
                        className="h-auto flex flex-col items-center justify-center p-4 gap-2 w-full"
                      >
                        <Eye className="h-6 w-6" />
                        <span className="text-sm">Preview Menu</span>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

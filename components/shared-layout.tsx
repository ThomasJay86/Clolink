"use client"

import type React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState, useEffect } from "react"

interface SharedLayoutProps {
  children: React.ReactNode
  hideAnnouncement?: boolean
}

export default function SharedLayout({ children, hideAnnouncement = false }: SharedLayoutProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-lime-300 selection:text-green-900">
      {/* Announcement Banner */}
      {!hideAnnouncement && (
        <div className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white py-2.5 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light"></div>
          <div className="max-w-7xl mx-auto flex items-center justify-center relative z-10">
            <div className="flex items-center gap-3 text-sm font-medium">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-lime-400 text-green-900 uppercase tracking-wide">
                New
              </span>
              <span className="hidden sm:inline">Grow your restaurant with all new menu tools on FoodTree</span>
              <span className="sm:hidden">New menu tools available!</span>
              <Link
                href="/products"
                className="underline decoration-lime-400 underline-offset-4 hover:text-lime-300 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-white/80 backdrop-blur-md border-gray-200/50 py-3 shadow-sm"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-2 group">
              <div
                className={`p-1.5 rounded-lg transition-colors ${scrolled ? "bg-green-100 text-green-700" : "bg-white/10 text-white"}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M11 2a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0V2zm8.293 8.293a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414zM18 12a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-7 7a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm-4.707-4.707a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414zM5 12a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-.293-4.293a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 0 1 1.414 1.414L6.121 7.707a1 1 0 0 1-1.414 0zM12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                </svg>
              </div>
              <span
                className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}
              >
                FoodTree
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: "Products", href: "/products" },
                { name: "Templates", href: "/templates" },
                { name: "Marketplace", href: "/marketplace" },
                { name: "Learn", href: "/learn" },
                { name: "Pricing", href: "/pricing" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-lime-500 ${
                    scrolled ? "text-gray-600" : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/login"
                className={`text-sm font-medium px-4 py-2 rounded-full transition-all ${
                  scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
                }`}
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className={`text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md ${
                  scrolled
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-lime-400 text-green-900 hover:bg-lime-300"
                }`}
              >
                Sign up free
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`md:hidden ${scrolled ? "text-gray-900" : "text-white"}`}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-8 mt-8">
                  <div className="flex flex-col gap-4">
                    <Link href="/products" className="text-lg font-medium text-gray-900 hover:text-green-600">
                      Products
                    </Link>
                    <Link href="/templates" className="text-lg font-medium text-gray-900 hover:text-green-600">
                      Templates
                    </Link>
                    <Link href="/marketplace" className="text-lg font-medium text-gray-900 hover:text-green-600">
                      Marketplace
                    </Link>
                    <Link href="/learn" className="text-lg font-medium text-gray-900 hover:text-green-600">
                      Learn
                    </Link>
                    <Link href="/pricing" className="text-lg font-medium text-gray-900 hover:text-green-600">
                      Pricing
                    </Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link href="/login">
                      <Button variant="outline" className="w-full justify-center bg-transparent">
                        Log In
                      </Button>
                    </Link>
                    <Link href="/signup">
                      <Button className="w-full justify-center bg-green-600 hover:bg-green-700">Sign up free</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-10 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="bg-lime-400 p-1.5 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-green-900"
                  >
                    <path d="M11 2a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0V2zm8.293 8.293a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414zM18 12a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-7 7a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm-4.707-4.707a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414zM5 12a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-.293-4.293a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 0 1 1.414 1.414L6.121 7.707a1 1 0 0 1-1.414 0zM12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-tight">FoodTree</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
                The all-in-one platform for restaurants to manage their digital presence, menu, and orders. Built for
                growth.
              </p>
              <div className="flex gap-4">
                {/* Social Icons */}
                {["Instagram", "Twitter", "Facebook", "LinkedIn"].map((social) => (
                  <Link
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-lime-400 hover:text-green-900 transition-all duration-300"
                  >
                    <span className="sr-only">{social}</span>
                    {/* Simple icon placeholder */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-6">Product</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-6">Resources</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    Legal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2025 FoodTree Inc. All rights reserved.</p>
            <div className="flex gap-8 text-sm text-gray-500">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

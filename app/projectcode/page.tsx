"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy } from 'lucide-react'
import { useState } from "react"

// File contents
const files = {
  "app/page.tsx": `import Image from "next/image"
import Link from "next/link"
import { X, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-pink-200 to-purple-200 py-3 px-4 flex items-center justify-center relative">
        <div className="flex items-center gap-3">
          <span className="text-black text-sm md:text-base font-medium">
            NEW: Grow your restaurant with all new menu tools on FoodTree
          </span>
          <Button
            variant="secondary"
            className="bg-purple-700 text-white hover:bg-purple-800 rounded-full text-xs md:text-sm"
          >
            Learn More
          </Button>
        </div>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-white/20 p-1 rounded-full transition-colors">
          <X className="h-4 w-4 text-gray-700" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="bg-gradient-to-r from-green-800 to-green-900 py-4 px-6 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-lime-300 text-2xl font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M11 2a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0V2zm8.293 8.293a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414zM18 12a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-7 7a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm-4.707-4.707a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414zM5 12a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-.293-4.293a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 0 1 1.414 1.414L6.121 7.707a1 1 0 0 1-1.414 0zM12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
              </svg>
              FoodTree*
            </Link>
            <div className="hidden md:flex ml-10 space-x-6">
              <Link href="/products" className="text-white hover:text-lime-300 transition-colors">
                Products
              </Link>
              <Link href="/templates" className="text-white hover:text-lime-300 transition-colors">
                Templates
              </Link>
              <Link href="/marketplace" className="text-white hover:text-lime-300 transition-colors">
                Marketplace
              </Link>
              <Link href="/learn" className="text-white hover:text-lime-300 transition-colors">
                Learn
              </Link>
              <Link href="/pricing" className="text-white hover:text-lime-300 transition-colors">
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Link
              href="/login"
              className="text-white bg-green-700/50 hover:bg-green-600/50 px-4 py-2 rounded-full transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="text-white bg-gray-900 hover:bg-black px-4 py-2 rounded-full transition-colors shadow-lg"
            >
              Sign up free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow bg-gradient-to-b from-green-800 to-green-900 py-16 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute top-[10%] left-[5%] w-32 h-32 rounded-full bg-lime-300"></div>
          <div className="absolute top-[40%] right-[10%] w-48 h-48 rounded-full bg-lime-300"></div>
          <div className="absolute bottom-[15%] left-[15%] w-24 h-24 rounded-full bg-lime-300"></div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <Badge className="bg-lime-300/20 text-lime-300 hover:bg-lime-300/30 border-none px-4 py-1 text-sm">
              Trusted by 50,000+ restaurants worldwide
            </Badge>
            <h1 className="text-lime-300 text-5xl md:text-6xl font-bold leading-tight">
              Everything you serve. In one, simple menu.
            </h1>
            <p className="text-white/90 text-lg leading-relaxed">
              Join 50M+ restaurants using FoodTree for their menu display. One link to help you share everything you
              cook, serve and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-white rounded-full flex items-center px-4 py-3 flex-grow shadow-lg">
                <span className="text-gray-400 mr-2">foodtree.com/</span>
                <input
                  type="text"
                  placeholder="yourrestaurant"
                  className="outline-none flex-grow bg-transparent"
                  aria-label="Restaurant name"
                />
              </div>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium rounded-full py-3 px-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                Claim your FoodTree
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                  <Image src="/placeholder.svg?height=32&width=32" alt="User" width={32} height={32} />
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                  <Image src="/placeholder.svg?height=32&width=32" alt="User" width={32} height={32} />
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                  <Image src="/placeholder.svg?height=32&width=32" alt="User" width={32} height={32} />
                </div>
              </div>
              <div className="text-white/80 text-sm">
                <span className="font-semibold text-white">2,500+</span> restaurants joined in the last week
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[600px] w-full max-w-[300px] mx-auto">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-purple-400 to-blue-400 rounded-3xl transform rotate-6 shadow-xl"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 h-40 relative">
                  <div className="absolute top-6 left-0 right-0 flex justify-center">
                    <div className="h-20 w-20 rounded-full bg-white p-1 shadow-lg overflow-hidden">
                      <div className="h-full w-full rounded-full bg-gray-200 overflow-hidden">
                        <Image src="/placeholder.svg?height=80&width=80" alt="Restaurant logo" width={80} height={80} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-10 px-4 text-center">
                  <h3 className="font-bold text-xl">Delicious Bistro</h3>
                  <p className="text-gray-500 text-sm">Fine dining in your city</p>

                  <div className="mt-6 space-y-3">
                    <div className="bg-gradient-to-r from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 transition-colors rounded-xl p-3 flex items-center justify-between shadow-sm hover:shadow transform hover:-translate-y-0.5 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-pink-200 flex items-center justify-center">
                          <span role="img" aria-label="pasta" className="text-sm">
                            🍝
                          </span>
                        </div>
                        <span>Signature Pasta</span>
                      </div>
                      <span className="text-sm font-bold">$18</span>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-colors rounded-xl p-3 flex items-center justify-between shadow-sm hover:shadow transform hover:-translate-y-0.5 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center">
                          <span role="img" aria-label="fish" className="text-sm">
                            🐟
                          </span>
                        </div>
                        <span>Grilled Salmon</span>
                      </div>
                      <span className="text-sm font-bold">$24</span>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-colors rounded-xl p-3 flex items-center justify-between shadow-sm hover:shadow transform hover:-translate-y-0.5 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center">
                          <span role="img" aria-label="vegetables" className="text-sm">
                            🥗
                          </span>
                        </div>
                        <span>Vegetarian Platter</span>
                      </div>
                      <span className="text-sm font-bold">$16</span>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200 transition-colors rounded-xl p-3 flex items-center justify-between shadow-sm hover:shadow transform hover:-translate-y-0.5 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-yellow-200 flex items-center justify-center">
                          <span role="img" aria-label="dessert" className="text-sm">
                            🍰
                          </span>
                        </div>
                        <span>Dessert Special</span>
                      </div>
                      <span className="text-sm font-bold">$9</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why restaurants choose FoodTree</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              The easiest way to showcase your menu and connect with customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-green-50 to-lime-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-green-700"
                >
                  <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 3a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V8a1 1 0 0 1 1-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Easy to Set Up</h3>
              <p className="text-gray-600">
                Create your digital menu in minutes. No coding or design skills required. Just add your items and
                customize.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-blue-700"
                >
                  <path d="M13 21V11h8v10h-8zM3 13V3h8v10H3zm6-2V5H5v6h4zM3 21v-6h8v6H3zm2-2h4v-2H5v2zm10 0h4v-6h-4v6zM13 3h8v6h-8V3zm2 2v2h4V5h-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Beautiful Templates</h3>
              <p className="text-gray-600">
                Choose from dozens of professionally designed templates that make your menu look amazing on any device.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-purple-700"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Reach More Customers</h3>
              <p className="text-gray-600">
                Share your menu across all social platforms with a single link. Increase visibility and attract new
                customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Loved by restaurants worldwide</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              See what restaurant owners are saying about FoodTree
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "FoodTree transformed how we present our menu. Our customers love the clean design and easy navigation.
                We've seen a 30% increase in online orders since switching!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                  <Image src="/placeholder.svg?height=48&width=48" alt="Customer" width={48} height={48} />
                </div>
                <div>
                  <h4 className="font-bold">Maria Rodriguez</h4>
                  <p className="text-gray-600 text-sm">Bella Italia Restaurant</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "The QR code feature is a game-changer! Our customers can scan and view our menu on their phones. It's
                eco-friendly and we save money on printing menus."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                  <Image src="/placeholder.svg?height=48&width=48" alt="Customer" width={48} height={48} />
                </div>
                <div>
                  <h4 className="font-bold">James Chen</h4>
                  <p className="text-gray-600 text-sm">Fusion Kitchen</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "Setting up our menu on FoodTree took less than an hour. The analytics help us understand which dishes
                are most viewed, allowing us to optimize our offerings."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                  <Image src="/placeholder.svg?height=48&width=48" alt="Customer" width={48} height={48} />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Urban Café</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-800 to-green-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to showcase your menu?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
            Join thousands of restaurants already using FoodTree to share their menus and grow their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-lg">
              Get Started for Free
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full bg-transparent"
            >
              See Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
            <div>
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-lime-300"
                >
                  <path d="M11 2a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0V2zm8.293 8.293a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414zM18 12a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-7 7a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm-4.707-4.707a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414zM5 12a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-.293-4.293a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 0 1 1.414 1.414L6.121 7.707a1 1 0 0 1-1.414 0zM12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                </svg>
                FoodTree
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="hover:text-lime-300 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-300 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-300 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-300 transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="hover:text-lime-300 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-300 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-300 transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-300 transition-colors">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="hover:text-lime-300 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-300 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-300 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-300 transition-colors">
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6">Connect</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="hover:text-lime-300 transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-300 transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-300 transition-colors">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-300 transition-colors">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-green-700 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 FoodTree. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}`,
  "app/login/page.tsx": `"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function Login() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 flex flex-col p-8 md:p-16 justify-center">
          <div className="max-w-md mx-auto w-full">
            <Link href="/" className="text-green-800 text-3xl font-bold mb-10 inline-block">
              FoodTree*
            </Link>

            <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
            <p className="text-gray-600 mb-8">Log in to manage your restaurant menu</p>

            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Enter your email" className="w-full" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Link href="/forgot-password" className="text-sm text-green-700 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" type="password" placeholder="Enter your password" className="w-full" />
              </div>

              <Button
                className="w-full bg-green-700 hover:bg-green-800 py-6"
                onClick={() => (window.location.href = "/dashboard")}
              >
                Log in
              </Button>

              <div className="relative my-6">
                <Separator />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500">
                  or
                </span>
              </div>

              <Button variant="outline" className="w-full bg-transparent">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                  <path fill="none" d="M1 1h22v22H1z" />
                </svg>
                Continue with Google
              </Button>

              <div className="text-center mt-8">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <Link href="/signup" className="text-green-700 hover:underline font-medium">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-green-800 to-green-900">
          <div className="h-full flex items-center justify-center p-12">
            <div className="max-w-md text-white">
              <h2 className="text-3xl font-bold mb-6">Manage your restaurant menu with ease</h2>
              <p className="text-green-100 text-lg">
                Create, customize, and share your digital menu with customers across all your social platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}`,
  "app/signup/page.tsx": `import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

export default function Signup() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 flex flex-col p-8 md:p-16 justify-center">
          <div className="max-w-md mx-auto w-full">
            <Link href="/" className="text-green-800 text-3xl font-bold mb-10 inline-block">
              FoodTree*
            </Link>

            <h1 className="text-3xl font-bold mb-2">Create your FoodTree</h1>
            <p className="text-gray-600 mb-8">Share your restaurant's menu with the world</p>

            <div className="space-y-6">
              <Button variant="outline" className="w-full bg-transparent">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                  <path fill="none" d="M1 1h22v22H1z" />
                </svg>
                Sign up with Google
              </Button>

              <div className="relative my-6">
                <Separator />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500">
                  or
                </span>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Enter your email" className="w-full" />
              </div>

              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <div className="flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    foodtree.com/
                  </span>
                  <Input
                    id="username"
                    type="text"
                    placeholder="yourrestaurant"
                    className="rounded-none rounded-r-md flex-1"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <Input id="password" type="password" placeholder="Create a password" className="w-full" />
                <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <Checkbox id="terms" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-600">
                    I agree to the{" "}
                    <Link href="/terms" className="text-green-700 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-green-700 hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>

              <Button className="w-full bg-green-700 hover:bg-green-800 py-6">Create account</Button>

              <div className="text-center mt-8">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link href="/login" className="text-green-700 hover:underline font-medium">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-green-800 to-green-900">
          <div className="h-full flex items-center justify-center p-12">
            <div className="max-w-md text-white">
              <h2 className="text-3xl font-bold mb-6">Share your menu with the world</h2>
              <p className="text-green-100 text-lg">
                Join thousands of restaurants using FoodTree to showcase their menus across all social platforms with a
                single link.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}`,
  "app/templates/page.tsx": `"use client"

import { Search, ArrowRight, Check, Star, Filter, Grid3X3, List, Sparkles } from 'lucide-react'
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
    window.open(\`/templates/preview/\${template.id}\`, "_blank", "width=400,height=800")
  }

  const handleUseTemplate = (template: Template) => {
    const savedTemplates = JSON.parse(localStorage.getItem("savedTemplates") || "[]")
    const newTemplate = { ...template, savedAt: new Date().toISOString() }
    localStorage.setItem("savedTemplates", JSON.stringify([...savedTemplates, newTemplate]))

    // Create a success notification effect
    const notification = document.createElement("div")
    notification.className =
      "fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300"
    notification.textContent = \`\${template.name} added to your themes!\`
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
            className={\`grid gap-8 \${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}\`}
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
                            className={\`shadow-lg px-6 \${
                              template.isPro
                                ? "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600"
                                : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                            }\`}
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
                  className={\`grid gap-8 \${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}\`}
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
                                  className={\`shadow-lg px-6 \${
                                    template.isPro
                                      ? "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600"
                                      : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                                  }\`}
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
                    className={\`relative bg-white rounded-3xl shadow-lg overflow-hidden border border-amber-200 \${
                      idx % 2 === 0 ? "mt-8" : "mb-8"
                    }\`}
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
}`,
  "components/template-preview/template-visual.tsx": `import type { Template } from "@/data/templates"

interface TemplateVisualProps {
  template: Template
  className?: string
}

export function TemplateVisual({ template, className = "" }: TemplateVisualProps) {
  const renderTemplate = () => {
    switch (template.id) {
      case "classic":
        return (
          <div className="w-full h-full bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-3 text-center relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative">
                <h1 className="text-sm font-bold tracking-wide">CLASSIC BISTRO</h1>
                <div className="w-8 h-0.5 bg-slate-300 mx-auto my-1"></div>
                <p className="text-xs text-slate-300">Est. 1985</p>
              </div>
            </div>
            <div className="p-3 space-y-2">
              <div className="text-center mb-3">
                <h2 className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Today's Menu</h2>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-1 border-b border-slate-200">
                  <div>
                    <span className="text-xs font-medium text-slate-800">Classic Burger</span>
                    <p className="text-[10px] text-slate-500">Beef, lettuce, tomato</p>
                  </div>
                  <span className="text-xs font-bold text-slate-800">$12</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-200">
                  <div>
                    <span className="text-xs font-medium text-slate-800">Caesar Salad</span>
                    <p className="text-[10px] text-slate-500">Fresh romaine, parmesan</p>
                  </div>
                  <span className="text-xs font-bold text-slate-800">$10</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <div>
                    <span className="text-xs font-medium text-slate-800">Chocolate Cake</span>
                    <p className="text-[10px] text-slate-500">Rich & decadent</p>
                  </div>
                  <span className="text-xs font-bold text-slate-800">$8</span>
                </div>
              </div>
            </div>
          </div>
        )

      case "bistro":
        return (
          <div className="w-full h-full bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 text-white p-3 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-400/30 rounded-full"></div>
              <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-amber-400/20 rounded-full"></div>
              <div className="relative">
                <h1 className="text-sm font-serif font-bold">Bistro Élégant</h1>
                <div className="w-6 h-0.5 bg-gradient-to-r from-amber-300 to-orange-300 mx-auto my-1"></div>
                <p className="text-xs text-amber-200 italic">Fine Dining Experience</p>
              </div>
            </div>
            <div className="p-3">
              <div className="text-center mb-3">
                <h2 className="text-xs font-serif text-amber-900 mb-1">Chef's Selection</h2>
                <div className="w-4 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
              </div>
              <div className="space-y-2">
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-2 border border-amber-200/50">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xs font-serif font-semibold text-amber-900">Beef Wellington</h3>
                      <p className="text-[10px] text-amber-700 italic">Tender beef, mushroom duxelles</p>
                    </div>
                    <span className="text-xs font-bold text-amber-900">$38</span>
                  </div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-2 border border-amber-200/50">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xs font-serif font-semibold text-amber-900">Lobster Bisque</h3>
                      <p className="text-[10px] text-amber-700 italic">Rich & creamy</p>
                    </div>
                    <span className="text-xs font-bold text-amber-900">$16</span>
                  </div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-2 border border-amber-200/50">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xs font-serif font-semibold text-amber-900">Crème Brûlée</h3>
                      <p className="text-[10px] text-amber-700 italic">Vanilla custard, caramelized sugar</p>
                    </div>
                    <span className="text-xs font-bold text-amber-900">$12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "street-food":
        return (
          <div className="w-full h-full bg-gradient-to-br from-red-100 via-orange-50 to-yellow-100 overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 via-orange-500 to-red-500 text-white p-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-yellow-400/30 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-red-700/30 rounded-full"></div>
              <div className="absolute top-1 left-1 w-4 h-4 bg-orange-300/40 rounded-full"></div>
              <div className="relative text-center">
                <h1 className="text-sm font-bold uppercase tracking-wider">STREET EATS</h1>
                <p className="text-xs text-red-100 font-medium">🔥 Fresh • Fast • Flavorful 🔥</p>
              </div>
            </div>
            <div className="p-3">
              <div className="text-center mb-3">
                <h2 className="text-xs font-bold text-red-600 uppercase tracking-wide">Today's Specials</h2>
                <div className="w-6 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-1 rounded-full"></div>
              </div>
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-2 border-l-4 border-red-500 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-bold text-gray-800 uppercase">Street Tacos</h3>
                      <p className="text-[10px] text-gray-600">Spicy beef, fresh salsa</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-red-600">$9</span>
                      <div className="text-[8px] text-orange-600 font-bold">HOT!</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-2 border-l-4 border-orange-500 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-bold text-gray-800 uppercase">Loaded Fries</h3>
                      <p className="text-[10px] text-gray-600">Cheese, bacon, jalapeños</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-orange-600">$7</span>
                      <div className="text-[8px] text-red-600 font-bold">NEW!</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 bg-gradient-to-r from-red-500 to-orange-500 text-white p-2 rounded-lg text-center">
                <p className="text-[10px] font-bold">🚚 Order Now for Quick Pickup!</p>
              </div>
            </div>
          </div>
        )

      case "modern-cafe":
        return (
          <div className="w-full h-full bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-600 text-white p-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-300/30 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 bg-emerald-400/20 rounded-full"></div>
              <div className="relative text-center">
                <h1 className="text-sm font-light tracking-widest">BREW & BITE</h1>
                <div className="w-4 h-0.5 bg-emerald-300 mx-auto my-1"></div>
                <p className="text-xs text-emerald-100">Artisan Coffee & Fresh Bites</p>
              </div>
            </div>
            <div className="p-3">
              <div className="flex justify-center space-x-4 mb-3 text-xs">
                <button className="text-emerald-600 border-b-2 border-emerald-600 pb-1 font-medium">Coffee</button>
                <button className="text-gray-500 hover:text-emerald-600 transition-colors">Food</button>
                <button className="text-gray-500 hover:text-emerald-600 transition-colors">Pastries</button>
              </div>
              <div className="space-y-2">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-2 border border-emerald-100 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xs font-medium text-gray-800">Artisan Latte</h3>
                      <p className="text-[10px] text-gray-600">Single origin, steamed milk</p>
                      <div className="flex items-center mt-1">
                        <div className="flex text-yellow-400 text-[8px]">★★★★★</div>
                        <span className="text-[8px] text-gray-400 ml-1">(4.8)</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-600">$4.50</span>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-2 border border-emerald-100 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xs font-medium text-gray-800">Avocado Toast</h3>
                      <p className="text-[10px] text-gray-600">Sourdough, fresh avocado</p>
                      <div className="flex items-center mt-1">
                        <div className="flex text-yellow-400 text-[8px]">★★★★★</div>
                        <span className="text-[8px] text-gray-400 ml-1">(4.9)</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-600">$8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "pizza-house":
        return (
          <div className="w-full h-full bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 overflow-hidden">
            <div className="bg-gradient-to-r from-red-700 via-orange-600 to-red-600 text-white p-3 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400/40 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 bg-red-800/30 rounded-full"></div>
              <div className="relative">
                <h1 className="text-sm font-bold">🍕 Mama's Pizza</h1>
                <p className="text-xs text-red-100">Authentic Italian Since 1962</p>
              </div>
            </div>
            <div className="p-3">
              <div className="text-center mb-3">
                <h2 className="text-xs font-bold text-red-700">Wood Fired Specialties</h2>
                <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-1"></div>
              </div>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-2 border-2 border-red-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-semibold text-red-800">🍅 Margherita</h3>
                      <p className="text-[10px] text-gray-600">Fresh mozzarella, basil, tomato</p>
                    </div>
                    <span className="text-xs font-bold text-red-600">$14</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-2 border-2 border-orange-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-semibold text-orange-800">🌶️ Pepperoni</h3>
                      <p className="text-[10px] text-gray-600">Spicy pepperoni, mozzarella</p>
                    </div>
                    <span className="text-xs font-bold text-orange-600">$16</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-2 border-2 border-yellow-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-semibold text-yellow-800">🍰 Tiramisu</h3>
                      <p className="text-[10px] text-gray-600">Classic Italian dessert</p>
                    </div>
                    <span className="text-xs font-bold text-yellow-700">$7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "sushi-zen":
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-100 via-blue-50 to-slate-50 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 text-white p-3 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400/20 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 bg-slate-600/30 rounded-full"></div>
              <div className="relative">
                <h1 className="text-sm font-light tracking-wider">禅 SUSHI ZEN</h1>
                <div className="w-8 h-px bg-blue-400 mx-auto my-1"></div>
                <p className="text-xs text-slate-300">Traditional Japanese Cuisine</p>
              </div>
            </div>
            <div className="p-3">
              <div className="text-center mb-3">
                <h2 className="text-xs text-slate-800 font-light">Fresh Daily Selection</h2>
                <div className="w-6 h-px bg-gradient-to-r from-blue-400 to-slate-400 mx-auto mt-1"></div>
              </div>
              <div className="space-y-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-medium text-slate-800">🐉 Dragon Roll</h3>
                      <p className="text-[10px] text-slate-600">Eel, cucumber, avocado</p>
                    </div>
                    <span className="text-xs font-bold text-slate-800">$12</span>
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-medium text-slate-800">🍣 Chirashi Bowl</h3>
                      <p className="text-[10px] text-slate-600">Assorted sashimi, sushi rice</p>
                    </div>
                    <span className="text-xs font-bold text-slate-800">$18</span>
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-medium text-slate-800">🍵 Mochi Ice Cream</h3>
                      <p className="text-[10px] text-slate-600">Green tea, vanilla, strawberry</p>
                    </div>
                    <span className="text-xs font-bold text-slate-800">$6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "gastropub":
        return (
          <div className="w-full h-full bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-800 via-indigo-700 to-purple-700 text-white p-3 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-400/30 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-5 h-5 bg-purple-600/40 rounded-full"></div>
              <div className="relative">
                <h1 className="text-sm font-bold tracking-wide">THE GASTROPUB</h1>
                <p className="text-xs text-purple-200">🍺 Craft Food & Premium Drinks</p>
              </div>
            </div>
            <div className="p-3">
              <div className="text-center mb-3">
                <h2 className="text-xs font-semibold text-purple-700">Chef's Favorites</h2>
                <div className="w-6 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-1"></div>
              </div>
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-2 border border-purple-200 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-semibold text-purple-800">🍔 Craft Burger</h3>
                      <p className="text-[10px] text-purple-600">Wagyu beef, truffle aioli</p>
                    </div>
                    <span className="text-xs font-bold text-purple-700">$15</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-2 border border-indigo-200 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-semibold text-indigo-800">🐟 Fish & Chips</h3>
                      <p className="text-[10px] text-indigo-600">Beer battered cod, mushy peas</p>
                    </div>
                    <span className="text-xs font-bold text-indigo-700">$13</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-2 rounded-lg text-center">
                <p className="text-[10px] font-bold">🍺 Happy Hour 4-6 PM Daily</p>
              </div>
            </div>
          </div>
        )

      case "bakery-sweet":
        return (
          <div className="w-full h-full bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 overflow-hidden">
            <div className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 text-white p-3 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-rose-300/40 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 bg-pink-700/30 rounded-full"></div>
              <div className="absolute top-1 left-2 w-3 h-3 bg-rose-200/50 rounded-full"></div>
              <div className="relative">
                <h1 className="text-sm font-bold">🧁 Sweet Dreams</h1>
                <p className="text-xs text-pink-200">Artisan Bakery & Café</p>
              </div>
            </div>
            <div className="p-3">
              <div className="text-center mb-3">
                <h2 className="text-xs font-semibold text-pink-700">Fresh Baked Daily</h2>
                <div className="w-8 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mt-1"></div>
              </div>
              <div className="space-y-2">
                <div className="bg-white rounded-xl p-2 border-2 border-pink-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-semibold text-pink-800">🥐 Butter Croissant</h3>
                      <p className="text-[10px] text-pink-600">Flaky, buttery perfection</p>
                    </div>
                    <span className="text-xs font-bold text-pink-600">$3</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-2 border-2 border-rose-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-semibold text-rose-800">🧁 Red Velvet Cupcake</h3>
                      <p className="text-[10px] text-rose-600">Cream cheese frosting</p>
                    </div>
                    <span className="text-xs font-bold text-rose-600">$4</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-2 border-2 border-red-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-semibold text-red-800">🍪 French Macarons</h3>
                      <p className="text-[10px] text-red-600">Assorted flavors</p>
                    </div>
                    <span className="text-xs font-bold text-red-600">$2.50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "steakhouse-premium":
        return (
          <div className="w-full h-full bg-gradient-to-br from-stone-100 via-amber-50 to-orange-50 overflow-hidden">
            <div className="bg-gradient-to-r from-stone-800 via-amber-800 to-stone-700 text-white p-3 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-400/30 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-5 h-5 bg-stone-600/40 rounded-full"></div>
              <div className="relative">
                <h1 className="text-sm font-serif font-bold tracking-wide">PRIME STEAKHOUSE</h1>
                <div className="w-8 h-px bg-amber-400 mx-auto my-1"></div>
                <p className="text-xs text-stone-200">Premium Cuts & Fine Wines</p>
              </div>
            </div>
            <div className="p-3">
              <div className="text-center mb-3">
                <h2 className="text-xs font-serif text-stone-800">Chef's Recommendations</h2>
                <div className="w-6 h-px bg-gradient-to-r from-amber-600 to-stone-600 mx-auto mt-1"></div>
              </div>
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-2 border-l-4 border-amber-600 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-serif font-semibold text-stone-800">🥩 Wagyu Ribeye</h3>
                      <p className="text-[10px] text-stone-600 italic">16oz, perfectly aged</p>
                    </div>
                    <span className="text-xs font-bold text-amber-700">$85</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-stone-50 to-amber-50 rounded-lg p-2 border-l-4 border-stone-600 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-serif font-semibold text-stone-800">🦞 Lobster Tail</h3>
                      <p className="text-[10px] text-stone-600 italic">Butter poached, 8oz</p>
                    </div>
                    <span className="text-xs font-bold text-stone-700">$42</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-amber-50 to-stone-50 rounded-lg p-2 border-l-4 border-amber-500 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-serif font-semibold text-stone-800">🍷 Wine Pairing</h3>
                      <p className="text-[10px] text-stone-600 italic">Sommelier selected</p>
                    </div>
                    <span className="text-xs font-bold text-amber-600">$25</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-lg">
            <div className="text-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto mb-2"></div>
              <span className="text-gray-500 text-xs">Template Preview</span>
            </div>
          </div>
        )
    }
  }

  return <div className={\`\${className}\`}>{renderTemplate()}</div>
}`,
  "app/dashboard/page.tsx": `import Image from "next/image"
import Link from "next/link"
import { BarChart3, Clock, Edit, Eye, FileText, Grid, LayoutDashboard, List, MessageSquare, QrCode, Settings, ShoppingBag, Users, Calendar, DollarSign, Package, UserCheck, Truck, CreditCard, Bell, TrendingUp, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
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
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-green-50 text-green-700"
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
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
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
                <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
                <Link href="/dashboard/view-menu">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Menu
                  </Button>
                </Link>
                <Button size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Menu
                </Button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto bg-gray-100 p-4 sm:p-6 lg:p-8">
            {/* Overview Section */}
            <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Today's Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$2,543</div>
                  <p className="text-xs text-green-500 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12.5% from yesterday
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
                  <ShoppingBag className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">23</div>
                  <p className="text-xs text-blue-500 flex items-center mt-1">
                    <Clock className="h-3 w-3 mr-1" />8 pending, 15 in progress
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Table Reservations</CardTitle>
                  <Calendar className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18</div>
                  <p className="text-xs text-purple-500 flex items-center mt-1">
                    <MapPin className="h-3 w-3 mr-1" />6 tables available
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Staff on Duty</CardTitle>
                  <UserCheck className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-green-500 flex items-center mt-1">
                    <Users className="h-3 w-3 mr-1" />
                    All positions covered
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Real-time Dashboard Features */}
            <div className="grid gap-6 mb-8 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Live Order Status</CardTitle>
                  <CardDescription>Real-time order tracking and management</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 animate-pulse"></div>
                        <div>
                          <div className="font-medium">Order #1234 - Table 5</div>
                          <div className="text-sm text-gray-600">2x Pasta, 1x Salad</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-yellow-100 text-yellow-800">Preparing</Badge>
                        <div className="text-xs text-gray-500 mt-1">8 min</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                        <div>
                          <div className="font-medium">Order #1235 - Delivery</div>
                          <div className="text-sm text-gray-600">1x Pizza, 2x Drinks</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-blue-100 text-blue-800">Out for Delivery</Badge>
                        <div className="text-xs text-gray-500 mt-1">15 min</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <div>
                          <div className="font-medium">Order #1236 - Table 3</div>
                          <div className="text-sm text-gray-600">3x Burgers, 1x Fries</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-100 text-green-800">Ready</Badge>
                        <div className="text-xs text-gray-500 mt-1">Now</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <Link href="/dashboard/orders">
                      <Button variant="link" size="sm" className="text-green-600">
                        View all orders
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Today's Reservations</CardTitle>
                  <CardDescription>Table booking management</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div>
                        <div className="font-medium">Johnson Party (4 guests)</div>
                        <div className="text-sm text-gray-600">Table 8 • 7:00 PM</div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-purple-100 text-purple-800">Confirmed</Badge>
                        <div className="text-xs text-gray-500 mt-1">2 hours</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <div>
                        <div className="font-medium">Smith Anniversary (2 guests)</div>
                        <div className="text-sm text-gray-600">Table 12 • 8:30 PM</div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-orange-100 text-orange-800">Pending</Badge>
                        <div className="text-xs text-gray-500 mt-1">3.5 hours</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                      <div>
                        <div className="font-medium">Davis Family (6 guests)</div>
                        <div className="text-sm text-gray-600">Table 15 • 6:00 PM</div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-100 text-green-800">Seated</Badge>
                        <div className="text-xs text-gray-500 mt-1">Now</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <Link href="/dashboard/reservations">
                      <Button variant="link" size="sm" className="text-purple-600">
                        Manage reservations
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions - Enhanced POS Features */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Essential POS operations at your fingertips</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  <Link href="/dashboard/orders/new">
                    <Button
                      variant="outline"
                      className="h-auto flex flex-col items-center justify-center p-4 gap-2 hover:bg-green-50"
                    >
                      <ShoppingBag className="h-6 w-6 text-green-600" />
                      <span className="text-xs">New Order</span>
                    </Button>
                  </Link>
                  <Link href="/dashboard/reservations/new">
                    <Button
                      variant="outline"
                      className="h-auto flex flex-col items-center justify-center p-4 gap-2 hover:bg-purple-50"
                    >
                      <Calendar className="h-6 w-6 text-purple-600" />
                      <span className="text-xs">Book Table</span>
                    </Button>
                  </Link>
                  <Link href="/dashboard/inventory">
                    <Button
                      variant="outline"
                      className="h-auto flex flex-col items-center justify-center p-4 gap-2 hover:bg-blue-50"
                    >
                      <Package className="h-6 w-6 text-blue-600" />
                      <span className="text-xs">Inventory</span>
                    </Button>
                  </Link>
                  <Link href="/dashboard/staff">
                    <Button
                      variant="outline"
                      className="h-auto flex flex-col items-center justify-center p-4 gap-2 hover:bg-orange-50"
                    >
                      <UserCheck className="h-6 w-6 text-orange-600" />
                      <span className="text-xs">Staff Clock</span>
                    </Button>
                  </Link>
                  <Link href="/dashboard/accounting">
                    <Button
                      variant="outline"
                      className="h-auto flex flex-col items-center justify-center p-4 gap-2 hover:bg-yellow-50"
                    >
                      <DollarSign className="h-6 w-6 text-yellow-600" />
                      <span className="text-xs">Daily Sales</span>
                    </Button>
                  </Link>
                  <Link href="/dashboard/themes">
                    <Button
                      variant="outline"
                      className="h-auto flex flex-col items-center justify-center p-4 gap-2 hover:bg-indigo-50"
                    >
                      <Grid className="h-6 w-6 text-indigo-600" />
                      <span className="text-xs">Themes</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  )
}`,
  "app/dashboard/themes/page.tsx": `"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { BarChart3, Calendar, CreditCard, DollarSign, FileText, Grid, LayoutDashboard, List, MessageSquare, Package, QrCode, Settings, ShoppingBag, Truck, UserCheck, Users, Eye, Trash2, Download, Star, Check } from 'lucide-react'
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
                      className={\`group hover:shadow-lg transition-shadow \${
                        activeTheme === template.id ? "ring-2 ring-green-500 bg-green-50" : ""
                      }\`}
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
                              onClick={() => window.open(\`/templates/preview/\${template.id}\`, "_blank")}
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
}`,
}

export default function ProjectCode() {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (filename: string, content: string) => {
    navigator.clipboard.writeText(content)
    setCopied(filename)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Project Source Code</h1>
            <p className="text-gray-600 mt-2">
              Copy the code below to recreate this project in your own environment.
            </p>
          </div>
          <Button onClick={() => window.print()} variant="outline">
            Print / Save as PDF
          </Button>
        </div>

        <Tabs defaultValue="app/page.tsx" className="w-full">
          <TabsList className="w-full flex flex-wrap h-auto justify-start gap-2 bg-transparent p-0 mb-6">
            {Object.keys(files).map((filename) => (
              <TabsTrigger
                key={filename}
                value={filename}
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm border bg-gray-100"
              >
                {filename}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(files).map(([filename, content]) => (
            <TabsContent key={filename} value={filename} className="mt-0">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between bg-gray-50 border-b py-3">
                  <CardTitle className="text-sm font-mono text-gray-700">{filename}</CardTitle>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleCopy(filename, content)}
                    className="gap-2"
                  >
                    {copied === filename ? (
                      <>
                        <span className="text-green-600 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copy Code
                      </>
                    )}
                  </Button>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative max-h-[600px] overflow-auto">
                    <pre className="p-4 text-xs md:text-sm font-mono bg-white text-gray-800 whitespace-pre-wrap">
                      <code>{content}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

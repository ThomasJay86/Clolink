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
              Create your digital menu in minutes. Share it with customers instantly. Update it anytime, anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup">
                <Button className="bg-lime-300 text-green-900 hover:bg-lime-400 rounded-full px-8 py-6 text-lg font-semibold shadow-xl">
                  Get started for free
                </Button>
              </Link>
              <Link href="/templates">
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold"
                >
                  View templates
                </Button>
              </Link>
            </div>
            <p className="text-white/70 text-sm">
              No credit card required • Free forever • Premium features available
            </p>
          </div>

          {/* Phone Mockup */}
          <div className="relative">
            <div className="relative mx-auto w-[280px] h-[560px] bg-black rounded-[3rem] shadow-2xl border-8 border-gray-800 overflow-hidden">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
              <div className="h-full w-full bg-gradient-to-b from-amber-50 to-white overflow-y-auto">
                <div className="p-6 space-y-4">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-gray-900">Bella Italia</h2>
                    <p className="text-sm text-gray-600">Authentic Italian Cuisine</p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">Margherita Pizza</h3>
                          <p className="text-xs text-gray-600 mt-1">Fresh mozzarella, basil, tomato sauce</p>
                        </div>
                        <span className="text-green-700 font-bold">$12</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">Pasta Carbonara</h3>
                          <p className="text-xs text-gray-600 mt-1">Creamy sauce, pancetta, parmesan</p>
                        </div>
                        <span className="text-green-700 font-bold">$15</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">Tiramisu</h3>
                          <p className="text-xs text-gray-600 mt-1">Classic Italian dessert</p>
                        </div>
                        <span className="text-green-700 font-bold">$8</span>
                      </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need to succeed</h2>
            <p className="text-gray-600 text-lg">Powerful features to help your restaurant thrive</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl mx-auto flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Lightning Fast</h3>
              <p className="text-gray-600">Create and update your menu in seconds. No technical skills required.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl mx-auto flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Mobile First</h3>
              <p className="text-gray-600">Beautiful menus that look perfect on any device, especially phones.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl mx-auto flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.431l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Fully Customizable</h3>
              <p className="text-gray-600">Choose from beautiful templates or create your own unique design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Loved by restaurant owners</h2>
            <p className="text-gray-600 text-lg">See what our customers have to say</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "FoodTree transformed how we present our menu. Our customers love the easy-to-use digital format!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full"></div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Owner, The Green Leaf Café</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Setup took less than 10 minutes. The templates are gorgeous and our sales have increased by 30%!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
                <div>
                  <p className="font-semibold text-gray-900">Michael Chen</p>
                  <p className="text-sm text-gray-600">Manager, Dragon Wok</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Best investment we've made. Updating our menu is now instant instead of reprinting every time."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full"></div>
                <div>
                  <p className="font-semibold text-gray-900">Emma Rodriguez</p>
                  <p className="text-sm text-gray-600">Chef, Bella Cucina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-lime-300">Ready to modernize your menu?</h2>
          <p className="text-white/90 text-xl">Join thousands of restaurants already using FoodTree</p>
          <Link href="/signup">
            <Button className="bg-lime-300 text-green-900 hover:bg-lime-400 rounded-full px-12 py-6 text-xl font-semibold shadow-xl">
              Start for free today
            </Button>
          </Link>
          <p className="text-white/70">No credit card required • Setup in minutes</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lime-300 text-xl font-bold mb-4">FoodTree</h3>
            <p className="text-gray-400 text-sm">Making restaurant menus simple and beautiful.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/templates" className="hover:text-lime-300 transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-lime-300 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="hover:text-lime-300 transition-colors">
                  Marketplace
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/learn" className="hover:text-lime-300 transition-colors">
                  Learn
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-lime-300 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-lime-300 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-lime-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-lime-300 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-lime-300 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2025 FoodTree. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-lime-300 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-lime-300 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
`,

  "app/login/page.tsx": `import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function LoginPage() {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left Side - Form */}
      <div className="flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Link href="/" className="inline-block">
              <h1 className="text-3xl font-bold text-green-800">FoodTree</h1>
            </Link>
            <h2 className="mt-6 text-2xl font-bold text-gray-900">Welcome back</h2>
            <p className="mt-2 text-sm text-gray-600">Log in to your account to continue</p>
          </div>

          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="••••••••"
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="/forgot-password" className="font-medium text-green-600 hover:text-green-500">
                  Forgot password?
                </Link>
              </div>
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-base">
              Sign in
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full py-6 text-base border-gray-300 hover:bg-gray-50"
            >
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
              </svg>
              Sign in with Google
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="font-medium text-green-600 hover:text-green-500">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Gradient */}
      <div className="hidden md:block bg-gradient-to-br from-green-800 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-lime-300"></div>
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-lime-300"></div>
        </div>
        <div className="relative h-full flex items-center justify-center p-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-lime-300">Welcome to FoodTree</h2>
            <p className="text-white/90 text-xl max-w-md mx-auto">
              Manage your restaurant menu with ease. Update items, prices, and availability in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}`,

  "app/signup/page.tsx": `import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignupPage() {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left Side - Form */}
      <div className="flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Link href="/" className="inline-block">
              <h1 className="text-3xl font-bold text-green-800">FoodTree</h1>
            </Link>
            <h2 className="mt-6 text-2xl font-bold text-gray-900">Create your account</h2>
            <p className="mt-2 text-sm text-gray-600">Start your free trial today. No credit card required.</p>
          </div>

          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <div className="relative">
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    placeholder="yourrestaurant"
                    className="w-full"
                  />
                  <p className="mt-1 text-xs text-gray-500">foodtree.com/yourrestaurant</p>
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  placeholder="••••••••"
                  className="w-full"
                />
                <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters</p>
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm password
                </label>
                <Input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  placeholder="••••••••"
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start">
                <Checkbox id="terms" className="mt-1" />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  I agree to the{" "}
                  <Link href="/terms" className="text-green-600 hover:text-green-500">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-green-600 hover:text-green-500">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <div className="flex items-start">
                <Checkbox id="marketing" className="mt-1" />
                <label htmlFor="marketing" className="ml-2 block text-sm text-gray-700">
                  Send me tips, trends, and updates about FoodTree
                </label>
              </div>
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-base">
              Create account
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or sign up with</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full py-6 text-base border-gray-300 hover:bg-gray-50"
            >
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
              </svg>
              Sign up with Google
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-green-600 hover:text-green-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Gradient */}
      <div className="hidden md:block bg-gradient-to-br from-green-800 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-lime-300"></div>
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-lime-300"></div>
        </div>
        <div className="relative h-full flex items-center justify-center p-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-lime-300">Join FoodTree Today</h2>
            <p className="text-white/90 text-xl max-w-md mx-auto">
              Create beautiful digital menus in minutes. Join thousands of restaurants already using FoodTree.
            </p>
            <div className="flex items-center justify-center gap-8 mt-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-lime-300">50K+</p>
                <p className="text-white/80 text-sm">Restaurants</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-lime-300">2M+</p>
                <p className="text-white/80 text-sm">Menu Views</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-lime-300">4.9★</p>
                <p className="text-white/80 text-sm">Rating</p>
              </div>
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

  "app/login/page.tsx": `import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function LoginPage() {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left Side - Form */}
      <div className="flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Link href="/" className="inline-block">
              <h1 className="text-3xl font-bold text-green-800">FoodTree</h1>
            </Link>
            <h2 className="mt-6 text-2xl font-bold text-gray-900">Welcome back</h2>
            <p className="mt-2 text-sm text-gray-600">Log in to your account to continue</p>
          </div>

          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="••••••••"
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="/forgot-password" className="font-medium text-green-600 hover:text-green-500">
                  Forgot password?
                </Link>
              </div>
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-base">
              Sign in
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full py-6 text-base border-gray-300 hover:bg-gray-50"
            >
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
              </svg>
              Sign in with Google
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="font-medium text-green-600 hover:text-green-500">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Gradient */}
      <div className="hidden md:block bg-gradient-to-br from-green-800 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-lime-300"></div>
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-lime-300"></div>
        </div>
        <div className="relative h-full flex items-center justify-center p-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-lime-300">Welcome to FoodTree</h2>
            <p className="text-white/90 text-xl max-w-md mx-auto">
              Manage your restaurant menu with ease. Update items, prices, and availability in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}`,

  "app/signup/page.tsx": `import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignupPage() {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left Side - Form */}
      <div className="flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Link href="/" className="inline-block">
              <h1 className="text-3xl font-bold text-green-800">FoodTree</h1>
            </Link>
            <h2 className="mt-6 text-2xl font-bold text-gray-900">Create your account</h2>
            <p className="mt-2 text-sm text-gray-600">Start your free trial today. No credit card required.</p>
          </div>

          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <div className="relative">
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    placeholder="yourrestaurant"
                    className="w-full"
                  />
                  <p className="mt-1 text-xs text-gray-500">foodtree.com/yourrestaurant</p>
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  placeholder="••••••••"
                  className="w-full"
                />
                <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters</p>
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm password
                </label>
                <Input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  placeholder="••••••••"
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start">
                <Checkbox id="terms" className="mt-1" />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  I agree to the{" "}
                  <Link href="/terms" className="text-green-600 hover:text-green-500">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-green-600 hover:text-green-500">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <div className="flex items-start">
                <Checkbox id="marketing" className="mt-1" />
                <label htmlFor="marketing" className="ml-2 block text-sm text-gray-700">
                  Send me tips, trends, and updates about FoodTree
                </label>
              </div>
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-base">
              Create account
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or sign up with</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full py-6 text-base border-gray-300 hover:bg-gray-50"
            >
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
              </svg>
              Sign up with Google
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-green-600 hover:text-green-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Gradient */}
      <div className="hidden md:block bg-gradient-to-br from-green-800 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-lime-300"></div>
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-lime-300"></div>
        </div>
        <div className="relative h-full flex items-center justify-center p-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-lime-300">Join FoodTree Today</h2>
            <p className="text-white/90 text-xl max-w-md mx-auto">
              Create beautiful digital menus in minutes. Join thousands of restaurants already using FoodTree.
            </p>
            <div className="flex items-center justify-center gap-8 mt-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-lime-300">50K+</p>
                <p className="text-white/80 text-sm">Restaurants</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-lime-300">2M+</p>
                <p className="text-white/80 text-sm">Menu Views</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-lime-300">4.9★</p>
                <p className="text-white/80 text-sm">Rating</p>
              </div>
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

  "app/marketplace/page.tsx": `import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Star, Download, TrendingUp, Zap, Palette, ShoppingCart, Users, BarChart } from 'lucide-react'

export default function MarketplacePage() {
  const plugins = [
    {
      id: 1,
      name: "Online Ordering Pro",
      description: "Complete online ordering system with payment integration",
      price: "$29/mo",
      rating: 4.9,
      downloads: "12.5K",
      category: "E-commerce",
      icon: ShoppingCart,
      featured: true,
    },
    {
      id: 2,
      name: "Analytics Dashboard",
      description: "Advanced analytics and insights for your menu performance",
      price: "$19/mo",
      rating: 4.8,
      downloads: "8.2K",
      category: "Analytics",
      icon: BarChart,
      featured: true,
    },
    {
      id: 3,
      name: "Customer Reviews",
      description: "Collect and display customer reviews on your menu",
      price: "$15/mo",
      rating: 4.7,
      downloads: "6.8K",
      category: "Engagement",
      icon: Users,
      featured: false,
    },
    {
      id: 4,
      name: "Premium Themes Pack",
      description: "10 exclusive premium themes for your restaurant",
      price: "$49 one-time",
      rating: 4.9,
      downloads: "15.3K",
      category: "Design",
      icon: Palette,
      featured: true,
    },
    {
      id: 5,
      name: "Speed Optimizer",
      description: "Make your menu load lightning fast",
      price: "$12/mo",
      rating: 4.6,
      downloads: "5.1K",
      category: "Performance",
      icon: Zap,
      featured: false,
    },
    {
      id: 6,
      name: "Social Media Auto-Post",
      description: "Automatically share menu updates to social media",
      price: "$25/mo",
      rating: 4.8,
      downloads: "9.4K",
      category: "Marketing",
      icon: TrendingUp,
      featured: false,
    },
  ]

  const categories = [
    { name: "All", count: 48 },
    { name: "E-commerce", count: 12 },
    { name: "Analytics", count: 8 },
    { name: "Design", count: 15 },
    { name: "Marketing", count: 7 },
    { name: "Engagement", count: 6 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-green-800 text-2xl font-bold">
              FoodTree
            </Link>
            <div className="hidden md:flex gap-6">
              <Link href="/templates" className="text-gray-600 hover:text-green-600 transition-colors">
                Templates
              </Link>
              <Link href="/marketplace" className="text-green-600 font-semibold">
                Marketplace
              </Link>
              <Link href="/learn" className="text-gray-600 hover:text-green-600 transition-colors">
                Learn
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-green-600 transition-colors">
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-green-600 hover:bg-green-700">Sign Up</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <Badge className="bg-lime-300 text-green-900 hover:bg-lime-400 px-4 py-1">
            50+ Premium Plugins & Themes
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Marketplace</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Extend your menu with powerful plugins and beautiful themes from our marketplace
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="search"
                placeholder="Search plugins and themes..."
                className="pl-12 py-6 text-base bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <aside className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-between"
                  >
                    <span className="text-sm font-medium text-gray-700">{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Filter by Price</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-gray-700">Free</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-gray-700">Under $20</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-gray-700">$20 - $50</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-gray-700">$50+</span>
                </label>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content - Plugins Grid */}
          <div className="md:col-span-3 space-y-8">
            {/* Featured Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Featured Plugins</h2>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {plugins
                  .filter((p) => p.featured)
                  .map((plugin) => {
                    const Icon = plugin.icon
                    return (
                      <Card key={plugin.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                <Icon className="h-6 w-6 text-green-600" />
                              </div>
                              <div>
                                <CardTitle className="text-lg">{plugin.name}</CardTitle>
                                <Badge variant="secondary" className="mt-1 text-xs">
                                  {plugin.category}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-sm">{plugin.description}</CardDescription>
                          <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-medium">{plugin.rating}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Download className="h-4 w-4" />
                              <span>{plugin.downloads}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex items-center justify-between">
                          <span className="text-lg font-bold text-green-600">{plugin.price}</span>
                          <Button className="bg-green-600 hover:bg-green-700">Install</Button>
                        </CardFooter>
                      </Card>
                    )
                  })}
              </div>
            </div>

            {/* All Plugins Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">All Plugins</h2>
                <select className="border rounded-lg px-3 py-2 text-sm">
                  <option>Most Popular</option>
                  <option>Highest Rated</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {plugins.map((plugin) => {
                  const Icon = plugin.icon
                  return (
                    <Card key={plugin.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                              <Icon className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{plugin.name}</CardTitle>
                              <Badge variant="secondary" className="mt-1 text-xs">
                                {plugin.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm">{plugin.description}</CardDescription>
                        <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{plugin.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Download className="h-4 w-4" />
                            <span>{plugin.downloads}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex items-center justify-between">
                        <span className="text-lg font-bold text-green-600">{plugin.price}</span>
                        <Button className="bg-green-600 hover:bg-green-700">Install</Button>
                      </CardFooter>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Want to create your own plugin?</h2>
          <p className="text-xl text-white/90">
            Join our developer community and start building plugins for FoodTree
          </p>
          <Button size="lg" className="bg-lime-300 text-green-900 hover:bg-lime-400">
            Developer Documentation
          </Button>
        </div>
      </section>
    </div>
  )
}`,

  "app/learn/page.tsx": `import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, Video, FileText, Headphones, Clock, TrendingUp } from 'lucide-react'

export default function LearnPage() {
  const courses = [
    {
      id: 1,
      title: "Getting Started with FoodTree",
      description: "Learn the basics of creating and managing your digital menu",
      duration: "45 min",
      lessons: 8,
      level: "Beginner",
      type: "video",
      popular: true,
    },
    {
      id: 2,
      title: "Advanced Menu Customization",
      description: "Master advanced features and customization options",
      duration: "1.5 hrs",
      lessons: 12,
      level: "Advanced",
      type: "video",
      popular: true,
    },
    {
      id: 3,
      title: "Marketing Your Restaurant",
      description: "Strategies to promote your menu and increase orders",
      duration: "1 hr",
      lessons: 10,
      level: "Intermediate",
      type: "article",
      popular: false,
    },
    {
      id: 4,
      title: "SEO for Restaurant Menus",
      description: "Optimize your menu for search engines",
      duration: "30 min",
      lessons: 6,
      level: "Intermediate",
      type: "article",
      popular: true,
    },
    {
      id: 5,
      title: "Photography Tips for Food",
      description: "Take stunning photos of your dishes",
      duration: "2 hrs",
      lessons: 15,
      level: "Beginner",
      type: "video",
      popular: false,
    },
    {
      id: 6,
      title: "Analytics & Insights",
      description: "Understand your menu performance with data",
      duration: "1 hr",
      lessons: 8,
      level: "Intermediate",
      type: "video",
      popular: false,
    },
  ]

  const guides = [
    {
      title: "How to Create Your First Menu",
      description: "Step-by-step guide to get started",
      readTime: "5 min read",
      icon: BookOpen,
    },
    {
      title: "Best Practices for Menu Design",
      description: "Design tips from industry experts",
      readTime: "8 min read",
      icon: FileText,
    },
    {
      title: "Integrating Online Ordering",
      description: "Set up online ordering in minutes",
      readTime: "10 min read",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-green-800 text-2xl font-bold">
              FoodTree
            </Link>
            <div className="hidden md:flex gap-6">
              <Link href="/templates" className="text-gray-600 hover:text-green-600 transition-colors">
                Templates
              </Link>
              <Link href="/marketplace" className="text-gray-600 hover:text-green-600 transition-colors">
                Marketplace
              </Link>
              <Link href="/learn" className="text-green-600 font-semibold">
                Learn
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-green-600 transition-colors">
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-green-600 hover:bg-green-700">Sign Up</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <Badge className="bg-lime-300 text-green-900 hover:bg-lime-400 px-4 py-1">
            Free Learning Resources
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Learn FoodTree</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Master your digital menu with our comprehensive courses, guides, and tutorials
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="search"
                placeholder="Search courses and guides..."
                className="pl-12 py-6 text-base bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guides */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Quick Start Guides</h2>
          <p className="text-gray-600">Get up and running in minutes</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((guide, index) => {
            const Icon = guide.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{guide.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Courses Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">All Courses</h2>
            <p className="text-gray-600">Comprehensive video courses and tutorials</p>
          </div>
          <div className="flex gap-3">
            <select className="border rounded-lg px-3 py-2 text-sm">
              <option>All Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
            <select className="border rounded-lg px-3 py-2 text-sm">
              <option>All Types</option>
              <option>Video</option>
              <option>Article</option>
              <option>Podcast</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    {course.type === "video" ? (
                      <Video className="h-6 w-6 text-green-600" />
                    ) : course.type === "article" ? (
                      <FileText className="h-6 w-6 text-green-600" />
                    ) : (
                      <Headphones className="h-6 w-6 text-green-600" />
                    )}
                  </div>
                  {course.popular && (
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Popular</Badge>
                  )}
                </div>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{course.lessons} lessons</span>
                    <span>{course.duration}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {course.level}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-gray-600 text-lg">Connect with other restaurant owners and learn together</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>
                </div>
                <CardTitle>Community Forum</CardTitle>
                <CardDescription>Ask questions and share tips with 50K+ members</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Join Forum
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-purple-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                    />
                  </svg>
                </div>
                <CardTitle>Live Chat Support</CardTitle>
                <CardDescription>Get instant help from our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                </div>
                <CardTitle>Webinars</CardTitle>
                <CardDescription>Join live training sessions with experts</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  View Schedule
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to get started?</h2>
          <p className="text-xl text-white/90">Create your free account and start learning today</p>
          <Button size="lg" className="bg-lime-300 text-green-900 hover:bg-lime-400">
            Sign Up Free
          </Button>
        </div>
      </section>
    </div>
  )
}`,

  "app/pricing/page.tsx": `import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        { name: "1 menu", included: true },
        { name: "Basic templates", included: true },
        { name: "Mobile responsive", included: true },
        { name: "QR code generation", included: true },
        { name: "Basic analytics", included: true },
        { name: "Custom domain", included: false },
        { name: "Online ordering", included: false },
        { name: "Priority support", included: false },
        { name: "Remove branding", included: false },
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "For growing restaurants",
      features: [
        { name: "Unlimited menus", included: true },
        { name: "All premium templates", included: true },
        { name: "Mobile responsive", included: true },
        { name: "QR code generation", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Custom domain", included: true },
        { name: "Online ordering", included: true },
        { name: "Priority support", included: true },
        { name: "Remove branding", included: true },
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For restaurant chains",
      features: [
        { name: "Everything in Pro", included: true },
        { name: "Multi-location support", included: true },
        { name: "White-label solution", included: true },
        { name: "API access", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "Custom integrations", included: true },
        { name: "SLA guarantee", included: true },
        { name: "Training & onboarding", included: true },
        { name: "24/7 phone support", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "Can I change plans later?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial for the Pro plan. No credit card required.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "You can cancel your subscription at any time with no cancellation fees.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.",
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees! You only pay the monthly or annual subscription price.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-green-800 text-2xl font-bold">
              FoodTree
            </Link>
            <div className="hidden md:flex gap-6">
              <Link href="/templates" className="text-gray-600 hover:text-green-600 transition-colors">
                Templates
              </Link>
              <Link href="/marketplace" className="text-gray-600 hover:text-green-600 transition-colors">
                Marketplace
              </Link>
              <Link href="/learn" className="text-gray-600 hover:text-green-600 transition-colors">
                Learn
              </Link>
              <Link href="/pricing" className="text-green-600 font-semibold">
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-green-600 hover:bg-green-700">Sign Up</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <Badge className="bg-lime-300 text-green-900 hover:bg-lime-400 px-4 py-1">
            14-Day Free Trial • No Credit Card Required
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Simple, Transparent Pricing</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Choose the perfect plan for your restaurant. Upgrade or downgrade anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.popular ? "border-2 border-green-600 shadow-xl relative" : "shadow-lg"}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-600 text-white px-4 py-1">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="mb-4">{plan.description}</CardDescription>
                <div className="space-y-1">
                  <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                  <div className="text-sm text-gray-600">{plan.period}</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-gray-300 flex-shrink-0" />
                    )}
                    <span className={feature.included ? "text-gray-700" : "text-gray-400"}>{feature.name}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button
                  className={
                    plan.popular
                      ? "w-full bg-green-600 hover:bg-green-700 text-white py-6"
                      : "w-full border-2 border-green-600 text-green-600 hover:bg-green-50 py-6"
                  }
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Comparison */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare All Features</h2>
            <p className="text-gray-600 text-lg">See what's included in each plan</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Free</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Pro</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-4 text-gray-700">Number of menus</td>
                  <td className="text-center py-4 px-4 text-gray-600">1</td>
                  <td className="text-center py-4 px-4 text-gray-600">Unlimited</td>
                  <td className="text-center py-4 px-4 text-gray-600">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 text-gray-700">Templates</td>
                  <td className="text-center py-4 px-4 text-gray-600">Basic</td>
                  <td className="text-center py-4 px-4 text-gray-600">All Premium</td>
                  <td className="text-center py-4 px-4 text-gray-600">All + Custom</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 text-gray-700">Custom domain</td>
                  <td className="text-center py-4 px-4">
                    <X className="h-5 w-5 text-gray-300 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 text-gray-700">Online ordering</td>
                  <td className="text-center py-4 px-4">
                    <X className="h-5 w-5 text-gray-300 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 text-gray-700">Analytics</td>
                  <td className="text-center py-4 px-4 text-gray-600">Basic</td>
                  <td className="text-center py-4 px-4 text-gray-600">Advanced</td>
                  <td className="text-center py-4 px-4 text-gray-600">Advanced + API</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 text-gray-700">Support</td>
                  <td className="text-center py-4 px-4 text-gray-600">Email</td>
                  <td className="text-center py-4 px-4 text-gray-600">Priority</td>
                  <td className="text-center py-4 px-4 text-gray-600">24/7 Phone</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg">Everything you need to know about our pricing</p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to get started?</h2>
          <p className="text-xl text-white/90">Join thousands of restaurants using FoodTree</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-lime-300 text-green-900 hover:bg-lime-400">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
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
import { BarChart3, Calendar, CreditCard, DollarSign, FileText, Grid, LayoutDashboard, List, MessageSquare, QrCode, Settings, ShoppingBag, Users, Eye, Trash2, Download, Star, Check } from 'lucide-react'
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

"use client"

import Image from "next/image"
import Link from "next/link"
import { Check, Smartphone, BarChart3, Globe, Zap, Shield, MousePointer2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SharedLayout from "@/components/shared-layout"

export default function Products() {
  return (
    <SharedLayout>
      {/* Advanced Hero Section */}
      <div className="relative bg-gray-950 text-white overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-8 backdrop-blur-sm">
                <Zap className="w-4 h-4" />
                <span>New: AI Menu Optimization</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                The complete OS for <br />
                <span className="text-green-500">modern restaurants</span>
              </h1>

              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Everything you need to digitize your menu, streamline operations, and grow your revenue—all in one
                powerful platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="h-14 px-8 rounded-full bg-green-500 hover:bg-green-400 text-black font-semibold text-lg shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all duration-300">
                  Start Free Trial
                </Button>
                <Link href="/products/menu-demo">
                  <Button
                    variant="outline"
                    className="h-14 px-8 rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm text-lg"
                  >
                    View Interactive Demo
                  </Button>
                </Link>
              </div>
            </div>

            {/* 3D Floating Elements */}
            <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
              <div className="relative z-10 bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700 ease-out">
                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs text-gray-500 font-mono">dashboard.foodtree.com</div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-1/3 h-32 bg-white/5 rounded-xl animate-pulse" />
                    <div className="w-1/3 h-32 bg-white/5 rounded-xl animate-pulse delay-100" />
                    <div className="w-1/3 h-32 bg-white/5 rounded-xl animate-pulse delay-200" />
                  </div>
                  <div className="h-48 bg-white/5 rounded-xl border border-white/5 p-4">
                    <div className="flex items-end justify-between h-full gap-2">
                      {[40, 70, 45, 90, 65, 85, 55].map((h, i) => (
                        <div key={i} className="w-full bg-green-500/20 rounded-t-sm relative group">
                          <div
                            className="absolute bottom-0 left-0 right-0 bg-green-500 rounded-t-sm transition-all duration-1000"
                            style={{ height: `${h}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-12 -right-12 bg-gray-800/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">New Order</div>
                    <div className="text-xs text-gray-400">Table 12 • $45.00</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-gray-800/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl animate-bounce duration-[4000ms]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Online Visitor</div>
                    <div className="text-xs text-gray-400">Viewing Menu...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Grid Features */}
      <div className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Everything you need in one place
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Replace your fragmented tech stack with one cohesive operating system designed for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
            {/* Large Card */}
            <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Digital Menu & Ordering</h3>
                <p className="text-gray-600 max-w-md">
                  Create a stunning, mobile-first menu that lets customers order and pay directly from their phones. No
                  app download required.
                </p>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Menu Preview"
                width={400}
                height={400}
                className="absolute -right-10 -bottom-10 w-64 h-64 object-contain transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Tall Card */}
            <div className="md:row-span-2 bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden text-white">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Real-time Analytics</h3>
                <p className="text-gray-400 mb-8">
                  Track sales, popular items, and customer behavior as it happens. Make data-driven decisions to
                  optimize your menu.
                </p>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Revenue</span>
                        <span className="text-green-400">+12%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-3/4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Medium Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Online Presence</h3>
              <p className="text-gray-600">Automatically generated SEO-optimized website for your restaurant.</p>
            </div>

            {/* Medium Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Payments</h3>
              <p className="text-gray-600">Integrated payment processing with fraud protection and instant payouts.</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Feature Section */}
      <div className="bg-white py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[100px] -mr-32 -mt-32" />

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <Badge className="bg-green-500/20 text-green-300 border-none mb-6 px-4 py-2">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI-POWERED
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Your menu, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                    optimized by intelligence
                  </span>
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Our AI analyzes thousands of data points to suggest the perfect pricing, item placement, and
                  descriptions to maximize your revenue.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Smart pricing recommendations",
                    "Automated menu engineering",
                    "Seasonal item suggestions",
                    "Conversion rate optimization",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold">
                  Try AI Optimization
                </Button>
              </div>

              <div className="relative">
                <div className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm font-medium text-gray-400">Optimization Score</div>
                    <div className="text-2xl font-bold text-green-400">94/100</div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                        <MousePointer2 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">Move "Truffle Fries" to top</div>
                        <div className="text-xs text-green-400">+15% projected sales</div>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">Update "Burger" description</div>
                        <div className="text-xs text-blue-400">Improve conversion</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to transform your restaurant?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of forward-thinking restaurant owners who are growing their business with FoodTree.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="h-14 px-8 rounded-full bg-gray-900 hover:bg-gray-800 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
              Get Started for Free
            </Button>
            <Button
              variant="outline"
              className="h-14 px-8 rounded-full border-gray-200 hover:bg-gray-50 text-gray-900 text-lg bg-transparent"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </SharedLayout>
  )
}

import { Sparkles } from "lucide-react"

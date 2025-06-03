import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SharedLayout from "@/components/shared-layout"

export default function Products() {
  return (
    <SharedLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-800 to-green-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Powerful tools for restaurant owners
          </h1>
          <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
            Everything you need to create, manage, and grow your restaurant's digital presence
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-900 hover:bg-gray-100 text-lg px-8 py-3 rounded-full">
              Get Started for Free
            </Button>
            <Link href="/products/menu-demo">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-3 rounded-full"
              >
                View Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Core Products */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4">CORE PRODUCTS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need in one place</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our suite of tools helps you create a beautiful digital menu, manage orders, and connect with customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Menu */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                <Image src="/placeholder.svg?height=120&width=120" alt="Digital Menu" width={120} height={120} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Digital Menu</h3>
                <p className="text-gray-600 mb-4">
                  Create a beautiful, mobile-friendly digital menu that's easy to update and share
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Unlimited menu items</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Custom categories</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>QR code generation</span>
                  </li>
                </ul>
                <Link href="/products/menu-demo">
                  <Button variant="outline" className="w-full rounded-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Online Ordering */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <Image src="/placeholder.svg?height=120&width=120" alt="Online Ordering" width={120} height={120} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Online Ordering</h3>
                <p className="text-gray-600 mb-4">
                  Accept orders directly through your menu with our integrated ordering system
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Commission-free orders</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Customizable checkout</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Order notifications</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full rounded-full">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Analytics Dashboard */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
                <Image src="/placeholder.svg?height=120&width=120" alt="Analytics Dashboard" width={120} height={120} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600 mb-4">
                  Track performance and gain insights to optimize your menu and business
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Menu performance metrics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Customer behavior insights</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Sales reports</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full rounded-full">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Product */}
        <section className="mb-24">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-8 md:p-12">
                <Badge className="bg-green-100 text-green-800 mb-4">NEW</Badge>
                <h2 className="text-3xl font-bold mb-4">AI Menu Optimization</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our AI-powered tool analyzes your menu performance and customer preferences to suggest optimizations
                  that can increase your revenue.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Smart item placement recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Pricing optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Seasonal menu suggestions</span>
                  </li>
                </ul>
                <Button className="bg-green-800 hover:bg-green-900 text-white rounded-full px-8 py-3">
                  Try It Now
                </Button>
              </div>
              <div className="md:h-full flex items-center justify-center p-8">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="AI Menu Optimization"
                    width={300}
                    height={400}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Trusted by restaurant owners worldwide</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our products have helped restaurants increase their revenue and streamline operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "The digital menu and online ordering system have transformed our business. We've seen a 40% increase in
                takeout orders since implementing FoodTree."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                  <Image src="/placeholder.svg?height=48&width=48" alt="Customer" width={48} height={48} />
                </div>
                <div>
                  <h4 className="font-bold">Carlos Mendez</h4>
                  <p className="text-gray-600 text-sm">Taqueria El Sol</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "The analytics dashboard gives us incredible insights into what menu items are performing well. We've
                optimized our menu and increased our average order value by 15%."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                  <Image src="/placeholder.svg?height=48&width=48" alt="Customer" width={48} height={48} />
                </div>
                <div>
                  <h4 className="font-bold">Emma Chen</h4>
                  <p className="text-gray-600 text-sm">Lotus Garden</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "Setting up our digital menu was incredibly easy. The templates are beautiful and our customers love
                being able to scan the QR code to view our menu directly on their phones. It's saved us time and money
                on printing costs."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                  <Image src="/placeholder.svg?height=48&width=48" alt="Customer" width={48} height={48} />
                </div>
                <div>
                  <h4 className="font-bold">Michael Johnson</h4>
                  <p className="text-gray-600 text-sm">Bistro 42</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-800 to-green-900 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your restaurant's digital presence?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join thousands of restaurants already using FoodTree to grow their business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-900 hover:bg-gray-100 text-lg px-8 py-3 rounded-full">
              Get Started for Free
            </Button>
            <Link href="/products/menu-demo">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-3 rounded-full"
              >
                View Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SharedLayout>
  )
}

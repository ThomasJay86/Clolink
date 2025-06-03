"use client"

import Image from "next/image"
import { Star, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SharedLayout from "@/components/shared-layout"
import { useState } from "react"

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly")

  // Pricing data
  const prices = {
    starter: {
      monthly: 5,
      annually: 4,
    },
    pro: {
      monthly: 9,
      annually: 7.5,
    },
    premium: {
      monthly: 24,
      annually: 19.5,
    },
  }

  return (
    <SharedLayout>
      {/* Main Content */}
      <main className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Pick your plan. Make it yours.</h1>
            <p className="text-gray-600">Simple pricing with powerful features, cancel anytime.</p>
          </div>

          {/* Pricing Toggle */}
          <div className="flex justify-center mb-16">
            <div className="bg-gray-100 rounded-full p-1 inline-flex shadow-sm">
              <Tabs
                defaultValue="monthly"
                className="w-full"
                onValueChange={(value) => setBillingPeriod(value as "monthly" | "annually")}
              >
                <TabsList className="grid grid-cols-2 w-80 bg-transparent">
                  <TabsTrigger
                    value="monthly"
                    className="data-[state=active]:bg-white data-[state=inactive]:bg-transparent data-[state=active]:text-gray-900 data-[state=inactive]:text-gray-500 rounded-full px-8 py-2.5 font-medium transition-all"
                  >
                    Monthly
                  </TabsTrigger>
                  <TabsTrigger
                    value="annually"
                    className="data-[state=active]:bg-gray-900 data-[state=inactive]:bg-transparent data-[state=active]:text-white data-[state=inactive]:text-gray-500 rounded-full px-8 py-2.5 font-medium transition-all"
                  >
                    Annually (save up to 17%)
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Free Plan */}
            <div className="rounded-xl overflow-hidden shadow-sm flex flex-col h-full">
              <div className="bg-gray-200 p-6">
                <h3 className="text-xl font-bold">Free</h3>
                <p className="text-sm text-gray-700 mt-1">Get started with your own personal FoodTree</p>
              </div>
              <div className="bg-white p-6 flex-1 flex flex-col">
                <div className="mb-6">
                  <div className="text-3xl font-bold">$0</div>
                  <div className="text-gray-600 text-sm">Free, forever</div>
                </div>
                <Button variant="outline" className="w-full rounded-full mb-6">
                  Get started
                </Button>
                <div className="flex-1">
                  <h4 className="font-medium mb-4">Key features:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">🔗</span>
                      <div>
                        <span>Unlimited menu items</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">📱</span>
                      <div>
                        <span>Social icons & embeds</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">📊</span>
                      <div>
                        <span>Basic menu analytics</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">🔍</span>
                      <div>
                        <span>SEO optimized menu design</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">📱</span>
                      <div>
                        <span>Mobile-friendly menu</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">🔍</span>
                      <div>
                        <span>Basic QR code for your menu</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">💰</span>
                      <div>
                        <span className="flex items-center">
                          Basic monetization
                          <span className="ml-1 text-xs bg-gray-100 text-gray-800 px-1 py-0.5 rounded">NEW</span>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Starter Plan */}
            <div className="rounded-xl overflow-hidden shadow-sm flex flex-col h-full">
              <div className="bg-gray-200 p-6">
                <h3 className="text-xl font-bold">Starter</h3>
                <p className="text-sm text-gray-700 mt-1">For restaurants just getting started</p>
              </div>
              <div className="bg-white p-6 flex-1 flex flex-col">
                <div className="mb-6">
                  <div className="text-3xl font-bold">
                    ${billingPeriod === "monthly" ? prices.starter.monthly : prices.starter.annually}{" "}
                    <span className="text-sm font-normal">USD/mo</span>
                  </div>
                  <div className="text-gray-600 text-sm">
                    {billingPeriod === "annually" ? "Billed annually, or $5 monthly" : "Billed monthly"}
                  </div>
                </div>
                <Button variant="outline" className="w-full rounded-full mb-6">
                  Get started
                </Button>
                <div className="flex-1">
                  <h4 className="font-medium mb-4">Everything in Free, plus:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">🔗</span>
                      <span>Custom menu link</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">🎨</span>
                      <div>
                        <div>Custom menu themes</div>
                        <div className="text-xs text-gray-500">
                          Custom color palettes and fresh themes to match your restaurant style
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">👥</span>
                      <div>
                        <div>Customer database</div>
                        <div className="text-xs text-gray-500">Collect and manage your customer information</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">🔄</span>
                      <div>
                        <div>Special menu redirects</div>
                        <div className="text-xs text-gray-500">
                          Temporarily highlight specials or promotions on your menu
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start mt-6">
                      <span className="font-medium">Growth tools</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">📅</span>
                      <span>Social media menu sharing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="rounded-xl overflow-hidden relative shadow-sm flex flex-col h-full">
              <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-medium px-2 py-1 rounded-bl-lg">
                Recommended
              </div>
              <div className="bg-green-800 p-6 text-white">
                <h3 className="text-xl font-bold">Pro</h3>
                <p className="text-sm text-green-100 mt-1">
                  For restaurants looking to grow their online presence and orders
                </p>
              </div>
              <div className="bg-white p-6 flex-1 flex flex-col">
                <div className="mb-6">
                  <div className="text-3xl font-bold">
                    ${billingPeriod === "monthly" ? prices.pro.monthly : prices.pro.annually}{" "}
                    <span className="text-sm font-normal">USD/mo</span>
                  </div>
                  <div className="text-gray-600 text-sm">
                    {billingPeriod === "annually" ? "Billed annually, or $9 monthly" : "Billed monthly"}
                  </div>
                </div>
                <Button className="w-full rounded-full mb-6 bg-green-100 text-green-800 hover:bg-green-200">
                  Try free for 7 days
                </Button>
                <div className="flex-1">
                  <h4 className="font-medium mb-4">Everything in Starter, plus:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">🔗</span>
                      <span>Premium menu link</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">🎨</span>
                      <div>
                        <div>Personalized FoodTree</div>
                        <div className="text-xs text-gray-500">
                          Add your restaurant logo, full-screen food images and personalized design styles
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">⭐</span>
                      <div>
                        <div>Highlight featured dishes</div>
                        <div className="text-xs text-gray-500">
                          Showcase your signature dishes with eye-catching animations and features
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">📊</span>
                      <div>
                        <div>Advanced menu analytics</div>
                        <div className="text-xs text-gray-500">Track which dishes get the most views and clicks</div>
                      </div>
                    </li>
                    <li className="flex items-start mt-6">
                      <span className="font-medium">Growth tools</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">✨</span>
                      <span>AI-powered menu optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">🛒</span>
                      <span>Basic online ordering system</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="rounded-xl overflow-hidden shadow-sm flex flex-col h-full">
              <div className="bg-gray-200 p-6">
                <h3 className="text-xl font-bold">Premium</h3>
                <p className="text-sm text-gray-700 mt-1">For established restaurants and chains wanting zero limits</p>
              </div>
              <div className="bg-white p-6 flex-1 flex flex-col">
                <div className="mb-6">
                  <div className="text-3xl font-bold">
                    ${billingPeriod === "monthly" ? prices.premium.monthly : prices.premium.annually}{" "}
                    <span className="text-sm font-normal">USD/mo</span>
                  </div>
                  <div className="text-gray-600 text-sm">
                    {billingPeriod === "annually" ? "Billed annually, or $24 monthly" : "Billed monthly"}
                  </div>
                </div>
                <Button variant="outline" className="w-full rounded-full mb-6">
                  Get started
                </Button>
                <div className="flex-1">
                  <h4 className="font-medium mb-4">Everything in Pro, plus:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">🔗</span>
                      <span>Custom domain for your menu</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">👋</span>
                      <div>
                        <div>Concierge onboarding</div>
                        <div className="text-xs text-gray-500">Personalized menu setup with dedicated support</div>
                      </div>
                    </li>
                    <li className="flex items-start mt-6">
                      <span className="font-medium">Growth tools</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">🚀</span>
                      <div>
                        <div>Multiple restaurant locations</div>
                        <div className="text-xs text-gray-500">
                          Manage up to 5 different restaurant locations or concepts
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">🔧</span>
                      <div>
                        <div>Team management tools</div>
                        <div className="text-xs text-gray-500">
                          Multi-user access with roles and permissions for your staff
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">💬</span>
                      <div>
                        <div>Advanced reservation system</div>
                        <div className="text-xs text-gray-500">Integrated table booking with customer management</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">🛒</span>
                      <div>
                        <div>Complete ordering system</div>
                        <div className="text-xs text-gray-500">
                          Full-featured online ordering with payment processing
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise */}
          <div className="mt-16 flex flex-col md:flex-row justify-between items-center bg-white rounded-xl p-8 shadow-sm">
            <div>
              <h3 className="text-xl font-bold mb-1">Restaurant Groups & Franchises</h3>
              <p className="text-gray-600">Multiple locations? Large chains? Let's create a custom plan for you.</p>
            </div>
            <Button className="mt-4 md:mt-0 bg-green-100 text-green-800 hover:bg-green-200 rounded-full px-8">
              Talk to us
            </Button>
          </div>

          {/* Compare Features */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-12">Compare all features</h2>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-4 px-6 text-left font-medium text-gray-500 border-b">Features</th>
                      <th className="py-4 px-6 text-center font-medium text-gray-500 border-b">Free</th>
                      <th className="py-4 px-6 text-center font-medium text-gray-500 border-b">Starter</th>
                      <th className="py-4 px-6 text-center font-medium text-green-700 border-b">Pro</th>
                      <th className="py-4 px-6 text-center font-medium text-gray-500 border-b">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={5} className="py-4 px-6 font-medium bg-gray-50">
                        Menu Features
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-6 font-medium">Menu items</td>
                      <td className="py-3 px-6 text-center">Up to 10</td>
                      <td className="py-3 px-6 text-center">Unlimited</td>
                      <td className="py-3 px-6 text-center">Unlimited</td>
                      <td className="py-3 px-6 text-center">Unlimited</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-6 font-medium">Menu categories</td>
                      <td className="py-3 px-6 text-center">Up to 3</td>
                      <td className="py-3 px-6 text-center">Unlimited</td>
                      <td className="py-3 px-6 text-center">Unlimited</td>
                      <td className="py-3 px-6 text-center">Unlimited</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-6 font-medium">Custom domain</td>
                      <td className="py-3 px-6 text-center">—</td>
                      <td className="py-3 px-6 text-center">—</td>
                      <td className="py-3 px-6 text-center">—</td>
                      <td className="py-3 px-6 text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-6 font-medium">Remove FoodTree branding</td>
                      <td className="py-3 px-6 text-center">—</td>
                      <td className="py-3 px-6 text-center">—</td>
                      <td className="py-3 px-6 text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-3 px-6 text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                    </tr>

                    <tr>
                      <td colSpan={5} className="py-4 px-6 font-medium bg-gray-50">
                        Growth & Analytics
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-6 font-medium">Analytics</td>
                      <td className="py-3 px-6 text-center">Basic</td>
                      <td className="py-3 px-6 text-center">Standard</td>
                      <td className="py-3 px-6 text-center">Advanced</td>
                      <td className="py-3 px-6 text-center">Enterprise</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-6 font-medium">QR code generator</td>
                      <td className="py-3 px-6 text-center">Basic</td>
                      <td className="py-3 px-6 text-center">Custom</td>
                      <td className="py-3 px-6 text-center">Advanced</td>
                      <td className="py-3 px-6 text-center">Premium</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-6 font-medium">Online ordering</td>
                      <td className="py-3 px-6 text-center">—</td>
                      <td className="py-3 px-6 text-center">—</td>
                      <td className="py-3 px-6 text-center">Basic</td>
                      <td className="py-3 px-6 text-center">Advanced</td>
                    </tr>

                    <tr>
                      <td colSpan={5} className="py-4 px-6 font-medium bg-gray-50">
                        Team & Support
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-6 font-medium">Team members</td>
                      <td className="py-3 px-6 text-center">1</td>
                      <td className="py-3 px-6 text-center">2</td>
                      <td className="py-3 px-6 text-center">5</td>
                      <td className="py-3 px-6 text-center">Unlimited</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-6 font-medium">Restaurant locations</td>
                      <td className="py-3 px-6 text-center">1</td>
                      <td className="py-3 px-6 text-center">1</td>
                      <td className="py-3 px-6 text-center">2</td>
                      <td className="py-3 px-6 text-center">5+</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-6 font-medium">Support</td>
                      <td className="py-3 px-6 text-center">Email</td>
                      <td className="py-3 px-6 text-center">Priority Email</td>
                      <td className="py-3 px-6 text-center">Priority Support</td>
                      <td className="py-3 px-6 text-center">Dedicated Manager</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <section className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-12">Loved by restaurants worldwide</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
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
                  "FoodTree transformed how we present our menu. Our customers love the clean design and easy
                  navigation. We've seen a 30% increase in online orders since switching!"
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

              <div className="bg-white p-8 rounded-xl shadow-sm">
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

              <div className="bg-white p-8 rounded-xl shadow-sm">
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
                  "The Premium plan has been worth every penny. The online ordering system integrated perfectly with our
                  existing workflow and our customers love the convenience."
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
          </section>

          {/* Trusted By Section */}
          <section className="mt-24">
            <h2 className="text-4xl font-bold text-center mb-2">Trusted by 50,000+</h2>
            <p className="text-3xl font-bold text-center text-green-600 mb-8">restaurants</p>
            <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700">
              Never update your menu link in bio again. Use one link to share everything you create, curate and sell
              from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white rounded-2xl overflow-hidden w-40 h-40 flex items-center justify-center shadow-sm">
                <Image src="/placeholder.svg?height=80&width=80" alt="Restaurant logo" width={80} height={80} />
              </div>
              <div className="bg-white rounded-2xl overflow-hidden w-40 h-40 flex items-center justify-center shadow-sm">
                <Image src="/placeholder.svg?height=80&width=80" alt="Restaurant logo" width={80} height={80} />
              </div>
              <div className="bg-white rounded-2xl overflow-hidden w-40 h-40 flex items-center justify-center shadow-sm">
                <Image src="/placeholder.svg?height=80&width=80" alt="Restaurant logo" width={80} height={80} />
              </div>
              <div className="bg-white rounded-2xl overflow-hidden w-40 h-40 flex items-center justify-center shadow-sm">
                <Image src="/placeholder.svg?height=80&width=80" alt="Restaurant logo" width={80} height={80} />
              </div>
              <div className="bg-white rounded-2xl overflow-hidden w-40 h-40 flex items-center justify-center shadow-sm">
                <Image src="/placeholder.svg?height=80&width=80" alt="Restaurant logo" width={80} height={80} />
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-medium mb-3">Can I change my plan later?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next
                  billing cycle.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-medium mb-3">How does the free trial work?</h3>
                <p className="text-gray-600">
                  You can try the Pro plan for 7 days without providing a credit card. After the trial period, you can
                  choose to subscribe or downgrade to the Free plan.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-medium mb-3">Do you offer discounts for annual billing?</h3>
                <p className="text-gray-600">
                  Yes, you can save up to 17% by choosing annual billing on any paid plan.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-medium mb-3">Can I use my own domain name?</h3>
                <p className="text-gray-600">
                  Custom domains are available on the Premium plan. You can connect your existing domain or purchase a
                  new one through our platform.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-medium mb-3">Is there a limit to how many menu items I can add?</h3>
                <p className="text-gray-600">
                  Free plans can add up to 10 menu items. All paid plans (Starter, Pro, and Premium) include unlimited
                  menu items.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-medium mb-3">How does the online ordering system work?</h3>
                <p className="text-gray-600">
                  The online ordering system is available on Pro and Premium plans. It allows your customers to place
                  orders directly through your menu, which you can receive via email, SMS, or integrate with your
                  existing POS system.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="mt-24 py-16 px-8 bg-gradient-to-r from-green-800 to-green-900 text-white rounded-2xl shadow-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to showcase your menu?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join thousands of restaurants already using FoodTree to share their menus and grow their business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-green-900 hover:bg-gray-100 text-lg px-8 py-3 rounded-full">
                  Get Started for Free
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg px-8 py-3 rounded-full"
                >
                  See Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </SharedLayout>
  )
}

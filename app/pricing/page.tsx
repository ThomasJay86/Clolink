"use client"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import SharedLayout from "@/components/shared-layout"
import { useState } from "react"

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly")

  // Pricing data
  const prices = {
    starter: { monthly: 5, annually: 4 },
    pro: { monthly: 12, annually: 9 },
    premium: { monthly: 29, annually: 24 },
  }

  return (
    <SharedLayout>
      <main className="bg-white pb-24">
        {/* Header */}
        <div className="bg-gray-50 pt-24 pb-32 px-6 text-center border-b border-gray-200">
          <div className="max-w-3xl mx-auto">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-none mb-6 px-4 py-1.5 text-sm">
              Simple Pricing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Plans for every stage of growth
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Start for free, upgrade as you grow. No hidden fees, cancel anytime.
            </p>

            {/* Pricing Toggle */}
            <div className="inline-flex bg-white p-1.5 rounded-full border border-gray-200 shadow-sm">
              <Tabs defaultValue="monthly" onValueChange={(value) => setBillingPeriod(value as "monthly" | "annually")}>
                <TabsList className="bg-transparent p-0 h-auto">
                  <TabsTrigger
                    value="monthly"
                    className="rounded-full px-6 py-2.5 text-sm font-medium data-[state=active]:bg-gray-900 data-[state=active]:text-white transition-all"
                  >
                    Monthly
                  </TabsTrigger>
                  <TabsTrigger
                    value="annually"
                    className="rounded-full px-6 py-2.5 text-sm font-medium data-[state=active]:bg-gray-900 data-[state=active]:text-white transition-all"
                  >
                    Yearly{" "}
                    <span className="ml-1.5 text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded font-bold">
                      -20%
                    </span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Pricing Cards - Overlapping Header */}
        <div className="max-w-7xl mx-auto px-6 -mt-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900">Free</h3>
                <p className="text-sm text-gray-500">For personal projects</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <Button
                variant="outline"
                className="w-full rounded-xl mb-8 border-gray-200 hover:bg-gray-50 hover:text-gray-900 bg-transparent"
              >
                Get Started
              </Button>
              <div className="space-y-4 flex-grow">
                <p className="text-sm font-medium text-gray-900">Includes:</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Unlimited menu items</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Basic QR code</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Mobile-friendly menu</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Social media links</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Starter Plan */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900">Starter</h3>
                <p className="text-sm text-gray-500">For new restaurants</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  ${billingPeriod === "monthly" ? prices.starter.monthly : prices.starter.annually}
                </span>
                <span className="text-gray-500">/mo</span>
              </div>
              <Button className="w-full rounded-xl mb-8 bg-gray-900 hover:bg-gray-800 text-white">
                Start Free Trial
              </Button>
              <div className="space-y-4 flex-grow">
                <p className="text-sm font-medium text-gray-900">Everything in Free, plus:</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Custom menu themes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Remove branding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Customer database</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pro Plan - Highlighted */}
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-xl relative flex flex-col transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-lime-400 to-green-400 text-green-900 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                MOST POPULAR
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white">Pro</h3>
                <p className="text-sm text-gray-400">For growing businesses</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  ${billingPeriod === "monthly" ? prices.pro.monthly : prices.pro.annually}
                </span>
                <span className="text-gray-400">/mo</span>
              </div>
              <Button className="w-full rounded-xl mb-8 bg-lime-400 hover:bg-lime-500 text-green-900 font-bold">
                Start Free Trial
              </Button>
              <div className="space-y-4 flex-grow">
                <p className="text-sm font-medium text-white">Everything in Starter, plus:</p>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-lime-400 flex-shrink-0" />
                    <span>Online ordering system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-lime-400 flex-shrink-0" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-lime-400 flex-shrink-0" />
                    <span>Custom domain</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-lime-400 flex-shrink-0" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-lime-400 flex-shrink-0" />
                    <span>AI menu optimization</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900">Premium</h3>
                <p className="text-sm text-gray-500">For chains & franchises</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  ${billingPeriod === "monthly" ? prices.premium.monthly : prices.premium.annually}
                </span>
                <span className="text-gray-500">/mo</span>
              </div>
              <Button
                variant="outline"
                className="w-full rounded-xl mb-8 border-gray-200 hover:bg-gray-50 hover:text-gray-900 bg-transparent"
              >
                Contact Sales
              </Button>
              <div className="space-y-4 flex-grow">
                <p className="text-sm font-medium text-gray-900">Everything in Pro, plus:</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Multiple locations (5+)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Team management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>API access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mt-24 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">Detailed Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-4 font-medium text-gray-500 w-1/3">Features</th>
                    <th className="py-4 px-4 font-medium text-gray-900 text-center">Free</th>
                    <th className="py-4 px-4 font-medium text-gray-900 text-center">Starter</th>
                    <th className="py-4 px-4 font-medium text-green-600 text-center">Pro</th>
                    <th className="py-4 px-4 font-medium text-gray-900 text-center">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { name: "Menu Items", free: "10", starter: "Unlimited", pro: "Unlimited", premium: "Unlimited" },
                    { name: "Online Ordering", free: false, starter: false, pro: true, premium: true },
                    { name: "Custom Domain", free: false, starter: false, pro: true, premium: true },
                    { name: "Remove Branding", free: false, starter: true, pro: true, premium: true },
                    { name: "Analytics", free: "Basic", starter: "Standard", pro: "Advanced", premium: "Enterprise" },
                    { name: "Team Members", free: "1", starter: "2", pro: "5", premium: "Unlimited" },
                    { name: "Support", free: "Community", starter: "Email", pro: "Priority", premium: "Dedicated" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-medium text-gray-700">{row.name}</td>
                      <td className="py-4 px-4 text-center text-gray-600">
                        {typeof row.free === "boolean" ? (
                          row.free ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          row.free
                        )}
                      </td>
                      <td className="py-4 px-4 text-center text-gray-600">
                        {typeof row.starter === "boolean" ? (
                          row.starter ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          row.starter
                        )}
                      </td>
                      <td className="py-4 px-4 text-center font-medium text-green-700 bg-green-50/30">
                        {typeof row.pro === "boolean" ? (
                          row.pro ? (
                            <Check className="w-5 h-5 text-green-600 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          row.pro
                        )}
                      </td>
                      <td className="py-4 px-4 text-center text-gray-600">
                        {typeof row.premium === "boolean" ? (
                          row.premium ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          row.premium
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </SharedLayout>
  )
}

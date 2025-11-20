import Image from "next/image"
import { ArrowRight, CheckCircle2, Star, Zap, Shield, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SharedLayout from "@/components/shared-layout"

export default function Home() {
  return (
    <SharedLayout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-green-900">
        {/* Abstract Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-green-400/20 to-lime-300/20 blur-[120px]" />
          <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-bl from-emerald-500/20 to-teal-400/20 blur-[100px]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-900 to-transparent z-10" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm text-lime-300 text-sm font-medium animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
                </span>
                Trusted by 50,000+ restaurants worldwide
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Everything you serve. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-emerald-400">
                  In one simple link.
                </span>
              </h1>

              <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                The all-in-one platform to showcase your menu, accept orders, and grow your restaurant brand across
                every social channel.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <div className="relative flex-grow max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-gray-400 font-medium">foodtree.com/</span>
                  </div>
                  <input
                    type="text"
                    className="w-full pl-32 pr-4 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400/50 focus:bg-white/20 transition-all backdrop-blur-sm"
                    placeholder="your-restaurant"
                  />
                </div>
                <Button className="h-auto py-4 px-8 rounded-full bg-lime-400 hover:bg-lime-500 text-green-950 font-bold text-lg shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_30px_rgba(163,230,53,0.5)] transition-all duration-300">
                  Claim your link
                </Button>
              </div>

              <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-lime-400" />
                  <span>Free forever</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-lime-400" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative lg:h-[700px] flex items-center justify-center perspective-1000">
              <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl transform rotate-[-6deg] hover:rotate-0 transition-all duration-700 ease-out z-20 overflow-hidden">
                {/* Phone Screen Content */}
                <div className="absolute inset-0 bg-white overflow-hidden">
                  <div className="h-40 bg-gradient-to-br from-green-600 to-emerald-800 relative">
                    <div className="absolute -bottom-10 left-0 right-0 flex justify-center">
                      <div className="w-24 h-24 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=96&width=96"
                          alt="Logo"
                          width={96}
                          height={96}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-12 px-6 text-center pb-8">
                    <h3 className="font-bold text-xl text-gray-900">The Green Bistro</h3>
                    <p className="text-gray-500 text-sm mb-6">Fresh, organic, delicious.</p>

                    <div className="space-y-3">
                      {[
                        { name: "View Full Menu", icon: "📖", color: "bg-orange-50 text-orange-600" },
                        { name: "Order Online", icon: "🛵", color: "bg-green-50 text-green-600" },
                        { name: "Book a Table", icon: "📅", color: "bg-blue-50 text-blue-600" },
                        { name: "Our Story", icon: "✨", color: "bg-purple-50 text-purple-600" },
                      ].map((item) => (
                        <div
                          key={item.name}
                          className="p-3 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer group"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-lg`}
                            >
                              {item.icon}
                            </div>
                            <span className="font-medium text-gray-700 group-hover:text-gray-900">{item.name}</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Dynamic Island */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-30"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-20 right-10 bg-white p-4 rounded-2xl shadow-xl z-30 animate-float-slow max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-xl">
                    🍔
                  </div>
                  <div>
                    <p className="font-bold text-sm">New Order</p>
                    <p className="text-xs text-gray-500">Just now</p>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[70%] bg-green-500 rounded-full"></div>
                </div>
              </div>

              <div className="absolute bottom-40 left-0 bg-white p-4 rounded-2xl shadow-xl z-30 animate-float-delayed max-w-[180px]">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-xs font-medium text-gray-800">"Best digital menu ever!"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Badge variant="outline" className="mb-4 border-green-600 text-green-700 bg-green-50">
              Features
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Everything you need to run your restaurant online
            </h2>
            <p className="text-xl text-gray-600">
              Powerful tools designed specifically for modern restaurants, cafes, and bars.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Beautiful Digital Menus",
                desc: "Create stunning, mobile-optimized menus that load instantly. Update items and prices in real-time.",
                icon: <Globe className="w-6 h-6 text-blue-600" />,
                color: "bg-blue-50 border-blue-100",
              },
              {
                title: "QR Code Generator",
                desc: "Generate custom QR codes for tables, windows, and flyers. Track scans and customer engagement.",
                icon: <Zap className="w-6 h-6 text-amber-600" />,
                color: "bg-amber-50 border-amber-100",
              },
              {
                title: "Secure Payments",
                desc: "Accept payments directly through your menu. Integrated with Stripe for secure transactions.",
                icon: <Shield className="w-6 h-6 text-emerald-600" />,
                color: "bg-emerald-50 border-emerald-100",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className={`p-8 rounded-3xl border ${feature.color} hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[3rem] overflow-hidden bg-gray-900 px-6 py-20 text-center">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-900 via-gray-900 to-black opacity-90"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Ready to modernize your restaurant?
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                Join thousands of restaurants growing their business with FoodTree.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="h-14 px-8 rounded-full bg-lime-400 hover:bg-lime-500 text-green-950 font-bold text-lg">
                  Get Started for Free
                </Button>
                <Button
                  variant="outline"
                  className="h-14 px-8 rounded-full border-white/20 text-white hover:bg-white/10 bg-transparent text-lg"
                >
                  View Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SharedLayout>
  )
}

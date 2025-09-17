import Image from "next/image"
import Link from "next/link"
import { X, Star } from "lucide-react"
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
}

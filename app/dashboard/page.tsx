import Image from "next/image"
import Link from "next/link"
import {
  BarChart3,
  Clock,
  Edit,
  Eye,
  FileText,
  Grid,
  LayoutDashboard,
  List,
  MessageSquare,
  QrCode,
  Settings,
  ShoppingBag,
  Users,
  Calendar,
  DollarSign,
  Package,
  UserCheck,
  Truck,
  CreditCard,
  Bell,
  TrendingUp,
  MapPin,
} from "lucide-react"
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
}

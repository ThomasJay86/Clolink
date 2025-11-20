import type React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  BarChart3,
  Calendar,
  CreditCard,
  DollarSign,
  Edit,
  Eye,
  FileText,
  Grid,
  LayoutDashboard,
  List,
  MessageSquare,
  Package,
  QrCode,
  Settings,
  ShoppingBag,
  Truck,
  UserCheck,
  Users,
  Bell,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="hidden md:flex w-64 flex-col bg-card border-r border-border">
          <div className="p-4 border-b border-border">
            <Link href="/" className="text-primary text-xl font-bold flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-1 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M11 2a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0V2zm8.293 8.293a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414zM18 12a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-7 7a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm-4.707-4.707a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414zM5 12a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-.293-4.293a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 0 1 1.414 1.414L6.121 7.707a1 1 0 0 1-1.414 0zM12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                </svg>
              </div>
              FoodTree
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="space-y-1 px-2">
              <Link
                href="/dashboard"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-colors"
              >
                <LayoutDashboard className="mr-3 h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="/dashboard/menu"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-colors"
              >
                <FileText className="mr-3 h-5 w-5" />
                Menu Editor
              </Link>
              <Link
                href="/dashboard/orders"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-colors"
              >
                <ShoppingBag className="mr-3 h-5 w-5" />
                Orders
              </Link>
              <Link
                href="/dashboard/reservations"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-colors"
              >
                <Calendar className="mr-3 h-5 w-5" />
                Table Reservations
              </Link>
              <Link
                href="/dashboard/inventory"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-colors"
              >
                <Package className="mr-3 h-5 w-5" />
                Inventory
              </Link>
              <Link
                href="/dashboard/staff"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-colors"
              >
                <UserCheck className="mr-3 h-5 w-5" />
                Staff Management
              </Link>
              <Link
                href="/dashboard/analytics"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-colors"
              >
                <BarChart3 className="mr-3 h-5 w-5" />
                Analytics
              </Link>
              <Link
                href="/dashboard/accounting"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-colors"
              >
                <DollarSign className="mr-3 h-5 w-5" />
                Accounting
              </Link>
              <Link
                href="/dashboard/customers"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-colors"
              >
                <Users className="mr-3 h-5 w-5" />
                Customers
              </Link>
              <Link
                href="/dashboard/delivery"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-colors"
              >
                <Truck className="mr-3 h-5 w-5" />
                Delivery
              </Link>
              <Link
                href="/dashboard/payments"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-colors"
              >
                <CreditCard className="mr-3 h-5 w-5" />
                Payments
              </Link>
              <Link
                href="/dashboard/reviews"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-colors"
              >
                <MessageSquare className="mr-3 h-5 w-5" />
                Reviews
              </Link>
              <Link
                href="/dashboard/qr-codes"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-colors"
              >
                <QrCode className="mr-3 h-5 w-5" />
                QR Codes
              </Link>
              <Link
                href="/dashboard/themes"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-colors"
              >
                <Grid className="mr-3 h-5 w-5" />
                Themes
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-colors"
              >
                <Settings className="mr-3 h-5 w-5" />
                Settings
              </Link>
            </nav>
          </div>
          <div className="p-4 border-t border-border">
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
                <p className="text-sm font-medium text-foreground">Delicious Bistro</p>
                <p className="text-xs text-muted-foreground">View Profile</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden bg-background">
          {/* Top Navigation */}
          <header className="bg-card border-b border-border shadow-sm z-10">
            <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <button className="md:hidden mr-2 text-muted-foreground">
                  <List className="h-6 w-6" />
                </button>
                <h1 className="text-lg font-semibold text-foreground">Dashboard</h1>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" className="text-muted-foreground bg-transparent">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
                <Link href="/dashboard/view-menu">
                  <Button variant="outline" size="sm" className="text-muted-foreground bg-transparent">
                    <Eye className="h-4 w-4 mr-2" />
                    View Menu
                  </Button>
                </Link>
                <Link href="/dashboard/menu">
                  <Button size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Menu
                  </Button>
                </Link>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  )
}

import Link from "next/link"
import {
  Clock,
  ShoppingBag,
  Calendar,
  DollarSign,
  Package,
  UserCheck,
  Users,
  TrendingUp,
  MapPin,
  Grid,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Overview Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Today's Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
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
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
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
            <Calendar className="h-4 w-4 text-muted-foreground" />
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
            <UserCheck className="h-4 w-4 text-muted-foreground" />
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
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Live Order Status</CardTitle>
            <CardDescription>Real-time order tracking and management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg border border-border">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 animate-pulse"></div>
                  <div>
                    <div className="font-medium">Order #1234 - Table 5</div>
                    <div className="text-sm text-muted-foreground">2x Pasta, 1x Salad</div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                    Preparing
                  </Badge>
                  <div className="text-xs text-muted-foreground mt-1">8 min</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg border border-border">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                  <div>
                    <div className="font-medium">Order #1235 - Delivery</div>
                    <div className="text-sm text-muted-foreground">1x Pizza, 2x Drinks</div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                    Out for Delivery
                  </Badge>
                  <div className="text-xs text-muted-foreground mt-1">15 min</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg border border-border">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <div>
                    <div className="font-medium">Order #1236 - Table 3</div>
                    <div className="text-sm text-muted-foreground">3x Burgers, 1x Fries</div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                    Ready
                  </Badge>
                  <div className="text-xs text-muted-foreground mt-1">Now</div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Link href="/dashboard/orders">
                <Button variant="link" size="sm" className="text-primary">
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
              <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg border border-border">
                <div>
                  <div className="font-medium">Johnson Party (4 guests)</div>
                  <div className="text-sm text-muted-foreground">Table 8 • 7:00 PM</div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="bg-purple-500/10 text-purple-500 border-purple-500/20">
                    Confirmed
                  </Badge>
                  <div className="text-xs text-muted-foreground mt-1">2 hours</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg border border-border">
                <div>
                  <div className="font-medium">Smith Anniversary (2 guests)</div>
                  <div className="text-sm text-muted-foreground">Table 12 • 8:30 PM</div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="bg-orange-500/10 text-orange-500 border-orange-500/20">
                    Pending
                  </Badge>
                  <div className="text-xs text-muted-foreground mt-1">3.5 hours</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg border border-border">
                <div>
                  <div className="font-medium">Davis Family (6 guests)</div>
                  <div className="text-sm text-muted-foreground">Table 15 • 6:00 PM</div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                    Seated
                  </Badge>
                  <div className="text-xs text-muted-foreground mt-1">Now</div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Link href="/dashboard/reservations">
                <Button variant="link" size="sm" className="text-primary">
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
                className="h-auto w-full flex flex-col items-center justify-center p-4 gap-2 hover:bg-accent bg-transparent"
              >
                <ShoppingBag className="h-6 w-6 text-green-500" />
                <span className="text-xs">New Order</span>
              </Button>
            </Link>
            <Link href="/dashboard/reservations/new">
              <Button
                variant="outline"
                className="h-auto w-full flex flex-col items-center justify-center p-4 gap-2 hover:bg-accent bg-transparent"
              >
                <Calendar className="h-6 w-6 text-purple-500" />
                <span className="text-xs">Book Table</span>
              </Button>
            </Link>
            <Link href="/dashboard/inventory">
              <Button
                variant="outline"
                className="h-auto w-full flex flex-col items-center justify-center p-4 gap-2 hover:bg-accent bg-transparent"
              >
                <Package className="h-6 w-6 text-blue-500" />
                <span className="text-xs">Inventory</span>
              </Button>
            </Link>
            <Link href="/dashboard/staff">
              <Button
                variant="outline"
                className="h-auto w-full flex flex-col items-center justify-center p-4 gap-2 hover:bg-accent bg-transparent"
              >
                <UserCheck className="h-6 w-6 text-orange-500" />
                <span className="text-xs">Staff Clock</span>
              </Button>
            </Link>
            <Link href="/dashboard/accounting">
              <Button
                variant="outline"
                className="h-auto w-full flex flex-col items-center justify-center p-4 gap-2 hover:bg-accent bg-transparent"
              >
                <DollarSign className="h-6 w-6 text-yellow-500" />
                <span className="text-xs">Daily Sales</span>
              </Button>
            </Link>
            <Link href="/dashboard/themes">
              <Button
                variant="outline"
                className="h-auto w-full flex flex-col items-center justify-center p-4 gap-2 hover:bg-accent bg-transparent"
              >
                <Grid className="h-6 w-6 text-indigo-500" />
                <span className="text-xs">Themes</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

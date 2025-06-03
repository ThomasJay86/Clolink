"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import {
  CalendarIcon,
  CreditCard,
  Gift,
  MapPin,
  User,
  Home,
  Building,
  Lock,
  Truck,
  Store,
  Utensils,
} from "lucide-react"
import { cn } from "@/lib/utils"
import SharedLayout from "@/components/shared-layout"

// Import menu data
import { menuCategories } from "../menu-data"

// Flatten all menu items into a single array for easy lookup
const allMenuItems = menuCategories.flatMap((category) => category.items)

export default function CheckoutPage() {
  const router = useRouter()
  const [cart, setCart] = useState<{ id: string; quantity: number }[]>([])
  const [subtotal, setSubtotal] = useState(0)
  const [tax, setTax] = useState(0)
  const [deliveryFee, setDeliveryFee] = useState(4.99)
  const [tip, setTip] = useState(0)
  const [total, setTotal] = useState(0)
  const [deliveryMethod, setDeliveryMethod] = useState("dine-in")
  const [deliveryOption, setDeliveryOption] = useState("standard")
  const [date, setDate] = useState<Date>()
  const [contactEditing, setContactEditing] = useState(false)
  const [contactLocked, setContactLocked] = useState(false)
  const [addressEditing, setAddressEditing] = useState(false)

  // Contact information state
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })

  // Address information state
  const [addressInfo, setAddressInfo] = useState({
    street: "",
    apt: "",
    city: "",
    state: "",
    zip: "",
    deliveryInstructions: "",
  })

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem("foodtree-cart")
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart)
      setCart(parsedCart)

      // Calculate subtotal
      const cartSubtotal = parsedCart.reduce((sum, item) => {
        const menuItem = allMenuItems.find((menuItem) => menuItem.id === item.id)
        return menuItem ? sum + menuItem.price * item.quantity : sum
      }, 0)
      setSubtotal(cartSubtotal)

      // Calculate tax (assuming 8.5% tax rate)
      const calculatedTax = cartSubtotal * 0.085
      setTax(calculatedTax)

      // Calculate total
      setTotal(cartSubtotal + calculatedTax + deliveryFee + tip)
    }
  }, [deliveryFee, tip])

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCart(cart.filter((item) => item.id !== itemId))
    } else {
      setCart(cart.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item)))
    }
    // Update localStorage
    localStorage.setItem(
      "foodtree-cart",
      JSON.stringify(
        newQuantity <= 0
          ? cart.filter((item) => item.id !== itemId)
          : cart.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item)),
      ),
    )
  }

  const handleTipChange = (tipAmount) => {
    setTip(tipAmount)
  }

  const handleDeliveryMethodChange = (value) => {
    setDeliveryMethod(value)
    // Adjust delivery fee based on method
    if (value === "delivery") {
      setDeliveryFee(4.99)
    } else {
      setDeliveryFee(0)
    }
  }

  const handleDeliveryOptionChange = (value) => {
    setDeliveryOption(value)
    // Adjust delivery fee based on option
    if (value === "drone") {
      setDeliveryFee(9.99)
    } else if (value === "standard") {
      setDeliveryFee(4.99)
    }
  }

  const handleAutofill = () => {
    // Simulate autofilling contact information
    setContactInfo({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "(555) 123-4567",
    })
    setContactLocked(true)
    setContactEditing(false)
  }

  const handlePlaceOrder = () => {
    // Generate a random order ID
    const orderId = Math.floor(Math.random() * 1000000).toString()

    // Save order details to localStorage for tracking
    const orderDetails = {
      id: orderId,
      items: cart,
      subtotal,
      tax,
      deliveryFee,
      tip,
      total: subtotal + tax + deliveryFee + tip,
      status: "pending",
      deliveryMethod,
      deliveryOption,
      scheduledDate: date,
      contactInfo,
      addressInfo,
      createdAt: new Date().toISOString(),
    }

    localStorage.setItem(`order_${orderId}`, JSON.stringify(orderDetails))

    // Clear cart
    localStorage.removeItem("foodtree-cart")

    // Redirect to order tracking page
    router.push(`/products/menu-demo/track/${orderId}`)
  }

  return (
    <SharedLayout>
      <div className="container mx-auto py-8 px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Delivery Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Method */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Delivery Method</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue={deliveryMethod} onValueChange={handleDeliveryMethodChange} className="w-full">
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="dine-in" className="flex items-center gap-2">
                      <Utensils className="h-4 w-4" />
                      <span>Dine-In</span>
                    </TabsTrigger>
                    <TabsTrigger value="pickup" className="flex items-center gap-2">
                      <Store className="h-4 w-4" />
                      <span>Pickup</span>
                    </TabsTrigger>
                    <TabsTrigger value="delivery" className="flex items-center gap-2">
                      <Truck className="h-4 w-4" />
                      <span>Delivery</span>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardContent>
            </Card>

            {/* Delivery Options */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Delivery Options</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  defaultValue={deliveryOption}
                  onValueChange={handleDeliveryOptionChange}
                  className="space-y-3"
                >
                  <div
                    className={cn(
                      "flex items-center space-x-2 rounded-md border p-4",
                      deliveryOption === "standard" && "border-green-500 bg-green-50",
                    )}
                  >
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="flex flex-col">
                      <span className="font-medium">Standard Delivery</span>
                      <span className="text-sm text-muted-foreground">Delivery in 30-45 minutes</span>
                    </Label>
                  </div>

                  <div
                    className={cn(
                      "flex items-center space-x-2 rounded-md border p-4",
                      deliveryOption === "drone" && "border-green-500 bg-green-50",
                    )}
                  >
                    <RadioGroupItem value="drone" id="drone" />
                    <Label htmlFor="drone" className="flex flex-col">
                      <span className="font-medium">Drone Delivery</span>
                      <span className="text-sm text-muted-foreground">Delivery in 15-20 minutes</span>
                    </Label>
                  </div>

                  <div
                    className={cn(
                      "flex items-center space-x-2 rounded-md border p-4",
                      deliveryOption === "schedule" && "border-green-500 bg-green-50",
                    )}
                  >
                    <RadioGroupItem value="schedule" id="schedule" />
                    <Label htmlFor="schedule" className="flex flex-col">
                      <span className="font-medium">Schedule Delivery</span>
                      <span className="text-sm text-muted-foreground">Choose a delivery time</span>
                    </Label>
                  </div>

                  {deliveryOption === "schedule" && (
                    <div className="pt-2 pl-6">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Select delivery date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>

                      <Select>
                        <SelectTrigger className="w-full mt-2">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="12pm-1pm">12:00 PM - 1:00 PM</SelectItem>
                          <SelectItem value="1pm-2pm">1:00 PM - 2:00 PM</SelectItem>
                          <SelectItem value="2pm-3pm">2:00 PM - 3:00 PM</SelectItem>
                          <SelectItem value="3pm-4pm">3:00 PM - 4:00 PM</SelectItem>
                          <SelectItem value="4pm-5pm">4:00 PM - 5:00 PM</SelectItem>
                          <SelectItem value="5pm-6pm">5:00 PM - 6:00 PM</SelectItem>
                          <SelectItem value="6pm-7pm">6:00 PM - 7:00 PM</SelectItem>
                          <SelectItem value="7pm-8pm">7:00 PM - 8:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Delivery Details */}
            <Card>
              <CardHeader className="pb-3 flex flex-row items-center justify-between">
                <CardTitle>Delivery Details</CardTitle>
                {!addressEditing && (
                  <Button variant="ghost" size="sm" onClick={() => setAddressEditing(true)}>
                    Edit
                  </Button>
                )}
              </CardHeader>
              <CardContent>
                {addressEditing ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="street">Street Address</Label>
                        <Input
                          id="street"
                          value={addressInfo.street}
                          onChange={(e) => setAddressInfo({ ...addressInfo, street: e.target.value })}
                          placeholder="123 Main St"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="apt">Apt/Suite (optional)</Label>
                        <Input
                          id="apt"
                          value={addressInfo.apt}
                          onChange={(e) => setAddressInfo({ ...addressInfo, apt: e.target.value })}
                          placeholder="Apt 4B"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={addressInfo.city}
                          onChange={(e) => setAddressInfo({ ...addressInfo, city: e.target.value })}
                          placeholder="New York"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Select
                          value={addressInfo.state}
                          onValueChange={(value) => setAddressInfo({ ...addressInfo, state: value })}
                        >
                          <SelectTrigger id="state">
                            <SelectValue placeholder="State" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="AL">Alabama</SelectItem>
                            <SelectItem value="AK">Alaska</SelectItem>
                            <SelectItem value="AZ">Arizona</SelectItem>
                            <SelectItem value="CA">California</SelectItem>
                            <SelectItem value="CO">Colorado</SelectItem>
                            <SelectItem value="NY">New York</SelectItem>
                            <SelectItem value="TX">Texas</SelectItem>
                            {/* Add more states as needed */}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input
                          id="zip"
                          value={addressInfo.zip}
                          onChange={(e) => setAddressInfo({ ...addressInfo, zip: e.target.value })}
                          placeholder="10001"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="instructions">Delivery Instructions (optional)</Label>
                      <Textarea
                        id="instructions"
                        value={addressInfo.deliveryInstructions}
                        onChange={(e) => setAddressInfo({ ...addressInfo, deliveryInstructions: e.target.value })}
                        placeholder="Meet at my door, Ring doorbell, etc."
                        className="resize-none"
                      />
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" onClick={() => setAddressEditing(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setAddressEditing(false)}>Save</Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {addressInfo.street ? (
                      <>
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <p className="font-medium">
                              {addressInfo.street} {addressInfo.apt && `#${addressInfo.apt}`}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {addressInfo.city}, {addressInfo.state} {addressInfo.zip}
                            </p>
                          </div>
                        </div>

                        {addressInfo.deliveryInstructions && (
                          <div className="flex items-start gap-3">
                            <Home className="h-5 w-5 text-green-600 mt-0.5" />
                            <div>
                              <p className="font-medium">Meet at my door</p>
                              <p className="text-sm text-green-600">{addressInfo.deliveryInstructions}</p>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-muted-foreground">No delivery address added</p>
                        <Button variant="outline" className="mt-2" onClick={() => setAddressEditing(true)}>
                          Add Address
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader className="pb-3 flex flex-row items-center justify-between">
                <CardTitle>Contact Information</CardTitle>
                {!contactEditing && (
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={handleAutofill} disabled={contactLocked}>
                      Autofill
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setContactEditing(true)
                        setContactLocked(false)
                      }}
                    >
                      Edit
                    </Button>
                  </div>
                )}
              </CardHeader>
              <CardContent>
                {contactEditing ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={contactInfo.firstName}
                          onChange={(e) => setContactInfo({ ...contactInfo, firstName: e.target.value })}
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={contactInfo.lastName}
                          onChange={(e) => setContactInfo({ ...contactInfo, lastName: e.target.value })}
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={contactInfo.email}
                          onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                          placeholder="john.doe@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={contactInfo.phone}
                          onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" onClick={() => setContactEditing(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setContactEditing(false)}>Save</Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {contactInfo.firstName ? (
                      <>
                        <div className="flex items-start gap-3">
                          <User className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <p className="font-medium">
                              {contactInfo.firstName} {contactInfo.lastName}
                            </p>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              {contactLocked && <Lock className="h-3 w-3" />}
                              <span>{contactLocked ? "Information locked" : "Contact information"}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="h-5 w-5 flex items-center justify-center">
                            <span className="text-green-600">@</span>
                          </div>
                          <p className="text-sm">{contactInfo.email}</p>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="h-5 w-5 flex items-center justify-center">
                            <span className="text-green-600">#</span>
                          </div>
                          <p className="text-sm">{contactInfo.phone}</p>
                        </div>
                      </>
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-muted-foreground">No contact information added</p>
                        <div className="flex justify-center gap-2 mt-2">
                          <Button variant="outline" onClick={handleAutofill}>
                            Autofill
                          </Button>
                          <Button variant="outline" onClick={() => setContactEditing(true)}>
                            Add Manually
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="card" className="space-y-3">
                  <div className="flex items-center space-x-2 rounded-md border p-4">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      <span>Credit/Debit Card</span>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2 rounded-md border p-4">
                    <RadioGroupItem value="gift" id="gift" />
                    <Label htmlFor="gift" className="flex items-center gap-2">
                      <Gift className="h-4 w-4" />
                      <span>Gift Card</span>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2 rounded-md border p-4">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash" className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      <span>Cash on Delivery</span>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cart.length > 0 ? (
                  <>
                    {cart.map((item, index) => {
                      const menuItem = allMenuItems.find((menuItem) => menuItem.id === item.id)
                      return menuItem ? (
                        <div key={index} className="flex justify-between">
                          <div className="flex gap-2">
                            <span>{item.quantity}x</span>
                            <span>{menuItem.name}</span>
                          </div>
                          <span>${(menuItem.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ) : null
                    })}

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Tax</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Delivery Fee</span>
                        <span>${deliveryFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Tip</span>
                        <span>${tip.toFixed(2)}</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${(subtotal + tax + deliveryFee + tip).toFixed(2)}</span>
                    </div>
                  </>
                ) : (
                  <p className="text-center text-muted-foreground">Your cart is empty</p>
                )}
              </CardContent>
              <CardFooter className="flex-col space-y-4">
                <div className="w-full">
                  <p className="text-sm font-medium mb-2">Add a tip</p>
                  <div className="grid grid-cols-4 gap-2">
                    {[0, 2, 3, 5].map((amount) => (
                      <Button
                        key={amount}
                        variant={tip === amount ? "default" : "outline"}
                        className={tip === amount ? "bg-green-600 hover:bg-green-700" : ""}
                        onClick={() => handleTipChange(amount)}
                      >
                        {amount === 0 ? "No Tip" : `$${amount}`}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  size="lg"
                  onClick={handlePlaceOrder}
                  disabled={cart.length === 0}
                >
                  Place Order
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </SharedLayout>
  )
}

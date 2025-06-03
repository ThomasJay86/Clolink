"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"
import {
  ArrowLeft,
  Trash2,
  ChevronRight,
  Check,
  Eye,
  Zap,
  MapPin,
  Clock,
  Calendar,
  Edit,
  Truck,
  Store,
  UtensilsCrossed,
  AlertTriangle,
  Search,
  User,
  X,
  Plus,
  QrCode,
  Users,
  CreditCard,
  Gift,
  Building,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"

// Import menu data
import { menuCategories } from "@/app/products/menu-demo/menu-data"

// Dynamically import the SecureMapWrapper to avoid SSR issues with Google Maps
const SecureMapWrapper = dynamic(() => import("@/components/secure-map-wrapper"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full flex items-center justify-center bg-gray-50 rounded-md">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-t-green-600 border-gray-200 rounded-full animate-spin mb-4"></div>
        <p className="text-gray-600">Loading map...</p>
      </div>
    </div>
  ),
})

// Flatten all menu items into a single array for easy lookup
const allMenuItems = menuCategories.flatMap((category) => category.items)

// Mock saved addresses for the user
const savedAddresses = [
  {
    id: "addr1",
    name: "Home",
    street: "Wijerama Road",
    city: "Nugegoda",
    state: "Sri Lanka",
    zipCode: "",
    isDefault: true,
    buildingType: "Other",
    apt: "",
    buildingName: "",
    landmark: "Kelaniya Railway Station",
  },
  {
    id: "addr2",
    name: "Work",
    street: "456 Office Park",
    city: "Businesstown",
    state: "CA",
    zipCode: "67890",
    isDefault: false,
    buildingType: "Office",
    apt: "Suite 400",
    buildingName: "Tech Plaza",
    landmark: "Near Central Park",
  },
]

// Mock saved payment methods
const savedPaymentMethods = [
  {
    id: "card1",
    type: "card",
    cardType: "Visa",
    lastFour: "4242",
    expiryDate: "05/28",
    isDefault: true,
  },
  {
    id: "card2",
    type: "card",
    cardType: "Mastercard",
    lastFour: "8888",
    expiryDate: "12/26",
    isDefault: false,
  },
]

// Country codes for phone numbers
const countryCodes = [
  { code: "+1", country: "United States" },
  { code: "+44", country: "United Kingdom" },
  { code: "+33", country: "France" },
  { code: "+49", country: "Germany" },
  { code: "+81", country: "Japan" },
  { code: "+86", country: "China" },
  { code: "+91", country: "India" },
  { code: "+61", country: "Australia" },
  { code: "+52", country: "Mexico" },
  { code: "+55", country: "Brazil" },
  { code: "+7", country: "Russia" },
  { code: "+82", country: "South Korea" },
  { code: "+39", country: "Italy" },
  { code: "+34", country: "Spain" },
  { code: "+31", country: "Netherlands" },
  { code: "+90", country: "Turkey" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+971", country: "United Arab Emirates" },
  { code: "+65", country: "Singapore" },
  { code: "+60", country: "Malaysia" },
  { code: "+66", country: "Thailand" },
  { code: "+63", country: "Philippines" },
  { code: "+62", country: "Indonesia" },
  { code: "+84", country: "Vietnam" },
  { code: "+94", country: "Sri Lanka" },
  { code: "+27", country: "South Africa" },
  { code: "+20", country: "Egypt" },
  { code: "+234", country: "Nigeria" },
  { code: "+254", country: "Kenya" },
  { code: "+972", country: "Israel" },
]

// Common email domains
const emailDomains = [
  "@gmail.com",
  "@yahoo.com",
  "@outlook.com",
  "@hotmail.com",
  "@icloud.com",
  "@aol.com",
  "@protonmail.com",
  "@mail.com",
  "@zoho.com",
  "@yandex.com",
]

// Time slots for scheduling
const generateTimeSlots = () => {
  const slots = []
  for (let hour = 11; hour < 22; hour++) {
    const startHour = hour % 12 === 0 ? 12 : hour % 12
    const endHour = (hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12
    const startAmPm = hour < 12 ? "AM" : "PM"
    const endAmPm = hour + 1 < 12 ? "AM" : "PM"

    slots.push({
      id: `slot-${hour}`,
      time: `${startHour}:00 ${startAmPm} - ${endHour}:00 ${endAmPm}`,
      value: `${hour}:00-${hour + 1}:00`,
    })

    if (hour < 21) {
      slots.push({
        id: `slot-${hour}-30`,
        time: `${startHour}:30 ${startAmPm} - ${endHour}:30 ${endAmPm}`,
        value: `${hour}:30-${hour + 1}:30`,
      })
    }
  }
  return slots
}

const timeSlots = generateTimeSlots()

// Mock search results for addresses
const mockAddressSearchResults = [
  { id: "1", name: "Nugegoda", description: "Sri Lanka" },
  { id: "2", name: "Nuwara Eliya", description: "Sri Lanka" },
  { id: "3", name: "Nugegoda Flyover", description: "Nugegoda, Sri Lanka" },
  { id: "4", name: "Nugawela Temple", description: "Nugawela Junction Road, Sri Lanka" },
  { id: "5", name: "Nugegoda Bus Stand", description: "Etul Kotte-Mirihana-Kohuwela Road, Nugegoda, Sri Lanka" },
]

// Dropoff options
const dropoffOptions = [
  { id: "door", label: "Meet at my door", group: "Hand it to me" },
  { id: "outside", label: "Meet outside", group: "Hand it to me" },
  { id: "lobby", label: "Meet in the lobby", group: "Hand it to me" },
  { id: "location", label: "Leave at location", group: "Leave at location" },
]

// Building types
const buildingTypes = ["House", "Apartment", "Condo", "Office", "Hotel", "Other"]

// Table numbers for dine-in
const tableNumbers = Array.from({ length: 20 }, (_, i) => i + 1)

// Cache for geocoding results
const geocodingCache = new Map()

export default function Checkout() {
  const router = useRouter()
  const [cart, setCart] = useState<{ id: string; quantity: number }[]>([])
  const [step, setStep] = useState<"cart" | "delivery" | "payment" | "confirmation">("cart")
  const [isLoading, setIsLoading] = useState(false)
  const [deliveryMethod, setDeliveryMethod] = useState<"dine-in" | "pickup" | "delivery">("dine-in")
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cash" | "paypal" | "gift-card" | "crypto">("card")
  const [tipAmount, setTipAmount] = useState<number>(5)
  const [customTipAmount, setCustomTipAmount] = useState<string>("")
  const [specialInstructions, setSpecialInstructions] = useState("")
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    emailDomain: "",
    phone: "",
    countryCode: "+1",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  })
  const [contactErrors, setContactErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  })
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
    country: "United States",
    nickname: "",
  })
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderNumber, setOrderNumber] = useState("")
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<string | null>(null)
  const [showClearCartConfirmation, setShowClearCartConfirmation] = useState(false)
  const [useSavedAddress, setUseSavedAddress] = useState(true)
  const [selectedSavedAddress, setSelectedSavedAddress] = useState(savedAddresses[0].id)
  const [useSavedPayment, setUseSavedPayment] = useState(false)
  const [selectedSavedPayment, setSelectedSavedPayment] = useState(savedPaymentMethods[0].id)
  const [savePaymentInfo, setSavePaymentInfo] = useState(false)
  const [billingAddressSameAsShipping, setBillingAddressSameAsShipping] = useState(true)
  const [useBiometricAuth, setUseBiometricAuth] = useState(false)
  const [useVoiceControl, setUseVoiceControl] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [showARPreview, setShowARPreview] = useState(false)
  const [deliveryOption, setDeliveryOption] = useState<"standard" | "drone" | "schedule">("standard")
  const [showCarbonFootprint, setShowCarbonFootprint] = useState(true)
  const [useBlockchainVerification, setUseBlockchainVerification] = useState(false)
  const [personalizedDiscount, setPersonalizedDiscount] = useState(5)
  const [deliveryPrediction, setDeliveryPrediction] = useState({ min: 25, max: 35, confidence: 92 })
  const [showPromoCodeDialog, setShowPromoCodeDialog] = useState(false)
  const [promoCode, setPromoCode] = useState("")
  const [appliedPromoCode, setAppliedPromoCode] = useState<string | null>(null)
  const [promoDiscount, setPromoDiscount] = useState(0)
  const [promoError, setPromoError] = useState<string | null>(null)
  const [showEmailDomains, setShowEmailDomains] = useState(false)
  const [emailPrefix, setEmailPrefix] = useState("")
  const [showPaymentMethodDialog, setShowPaymentMethodDialog] = useState(false)
  const [showCardDetailsDialog, setShowCardDetailsDialog] = useState(false)
  const [showPayPalDialog, setShowPayPalDialog] = useState(false)
  const [showGiftCardDialog, setShowGiftCardDialog] = useState(false)
  const [showCashDialog, setShowCashDialog] = useState(false)
  const [showScheduleDialog, setShowScheduleDialog] = useState(false)
  const [isScheduled, setIsScheduled] = useState(false)
  const [scheduledDate, setScheduledDate] = useState<string>("today")
  const [scheduledTime, setScheduledTime] = useState<string>("")
  const [formattedScheduleTime, setFormattedScheduleTime] = useState<string>("")
  const [dineInDetails, setDineInDetails] = useState({
    partySize: 1,
    date: "",
    time: "",
    specialRequests: "",
    hasReservation: false,
    reservationName: "",
    reservationCode: "",
    tableNumber: 0,
    shareQrCode: false,
  })
  const [showDineInQRDialog, setShowDineInQRDialog] = useState(false)
  const [showScanQRDialog, setShowScanQRDialog] = useState(false)
  const [giftCardCode, setGiftCardCode] = useState("")
  const emailInputRef = useRef<HTMLInputElement>(null)
  const [showContactEditDialog, setShowContactEditDialog] = useState(false)
  const [isContactInfoLocked, setIsContactInfoLocked] = useState(false)

  // New state for address dialogs
  const [showAddressesDialog, setShowAddressesDialog] = useState(false)
  const [showAddressInfoDialog, setShowAddressInfoDialog] = useState(false)
  const [showEditPinDialog, setShowEditPinDialog] = useState(false)
  const [showDropoffOptionsDialog, setShowDropoffOptionsDialog] = useState(false)
  const [addressSearchQuery, setAddressSearchQuery] = useState("")
  const [addressSearchResults, setAddressSearchResults] = useState(mockAddressSearchResults)
  const [selectedDropoffOption, setSelectedDropoffOption] = useState("door")
  const [deliveryInstructions, setDeliveryInstructions] = useState("")
  const [mapError, setMapError] = useState<string | null>(null)

  // Current address being edited
  const [currentAddress, setCurrentAddress] = useState({
    id: "",
    name: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    isDefault: false,
    buildingType: "Other",
    apt: "",
    buildingName: "",
    landmark: "",
  })

  // New state for storing the selected location
  const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number } | null>(null)

  // New state for new address
  const [newAddress, setNewAddress] = useState({
    id: "",
    name: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    isDefault: false,
    buildingType: "Other",
    apt: "",
    buildingName: "",
    landmark: "",
  })

  // Generate dates for scheduling
  const getDates = () => {
    const dates = []
    const today = new Date()

    for (let i = 0; i < 7; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)

      const formattedDate = date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      })

      const value = i === 0 ? "today" : i === 1 ? "tomorrow" : date.toISOString().split("T")[0]

      const display = i === 0 ? "Today" : i === 1 ? "Tomorrow" : date.toLocaleDateString("en-US", { weekday: "short" })

      const dateNum = date.getDate()

      dates.push({ value, display, formattedDate, dateNum })
    }

    return dates
  }

  const availableDates = getDates()

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("foodtree-cart")
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (e) {
        console.error("Failed to parse saved cart")
      }
    }

    // Auto-detect country code based on browser locale
    const browserLocale = navigator.language
    if (browserLocale.startsWith("en-US")) {
      setContactInfo((prev) => ({ ...prev, countryCode: "+1" }))
    } else if (browserLocale.startsWith("en-GB")) {
      setContactInfo((prev) => ({ ...prev, countryCode: "+44" }))
    } else if (browserLocale.startsWith("fr")) {
      setContactInfo((prev) => ({ ...prev, countryCode: "+33" }))
    }
    // More could be added based on common locales
  }, [])

  // Handle email input
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.includes("@")) {
      const [prefix, domain] = value.split("@")
      setEmailPrefix(prefix)
      setContactInfo({ ...contactInfo, email: prefix, emailDomain: "@" + domain })
      setShowEmailDomains(domain.length > 0 && !emailDomains.includes("@" + domain))
    } else {
      setEmailPrefix(value)
      setContactInfo({ ...contactInfo, email: value, emailDomain: "" })
      setShowEmailDomains(value.length > 0)
    }

    // Clear email error if field is now valid
    const fullEmail = value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailRegex.test(fullEmail)) {
      setContactErrors((prev) => ({ ...prev, email: "" }))
    }
  }

  const selectEmailDomain = (domain: string) => {
    setContactInfo({ ...contactInfo, email: emailPrefix, emailDomain: domain })
    setShowEmailDomains(false)
    if (emailInputRef.current) {
      emailInputRef.current.focus()
    }

    // Clear email error if field is now valid
    const fullEmail = emailPrefix + domain
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailRegex.test(fullEmail)) {
      setContactErrors((prev) => ({ ...prev, email: "" }))
    }
  }

  // Calculate subtotal
  const subtotal = cart.reduce((total, cartItem) => {
    const menuItem = allMenuItems.find((item) => item.id === cartItem.id)
    return total + (menuItem ? menuItem.price * cartItem.quantity : 0)
  }, 0)

  // Calculate tax (assuming 8.5%)
  const taxRate = 0.085
  const tax = subtotal * taxRate

  // Calculate delivery fee
  const deliveryFee = deliveryMethod === "delivery" ? 3.99 : 0

  // Calculate tip
  const tip = customTipAmount ? Number.parseFloat(customTipAmount) : tipAmount

  // Calculate total
  const total = subtotal + tax + deliveryFee + tip - promoDiscount

  // Update item quantity
  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      // Show confirmation dialog instead of immediately removing
      setItemToDelete(itemId)
      setShowDeleteConfirmation(true)
      return
    }

    setCart(cart.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item)))
    // Update localStorage
    localStorage.setItem(
      "foodtree-cart",
      JSON.stringify(cart.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item))),
    )
  }

  // Confirm item deletion
  const confirmDeleteItem = () => {
    if (itemToDelete) {
      const updatedCart = cart.filter((item) => item.id !== itemToDelete)
      setCart(updatedCart)
      localStorage.setItem("foodtree-cart", JSON.stringify(updatedCart))
      setShowDeleteConfirmation(false)
      setItemToDelete(null)
    }
  }

  // Clear cart with confirmation
  const clearCart = () => {
    setShowClearCartConfirmation(true)
  }

  // Confirm clear cart
  const confirmClearCart = () => {
    setCart([])
    localStorage.removeItem("foodtree-cart")
    setShowClearCartConfirmation(false)
  }

  // Apply promo code
  const applyPromoCode = () => {
    if (!promoCode.trim()) {
      setPromoError("Please enter a promo code")
      return
    }

    // Simulate API call to validate promo code
    setIsLoading(true)
    setTimeout(() => {
      // Mock successful promo code
      if (promoCode.toUpperCase() === "WELCOME10") {
        setAppliedPromoCode(promoCode.toUpperCase())
        setPromoDiscount(10)
        setPromoError(null)
        setShowPromoCodeDialog(false)
      } else {
        setPromoError("Invalid promo code")
      }
      setIsLoading(false)
    }, 1000)
  }

  // Handle name input change
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setContactInfo({ ...contactInfo, name: value })

    // Clear name error if field is now valid
    if (value.trim()) {
      setContactErrors((prev) => ({ ...prev, name: "" }))
    }
  }

  // Handle phone input change
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setContactInfo({ ...contactInfo, phone: value })

    // Clear phone error if field is now valid
    const phoneRegex = /^\d{10}$/
    if (phoneRegex.test(value)) {
      setContactErrors((prev) => ({ ...prev, phone: "" }))
    }
  }

  // Validate contact information
  const validateContactInfo = () => {
    let isValid = true
    const errors = {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
    }

    // Name validation
    if (!contactInfo.name.trim()) {
      errors.name = "Name is required"
      isValid = false
    }

    // Email validation
    const fullEmail = contactInfo.email + contactInfo.emailDomain
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!fullEmail || !emailRegex.test(fullEmail)) {
      errors.email = "Valid email is required"
      isValid = false
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/
    if (!contactInfo.phone || !phoneRegex.test(contactInfo.phone)) {
      errors.phone = "Valid 10-digit phone number is required"
      isValid = false
    }

    // Address validation for delivery method
    if (deliveryMethod === "delivery") {
      if (!contactInfo.address.trim()) {
        errors.address = "Address is required"
        isValid = false
      }

      if (!contactInfo.city.trim()) {
        errors.city = "City is required"
        isValid = false
      }

      if (!contactInfo.state.trim()) {
        errors.state = "State is required"
        isValid = false
      }
    }

    setContactErrors(errors)
    return isValid
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (step === "cart") {
      setStep("delivery")
    } else if (step === "delivery") {
      // Validate contact info before proceeding
      if (!validateContactInfo()) {
        return
      }
      setStep("payment")
    } else if (step === "payment") {
      // Process payment
      setIsLoading(true)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Generate random order number
      const randomOrderNumber = Math.floor(100000 + Math.random() * 900000).toString()
      setOrderNumber(randomOrderNumber)

      setIsLoading(false)
      setOrderPlaced(true)
      setStep("confirmation")

      // Clear cart
      setCart([])
      localStorage.removeItem("foodtree-cart")
    }
  }

  // Go to specific step
  const goToStep = (targetStep: "cart" | "delivery" | "payment") => {
    setStep(targetStep)
  }

  // Use saved address
  const handleUseSavedAddress = () => {
    const address = savedAddresses.find((addr) => addr.id === selectedSavedAddress)
    if (address) {
      setContactInfo({
        ...contactInfo,
        address: address.street,
        city: address.city,
        state: address.state,
        zipCode: address.zipCode,
      })
      setCurrentAddress(address)
    }
  }

  // Use saved payment
  const handleUseSavedPayment = () => {
    // In a real app, you would retrieve the saved payment method securely
    // Here we just simulate it
    const payment = savedPaymentMethods.find((p) => p.id === selectedSavedPayment)
    if (payment) {
      setCardInfo({
        ...cardInfo,
        cardNumber: `**** **** **** ${payment.lastFour}`,
        cardName: "Saved Card",
        expiry: payment.expiryDate,
        cvv: "***",
      })
    }
  }

  // Estimated delivery time
  const getEstimatedTime = () => {
    if (isScheduled && scheduledTime) {
      return scheduledTime.split("-")[0]
    }

    const now = new Date()
    const estimatedMinutes = deliveryMethod === "delivery" ? 45 : 25
    const estimatedTime = new Date(now.getTime() + estimatedMinutes * 60000)
    return estimatedTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  // Get step number for progress indicator
  const getStepNumber = () => {
    switch (step) {
      case "cart":
        return 1
      case "delivery":
        return 2
      case "payment":
        return 3
      case "confirmation":
        return 4
      default:
        return 1
    }
  }

  // Handle payment method selection
  const handlePaymentMethodSelect = (method: "card" | "cash" | "paypal" | "gift-card" | "crypto") => {
    setPaymentMethod(method)
    setShowPaymentMethodDialog(false)

    if (method === "card") {
      setShowCardDetailsDialog(true)
    } else if (method === "paypal") {
      setShowPayPalDialog(true)
    } else if (method === "gift-card") {
      setShowGiftCardDialog(true)
    } else if (method === "cash") {
      setShowCashDialog(true)
    }
  }

  // Handle scheduling
  const confirmSchedule = () => {
    if (scheduledTime) {
      // Format the scheduled time for display
      const dateObj =
        scheduledDate === "today"
          ? new Date()
          : scheduledDate === "tomorrow"
            ? new Date(new Date().setDate(new Date().getDate() + 1))
            : new Date(scheduledDate)

      const dateStr = dateObj.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      })

      const [startTime] = scheduledTime.split("-")
      const [hour, minute] = startTime.split(":")
      const hourNum = Number.parseInt(hour)
      const ampm = hourNum >= 12 ? "PM" : "AM"
      const hour12 = hourNum % 12 || 12

      const formattedTime = `${dateStr}, ${hour12}:${minute} ${ampm}`
      setFormattedScheduleTime(formattedTime)

      setIsScheduled(true)
      setShowScheduleDialog(false)
      setDeliveryOption("schedule")
    }
  }

  // Get payment method display text
  const getPaymentMethodText = () => {
    switch (paymentMethod) {
      case "card":
        return cardInfo.cardNumber
          ? `${cardInfo.cardNumber.startsWith("*") ? "Card" : "Card"} ending in ${cardInfo.cardNumber.slice(-4)}`
          : "Add Payment Method"
      case "cash":
        return "Cash on Delivery"
      case "paypal":
        return "PayPal"
      case "gift-card":
        return "Gift Card"
      case "crypto":
        return "Cryptocurrency"
      default:
        return "Add Payment Method"
    }
  }

  // Handle custom tip input
  const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === "" || /^\d+(\.\d{0,2})?$/.test(value)) {
      setCustomTipAmount(value)
      setTipAmount(0) // Reset preset tip amounts
    }
  }

  // Autofill contact information
  const handleAutofillContact = () => {
    setContactInfo({
      name: "John Doe",
      email: "john.doe",
      emailDomain: "@gmail.com",
      phone: "5551234567",
      countryCode: "+1",
      address: "123 Main St",
      city: "Cityville",
      state: "CA",
      zipCode: "12345",
    })
    setIsContactInfoLocked(true)
    setShowContactEditDialog(false)

    // Clear all errors since we've filled all fields
    setContactErrors({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
    })
  }

  // Toggle contact info lock
  const toggleContactInfoLock = () => {
    setIsContactInfoLocked(!isContactInfoLocked)
  }

  // Handle address search with caching
  const handleAddressSearch = useCallback(async (query: string) => {
    setAddressSearchQuery(query)

    if (query.trim() === "") {
      setAddressSearchResults([])
      return
    }

    // Check cache first
    if (geocodingCache.has(query)) {
      setAddressSearchResults(geocodingCache.get(query))
      return
    }

    // For demo purposes, we'll use the mock data
    // In a real app, you would call a geocoding API here
    const filteredResults = mockAddressSearchResults.filter(
      (result) =>
        result.name.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase()),
    )

    // Cache the results
    geocodingCache.set(query, filteredResults)
    setAddressSearchResults(filteredResults)
  }, [])

  // Select address from search results
  const selectAddress = (address) => {
    setNewAddress({
      ...newAddress,
      street: address.name,
      city: address.description.split(",")[0],
      state: "Sri Lanka",
    })
    setShowAddressesDialog(false)
    setShowAddressInfoDialog(true)
  }

  // Save address info with validation
  const saveAddressInfo = () => {
    // Validate address fields
    let isValid = true

    if (!newAddress.street.trim()) {
      alert("Street address is required")
      isValid = false
    }

    if (!newAddress.city.trim()) {
      alert("City is required")
      isValid = false
    }

    if (!newAddress.state.trim()) {
      alert("State is required")
      isValid = false
    }

    if (!isValid) return

    // In a real app, you would save this to a database
    const updatedAddress = {
      ...currentAddress,
      ...newAddress,
    }

    // Update the current address
    setCurrentAddress(updatedAddress)

    // Update contact info with the new address
    setContactInfo({
      ...contactInfo,
      address: updatedAddress.street,
      city: updatedAddress.city,
      state: updatedAddress.state,
      zipCode: updatedAddress.zipCode || "",
    })

    // Close the dialog
    setShowAddressInfoDialog(false)
  }

  // Edit address
  const handleEditAddress = () => {
    setShowAddressesDialog(true)
  }

  // Edit dropoff options
  const handleEditDropoff = () => {
    setShowDropoffOptionsDialog(true)
  }

  // Save dropoff options
  const saveDropoffOptions = () => {
    setShowDropoffOptionsDialog(false)
  }

  // Edit pin location
  const handleEditPin = () => {
    setMapError(null)
    setShowEditPinDialog(true)
  }

  // Handle location selection from the map with better error handling
  const handleLocationSelect = (location, address) => {
    if (!location || !address) {
      console.error("Invalid location or address received from map")
      setMapError("Failed to get location information. Please try again.")
      return
    }

    setSelectedLocation(location)

    try {
      // Parse the address components
      const addressParts = address.split(",").map((part) => part.trim())

      setCurrentAddress({
        ...currentAddress,
        street: addressParts[0] || "",
        city: addressParts[1] || "",
        state: addressParts[2] || "Sri Lanka",
      })

      // Update contact info with the new address
      setContactInfo({
        ...contactInfo,
        address: addressParts[0] || "",
        city: addressParts[1] || "",
        state: addressParts[2] || "Sri Lanka",
      })

      setShowEditPinDialog(false)
    } catch (error) {
      console.error("Error processing address:", error)
      setMapError("There was an error processing the address. Please try again.")
    }
  }

  // Handle map error
  const handleMapError = (error: string) => {
    setMapError(error)
  }

  // Generate QR code for dine-in
  const generateDineInQR = () => {
    setShowDineInQRDialog(true)
  }

  // Scan QR code for dine-in
  const scanDineInQR = () => {
    setShowScanQRDialog(true)
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/dashboard/view-menu" className="text-gray-600 hover:text-gray-900 mr-4">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-xl font-bold text-gray-900">
              {step === "confirmation" ? "Order Confirmation" : "Checkout"}
            </h1>
          </div>
          {!orderPlaced && (
            <div className="hidden md:flex items-center space-x-4">
              <div
                className={`flex items-center cursor-pointer ${step === "cart" ? "text-green-600 font-medium" : "text-gray-500"}`}
                onClick={() => step !== "confirmation" && goToStep("cart")}
              >
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center mr-2 ${step === "cart" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-600"}`}
                >
                  1
                </div>
                <span>Cart</span>
              </div>
              <div className="w-8 h-px bg-gray-300"></div>
              <div
                className={`flex items-center cursor-pointer ${step === "delivery" ? "text-green-600 font-medium" : "text-gray-500"}`}
                onClick={() => step !== "confirmation" && step !== "cart" && goToStep("delivery")}
              >
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center mr-2 ${step === "delivery" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-600"}`}
                >
                  2
                </div>
                <span>Delivery</span>
              </div>
              <div className="w-8 h-px bg-gray-300"></div>
              <div
                className={`flex items-center cursor-pointer ${step === "payment" ? "text-green-600 font-medium" : "text-gray-500"}`}
                onClick={() => step !== "confirmation" && step === "payment" && goToStep("payment")}
              >
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center mr-2 ${step === "payment" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-600"}`}
                >
                  3
                </div>
                <span>Payment</span>
              </div>
              <div className="w-8 h-px bg-gray-300"></div>
              <div
                className={`flex items-center ${step === "confirmation" ? "text-green-600 font-medium" : "text-gray-500"}`}
              >
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center mr-2 ${step === "confirmation" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-600"}`}
                >
                  4
                </div>
                <span>Confirmation</span>
              </div>
            </div>
          )}
          {/* Mobile step indicator */}
          {!orderPlaced && (
            <div className="flex md:hidden items-center space-x-1">
              <div className={`h-2 w-2 rounded-full ${getStepNumber() >= 1 ? "bg-green-600" : "bg-gray-300"}`}></div>
              <div className={`h-2 w-2 rounded-full ${getStepNumber() >= 2 ? "bg-green-600" : "bg-gray-300"}`}></div>
              <div className={`h-2 w-2 rounded-full ${getStepNumber() >= 3 ? "bg-green-600" : "bg-gray-300"}`}></div>
              <div className={`h-2 w-2 rounded-full ${getStepNumber() >= 4 ? "bg-green-600" : "bg-gray-300"}`}></div>
            </div>
          )}
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-6xl mx-auto py-8 px-6">
        {/* Cart Review */}
        {step === "cart" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Your Order</h2>
              {cart.length > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearCart}
                  className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear Cart
                </Button>
              )}
            </div>

            {cart.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <Card>
                    <CardContent className="p-6">
                      {cart.map((cartItem) => {
                        const menuItem = allMenuItems.find((item) => item.id === cartItem.id)
                        if (!menuItem) return null

                        return (
                          <div key={cartItem.id} className="flex items-center py-4 border-b last:border-0">
                            <div className="w-16 h-16 relative rounded-md overflow-hidden flex-shrink-0">
                              <Image
                                src={menuItem.image || "/placeholder.svg"}
                                alt={menuItem.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="ml-4 flex-grow">
                              <h3 className="font-medium">{menuItem.name}</h3>
                              <p className="text-sm text-gray-500">${menuItem.price.toFixed(2)}</p>
                            </div>
                            <div className="flex items-center">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-full"
                                onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
                              >
                                <span>-</span>
                              </Button>
                              <span className="mx-3 w-6 text-center">{cartItem.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-full"
                                onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
                              >
                                <span>+</span>
                              </Button>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 ml-4 text-gray-400 hover:text-red-500"
                                      onClick={() => {
                                        setItemToDelete(cartItem.id)
                                        setShowDeleteConfirmation(true)
                                      }}
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Remove item</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                          </div>
                        )
                      })}
                    </CardContent>
                  </Card>

                  <div className="mt-6">
                    <h3 className="font-medium mb-3">Special Instructions</h3>
                    <Textarea
                      placeholder="Add any special instructions or requests here..."
                      className="resize-none"
                      value={specialInstructions}
                      onChange={(e) => setSpecialInstructions(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-center mt-4">
                    <Button variant="outline" className="flex items-center" onClick={() => setShowARPreview(true)}>
                      <Eye className="h-4 w-4 mr-2" />
                      Preview in AR
                    </Button>
                  </div>
                </div>

                <div>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4">Order Summary</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Subtotal</span>
                          <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tax</span>
                          <span>${tax.toFixed(2)}</span>
                        </div>
                        {promoDiscount > 0 && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Promo Discount</span>
                            <span className="text-green-600">-${promoDiscount.toFixed(2)}</span>
                          </div>
                        )}
                        <Separator className="my-4" />
                        <div className="flex justify-between font-bold">
                          <span>Total</span>
                          <span>${(subtotal + tax - promoDiscount).toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-medium">Promo code/Coupon</h4>
                          {appliedPromoCode ? (
                            <Badge className="px-2 py-1 bg-green-100 text-green-800 hover:bg-green-200 border-0">
                              {appliedPromoCode}
                            </Badge>
                          ) : null}
                        </div>
                        {appliedPromoCode ? (
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <Check className="h-4 w-4 mr-2 text-green-600" />
                              <span className="text-sm text-green-700">
                                Promo applied: ${promoDiscount.toFixed(2)} off
                              </span>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-500 h-8"
                              onClick={() => {
                                setAppliedPromoCode(null)
                                setPromoDiscount(0)
                              }}
                            >
                              Remove
                            </Button>
                          </div>
                        ) : (
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full justify-between text-sm"
                            onClick={() => setShowPromoCodeDialog(true)}
                          >
                            <div className="flex items-center">
                              <Zap className="h-4 w-4 mr-2 text-green-600" />
                              Add promo code
                            </div>
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        )}
                      </div>

                      <Button className="w-full mt-6 bg-green-600 hover:bg-green-700" onClick={handleSubmit}>
                        Continue to Delivery
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>

                      <div className="mt-6 text-center">
                        <Link href="/dashboard/view-menu" className="text-green-600 hover:text-green-700 text-sm">
                          Add more items
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-4">Your cart is empty</h3>
                <p className="text-gray-600 mb-6">Add some delicious items to your order!</p>
                <Link href="/dashboard/view-menu">
                  <Button className="bg-green-600 hover:bg-green-700">Browse Menu</Button>
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Delivery Step */}
        {step === "delivery" && (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              {/* Delivery Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Delivery Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="dine-in" onValueChange={(value) => setDeliveryMethod(value as any)}>
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="dine-in" className="flex items-center gap-2">
                        <UtensilsCrossed className="h-4 w-4" />
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

              {/* Dine-In Details */}
              {deliveryMethod === "dine-in" && (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle>Dine-In Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="has-reservation"
                            checked={dineInDetails.hasReservation}
                            onCheckedChange={(checked) =>
                              setDineInDetails({ ...dineInDetails, hasReservation: checked as boolean })
                            }
                          />
                          <Label htmlFor="has-reservation">I have a reservation</Label>
                        </div>

                        {dineInDetails.hasReservation ? (
                          <div className="space-y-4 border rounded-md p-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="reservation-name">Reservation Name</Label>
                                <Input
                                  id="reservation-name"
                                  value={dineInDetails.reservationName}
                                  onChange={(e) =>
                                    setDineInDetails({ ...dineInDetails, reservationName: e.target.value })
                                  }
                                  placeholder="Name on reservation"
                                />
                              </div>
                              <div>
                                <Label htmlFor="reservation-code">Reservation Code</Label>
                                <Input
                                  id="reservation-code"
                                  value={dineInDetails.reservationCode}
                                  onChange={(e) =>
                                    setDineInDetails({ ...dineInDetails, reservationCode: e.target.value })
                                  }
                                  placeholder="Optional"
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-4 border rounded-md p-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="table-number">Table Number</Label>
                                <select
                                  id="table-number"
                                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                  value={dineInDetails.tableNumber}
                                  onChange={(e) =>
                                    setDineInDetails({ ...dineInDetails, tableNumber: Number(e.target.value) })
                                  }
                                >
                                  <option value={0}>Select table number</option>
                                  {tableNumbers.map((num) => (
                                    <option key={num} value={num}>
                                      Table {num}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div>
                                <Label htmlFor="party-size">Party Size</Label>
                                <Input
                                  id="party-size"
                                  type="number"
                                  min="1"
                                  value={dineInDetails.partySize}
                                  onChange={(e) =>
                                    setDineInDetails({ ...dineInDetails, partySize: Number(e.target.value) })
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="border rounded-md p-4">
                          <h3 className="font-medium mb-3">Special Requests</h3>
                          <Textarea
                            placeholder="Any special seating requests or dietary requirements?"
                            value={dineInDetails.specialRequests}
                            onChange={(e) => setDineInDetails({ ...dineInDetails, specialRequests: e.target.value })}
                            className="resize-none"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Group Ordering</CardTitle>
                      <CardDescription>Dining with others? Let them add items to your order.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="share-qr"
                            checked={dineInDetails.shareQrCode}
                            onCheckedChange={(checked) =>
                              setDineInDetails({ ...dineInDetails, shareQrCode: checked as boolean })
                            }
                          />
                          <Label htmlFor="share-qr">Enable group ordering</Label>
                        </div>

                        {dineInDetails.shareQrCode && (
                          <div className="border rounded-md p-4 text-center">
                            <div className="bg-gray-100 h-48 w-48 mx-auto flex items-center justify-center mb-4">
                              <QrCode className="h-24 w-24 text-gray-400" />
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                              Share this QR code with your dining companions so they can add items to your order.
                            </p>
                            <div className="flex justify-center space-x-2">
                              <Button variant="outline" size="sm" onClick={generateDineInQR}>
                                <QrCode className="h-4 w-4 mr-2" />
                                Generate QR
                              </Button>
                              <Button variant="outline" size="sm" onClick={scanDineInQR}>
                                <Users className="h-4 w-4 mr-2" />
                                Scan Friend's QR
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}

              {/* Delivery Options - Only show for delivery method */}
              {deliveryMethod === "delivery" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Delivery Options</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      defaultValue="standard"
                      value={deliveryOption}
                      onValueChange={(value) => setDeliveryOption(value as any)}
                      className="space-y-3"
                    >
                      <div
                        className={`flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-gray-50 ${deliveryOption === "standard" ? "border-green-500 bg-green-50" : ""}`}
                        onClick={() => setDeliveryOption("standard")}
                      >
                        <RadioGroupItem value="standard" id="standard" className="cursor-pointer" />
                        <Label htmlFor="standard" className="flex-1 cursor-pointer">
                          <div className="font-medium">Standard Delivery</div>
                          <div className="text-sm text-gray-500">Estimated delivery in 30-45 minutes</div>
                        </Label>
                        <div className="font-medium">$3.99</div>
                      </div>

                      <div
                        className={`flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-gray-50 ${deliveryOption === "drone" ? "border-green-500 bg-green-50" : ""}`}
                        onClick={() => setDeliveryOption("drone")}
                      >
                        <RadioGroupItem value="drone" id="drone" className="cursor-pointer" />
                        <Label htmlFor="drone" className="flex-1 cursor-pointer">
                          <div className="font-medium">Drone Delivery</div>
                          <div className="text-sm text-gray-500">Estimated delivery in 15-20 minutes</div>
                        </Label>
                        <div className="font-medium">$7.99</div>
                      </div>

                      <div
                        className={`flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-gray-50 ${deliveryOption === "schedule" ? "border-green-500 bg-green-50" : ""}`}
                        onClick={() => {
                          setDeliveryOption("schedule")
                          if (!isScheduled) {
                            setShowScheduleDialog(true)
                          }
                        }}
                      >
                        <RadioGroupItem value="schedule" id="schedule" className="cursor-pointer" />
                        <Label htmlFor="schedule" className="flex-1 cursor-pointer">
                          <div className="font-medium">Schedule Delivery</div>
                          <div className="text-sm text-gray-500">
                            {isScheduled && formattedScheduleTime
                              ? formattedScheduleTime
                              : "Choose a time that works for you"}
                          </div>
                        </Label>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            setShowScheduleDialog(true)
                          }}
                        >
                          <Calendar className="h-4 w-4 mr-2" />
                          {isScheduled ? "Change" : "Select Time"}
                        </Button>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
              )}

              {/* Delivery Details - Only show for delivery method */}
              {deliveryMethod === "delivery" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Delivery Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Address */}
                    <div className="border rounded-md p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                          <span className="font-medium">Delivery Address</span>
                        </div>
                        <Button variant="ghost" size="sm" onClick={handleEditAddress}>
                          {!contactInfo.address ? "Add" : "Edit"}
                        </Button>
                      </div>

                      {contactInfo.address ? (
                        <div className="text-sm">
                          <p className="font-medium text-green-700">{contactInfo.address}</p>
                          <p className="text-green-600">
                            {contactInfo.city}, {contactInfo.state}
                          </p>
                        </div>
                      ) : (
                        <div className="py-2">
                          <p className="text-amber-600 mb-3">
                            Please add your delivery address to continue. Click the "Add" button to enter your address
                            details.
                          </p>
                          <p className="text-gray-500 text-sm italic">
                            Your delivery address is required to calculate delivery fees and estimated arrival times.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Dropoff Options */}
                    <div className="border rounded-md p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <User className="h-5 w-5 text-gray-500 mr-2" />
                          <span className="font-medium">Dropoff Preference</span>
                        </div>
                        <Button variant="ghost" size="sm" onClick={handleEditDropoff}>
                          {!selectedDropoffOption ? "Add" : "Edit"}
                        </Button>
                      </div>

                      {selectedDropoffOption ? (
                        <div className="text-sm">
                          <p className="font-medium text-green-700">
                            {dropoffOptions.find((opt) => opt.id === selectedDropoffOption)?.label}
                          </p>
                          {deliveryInstructions && (
                            <div className="mt-2 p-2 rounded border">
                              <p className="text-green-600">{deliveryInstructions}</p>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="text-center py-3 border border-dashed rounded-md">
                          <p className="text-gray-600 mb-2">Please select your dropoff preference</p>
                          <Button variant="outline" size="sm" onClick={handleEditDropoff}>
                            Set Preference
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Pickup Details - Only show for pickup method */}
              {deliveryMethod === "pickup" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Pickup Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="border rounded-md p-4">
                      <h3 className="font-medium mb-3">Restaurant Location</h3>
                      <div className="flex items-center mb-3">
                        <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                        <span>123 Restaurant Street, Cityville</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-gray-500 mr-2" />
                        <span>Ready in approximately 20-25 minutes</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={contactInfo.name}
                          onChange={handleNameChange}
                          disabled={isContactInfoLocked}
                          className={contactErrors.name ? "border-red-500" : ""}
                        />
                        {contactErrors.name && <p className="text-red-500 text-sm mt-1">{contactErrors.name}</p>}
                      </div>

                      <div>
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Input
                            id="email"
                            placeholder="email@example.com"
                            value={contactInfo.email + contactInfo.emailDomain}
                            onChange={handleEmailChange}
                            disabled={isContactInfoLocked}
                            ref={emailInputRef}
                            className={contactErrors.email ? "border-red-500" : ""}
                          />
                          {showEmailDomains && (
                            <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg">
                              {emailDomains.map((domain) => (
                                <div
                                  key={domain}
                                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                  onClick={() => selectEmailDomain(domain)}
                                >
                                  {emailPrefix + domain}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        {contactErrors.email && <p className="text-red-500 text-sm mt-1">{contactErrors.email}</p>}
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="flex">
                          <select
                            value={contactInfo.countryCode}
                            onChange={(e) => setContactInfo({ ...contactInfo, countryCode: e.target.value })}
                            disabled={isContactInfoLocked}
                            className="w-20 rounded-l-md border border-r-0 border-input bg-background px-3 py-2 text-sm"
                          >
                            {countryCodes.map((country) => (
                              <option key={country.code} value={country.code}>
                                {country.code}
                              </option>
                            ))}
                          </select>
                          <Input
                            id="phone"
                            placeholder="5551234567"
                            value={contactInfo.phone}
                            onChange={handlePhoneChange}
                            disabled={isContactInfoLocked}
                            className={`rounded-l-none ${contactErrors.phone ? "border-red-500" : ""}`}
                          />
                        </div>
                        {contactErrors.phone && <p className="text-red-500 text-sm mt-1">{contactErrors.phone}</p>}
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm" onClick={handleAutofillContact}>
                        Autofill
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Order Items Summary */}
                  <div className="space-y-2">
                    {cart.map((cartItem) => {
                      const menuItem = allMenuItems.find((item) => item.id === cartItem.id)
                      if (!menuItem) return null

                      return (
                        <div key={cartItem.id} className="flex justify-between text-sm">
                          <span>
                            {cartItem.quantity} × {menuItem.name}
                          </span>
                          <span>${(menuItem.price * cartItem.quantity).toFixed(2)}</span>
                        </div>
                      )
                    })}
                  </div>

                  <Separator />

                  {/* Price Breakdown */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    {deliveryMethod === "delivery" && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Delivery Fee</span>
                        <span>${deliveryFee.toFixed(2)}</span>
                      </div>
                    )}
                    {isScheduled && deliveryOption === "schedule" && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Scheduled For</span>
                        <Badge variant="outline" className="font-normal">
                          {formattedScheduleTime}
                        </Badge>
                      </div>
                    )}
                    {promoDiscount > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Promo Discount</span>
                        <span className="text-green-600">-${promoDiscount.toFixed(2)}</span>
                      </div>
                    )}
                    <Separator />
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700" onClick={handleSubmit}>
                    Continue to Payment
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}

        {/* Payment Step */}
        {step === "payment" && (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    defaultValue="card"
                    value={paymentMethod}
                    onValueChange={(value) => setPaymentMethod(value as any)}
                    className="space-y-3"
                  >
                    <div
                      className={`flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-gray-50 ${
                        paymentMethod === "card" ? "border-green-500 bg-green-50" : ""
                      }`}
                      onClick={() => setPaymentMethod("card")}
                    >
                      <RadioGroupItem value="card" id="card" className="cursor-pointer" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        <div className="flex items-center">
                          <CreditCard className="h-4 w-4 mr-2" />
                          <span className="font-medium">Credit/Debit Card</span>
                        </div>
                      </Label>
                    </div>

                    <div
                      className={`flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-gray-50 ${
                        paymentMethod === "paypal" ? "border-green-500 bg-green-50" : ""
                      }`}
                      onClick={() => setPaymentMethod("paypal")}
                    >
                      <RadioGroupItem value="paypal" id="paypal" className="cursor-pointer" />
                      <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                        <div className="flex items-center">
                          <div className="h-4 w-4 mr-2 text-blue-600 font-bold">P</div>
                          <span className="font-medium">PayPal</span>
                        </div>
                      </Label>
                    </div>

                    <div
                      className={`flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-gray-50 ${
                        paymentMethod === "cash" ? "border-green-500 bg-green-50" : ""
                      }`}
                      onClick={() => setPaymentMethod("cash")}
                    >
                      <RadioGroupItem value="cash" id="cash" className="cursor-pointer" />
                      <Label htmlFor="cash" className="flex-1 cursor-pointer">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-2" />
                          <span className="font-medium">Cash on Delivery</span>
                        </div>
                      </Label>
                    </div>

                    <div
                      className={`flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-gray-50 ${
                        paymentMethod === "gift-card" ? "border-green-500 bg-green-50" : ""
                      }`}
                      onClick={() => setPaymentMethod("gift-card")}
                    >
                      <RadioGroupItem value="gift-card" id="gift-card" className="cursor-pointer" />
                      <Label htmlFor="gift-card" className="flex-1 cursor-pointer">
                        <div className="flex items-center">
                          <Gift className="h-4 w-4 mr-2" />
                          <span className="font-medium">Gift Card</span>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Card Details - Only show for card payment method */}
              {paymentMethod === "card" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Card Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input
                          id="card-number"
                          placeholder="1234 5678 9012 3456"
                          value={cardInfo.cardNumber}
                          onChange={(e) => setCardInfo({ ...cardInfo, cardNumber: e.target.value })}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="card-name">Name on Card</Label>
                          <Input
                            id="card-name"
                            placeholder="John Doe"
                            value={cardInfo.cardName}
                            onChange={(e) => setCardInfo({ ...cardInfo, cardName: e.target.value })}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input
                              id="expiry"
                              placeholder="MM/YY"
                              value={cardInfo.expiry}
                              onChange={(e) => setCardInfo({ ...cardInfo, expiry: e.target.value })}
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                              id="cvv"
                              placeholder="123"
                              value={cardInfo.cvv}
                              onChange={(e) => setCardInfo({ ...cardInfo, cvv: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 pt-2">
                        <Checkbox
                          id="save-card"
                          checked={savePaymentInfo}
                          onCheckedChange={(checked) => setSavePaymentInfo(checked as boolean)}
                        />
                        <Label htmlFor="save-card">Save card for future payments</Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Tip Options */}
              <Card>
                <CardHeader>
                  <CardTitle>Add a Tip</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-4 gap-2">
                      {[0, 5, 10, 15].map((amount) => (
                        <Button
                          key={amount}
                          variant={tipAmount === amount && !customTipAmount ? "default" : "outline"}
                          className={tipAmount === amount && !customTipAmount ? "bg-green-600 hover:bg-green-700" : ""}
                          onClick={() => {
                            setTipAmount(amount)
                            setCustomTipAmount("")
                          }}
                        >
                          {amount === 0 ? "No Tip" : `${amount}%`}
                        </Button>
                      ))}
                    </div>

                    <div>
                      <Label htmlFor="custom-tip">Custom Tip</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
                        <Input
                          id="custom-tip"
                          className="pl-8"
                          placeholder="Enter custom amount"
                          value={customTipAmount}
                          onChange={handleCustomTipChange}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Order Items Summary */}
                  <div className="space-y-2">
                    {cart.map((cartItem) => {
                      const menuItem = allMenuItems.find((item) => item.id === cartItem.id)
                      if (!menuItem) return null

                      return (
                        <div key={cartItem.id} className="flex justify-between text-sm">
                          <span>
                            {cartItem.quantity} × {menuItem.name}
                          </span>
                          <span>${(menuItem.price * cartItem.quantity).toFixed(2)}</span>
                        </div>
                      )
                    })}
                  </div>

                  <Separator />

                  {/* Price Breakdown */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    {deliveryMethod === "delivery" && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Delivery Fee</span>
                        <span>${deliveryFee.toFixed(2)}</span>
                      </div>
                    )}
                    {tip > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tip</span>
                        <span>${tip.toFixed(2)}</span>
                      </div>
                    )}
                    {isScheduled && deliveryOption === "schedule" && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Scheduled For</span>
                        <Badge variant="outline" className="font-normal">
                          {formattedScheduleTime}
                        </Badge>
                      </div>
                    )}
                    {promoDiscount > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Promo Discount</span>
                        <span className="text-green-600">-${promoDiscount.toFixed(2)}</span>
                      </div>
                    )}
                    <Separator />
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700" onClick={handleSubmit}>
                    Place Order
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}

        {/* Confirmation Step */}
        {step === "confirmation" && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-6">
              <Check className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Order Confirmed!</h2>
            <p className="text-gray-600 mb-6">Your order #{orderNumber} has been placed successfully.</p>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="font-medium text-lg mb-4">Order Details</h3>
              <div className="grid grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-gray-500 text-sm">Order Type</p>
                  <p className="font-medium capitalize">{deliveryMethod}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Estimated Time</p>
                  <p className="font-medium">{getEstimatedTime()}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Payment Method</p>
                  <p className="font-medium">{paymentMethod === "card" ? "Credit Card" : paymentMethod}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Total Amount</p>
                  <p className="font-medium">${total.toFixed(2)}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" asChild>
                <Link href="/dashboard/track/123456">Track Order</Link>
              </Button>
              <Button asChild>
                <Link href="/dashboard">Return to Dashboard</Link>
              </Button>
            </div>
          </div>
        )}

        {/* Delete Item Confirmation Dialog */}
        <Dialog open={showDeleteConfirmation} onOpenChange={setShowDeleteConfirmation}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Remove Item</DialogTitle>
              <DialogDescription>Are you sure you want to remove this item from your cart?</DialogDescription>
            </DialogHeader>
            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline" onClick={() => setShowDeleteConfirmation(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={confirmDeleteItem}>
                Remove
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Clear Cart Confirmation Dialog */}
        <Dialog open={showClearCartConfirmation} onOpenChange={setShowClearCartConfirmation}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Clear Cart</DialogTitle>
              <DialogDescription>Are you sure you want to clear all items from your cart?</DialogDescription>
            </DialogHeader>
            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline" onClick={() => setShowClearCartConfirmation(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={confirmClearCart}>
                Clear Cart
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Promo Code Dialog */}
        <Dialog open={showPromoCodeDialog} onOpenChange={setShowPromoCodeDialog}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Promo Code</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <Input placeholder="Enter promo code" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
              {promoError && <p className="text-red-500 text-sm mt-2">{promoError}</p>}
              <p className="text-sm text-gray-500 mt-2">Try "WELCOME10" for $10 off your first order</p>
            </div>
            <DialogFooter className="flex space-x-2 sm:space-x-0">
              <Button variant="outline" onClick={() => setShowPromoCodeDialog(false)}>
                Cancel
              </Button>
              <Button onClick={applyPromoCode} disabled={isLoading}>
                {isLoading ? "Applying..." : "Apply"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Schedule Dialog */}
        <Dialog open={showScheduleDialog} onOpenChange={setShowScheduleDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Schedule Delivery</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label htmlFor="delivery-date">Delivery Date</Label>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {availableDates.slice(0, 4).map((date) => (
                    <div
                      key={date.value}
                      className={`flex flex-col items-center justify-center p-2 border rounded-md cursor-pointer hover:bg-gray-50 ${
                        scheduledDate === date.value ? "border-green-500 bg-green-50" : ""
                      }`}
                      onClick={() => setScheduledDate(date.value)}
                    >
                      <span className="text-sm font-medium">{date.display}</span>
                      <span className="text-2xl font-bold">{date.dateNum}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="delivery-time">Delivery Time</Label>
                <div className="grid grid-cols-2 gap-2 mt-2 max-h-[200px] overflow-y-auto">
                  {timeSlots.map((slot) => (
                    <div
                      key={slot.id}
                      className={`p-2 border rounded-md cursor-pointer hover:bg-gray-50 ${
                        scheduledTime === slot.value ? "border-green-500 bg-green-50" : ""
                      }`}
                      onClick={() => setScheduledTime(slot.value)}
                    >
                      <span className="text-sm">{slot.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowScheduleDialog(false)}>
                Cancel
              </Button>
              <Button onClick={confirmSchedule} disabled={!scheduledTime}>
                Confirm
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Addresses Dialog */}
        <Dialog open={showAddressesDialog} onOpenChange={setShowAddressesDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader className="flex flex-row items-center justify-between">
              <DialogTitle>Addresses</DialogTitle>
              <Button variant="ghost" size="icon" onClick={() => setShowAddressesDialog(false)}>
                <X className="h-4 w-4" />
              </Button>
            </DialogHeader>
            <div className="py-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search for an address"
                  value={addressSearchQuery}
                  onChange={(e) => handleAddressSearch(e.target.value)}
                  className="pl-10 pr-10"
                />
                {addressSearchQuery && addressSearchResults.length > 0 ? (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6"
                    onClick={() => {
                      setAddressSearchQuery("")
                      setAddressSearchResults([])
                    }}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                ) : (
                  <>
                    {savedAddresses.length > 0 && (
                      <>
                        <h3 className="font-medium text-sm mb-2">Saved addresses</h3>
                        <div className="space-y-2 mb-4">
                          {savedAddresses.map((address) => (
                            <div
                              key={address.id}
                              className="flex items-start justify-between p-3 border rounded-md cursor-pointer hover:bg-gray-50"
                              onClick={() => {
                                setCurrentAddress(address)
                                setContactInfo({
                                  ...contactInfo,
                                  address: address.street,
                                  city: address.city,
                                  state: address.state,
                                  zipCode: address.zipCode || "",
                                })
                                setShowAddressesDialog(false)
                              }}
                            >
                              <div className="flex items-start">
                                <MapPin className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                                <div>
                                  <p className="font-medium">{address.street}</p>
                                  <p className="text-sm text-gray-500">
                                    {address.city}, {address.state}
                                  </p>
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setNewAddress({
                                    ...address,
                                    id: address.id,
                                  })
                                  setShowAddressesDialog(false)
                                  setShowAddressInfoDialog(true)
                                }}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </>
                    )}

                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center"
                      onClick={() => {
                        setNewAddress({
                          id: `addr${savedAddresses.length + 1}`,
                          name: "",
                          street: "",
                          city: "",
                          state: "",
                          zipCode: "",
                          isDefault: false,
                          buildingType: "Other",
                          apt: "",
                          buildingName: "",
                          landmark: "",
                        })
                        setShowAddressesDialog(false)
                        setShowAddressInfoDialog(true)
                      }}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add New Address
                    </Button>
                  </>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Address Info Dialog */}
        <Dialog open={showAddressInfoDialog} onOpenChange={setShowAddressInfoDialog}>
          <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
            <DialogHeader className="flex flex-row items-center justify-between">
              <DialogTitle>Address Info</DialogTitle>
              <Button variant="ghost" size="icon" onClick={() => setShowAddressInfoDialog(false)}>
                <X className="h-4 w-4" />
              </Button>
            </DialogHeader>
            <div className="py-4 space-y-4">
              {/* Map Preview */}
              <div className="h-[150px] bg-gray-100 rounded-md relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button variant="outline" onClick={handleEditPin}>
                    <MapPin className="h-4 w-4 mr-2" />
                    Set Pin Location
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="street">Street Address</Label>
                  <Input
                    id="street"
                    value={newAddress.street}
                    onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
                    placeholder="123 Main St"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="building-type">Building Type</Label>
                    <select
                      id="building-type"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={newAddress.buildingType}
                      onChange={(e) => setNewAddress({ ...newAddress, buildingType: e.target.value })}
                    >
                      {buildingTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="apt">Apt / Suite</Label>
                    <Input
                      id="apt"
                      value={newAddress.apt}
                      onChange={(e) => setNewAddress({ ...newAddress, apt: e.target.value })}
                      placeholder="e.g. 123B"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="building-name">Business / Building name</Label>
                  <Input
                    id="building-name"
                    value={newAddress.buildingName}
                    onChange={(e) => setNewAddress({ ...newAddress, buildingName: e.target.value })}
                    placeholder="e.g. Central Tower"
                  />
                </div>

                <div>
                  <Label htmlFor="landmark">Landmark</Label>
                  <Input
                    id="landmark"
                    value={newAddress.landmark}
                    onChange={(e) => setNewAddress({ ...newAddress, landmark: e.target.value })}
                    placeholder="e.g. Kelaniya Railway Station"
                  />
                </div>

                <div>
                  <Label htmlFor="address-label">Address Label</Label>
                  <Input
                    id="address-label"
                    value={newAddress.name}
                    onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                    placeholder="e.g. Home, Work"
                  />
                </div>
              </div>
            </div>
            <DialogFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setShowAddressInfoDialog(false)}>
                Back
              </Button>
              <Button onClick={saveAddressInfo}>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Edit Pin Dialog */}
        <Dialog
          open={showEditPinDialog}
          onOpenChange={(open) => {
            setShowEditPinDialog(open)
          }}
        >
          <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto p-0">
            <DialogHeader className="p-4 pb-0">
              <DialogTitle>Edit pin</DialogTitle>
            </DialogHeader>
            <div className="p-0">
              <div className="relative">
                <SecureMapWrapper
                  initialLocation={selectedLocation || undefined}
                  onLocationSelect={handleLocationSelect}
                />
                {mapError && (
                  <Alert variant="destructive" className="mt-4 mx-4">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>{mapError}</AlertDescription>
                  </Alert>
                )}
                <p className="text-sm text-gray-600 p-4">
                  Move the pin to highlight the correct door or entrance to help your delivery person drop-off easier.
                </p>
              </div>
            </div>
            <div className="flex justify-between p-4">
              <Button variant="outline" onClick={() => setShowEditPinDialog(false)}>
                Back
              </Button>
              <Button onClick={() => setShowEditPinDialog(false)}>Confirm</Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Dropoff Options Dialog */}
        <Dialog open={showDropoffOptionsDialog} onOpenChange={setShowDropoffOptionsDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader className="flex flex-row items-center justify-between">
              <DialogTitle>Dropoff options</DialogTitle>
              <Button variant="ghost" size="icon" onClick={() => setShowDropoffOptionsDialog(false)}>
                <X className="h-4 w-4" />
              </Button>
            </DialogHeader>
            <div className="py-4">
              <p className="mb-2">
                Deliver to {currentAddress.street}{" "}
                <Button variant="link" className="h-auto p-0 text-green-600">
                  Add APT / Suite
                </Button>
              </p>

              <div className="border rounded-md overflow-hidden mb-4">
                <div className="p-3 border-b">
                  <h3 className="font-medium mb-2 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <User className="h-4 w-4 text-green-600" />
                    </div>
                    Hand it to me
                  </h3>
                  <RadioGroup value={selectedDropoffOption} onValueChange={setSelectedDropoffOption}>
                    {dropoffOptions
                      .filter((opt) => opt.group === "Hand it to me")
                      .map((option) => (
                        <div key={option.id} className="flex items-center space-x-2 py-2">
                          <RadioGroupItem value={option.id} id={option.id} />
                          <Label htmlFor={option.id}>{option.label}</Label>
                        </div>
                      ))}
                  </RadioGroup>
                </div>

                <div className="p-3">
                  <h3 className="font-medium mb-2 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <MapPin className="h-4 w-4 text-green-600" />
                    </div>
                    Leave at location
                  </h3>
                  <RadioGroup value={selectedDropoffOption} onValueChange={setSelectedDropoffOption}>
                    {dropoffOptions
                      .filter((opt) => opt.group === "Leave at location")
                      .map((option) => (
                        <div key={option.id} className="flex items-center space-x-2 py-2">
                          <RadioGroupItem value={option.id} id={option.id} />
                          <Label htmlFor={option.id}>{option.label}</Label>
                        </div>
                      ))}
                  </RadioGroup>
                </div>
              </div>

              <div>
                <Label htmlFor="delivery-instructions">Instructions for delivery person</Label>
                <Textarea
                  id="delivery-instructions"
                  placeholder="Example: Please knock instead of using the doorbell"
                  value={deliveryInstructions}
                  onChange={(e) => setDeliveryInstructions(e.target.value)}
                  className="resize-none"
                />
              </div>
            </div>
            <DialogFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setShowDropoffOptionsDialog(false)}>
                Back
              </Button>
              <Button onClick={saveDropoffOptions}>Update</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Dine-In QR Code Dialog */}
        <Dialog open={showDineInQRDialog} onOpenChange={setShowDineInQRDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Group Order QR Code</DialogTitle>
              <DialogDescription>Share this QR code with your dining companions</DialogDescription>
            </DialogHeader>
            <div className="py-4 flex flex-col items-center">
              <div className="bg-gray-100 h-64 w-64 flex items-center justify-center mb-4">
                <QrCode className="h-32 w-32 text-gray-400" />
              </div>
              <p className="text-center text-sm text-gray-600 mb-4">
                Your friends can scan this QR code to add items to your order.
              </p>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowDineInQRDialog(false)}>
                Close
              </Button>
              <Button>Share QR Code</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Scan QR Code Dialog */}
        <Dialog open={showScanQRDialog} onOpenChange={setShowScanQRDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Scan Friend's QR Code</DialogTitle>
              <DialogDescription>Scan your friend's QR code to add your items to their order</DialogDescription>
            </DialogHeader>
            <div className="py-4 flex flex-col items-center">
              <div className="bg-gray-100 h-64 w-64 flex items-center justify-center mb-4">
                <div className="relative">
                  <div className="absolute inset-0 border-2 border-green-500 animate-pulse"></div>
                  <div className="h-48 w-48 flex items-center justify-center">
                    <p className="text-gray-400 text-center">Point camera at QR code</p>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowScanQRDialog(false)}>
                Cancel
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

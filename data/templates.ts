export interface Template {
  id: string
  name: string
  description: string
  longDescription: string
  image: string
  profileImage: string
  color: string
  isPro: boolean
  category: string
  featured: boolean
  new: boolean
  rating: number
  reviewCount: number
  features: string[]
  sampleItems: Array<{
    name: string
    description: string
    price: string
  }>
  design: {
    primaryColor: string
    secondaryColor: string
    fontFamily: string
    layout: string
    style: string
  }
}

export const templates: Template[] = [
  {
    id: "classic",
    name: "Classic Menu",
    description: "Clean and simple design for any restaurant",
    longDescription:
      "The Classic Menu template offers a timeless design that works well for any type of restaurant. With its clean layout and easy-to-read typography, your customers will have no trouble navigating your menu items.",
    image: "/placeholder.svg?height=600&width=300",
    profileImage: "/placeholder.svg?height=80&width=80",
    color: "bg-gradient-to-br from-gray-100 to-gray-200",
    isPro: false,
    category: "casual",
    featured: false,
    new: false,
    rating: 4.8,
    reviewCount: 124,
    features: [
      "Clean, minimalist design",
      "Easy-to-read typography",
      "Customizable color scheme",
      "Mobile-friendly layout",
      "Category organization",
      "Item descriptions and prices",
    ],
    sampleItems: [
      {
        name: "Classic Burger",
        description: "Beef patty with lettuce, tomato, onion, and special sauce",
        price: "$12",
      },
      {
        name: "Caesar Salad",
        description: "Romaine lettuce, croutons, parmesan cheese with Caesar dressing",
        price: "$10",
      },
      {
        name: "Chocolate Cake",
        description: "Rich chocolate cake with vanilla ice cream",
        price: "$8",
      },
    ],
    design: {
      primaryColor: "#374151",
      secondaryColor: "#9CA3AF",
      fontFamily: "Inter",
      layout: "grid",
      style: "minimal",
    },
  },
  {
    id: "bistro",
    name: "Bistro Elegance",
    description: "Elegant design for fine dining establishments",
    longDescription:
      "The Bistro template is perfect for fine dining restaurants looking to create a sophisticated digital menu. With its elegant typography and refined layout, this template helps showcase your culinary creations in style.",
    image: "/placeholder.svg?height=600&width=300",
    profileImage: "/placeholder.svg?height=80&width=80",
    color: "bg-gradient-to-br from-amber-100 to-amber-200",
    isPro: true,
    category: "fine",
    featured: true,
    new: false,
    rating: 4.9,
    reviewCount: 87,
    features: [
      "Elegant typography",
      "High-quality food imagery",
      "Sophisticated color palette",
      "Wine list integration",
      "Chef's specials section",
      "Seasonal menu support",
    ],
    sampleItems: [
      {
        name: "Beef Wellington",
        description: "Prime beef fillet, wild mushrooms, Parma ham, wrapped in puff pastry",
        price: "$38",
      },
      {
        name: "Lobster Bisque",
        description: "Creamy lobster soup with brandy and fresh herbs",
        price: "$16",
      },
      {
        name: "Chocolate Soufflé",
        description: "Warm chocolate soufflé with vanilla ice cream",
        price: "$12",
      },
    ],
    design: {
      primaryColor: "#92400E",
      secondaryColor: "#F59E0B",
      fontFamily: "Playfair Display",
      layout: "elegant",
      style: "luxury",
    },
  },
  {
    id: "street-food",
    name: "Street Food Vibes",
    description: "Bold and vibrant design for casual eateries",
    longDescription:
      "The Street Food template brings energy and excitement to your menu with its bold colors and vibrant design. Perfect for food trucks, casual eateries, and any restaurant with a fun, energetic vibe.",
    image: "/placeholder.svg?height=600&width=300",
    profileImage: "/placeholder.svg?height=80&width=80",
    color: "bg-gradient-to-br from-red-100 to-orange-200",
    isPro: false,
    category: "fast",
    featured: false,
    new: true,
    rating: 4.7,
    reviewCount: 156,
    features: [
      "Bold, vibrant colors",
      "Fun typography",
      "Visual food categories",
      "Special combo highlights",
      "Quick-view pricing",
      "Mobile-optimized design",
    ],
    sampleItems: [
      {
        name: "Loaded Street Tacos",
        description: "Three corn tortillas with your choice of protein, onions, cilantro, and salsa",
        price: "$9",
      },
      {
        name: "Loaded Fries",
        description: "Crispy fries topped with cheese sauce, bacon bits, and green onions",
        price: "$7",
      },
      {
        name: "Churros",
        description: "Fried dough pastry with cinnamon sugar and chocolate dipping sauce",
        price: "$5",
      },
    ],
    design: {
      primaryColor: "#DC2626",
      secondaryColor: "#F97316",
      fontFamily: "Poppins",
      layout: "cards",
      style: "vibrant",
    },
  },
  {
    id: "modern-cafe",
    name: "Modern Café",
    description: "Contemporary design for coffee shops and cafés",
    longDescription:
      "A sleek and modern template perfect for coffee shops, cafés, and casual dining establishments. Features clean lines, beautiful typography, and a focus on showcasing your beverages and light meals.",
    image: "/placeholder.svg?height=600&width=300",
    profileImage: "/placeholder.svg?height=80&width=80",
    color: "bg-gradient-to-br from-emerald-100 to-teal-200",
    isPro: false,
    category: "cafe",
    featured: true,
    new: true,
    rating: 4.6,
    reviewCount: 203,
    features: [
      "Modern, clean design",
      "Coffee-focused layout",
      "Instagram-ready styling",
      "Seasonal specials section",
      "Loyalty program integration",
      "Social media links",
    ],
    sampleItems: [
      {
        name: "Artisan Latte",
        description: "House-roasted espresso with steamed milk and latte art",
        price: "$4.50",
      },
      {
        name: "Avocado Toast",
        description: "Smashed avocado on sourdough with cherry tomatoes and feta",
        price: "$8",
      },
      {
        name: "Blueberry Muffin",
        description: "Fresh baked muffin with wild blueberries and streusel topping",
        price: "$3.50",
      },
    ],
    design: {
      primaryColor: "#059669",
      secondaryColor: "#10B981",
      fontFamily: "Inter",
      layout: "modern",
      style: "clean",
    },
  },
  {
    id: "pizza-house",
    name: "Pizza House",
    description: "Italian-inspired design for pizzerias",
    longDescription:
      "Bring the authentic Italian pizzeria experience to your digital menu with this warm and inviting template. Perfect for pizza restaurants, Italian eateries, and family dining establishments.",
    image: "/placeholder.svg?height=600&width=300",
    profileImage: "/placeholder.svg?height=80&width=80",
    color: "bg-gradient-to-br from-red-100 to-yellow-200",
    isPro: true,
    category: "ethnic",
    featured: false,
    new: false,
    rating: 4.8,
    reviewCount: 142,
    features: [
      "Italian-inspired design",
      "Pizza size options",
      "Ingredient highlights",
      "Family meal deals",
      "Authentic color scheme",
      "Traditional typography",
    ],
    sampleItems: [
      {
        name: "Margherita Pizza",
        description: "Fresh mozzarella, tomato sauce, basil, and olive oil",
        price: "$14",
      },
      {
        name: "Pepperoni Classic",
        description: "Pepperoni, mozzarella cheese, and our signature tomato sauce",
        price: "$16",
      },
      {
        name: "Tiramisu",
        description: "Traditional Italian dessert with coffee-soaked ladyfingers",
        price: "$7",
      },
    ],
    design: {
      primaryColor: "#DC2626",
      secondaryColor: "#FCD34D",
      fontFamily: "Roboto",
      layout: "traditional",
      style: "authentic",
    },
  },
  {
    id: "sushi-zen",
    name: "Sushi Zen",
    description: "Minimalist Japanese-inspired design",
    longDescription:
      "Experience the art of Japanese cuisine with this zen-inspired template. Clean, minimalist design that puts the focus on your sushi and Japanese dishes with elegant simplicity.",
    image: "/placeholder.svg?height=600&width=300",
    profileImage: "/placeholder.svg?height=80&width=80",
    color: "bg-gradient-to-br from-slate-100 to-blue-200",
    isPro: true,
    category: "ethnic",
    featured: true,
    new: false,
    rating: 4.9,
    reviewCount: 98,
    features: [
      "Zen minimalist design",
      "Japanese typography",
      "Sushi roll gallery",
      "Sake pairing suggestions",
      "Traditional color palette",
      "Clean ingredient lists",
    ],
    sampleItems: [
      {
        name: "Dragon Roll",
        description: "Eel, cucumber, avocado topped with eel sauce and sesame seeds",
        price: "$12",
      },
      {
        name: "Chirashi Bowl",
        description: "Assorted sashimi over seasoned sushi rice",
        price: "$18",
      },
      {
        name: "Mochi Ice Cream",
        description: "Traditional Japanese ice cream wrapped in sweet rice dough",
        price: "$6",
      },
    ],
    design: {
      primaryColor: "#1E293B",
      secondaryColor: "#3B82F6",
      fontFamily: "Inter",
      layout: "zen",
      style: "minimal",
    },
  },
  {
    id: "gastropub",
    name: "Gastropub Modern",
    description: "Contemporary design for bars and pubs",
    longDescription:
      "Perfect for gastropubs and modern bars that serve quality food alongside craft beverages. This template balances sophistication with approachability.",
    image: "/placeholder.svg?height=600&width=300",
    profileImage: "/placeholder.svg?height=80&width=80",
    color: "bg-gradient-to-br from-purple-100 to-indigo-200",
    isPro: true,
    category: "bar",
    featured: false,
    new: false,
    rating: 4.7,
    reviewCount: 167,
    features: [
      "Craft beer integration",
      "Food & drink pairings",
      "Happy hour specials",
      "Dark mode friendly",
      "Social atmosphere design",
      "Event announcements",
    ],
    sampleItems: [
      {
        name: "Craft Burger",
        description: "House-ground beef with artisan cheese and craft beer reduction",
        price: "$15",
      },
      {
        name: "Fish & Chips",
        description: "Beer-battered cod with hand-cut fries and mushy peas",
        price: "$13",
      },
      {
        name: "Sticky Toffee Pudding",
        description: "Warm pudding with toffee sauce and vanilla ice cream",
        price: "$8",
      },
    ],
    design: {
      primaryColor: "#7C3AED",
      secondaryColor: "#A855F7",
      fontFamily: "Inter",
      layout: "modern",
      style: "contemporary",
    },
  },
  {
    id: "bakery-sweet",
    name: "Sweet Bakery",
    description: "Delicate design for bakeries and patisseries",
    longDescription:
      "A charming and sweet template designed specifically for bakeries, patisseries, and dessert shops. Showcases your baked goods with warmth and elegance.",
    image: "/placeholder.svg?height=600&width=300",
    profileImage: "/placeholder.svg?height=80&width=80",
    color: "bg-gradient-to-br from-pink-100 to-rose-200",
    isPro: false,
    category: "cafe",
    featured: false,
    new: true,
    rating: 4.5,
    reviewCount: 189,
    features: [
      "Sweet, inviting design",
      "Pastry showcase layout",
      "Custom cake orders",
      "Seasonal specialties",
      "Warm color palette",
      "Family-friendly design",
    ],
    sampleItems: [
      {
        name: "Croissant",
        description: "Buttery, flaky French pastry baked fresh daily",
        price: "$3",
      },
      {
        name: "Red Velvet Cupcake",
        description: "Moist red velvet cake with cream cheese frosting",
        price: "$4",
      },
      {
        name: "Macarons",
        description: "Delicate French macarons in assorted flavors",
        price: "$2.50",
      },
    ],
    design: {
      primaryColor: "#EC4899",
      secondaryColor: "#F472B6",
      fontFamily: "Poppins",
      layout: "showcase",
      style: "sweet",
    },
  },
  {
    id: "steakhouse-premium",
    name: "Premium Steakhouse",
    description: "Luxurious design for upscale steakhouses",
    longDescription:
      "An elegant and sophisticated template designed for premium steakhouses and upscale dining establishments. Features rich colors and premium typography.",
    image: "/placeholder.svg?height=600&width=300",
    profileImage: "/placeholder.svg?height=80&width=80",
    color: "bg-gradient-to-br from-stone-100 to-amber-200",
    isPro: true,
    category: "fine",
    featured: true,
    new: false,
    rating: 4.9,
    reviewCount: 76,
    features: [
      "Luxury design elements",
      "Premium cut descriptions",
      "Wine pairing suggestions",
      "Chef recommendations",
      "Elegant typography",
      "High-end presentation",
    ],
    sampleItems: [
      {
        name: "Wagyu Ribeye",
        description: "Premium A5 Wagyu ribeye with truffle butter and seasonal vegetables",
        price: "$85",
      },
      {
        name: "Lobster Tail",
        description: "Fresh Maine lobster tail with drawn butter and lemon",
        price: "$42",
      },
      {
        name: "Chocolate Soufflé",
        description: "Decadent chocolate soufflé with gold leaf and berry compote",
        price: "$14",
      },
    ],
    design: {
      primaryColor: "#78716C",
      secondaryColor: "#D97706",
      fontFamily: "Playfair Display",
      layout: "luxury",
      style: "premium",
    },
  },
]

export function getTemplateById(id: string): Template | undefined {
  return templates.find((template) => template.id === id)
}

export function getTemplatesByCategory(category: string): Template[] {
  if (category === "all") return templates
  return templates.filter((template) => template.category === category)
}

export function getFeaturedTemplates(): Template[] {
  return templates.filter((template) => template.featured)
}

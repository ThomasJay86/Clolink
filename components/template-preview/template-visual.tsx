import type { Template } from "@/data/templates"

interface TemplateVisualProps {
  template: Template
  className?: string
}

export function TemplateVisual({ template, className = "" }: TemplateVisualProps) {
  const renderTemplate = () => {
    switch (template.id) {
      case "classic":
        return (
          <div className="w-full h-full bg-white overflow-hidden">
            <div className="bg-gray-800 text-white p-2 text-center">
              <h1 className="text-xs font-bold">Restaurant Name</h1>
              <p className="text-[8px] text-gray-300">Authentic Cuisine</p>
            </div>
            <div className="p-2 space-y-1">
              <div className="flex justify-between text-[8px]">
                <span className="font-medium">Classic Burger</span>
                <span>$12</span>
              </div>
              <div className="flex justify-between text-[8px]">
                <span className="font-medium">Caesar Salad</span>
                <span>$10</span>
              </div>
              <div className="flex justify-between text-[8px]">
                <span className="font-medium">Chocolate Cake</span>
                <span>$8</span>
              </div>
            </div>
          </div>
        )

      case "bistro":
        return (
          <div className="w-full h-full bg-gradient-to-b from-amber-50 to-white overflow-hidden">
            <div className="bg-gradient-to-r from-amber-800 to-amber-900 text-white p-2 text-center">
              <h1 className="text-xs font-serif font-bold">Bistro Élégant</h1>
              <div className="w-4 h-px bg-amber-300 mx-auto my-1"></div>
              <p className="text-[8px] text-amber-200 italic">Fine Dining</p>
            </div>
            <div className="p-2 space-y-1">
              <div className="text-center mb-2">
                <h2 className="text-[9px] font-serif text-amber-800">Chef's Selection</h2>
                <div className="w-3 h-px bg-amber-600 mx-auto"></div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[8px]">
                  <span className="font-serif">Beef Wellington</span>
                  <span className="text-amber-800">$38</span>
                </div>
                <div className="flex justify-between text-[8px]">
                  <span className="font-serif">Lobster Bisque</span>
                  <span className="text-amber-800">$16</span>
                </div>
              </div>
            </div>
          </div>
        )

      case "street-food":
        return (
          <div className="w-full h-full bg-white overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-2 text-center relative">
              <h1 className="text-xs font-bold uppercase">Street Eats</h1>
              <p className="text-[8px] text-red-100">Fresh • Fast • Flavorful</p>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full opacity-30"></div>
            </div>
            <div className="p-2 space-y-1">
              <div className="text-center mb-1">
                <h2 className="text-[9px] font-bold text-red-600 uppercase">Today's Specials</h2>
              </div>
              <div className="space-y-1">
                <div className="bg-red-50 rounded p-1 border-l-2 border-red-500">
                  <div className="flex justify-between text-[8px]">
                    <span className="font-bold">Street Tacos</span>
                    <span className="text-red-600">$9</span>
                  </div>
                </div>
                <div className="bg-orange-50 rounded p-1 border-l-2 border-orange-500">
                  <div className="flex justify-between text-[8px]">
                    <span className="font-bold">Loaded Fries</span>
                    <span className="text-orange-600">$7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "modern-cafe":
        return (
          <div className="w-full h-full bg-white overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-2 text-center">
              <h1 className="text-xs font-light tracking-wide">BREW & BITE</h1>
              <div className="w-2 h-px bg-emerald-300 mx-auto my-1"></div>
              <p className="text-[8px] text-emerald-100">Artisan Coffee</p>
            </div>
            <div className="p-2 space-y-1">
              <div className="flex justify-center space-x-2 mb-2 text-[7px]">
                <span className="text-emerald-600 border-b border-emerald-600">Coffee</span>
                <span className="text-gray-500">Food</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[8px] p-1 hover:bg-emerald-50 rounded">
                  <span>Artisan Latte</span>
                  <span className="text-emerald-600">$4.50</span>
                </div>
                <div className="flex justify-between text-[8px] p-1 hover:bg-emerald-50 rounded">
                  <span>Avocado Toast</span>
                  <span className="text-emerald-600">$8</span>
                </div>
              </div>
            </div>
          </div>
        )

      case "pizza-house":
        return (
          <div className="w-full h-full bg-white overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white p-2 text-center">
              <h1 className="text-xs font-bold">Mama's Pizza</h1>
              <p className="text-[8px] text-red-100">Authentic Italian</p>
            </div>
            <div className="p-2 space-y-1">
              <div className="text-center mb-2">
                <h2 className="text-[9px] font-bold text-red-600">Wood Fired Pizza</h2>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[8px]">
                  <span>Margherita</span>
                  <span className="text-red-600">$14</span>
                </div>
                <div className="flex justify-between text-[8px]">
                  <span>Pepperoni</span>
                  <span className="text-red-600">$16</span>
                </div>
                <div className="flex justify-between text-[8px]">
                  <span>Tiramisu</span>
                  <span className="text-red-600">$7</span>
                </div>
              </div>
            </div>
          </div>
        )

      case "sushi-zen":
        return (
          <div className="w-full h-full bg-white overflow-hidden">
            <div className="bg-slate-800 text-white p-2 text-center">
              <h1 className="text-xs font-light">禅 SUSHI ZEN</h1>
              <p className="text-[8px] text-slate-300">Traditional Japanese</p>
            </div>
            <div className="p-2 space-y-1">
              <div className="text-center mb-2">
                <h2 className="text-[9px] text-slate-800">Fresh Selection</h2>
                <div className="w-4 h-px bg-blue-400 mx-auto"></div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[8px]">
                  <span>Dragon Roll</span>
                  <span className="text-slate-800">$12</span>
                </div>
                <div className="flex justify-between text-[8px]">
                  <span>Chirashi Bowl</span>
                  <span className="text-slate-800">$18</span>
                </div>
              </div>
            </div>
          </div>
        )

      case "gastropub":
        return (
          <div className="w-full h-full bg-white overflow-hidden">
            <div className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white p-2 text-center">
              <h1 className="text-xs font-bold">The Gastropub</h1>
              <p className="text-[8px] text-purple-200">Craft Food & Drinks</p>
            </div>
            <div className="p-2 space-y-1">
              <div className="space-y-1">
                <div className="flex justify-between text-[8px]">
                  <span>Craft Burger</span>
                  <span className="text-purple-700">$15</span>
                </div>
                <div className="flex justify-between text-[8px]">
                  <span>Fish & Chips</span>
                  <span className="text-purple-700">$13</span>
                </div>
                <div className="text-center mt-2">
                  <p className="text-[7px] text-purple-600">🍺 Happy Hour 4-6 PM</p>
                </div>
              </div>
            </div>
          </div>
        )

      case "bakery-sweet":
        return (
          <div className="w-full h-full bg-white overflow-hidden">
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-2 text-center">
              <h1 className="text-xs font-bold">Sweet Dreams</h1>
              <p className="text-[8px] text-pink-200">Bakery & Café</p>
            </div>
            <div className="p-2 space-y-1">
              <div className="text-center mb-2">
                <h2 className="text-[9px] text-pink-600">Fresh Baked Daily</h2>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[8px]">
                  <span>Croissant</span>
                  <span className="text-pink-600">$3</span>
                </div>
                <div className="flex justify-between text-[8px]">
                  <span>Red Velvet Cupcake</span>
                  <span className="text-pink-600">$4</span>
                </div>
                <div className="flex justify-between text-[8px]">
                  <span>Macarons</span>
                  <span className="text-pink-600">$2.50</span>
                </div>
              </div>
            </div>
          </div>
        )

      case "steakhouse-premium":
        return (
          <div className="w-full h-full bg-white overflow-hidden">
            <div className="bg-gradient-to-r from-stone-700 to-amber-700 text-white p-2 text-center">
              <h1 className="text-xs font-serif font-bold">Prime Steakhouse</h1>
              <div className="w-4 h-px bg-amber-400 mx-auto my-1"></div>
              <p className="text-[8px] text-stone-200">Premium Cuts</p>
            </div>
            <div className="p-2 space-y-1">
              <div className="text-center mb-2">
                <h2 className="text-[9px] font-serif text-stone-700">Chef's Recommendations</h2>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[8px]">
                  <span className="font-serif">Wagyu Ribeye</span>
                  <span className="text-amber-700">$85</span>
                </div>
                <div className="flex justify-between text-[8px]">
                  <span className="font-serif">Lobster Tail</span>
                  <span className="text-amber-700">$42</span>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-500 text-xs">Template Preview</span>
          </div>
        )
    }
  }

  return <div className={`${className}`}>{renderTemplate()}</div>
}

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
          <div className="w-full h-full bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-3 text-center relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative">
                <h1 className="text-sm font-bold tracking-wide">CLASSIC BISTRO</h1>
                <div className="w-8 h-0.5 bg-slate-300 mx-auto my-1"></div>
                <p className="text-xs text-slate-300">Est. 1985</p>
              </div>
            </div>
            <div className="p-3 space-y-2">
              <div className="text-center mb-3">
                <h2 className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Today's Menu</h2>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-1 border-b border-slate-200">
                  <div>
                    <span className="text-xs font-medium text-slate-800">Classic Burger</span>
                    <p className="text-[10px] text-slate-500">Beef, lettuce, tomato</p>
                  </div>
                  <span className="text-xs font-bold text-slate-800">$12</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-200">
                  <div>
                    <span className="text-xs font-medium text-slate-800">Caesar Salad</span>
                    <p className="text-[10px] text-slate-500">Fresh romaine, parmesan</p>
                  </div>
                  <span className="text-xs font-bold text-slate-800">$10</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <div>
                    <span className="text-xs font-medium text-slate-800">Chocolate Cake</span>
                    <p className="text-[10px] text-slate-500">Rich & decadent</p>
                  </div>
                  <span className="text-xs font-bold text-slate-800">$8</span>
                </div>
              </div>
            </div>
          </div>
        )

      case "bistro":
        return (
          <div className="w-full h-full bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 text-white p-3 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-400/30 rounded-full"></div>
              <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-amber-400/20 rounded-full"></div>
              <div className="relative">
                <h1 className="text-sm font-serif font-bold">Bistro Élégant</h1>
                <div className="w-6 h-0.5 bg-gradient-to-r from-amber-300 to-orange-300 mx-auto my-1"></div>
                <p className="text-xs text-amber-200 italic">Fine Dining Experience</p>
              </div>
            </div>
            <div className="p-3">
              <div className="text-center mb-3">
                <h2 className="text-xs font-serif text-amber-900 mb-1">Chef's Selection</h2>
                <div className="w-4 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
              </div>
              <div className="space-y-2">
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-2 border border-amber-200/50">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xs font-serif font-semibold text-amber-900">Beef Wellington</h3>
                      <p className="text-[10px] text-amber-700 italic">Tender beef, mushroom duxelles</p>
                    </div>
                    <span className="text-xs font-bold text-amber-900">$38</span>
                  </div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-2 border border-amber-200/50">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xs font-serif font-semibold text-amber-900">Lobster Bisque</h3>
                      <p className="text-[10px] text-amber-700 italic">Rich & creamy</p>
                    </div>
                    <span className="text-xs font-bold text-amber-900">$16</span>
                  </div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-2 border border-amber-200/50">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xs font-serif font-semibold text-amber-900">Crème Brûlée</h3>
                      <p className="text-[10px] text-amber-700 italic">Vanilla custard, caramelized sugar</p>
                    </div>
                    <span className="text-xs font-bold text-amber-900">$12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "street-food":
        return (
          <div className="w-full h-full bg-gradient-to-br from-red-100 via-orange-50 to-yellow-100 overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 via-orange-500 to-red-500 text-white p-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-yellow-400/30 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-red-700/30 rounded-full"></div>
              <div className="absolute top-1 left-1 w-4 h-4 bg-orange-300/40 rounded-full"></div>
              <div className="relative text-center">
                <h1 className="text-sm font-bold uppercase tracking-wider">STREET EATS</h1>
                <p className="text-xs text-red-100 font-medium">🔥 Fresh • Fast • Flavorful 🔥</p>
              </div>
            </div>
            <div className="p-3">
              <div className="text-center mb-3">
                <h2 className="text-xs font-bold text-red-600 uppercase tracking-wide">Today's Specials</h2>
                <div className="w-6 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-1 rounded-full"></div>
              </div>
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-2 border-l-4 border-red-500 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-bold text-gray-800 uppercase">Street Tacos</h3>
                      <p className="text-[10px] text-gray-600">Spicy beef, fresh salsa</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-red-600">$9</span>
                      <div className="text-[8px] text-orange-600 font-bold">HOT!</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-2 border-l-4 border-orange-500 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-bold text-gray-800 uppercase">Loaded Fries</h3>
                      <p className="text-[10px] text-gray-600">Cheese, bacon, jalapeños</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-orange-600">$7</span>
                      <div className="text-[8px] text-red-600 font-bold">NEW!</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 bg-gradient-to-r from-red-500 to-orange-500 text-white p-2 rounded-lg text-center">
                <p className="text-[10px] font-bold">🚚 Order Now for Quick Pickup!</p>
              </div>
            </div>
          </div>
        )

      case "modern-cafe":
        return (
          <div className="w-full h-full bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-600 text-white p-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-300/30 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 bg-emerald-400/20 rounded-full"></div>
              <div className="relative text-center">
                <h1 className="text-sm font-light tracking-widest">BREW & BITE</h1>
                <div className="w-4 h-0.5 bg-emerald-300 mx-auto my-1"></div>
                <p className="text-xs text-emerald-100">Artisan Coffee & Fresh Bites</p>
              </div>
            </div>
            <div className="p-3">
              <div className="flex justify-center space-x-4 mb-3 text-xs">
                <button className="text-emerald-600 border-b-2 border-emerald-600 pb-1 font-medium">Coffee</button>
                <button className="text-gray-500 hover:text-emerald-600 transition-colors">Food</button>
                <button className="text-gray-500 hover:text-emerald-600 transition-colors">Pastries</button>
              </div>
              <div className="space-y-2">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-2 border border-emerald-100 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xs font-medium text-gray-800">Artisan Latte</h3>
                      <p className="text-[10px] text-gray-600">Single origin, steamed milk</p>
                      <div className="flex items-center mt-1">
                        <div className="flex text-yellow-400 text-[8px]">★★★★★</div>
                        <span className="text-[8px] text-gray-400 ml-1">(4.8)</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-600">$4.50</span>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-2 border border-emerald-100 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xs font-medium text-gray-800">Avocado Toast</h3>
                      <p className="text-[10px] text-gray-600">Sourdough, fresh avocado</p>
                      <div className="flex items-center mt-1">
                        <div className="flex text-yellow-400 text-[8px]">★★★★★</div>
                        <span className="text-[8px] text-gray-400 ml-1">(4.9)</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-600">$8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "pizza-house":
        return (
          <div className="w-full h-full bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 overflow-hidden">
            <div className="bg-gradient-to-r from-red-700 via-orange-600 to-red-600 text-white p-3 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400/40 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 bg-red-800/30 rounded-full"></div>
              <div className="relative">
                <h1 className="text-sm font-bold">🍕 Mama's Pizza</h1>
                <p className="text-xs text-red-100">Authentic Italian Since 1962</p>
              </div>
            </div>
            <div className="p-3">
              <div className="text-center mb-3">
                <h2 className="text-xs font-bold text-red-700">Wood Fired Specialties</h2>
                <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-1"></div>
              </div>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-2 border-2 border-red-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-semibold text-red-800">🍅 Margherita</h3>
                      <p className="text-[10px] text-gray-600">Fresh mozzarella, basil, tomato</p>
                    </div>
                    <span className="text-xs font-bold text-red-600">$14</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-2 border-2 border-orange-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-semibold text-orange-800">🌶️ Pepperoni</h3>
                      <p className="text-[10px] text-gray-600">Spicy pepperoni, mozzarella</p>
                    </div>
                    <span className="text-xs font-bold text-orange-600">$16</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-2 border-2 border-yellow-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-semibold text-yellow-800">🍰 Tiramisu</h3>
                      <p className="text-[10px] text-gray-600">Classic Italian dessert</p>
                    </div>
                    <span className="text-xs font-bold text-yellow-700">$7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "sushi-zen":
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-100 via-blue-50 to-slate-50 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 text-white p-3 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400/20 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 bg-slate-600/30 rounded-full"></div>
              <div className="relative">
                <h1 className="text-sm font-light tracking-wider">禅 SUSHI ZEN</h1>
                <div className="w-8 h-px bg-blue-400 mx-auto my-1"></div>
                <p className="text-xs text-slate-300">Traditional Japanese Cuisine</p>
              </div>
            </div>
            <div className="p-3">
              <div className="text-center mb-3">
                <h2 className="text-xs text-slate-800 font-light">Fresh Daily Selection</h2>
                <div className="w-6 h-px bg-gradient-to-r from-blue-400 to-slate-400 mx-auto mt-1"></div>
              </div>
              <div className="space-y-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-medium text-slate-800">🐉 Dragon Roll</h3>
                      <p className="text-[10px] text-slate-600">Eel, cucumber, avocado</p>
                    </div>
                    <span className="text-xs font-bold text-slate-800">$12</span>
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-medium text-slate-800">🍣 Chirashi Bowl</h3>
                      <p className="text-[10px] text-slate-600">Assorted sashimi, sushi rice</p>
                    </div>
                    <span className="text-xs font-bold text-slate-800">$18</span>
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-medium text-slate-800">🍵 Mochi Ice Cream</h3>
                      <p className="text-[10px] text-slate-600">Green tea, vanilla, strawberry</p>
                    </div>
                    <span className="text-xs font-bold text-slate-800">$6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "gastropub":
        return (
          <div className="w-full h-full bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-800 via-indigo-700 to-purple-700 text-white p-3 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-400/30 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-5 h-5 bg-purple-600/40 rounded-full"></div>
              <div className="relative">
                <h1 className="text-sm font-bold tracking-wide">THE GASTROPUB</h1>
                <p className="text-xs text-purple-200">🍺 Craft Food & Premium Drinks</p>
              </div>
            </div>
            <div className="p-3">
              <div className="text-center mb-3">
                <h2 className="text-xs font-semibold text-purple-700">Chef's Favorites</h2>
                <div className="w-6 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-1"></div>
              </div>
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-2 border border-purple-200 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-semibold text-purple-800">🍔 Craft Burger</h3>
                      <p className="text-[10px] text-purple-600">Wagyu beef, truffle aioli</p>
                    </div>
                    <span className="text-xs font-bold text-purple-700">$15</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-2 border border-indigo-200 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-semibold text-indigo-800">🐟 Fish & Chips</h3>
                      <p className="text-[10px] text-indigo-600">Beer battered cod, mushy peas</p>
                    </div>
                    <span className="text-xs font-bold text-indigo-700">$13</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-2 rounded-lg text-center">
                <p className="text-[10px] font-bold">🍺 Happy Hour 4-6 PM Daily</p>
              </div>
            </div>
          </div>
        )

      case "bakery-sweet":
        return (
          <div className="w-full h-full bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 overflow-hidden">
            <div className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 text-white p-3 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-rose-300/40 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 bg-pink-700/30 rounded-full"></div>
              <div className="absolute top-1 left-2 w-3 h-3 bg-rose-200/50 rounded-full"></div>
              <div className="relative">
                <h1 className="text-sm font-bold">🧁 Sweet Dreams</h1>
                <p className="text-xs text-pink-200">Artisan Bakery & Café</p>
              </div>
            </div>
            <div className="p-3">
              <div className="text-center mb-3">
                <h2 className="text-xs font-semibold text-pink-700">Fresh Baked Daily</h2>
                <div className="w-8 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mt-1"></div>
              </div>
              <div className="space-y-2">
                <div className="bg-white rounded-xl p-2 border-2 border-pink-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-semibold text-pink-800">🥐 Butter Croissant</h3>
                      <p className="text-[10px] text-pink-600">Flaky, buttery perfection</p>
                    </div>
                    <span className="text-xs font-bold text-pink-600">$3</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-2 border-2 border-rose-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-semibold text-rose-800">🧁 Red Velvet Cupcake</h3>
                      <p className="text-[10px] text-rose-600">Cream cheese frosting</p>
                    </div>
                    <span className="text-xs font-bold text-rose-600">$4</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-2 border-2 border-red-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-semibold text-red-800">🍪 French Macarons</h3>
                      <p className="text-[10px] text-red-600">Assorted flavors</p>
                    </div>
                    <span className="text-xs font-bold text-red-600">$2.50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "steakhouse-premium":
        return (
          <div className="w-full h-full bg-gradient-to-br from-stone-100 via-amber-50 to-orange-50 overflow-hidden">
            <div className="bg-gradient-to-r from-stone-800 via-amber-800 to-stone-700 text-white p-3 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-400/30 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-5 h-5 bg-stone-600/40 rounded-full"></div>
              <div className="relative">
                <h1 className="text-sm font-serif font-bold tracking-wide">PRIME STEAKHOUSE</h1>
                <div className="w-8 h-px bg-amber-400 mx-auto my-1"></div>
                <p className="text-xs text-stone-200">Premium Cuts & Fine Wines</p>
              </div>
            </div>
            <div className="p-3">
              <div className="text-center mb-3">
                <h2 className="text-xs font-serif text-stone-800">Chef's Recommendations</h2>
                <div className="w-6 h-px bg-gradient-to-r from-amber-600 to-stone-600 mx-auto mt-1"></div>
              </div>
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-2 border-l-4 border-amber-600 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-serif font-semibold text-stone-800">🥩 Wagyu Ribeye</h3>
                      <p className="text-[10px] text-stone-600 italic">16oz, perfectly aged</p>
                    </div>
                    <span className="text-xs font-bold text-amber-700">$85</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-stone-50 to-amber-50 rounded-lg p-2 border-l-4 border-stone-600 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-serif font-semibold text-stone-800">🦞 Lobster Tail</h3>
                      <p className="text-[10px] text-stone-600 italic">Butter poached, 8oz</p>
                    </div>
                    <span className="text-xs font-bold text-stone-700">$42</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-amber-50 to-stone-50 rounded-lg p-2 border-l-4 border-amber-500 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xs font-serif font-semibold text-stone-800">🍷 Wine Pairing</h3>
                      <p className="text-[10px] text-stone-600 italic">Sommelier selected</p>
                    </div>
                    <span className="text-xs font-bold text-amber-600">$25</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-lg">
            <div className="text-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto mb-2"></div>
              <span className="text-gray-500 text-xs">Template Preview</span>
            </div>
          </div>
        )
    }
  }

  return <div className={`${className}`}>{renderTemplate()}</div>
}

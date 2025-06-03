import type { Template } from "@/data/templates"

interface StreetFoodTemplateProps {
  template: Template
}

export function StreetFoodTemplate({ template }: StreetFoodTemplateProps) {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Vibrant Header */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative text-center">
          <h1 className="text-xl font-bold uppercase tracking-wide">Street Eats</h1>
          <p className="text-red-100 text-sm font-medium">Fresh • Fast • Flavorful</p>
        </div>
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-20"></div>
        <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-red-600 rounded-full opacity-30"></div>
      </div>

      {/* Menu Content */}
      <div className="p-4">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold text-red-600 uppercase tracking-wide">Today's Specials</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-1"></div>
        </div>

        {/* Menu Items */}
        <div className="space-y-4">
          {template.sampleItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-3 border-l-4 border-red-500"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 uppercase text-sm">{item.name}</h3>
                  <p className="text-gray-600 text-xs mt-1">{item.description}</p>
                </div>
                <div className="ml-3 text-right">
                  <span className="text-red-600 font-bold text-lg">{item.price}</span>
                  <div className="text-xs text-orange-600 font-medium">HOT!</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-4 bg-gradient-to-r from-red-500 to-orange-500 text-white p-3 rounded-lg text-center">
          <p className="font-bold text-sm">🔥 Order Now for Quick Pickup! 🔥</p>
          <p className="text-xs text-red-100 mt-1">Call (555) STREET-1</p>
        </div>
      </div>
    </div>
  )
}

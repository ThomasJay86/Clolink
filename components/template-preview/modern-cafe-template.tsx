import type { Template } from "@/data/templates"

interface ModernCafeTemplateProps {
  template: Template
}

export function ModernCafeTemplate({ template }: ModernCafeTemplateProps) {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Modern Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-5 relative">
        <div className="text-center">
          <h1 className="text-xl font-light tracking-wide">BREW & BITE</h1>
          <div className="w-8 h-0.5 bg-emerald-300 mx-auto my-2"></div>
          <p className="text-emerald-100 text-sm">Artisan Coffee & Fresh Bites</p>
        </div>
      </div>

      {/* Menu Content */}
      <div className="p-5">
        <div className="flex justify-center space-x-6 mb-6 text-sm">
          <button className="text-emerald-600 border-b-2 border-emerald-600 pb-1 font-medium">Coffee</button>
          <button className="text-gray-500 hover:text-emerald-600 transition-colors">Food</button>
          <button className="text-gray-500 hover:text-emerald-600 transition-colors">Pastries</button>
        </div>

        {/* Menu Items */}
        <div className="space-y-4">
          {template.sampleItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="flex justify-between items-start p-3 rounded-lg hover:bg-emerald-50 transition-colors">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800 group-hover:text-emerald-700">{item.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                  <div className="flex items-center mt-2">
                    <div className="flex text-yellow-400 text-xs">★★★★★</div>
                    <span className="text-gray-400 text-xs ml-2">(4.8)</span>
                  </div>
                </div>
                <div className="ml-4 text-right">
                  <span className="text-emerald-600 font-bold">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social & Hours */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-600 text-xs mb-2">Follow us @brewandbite</p>
            <p className="text-gray-500 text-xs">Mon-Fri 7AM-7PM • Sat-Sun 8AM-6PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

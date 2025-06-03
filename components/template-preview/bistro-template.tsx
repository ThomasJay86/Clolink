import type { Template } from "@/data/templates"

interface BistroTemplateProps {
  template: Template
}

export function BistroTemplate({ template }: BistroTemplateProps) {
  return (
    <div className="w-full max-w-sm mx-auto bg-gradient-to-b from-amber-50 to-white rounded-lg shadow-lg overflow-hidden">
      {/* Elegant Header */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-900 text-white p-6 text-center relative">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative">
          <h1 className="text-2xl font-serif font-bold mb-1">Bistro Élégant</h1>
          <div className="w-16 h-0.5 bg-amber-300 mx-auto mb-2"></div>
          <p className="text-amber-200 text-sm italic">Fine Dining Experience</p>
        </div>
      </div>

      {/* Menu Content */}
      <div className="p-6">
        <div className="text-center mb-6">
          <h2 className="text-lg font-serif text-amber-800 mb-2">Chef's Selection</h2>
          <div className="w-12 h-0.5 bg-amber-600 mx-auto"></div>
        </div>

        {/* Menu Items */}
        <div className="space-y-5">
          {template.sampleItems.map((item, index) => (
            <div key={index} className="group">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-serif font-semibold text-amber-900 group-hover:text-amber-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed italic">{item.description}</p>
                </div>
                <div className="ml-4 text-right">
                  <span className="text-amber-800 font-bold text-lg">{item.price}</span>
                </div>
              </div>
              <div className="mt-3 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Wine Pairing Note */}
        <div className="mt-6 p-3 bg-amber-50 rounded-lg border border-amber-200">
          <p className="text-amber-800 text-xs text-center italic">Wine pairings available • Ask your sommelier</p>
        </div>
      </div>
    </div>
  )
}

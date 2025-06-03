import type { Template } from "@/data/templates"

interface ClassicTemplateProps {
  template: Template
}

export function ClassicTemplate({ template }: ClassicTemplateProps) {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gray-800 text-white p-4 text-center">
        <h1 className="text-xl font-bold">Delicious Restaurant</h1>
        <p className="text-gray-300 text-sm">Authentic Cuisine Since 1985</p>
      </div>

      {/* Menu Categories */}
      <div className="p-4">
        <div className="flex justify-center space-x-4 mb-6 text-sm">
          <button className="text-gray-800 border-b-2 border-gray-800 pb-1">Appetizers</button>
          <button className="text-gray-500 hover:text-gray-800">Mains</button>
          <button className="text-gray-500 hover:text-gray-800">Desserts</button>
        </div>

        {/* Menu Items */}
        <div className="space-y-4">
          {template.sampleItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                </div>
                <span className="text-gray-800 font-bold ml-4">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-gray-500 text-xs">
          <p>Visit us at 123 Main Street | Call (555) 123-4567</p>
        </div>
      </div>
    </div>
  )
}

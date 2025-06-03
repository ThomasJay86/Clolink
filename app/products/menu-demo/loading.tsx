import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Skeleton */}
      <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Skeleton className="h-5 w-5 mr-4" />
            <Skeleton className="h-7 w-40" />
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </header>

      {/* Search and Filters Skeleton */}
      <div className="bg-white border-b py-4 px-6 sticky top-16 z-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <Skeleton className="h-10 flex-grow rounded-full" />
            <Skeleton className="h-10 w-24 rounded-full" />
          </div>
        </div>
      </div>

      {/* Menu Categories Skeleton */}
      <div className="bg-white border-b py-2 px-6 sticky top-[112px] z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-24 rounded-full flex-shrink-0" />
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content Skeleton */}
      <div className="max-w-6xl mx-auto py-8 px-6">
        <Skeleton className="h-10 w-40 mb-6" />
        <div className="grid md:grid-cols-2 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="flex">
                <Skeleton className="w-1/3 h-32" />
                <div className="w-2/3 p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-2/3 mb-4" />
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-9 w-28 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

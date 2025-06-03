import { Skeleton } from "@/components/ui/skeleton"

export default function CheckoutLoading() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header Skeleton */}
      <div className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Skeleton className="h-5 w-5 mr-4" />
            <Skeleton className="h-7 w-40" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-8 px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Order Summary */}
          <div className="md:col-span-2">
            <Skeleton className="w-full h-[300px] mb-6 rounded-lg" />
            <Skeleton className="w-full h-[200px] mb-6 rounded-lg" />
            <Skeleton className="w-full h-[200px] mb-6 rounded-lg" />
            <Skeleton className="w-full h-12 rounded-md" />
          </div>

          {/* Order Summary (Sticky on Desktop) */}
          <div className="hidden md:block">
            <Skeleton className="w-full h-[300px] rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

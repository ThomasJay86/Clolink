import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import SharedLayout from "@/components/shared-layout"

export default function TrackOrderLoading() {
  return (
    <SharedLayout>
      <div className="min-h-screen bg-gray-50 pb-20">
        {/* Header */}
        <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-30">
          <div className="max-w-3xl mx-auto flex items-center">
            <Skeleton className="h-5 w-5 mr-4" />
            <Skeleton className="h-8 w-40" />
          </div>
        </header>

        <div className="max-w-3xl mx-auto py-8 px-6">
          {/* Order Status Card */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-4 w-48" />
                </div>
                <Skeleton className="h-6 w-24" />
              </div>

              {/* Progress Bar */}
              <Skeleton className="h-2 w-full mb-8" />

              {/* Status Timeline */}
              <div className="space-y-6 mb-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex">
                    <Skeleton className="h-5 w-5 rounded-full mr-4" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-3 w-24" />
                      <Skeleton className="h-3 w-48" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Info */}
              <Skeleton className="h-32 w-full mb-6" />

              {/* Restaurant Info */}
              <Skeleton className="h-20 w-full" />
            </CardContent>
          </Card>

          {/* Order Details Card */}
          <Card>
            <CardContent className="p-6">
              <Skeleton className="h-6 w-32 mb-6" />

              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex justify-between">
                    <Skeleton className="h-4 w-40" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                ))}
              </div>

              <Skeleton className="h-px w-full my-6" />

              {/* Order Summary */}
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex justify-between">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                ))}
                <div className="flex justify-between mt-2">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-5 w-20" />
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <Skeleton className="h-10 w-32" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SharedLayout>
  )
}

import { CheckCircle2 } from "lucide-react"

interface OrderTimelineProps {
  statusHistory: { status: string; timestamp: string; note?: string }[]
}

export type OrderStatus = "pending" | "confirmed" | "preparing" | "ready" | "out_for_delivery" | "delivered"

export function OrderTimeline({ statusHistory }: OrderTimelineProps) {
  const sortedHistory = [...statusHistory].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
  )

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "preparing":
        return "text-yellow-500 border-yellow-500"
      case "ready":
        return "text-blue-500 border-blue-500"
      case "out-for-delivery":
        return "text-purple-500 border-purple-500"
      case "delivered":
        return "text-green-500 border-green-500"
      case "cancelled":
        return "text-red-500 border-red-500"
      default:
        return "text-gray-500 border-gray-500"
    }
  }

  const formatStatus = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1).replace(/-/g, " ")
  }

  return (
    <div className="relative">
      {sortedHistory.map((status, index) => (
        <div key={index} className="mb-6 last:mb-0">
          <div className="flex items-center gap-3">
            <div className={`rounded-full p-1 ${getStatusColor(status.status)}`}>
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">{formatStatus(status.status)}</p>
              <p className="text-sm text-gray-500">{formatDate(status.timestamp)}</p>
            </div>
          </div>
          {status.note && <div className="ml-9 mt-2 text-sm text-gray-600">{status.note}</div>}
          {index < sortedHistory.length - 1 && (
            <div className="absolute left-3 h-6 w-px bg-gray-300 ml-[2px] mt-1"></div>
          )}
        </div>
      ))}
    </div>
  )
}

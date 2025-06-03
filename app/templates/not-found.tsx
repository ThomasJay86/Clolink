import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TemplatesNotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Template Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">Sorry, we couldn't find the template you're looking for.</p>
      <Link href="/templates">
        <Button>Browse All Templates</Button>
      </Link>
    </div>
  )
}

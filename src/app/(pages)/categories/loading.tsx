import { Loader2 } from 'lucide-react'
import React from 'react'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">

      {/* Spinner */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-green-100 blur-xl opacity-70"></div>
        <Loader2 className="relative h-10 w-10 animate-spin text-[#16a34a]" />
      </div>

      <p className="text-gray-700 text-sm font-medium tracking-wide animate-pulse">
        Loading Category...
      </p>


    </div>
  )
}
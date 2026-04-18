import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SignInButton from './SignInButton'

export default function WishlistEmpty() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">

        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-200 rounded-xl">
          <Heart className="w-6 h-6 text-gray-500" />
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Your wishlist is empty
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-gray-500 mb-6 max-w-sm mx-auto">
          Browse products and save your favorites here. Sign in to
          sync your wishlist across devices.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3 items-center">

          {/* Browse */}
          <Link
            href="/shop"
            className="w-72 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg flex items-center justify-center gap-2 transition"
          >
            Browse Products →
          </Link>

          <SignInButton/>

        </div>
      </div>
    </div>
  )
}

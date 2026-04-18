"use client";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-[#eef7f1] to-[#f8faf9] px-4 text-center">

      {/* Card */}
      <div className="relative backdrop-blur-md rounded-3xl p-10 w-full max-w-xl ">

        {/* 404 Badge */}
        <div className="absolute top-4 right-26 bg-green-500 text-white text-sm font-bold px-4 py-4 border-5 border-white rounded-full shadow-xl shadow-green-200">
          404
        </div>

        {/* Icon */}
        <div className="bg-white w-52 h-40 bg-linear-to-br to-[#f0fdf4cc]  via-transparent from-[#dcfce766] flex items-center justify-center rounded-2xl mx-auto mb-6 text-[#4ade80cc]">
          <svg data-prefix="fas" data-icon="cart-shopping" className="w-16 h-16 svg-inline--fa fa-cart-shopping relative text-6xl sm:text-7xl text-primary-400/80" role="img" viewBox="0 0 640 512" aria-hidden="true"><path fill="currentColor" d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" /></svg>
        </div>

        {/* Smile dots */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          <span className="w-8 h-8 border-b-2 border-green-400 rounded-full"></span>
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-800 mb-2">
          Oops! Nothing Here
        </h1>

        {/* Subtitle */}
        <h4 className="text-gray-500 text-sm mb-6 leading-relaxed">
          Looks like this page went out of stock! Don't worry,
          there's plenty more fresh content to explore.
        </h4>

        {/* Buttons */}
        <div className="flex gap-4 justify-center mb-8 flex-wrap">

          <Link
            href="/"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl shadow-md transition"
          >
            <Home size={16} />
            Go to Homepage
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-white border border-gray-200 px-5 py-2.5 rounded-xl shadow-sm hover:bg-gray-50 transition"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>

        {/* Bottom links */}
        <div className="bg-white shadow-xl  rounded-2xl p-5">
          <p className="text-xs text-gray-400 mb-3 tracking-wide">
            POPULAR DESTINATIONS
          </p>

          <div className="flex flex-wrap gap-2 justify-center text-sm">
            <Link href='/shop' className="bg-green-100 text-green-700 px-3 py-2 rounded-lg cursor-pointer">
              All Products
            </Link>
            <Link href='/categories' className="bg-gray-100 px-3 py-2 rounded-lg cursor-pointer">
              Categories
            </Link>
            <Link href='/' className="bg-gray-100 px-3 py-2 rounded-lg cursor-pointer">
              Today's Deals
            </Link>
            <Link href='/' className="bg-gray-100 px-3 py-2 rounded-lg cursor-pointer">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
      
      
    </div>
  );
}
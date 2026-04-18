import apiServices from '@/app/services/api'
import { ProductCard } from '@/components/product/ProductCard'
import React from 'react'
import Link from "next/link";
import { FeatureBar2 } from '@/components/layout/Home/FeatureBar';
import Cookies from "js-cookie";
export default async function Brands() {
    const token = Cookies.get("token") || "";
    const brands = await apiServices.getBrands(token)
    console.log(brands)
    return (
    
    <div>
        <div className="bg-linear-to-l to-[#7F22FE] via-[#8E51FF] from-[#C27AFF] text-white px-6 md:px-16 py-8">
            {/* Breadcrumb */}
            <div className="text-sm opacity-90 mb-6">
                <Link href='/' className="opacity-80">Home</Link>
                <span className="mx-2">/</span>
                <span className="font-semibold text-white">Brands</span>
            </div>

            {/* Title Section */}
            <div className="flex items-center gap-5">
                {/* Icon Box */}
                <div className="bg-white/20 p-4 text-white rounded-2xl flex items-center justify-center">
                  <svg data-prefix="fas" data-icon="tags" className="w-8 h-8 svg-inline--fa fa-tags text-3xl" role="img" viewBox="0 0 576 512" aria-hidden="true"><path fill="currentColor" d="M401.2 39.1L549.4 189.4c27.7 28.1 27.7 73.1 0 101.2L393 448.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L515.3 256.8c9.2-9.3 9.2-24.4 0-33.7L367 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM32.1 229.5L32.1 96c0-35.3 28.7-64 64-64l133.5 0c17 0 33.3 6.7 45.3 18.7l144 144c25 25 25 65.5 0 90.5L285.4 418.7c-25 25-65.5 25-90.5 0l-144-144c-12-12-18.7-28.3-18.7-45.3zm144-85.5a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" /></svg>
                </div>

                {/* Text */}
                <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                    Top Brands
                </h1>
                <p className="mt-1 text-sm md:text-base opacity-90">
                    Shop from your favorite brands
                </p>
                </div>
            </div>
            
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 my-5 px-16">
          {brands.map((brand)=>(
            <div className="group bg-white rounded-2xl shadow-md p-5 text-center cursor-pointer transition hover:shadow-lg hover:-translate-y-2 duration-500">
            {/* Gradient Box */}
            <div className="rounded-xl px-4 py-6 
                  bg-[#F9FAFB]
                  
                  transition-all duration-300">
              <img src={brand.image} className="mx-auto transition-transform duration-300 group-hover:scale-110" />
            </div>
            <p className='mt-2 text-[12px] group-hover:text-[#7F22FE] '>{brand.name}</p>
            {/* Text */}
            <p className="flex items-center justify-center gap-2 mt-1 text-[12px] opacity-0 translate-y-2 
                transition-all
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-[#7F22FE]">
              View Products
              <svg data-prefix="fas" data-icon="arrow-right" className="w-3 h-3 svg-inline--fa fa-arrow-right text-[10px]" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
            </p>
          </div>
          ))}
        </div>

        
    </div>
    )
}

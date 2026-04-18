import apiServices from '@/app/services/api'
import { ProductCard } from '@/components/product/ProductCard'
import React from 'react'
import Link from "next/link";
export default async function AllCategories() {
    const categories = await apiServices.getCategories()
    console.log(categories)
    return (
    
    <div>
        <div className="bg-linear-to-l to-[#16A34A] via-[#22C55E] from-[#4ADE80] text-white px-6 md:px-16 py-8">
            {/* Breadcrumb */}
            <div className="text-sm opacity-90 mb-6">
                <Link href='/' className="opacity-80">Home</Link>
                <span className="mx-2">/</span>
                <span className="font-semibold text-white">Categories</span>
            </div>

            {/* Title Section */}
            <div className="flex items-center gap-5">
                {/* Icon Box */}
                <div className="bg-white/20 p-4 text-white rounded-2xl flex items-center justify-center">
                  <svg data-prefix="fas" data-icon="layer-group" className="w-8 h-8 svg-inline--fa fa-layer-group text-3xl" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M232.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 149.8C5.4 145.8 0 137.3 0 128s5.4-17.9 13.9-21.8L232.5 5.2zM48.1 218.4l164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 277.8C5.4 273.8 0 265.3 0 256s5.4-17.9 13.9-21.8l34.1-15.8zM13.9 362.2l34.1-15.8 164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 405.8C5.4 401.8 0 393.3 0 384s5.4-17.9 13.9-21.8z" /></svg>
                </div>

                {/* Text */}
                <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                    All Categories
                </h1>
                <p className="mt-1 text-sm md:text-base opacity-90">
                    Browse our wide range of product categories
                </p>
                </div>
            </div>
            
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 my-5 px-16">
          {categories.map((category)=>(
            <Link href={`/categories/${category._id}`} id={category._id} className="group bg-white rounded-2xl p-3 shadow-md border text-center cursor-pointer transition hover:shadow-lg hover:-translate-y-2 duration-500">
            {/* Gradient Box */}
            <div className="rounded-xl overflow-hidden bg-[#F9FAFB] flex items-center justify-center h-45">
              <img 
                src={category.image} 
                className="rounded-xl object-cover w-full h-full 
                          transition-transform duration-300 
                          group-hover:scale-110 "
              />
            </div>
            <p className='mt-3 text-bold group-hover:text-[#16a34a] '>{category.name}</p>
            {/* Text */}
            <p className="flex items-center justify-center gap-2 mt-1 text-[12px] opacity-0 translate-y-2 
                transition-all
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-[#16a34a]">
              View Subcategories
              <svg data-prefix="fas" data-icon="arrow-right" className="w-3 h-3 svg-inline--fa fa-arrow-right text-[10px]" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
            </p>
          </Link>
          ))}
        </div>

        
    </div>
    )
}

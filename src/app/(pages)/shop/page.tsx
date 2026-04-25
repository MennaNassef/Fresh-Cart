import apiServices from '@/app/services/api'
import { ProductCard } from '@/components/product/ProductCard'
import React from 'react'
import Link from "next/link";
import { cookies } from "next/headers";
import {decode} from 'next-auth/jwt'
export default async function Shop() {
    const products = await apiServices.getProducts()

    const cookie =await cookies();
      const myToken =
       cookie.get("next-auth.session-token")?.value ||
       cookie.get("__Secure-next-auth.session-token")?.value;
      console.log(myToken)
      
      const decodedToken=await decode({token:myToken ,secret:process.env.NEXTAUTH_SECRET!})
     
      console.log(decodedToken)
      if (decodedToken) {
    return (
    
    <div>
        <div className="bg-linear-to-l to-[#16A34A] via-[#22C55E] from-[#4ADE80] text-white px-6 md:px-16 py-8">
            {/* Breadcrumb */}
            <div className="text-sm opacity-90 mb-6">
                <Link href='/' className="opacity-80">Home</Link>
                <span className="mx-2">/</span>
                <span className="font-semibold text-white">All Products</span>
            </div>

            {/* Title Section */}
            <div className="flex items-center gap-5">
                {/* Icon Box */}
                <div className="bg-white/20 p-4 text-white rounded-2xl flex items-center justify-center">

    <svg data-prefix="fas" data-icon="box-open" className="w-8 h-8 svg-inline--fa fa-box-open text-3xl" role="img" viewBox="0 0 640 512" aria-hidden="true"><path fill="currentColor" d="M560.3 237.2c10.4 11.8 28.3 14.4 41.8 5.5 14.7-9.8 18.7-29.7 8.9-44.4l-48-72c-2.8-4.2-6.6-7.7-11.1-10.2L351.4 4.7c-19.3-10.7-42.8-10.7-62.2 0L88.8 116c-5.4 3-9.7 7.4-12.6 12.8L27.7 218.7c-12.6 23.4-3.8 52.5 19.6 65.1l33 17.7 0 53.3c0 23 12.4 44.3 32.4 55.7l176 99.7c19.6 11.1 43.5 11.1 63.1 0l176-99.7c20.1-11.4 32.4-32.6 32.4-55.7l0-117.5zm-240-9.8L170.2 144 320.3 60.6 470.4 144 320.3 227.4zm-41.5 50.2l-21.3 46.2-165.8-88.8 25.4-47.2 161.7 89.8z" /></svg>

                </div>

                {/* Text */}
                <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                    All Products
                </h1>
                <p className="mt-1 text-sm md:text-base opacity-90">
                    Explore our complete product collection
                </p>
                </div>
            </div>
            
        </div>
        <h5 className='mt-4 px-16 text-gray-500'>Showing {products.length} products</h5>
        <div className='grid grid-cols-4 gap-4 px-16 my-5'>
            
            {
                products.map((product) => (
                <ProductCard id={product._id} name={product.title} images={product.images} rating={product.ratingsAverage} reviewCount={product.ratingsQuantity} price={product.price} originalPrice={product.price + 100} token={decodedToken.token}/>))
            }
        </div>
        
    </div>
    )
}
}

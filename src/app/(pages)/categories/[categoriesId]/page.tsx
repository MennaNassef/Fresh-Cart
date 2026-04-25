import apiServices from '@/app/services/api';
import React from 'react'
import ProductDetail from '../../../../components/e-commerce-product-detail';
import { FeatureBar2 } from '@/components/layout/Home/FeatureBar';
import Link from 'next/link';

export default async function ProductDetails({
  params,
}: {
  params: { categoriesId: string };
})  {
const categoriesId = params.categoriesId;
console.log(categoriesId)
const category = await apiServices.getCategoryDetails(categoriesId);
const subCategories = await apiServices.getSubcategories(category?._id);
    console.log(subCategories);
    
  return (
    <div>
        <div className="bg-linear-to-l to-[#16A34A] via-[#22C55E] from-[#4ADE80] text-white px-6 md:px-16 py-8">
            {/* Breadcrumb */}
            <div className="text-sm opacity-90 mb-6">
                <Link href='/' className="opacity-80">Home</Link>
                <span className="mx-2">/</span>
                <Link href='/categories' className="font-semibold opacity-80">Categories</Link>
                <span className="mx-2">/</span>
                <span className="font-bold text-white">{category?.name}</span>
            </div>

            {/* Title Section */}
            <div className="flex items-center gap-5">
                {/* Icon Box */}
                <div className="bg-white/20 p-4 text-white rounded-2xl flex items-center justify-center">
                    <img src={category?.image} alt="" className="w-8 h-8"/>
                </div>

                {/* Text */}
                <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                    {category?.name}
                </h1>
                <p className="mt-1 text-sm md:text-base opacity-90">
                    Choose a subcategory to browse products
                </p>
                </div>
            </div>
            
        </div>
        <Link className='flex items-center gap-2 mt-4 px-16 text-gray-600 hover:text-[#16a34a]' href="/categories">
            <svg data-prefix="fas" data-icon="arrow-left" className="w-3 h-3 svg-inline--fa fa-arrow-left" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
            Back to Categories
        </Link>
        <h5 className='mt-4 px-16 text-black'>{subCategories?.length || 0}  Subcategories in SuperMarket</h5>
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-5 px-16">
          {subCategories?.map((subCategory)=>(
            <Link href={`/subCategories/${subCategory._id}`} id={subCategory?._id} className="group bg-white rounded-2xl p-3 shadow-md border cursor-pointer transition hover:shadow-lg hover:-translate-y-2 duration-500">
            
            <div className="mx-4 w-14 h-14 rounded-xl bg-[#f0fdf4] flex items-center justify-center mb-4 group-hover:bg-[#dcfce7] transition-colors text-[#16a34a]">
                <svg data-prefix="fas" data-icon="folder-open" className="w-8 h-8 svg-inline--fa fa-folder-open text-2xl text-primary-600" role="img" viewBox="0 0 576 512" aria-hidden="true"><path fill="currentColor" d="M56 225.6L32.4 296.2 32.4 96c0-35.3 28.7-64 64-64l138.7 0c13.8 0 27.3 4.5 38.4 12.8l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4l117.3 0c35.3 0 64 28.7 64 64l0 16-365.4 0c-41.3 0-78 26.4-91.1 65.6zM477.8 448L99 448c-32.8 0-55.9-32.1-45.5-63.2l48-144C108 221.2 126.4 208 147 208l378.8 0c32.8 0 55.9 32.1 45.5 63.2l-48 144c-6.5 19.6-24.9 32.8-45.5 32.8z" /></svg>
            </div>
            <p className='mt-3 font-extrabold group-hover:text-[#16a34a] mx-4'>{subCategory?.name}</p>
            {/* Text */}
            <p className="mx-4 flex items-center gap-2 mt-1 text-[12px] opacity-0 translate-y-2 
                transition-all
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-[#16a34a]">
              View SubCategories
              <svg data-prefix="fas" data-icon="arrow-right" className="mx-4 w-3 h-3 svg-inline--fa fa-arrow-right text-[10px]" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
            </p>
          </Link>
          ))}
        </div>
        {/* <FeatureBar2/> */}
        
    </div>
  )
}

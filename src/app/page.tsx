// "use client"
import FeatureBar1, {FeatureBar2} from '@/components/layout/Home/FeatureBar'
import Newsletter from '@/components/layout/Home/Newsletter'

import apiServices from './services/api'
import CategoriesAndCard from '@/components/layout/Home/CategoriesAndCard'
import HeroSection from '@/components/layout/Home/HeroSection'
import { ProductCard } from '@/components/product/ProductCard'


export default async function Home() {

  const products = await apiServices.getProducts()
  return (
    <div className='grid gap-6'>
      <HeroSection />
      <FeatureBar1/>
      <CategoriesAndCard/>
      <h1 className="relative mx-16 px-2 py-1 rounded-xl">
        <span className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-green-400 to-green-700 rounded"></span>
        Featured <span className="text-[#16A34A]">Products</span>
      </h1>
      <div className='grid grid-cols-4 gap-4 px-16'>
        {
          products.map((product) => (
          <ProductCard id={product._id} name={product.title} images={product.images} rating={product.ratingsAverage} reviewCount={product.ratingsQuantity} price={product.price} originalPrice={product.price + 100} />))
        }
      </div>
      <Newsletter/>
      <FeatureBar2/>
    </div>
  )
}

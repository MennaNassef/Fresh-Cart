
import apiServices from '@/app/services/api';
import React from 'react'
import ProductDetail from '../../../../components/e-commerce-product-detail';

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
const { productId } = await params;
console.log(productId) 
    const product=await apiServices.getProductDetails(productId)
    console.log(product);
    
  return (
    <ProductDetail product={product}/>
  )
}

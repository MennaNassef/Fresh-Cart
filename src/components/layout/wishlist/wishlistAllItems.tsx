"use client"
import React, { useEffect, useState } from 'react'
import { IWishlist } from '@/interfaces/IWishlist';
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import WishlistItem from '@/components/layout/wishlist/WishlistItem';
import Link from 'next/link';
import { toast } from 'sonner';
import apiServices from '@/app/services/api';
import WishlistEmpty from "@/components/layout/wishlist/WishlistEmpty";
import { IWishlistResponse } from '@/interfaces/IWishlistResponse';

export default function WishlistAllItems({wishlist}:{ wishlist: IWishlist[]}) {
  
  const [innerCart, setInnerCart] = useState<IWishlist[]>(wishlist || [])
  console.log(innerCart)
    useEffect(() => {
    setInnerCart(wishlist);
  }, [wishlist]);
  async function removeItem(productId:string){
      const response =await apiServices.removeProductFromWishlist(productId)
      setInnerCart(prevItems => 
        prevItems.filter(item => item._id !== productId)
      );
      toast.success("Item removed from wishlist")
  
    }
    console.log(wishlist)
    if(innerCart.length===0){
        return <WishlistEmpty/>
    }
    else{
    return (
        <div className="min-h-screen bg-gray-50 ">
        {/* Header */}
        <div className="py-8 px-16 bg-white mx-auto mb-6">
            <p className="text-sm text-gray-400">Home / Wishlist</p>
            <div className="flex items-center gap-3 mt-3">
            <div className="w-12 h-12 bg-red-100 flex items-center justify-center rounded-xl">
                <Heart className="text-red-500" />
            </div>
            <div>
                <h1 className="text-2xl font-semibold">My Wishlist</h1>
                <p className="text-gray-400 text-sm">{innerCart.length} items saved</p>
            </div>
            </div>
        </div>

        {/* Table */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border">
            <div className="grid grid-cols-4 px-6 py-4 text-gray-400 text-sm border-b">
            <span>Product</span>
            <span>Price</span>
            <span>Status</span>
            <span className="text-right">Actions</span>
            </div>
            {innerCart.map((item:IWishlist) => (
            <WishlistItem item={item} key={item._id} removeWishlistItem={removeItem}/>
            ))}
        </div>

        {/* Footer */}
        <div className="max-w-5xl mx-auto mt-6">
            <Link href="/shop" className="text-gray-500 text-sm">
            ← Continue Shopping
            </Link>
            </div>
        </div>
  )}
    
}

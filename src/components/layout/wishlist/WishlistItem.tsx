"use client"
import apiServices from '@/app/services/api';
import { IWishlist } from '@/interfaces/IWishlist';
import { ShoppingCart, Trash2 ,Image, Loader2} from 'lucide-react'
import React, { useState } from 'react'
import { toast } from 'sonner';

export default function WishlistItem({item,removeWishlistItem}:{item:IWishlist,removeWishlistItem:(productId:string) =>Promise<void>}) {
    const [innerCart,setInnerCart] =useState<IWishlist>(item)
  const [isDeleting,setisDeleting] =useState(false)
    async function removeItem() {
    try {
      setisDeleting(true)
      
      await apiServices.removeProductFromWishlist(item.id);
      await removeWishlistItem(item._id)
      toast.success("Item removed from wishlist");
      setisDeleting(false)
    } catch (error) {
      setisDeleting(true)
      toast.error("Failed to remove item");
      setisDeleting(false)
    }
  }
    return (
    <div
            key={item.id}
            className="grid grid-cols-4 items-center px-6 py-5 border-b last:border-none"
          >
            {/* Product */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden">
                <img src={item.imageCover} alt="" width={50} height={50} />
              </div>
              <div>
                <p className="font-medium text-gray-800">{item.title}</p>
                <p className="text-sm text-gray-400">{item.slug}</p>
              </div>
            </div>

            {/* Price */}
            <div>
              <p className="font-medium">{item.price} EGP</p>
              {item.priceAfterDiscount && (
                <p className="text-sm text-gray-400 line-through">
                  {item.priceAfterDiscount} EGP
                </p>
              )}
            </div>
{/* Status */}
            <div>
              <span className="text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm">
                • In Stock
              </span>
            </div>

            {/* Actions */}
            <div className="flex justify-end items-center gap-3">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700">
                <ShoppingCart size={16} /> Add to Cart
              </button>
              <button className="border p-2 rounded-lg hover:bg-gray-100"
                    onClick={removeItem}
                    disabled={isDeleting}
                    >
                      {isDeleting ?(
                        <Loader2 className="mr-1 size-4 animate-spin" />
                      ):(
                        <Trash2 className="mr-1 size-4" />
                      )}
                      
              </button>
            </div>
          </div>
  )
}

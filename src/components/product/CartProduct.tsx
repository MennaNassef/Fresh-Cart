import React from 'react'
import { Loader2 } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Minus } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useState } from 'react';
import { ICartProduct } from '@/interfaces/cart/ICartProduct ';
import { formatPrice } from '@/lib/utils';

export default function CartProduct({item ,removeItem,updateProductCount}
  :{item:ICartProduct,
    updateProductCount:(productId:string,count:number)=>Promise<void>
    ,removeItem:(productId:string) =>Promise<void>}) {

  const [isDeleting,setisDeleting] =useState(false)
  const [isIncreasing,setIsIncreasing] =useState(false)
  const [isDecreasing,setIsDecreasing] =useState(false)
  const [isUpdating,setIsUpdating] =useState(false)

  


  async function handleRemoveProductFromCart(){
    setisDeleting(true )
    await removeItem(item.product._id)
    setisDeleting(false)
  }
  async function handleUpdateProductCount(count:number){
    if(count > item.count){
      setIsIncreasing(true)
    }else{
      setIsDecreasing(true)
    }
    setIsUpdating(true)
    await updateProductCount(item.product._id,count)
    setIsUpdating(false)
    setIsIncreasing(false)
    setIsDecreasing(false)
  }
  return (
    <div
                  key={item._id}
                  className="flex gap-4 rounded-lg border bg-card p-4"
                >
                  <div className="w-24 shrink-0">
                    <AspectRatio
                      ratio={1}
                      className="overflow-hidden rounded-md bg-muted"
                    >
                      <img
                        src={item.product.imageCover}
                        alt={item.product.title}
                        className="size-full object-cover"
                      />
                    </AspectRatio>
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-medium">{item.product.title}</h3>
                      {/* {item.variant && (
                        <p className="text-sm text-muted-foreground">
                          {item.variant}
                        </p>
                      )} */}
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-8"
                        disabled={item.count ==1||isUpdating}
                        onClick={() => handleUpdateProductCount(item.count -1)}
                      >
                        {isDecreasing?(
                          <Loader2 className='animate-spin size-3'/>
                        ):(
                          <Minus className="size-3" />
                        )}
                        
                      </Button>
                      <span className="w-8 text-center">{item.count}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-8"
                        disabled={isUpdating}
                        onClick={() => handleUpdateProductCount(item.count  +1)}
                      >
                        {isIncreasing?(
                          <Loader2 className='animate-spin size-3'/>
                        ):(
                          <Plus className="size-3" />
                        )}
                        
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <div className="text-right">
                      <p className="font-semibold">
                        {formatPrice(item.price * item.count)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {formatPrice(item.price)} each
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground"
                      onClick={handleRemoveProductFromCart}
                      disabled={isDeleting}
                    >
                      {isDeleting ?(
                        <Loader2 className="mr-1 size-4 animate-spin" />
                      ):(
                        <Trash2 className="mr-1 size-4" />
                      )}
                      
                      Remove
                    </Button>
                  </div>
                </div>
  )
}

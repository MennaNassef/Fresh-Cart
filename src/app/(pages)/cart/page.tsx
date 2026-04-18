import apiServices from '@/app/services/api'
import React from 'react'
import { ShoppingCart2 } from './shoppingCart';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {decode} from 'next-auth/jwt'
export default async function Cart() {
  
  
  const cookie =await cookies();
    const myToken = cookie.get("next-auth.session-token")?.value;
    console.log(myToken)
        var decodedToken=await decode({token:myToken ,secret:process.env.NEXTAUTH_SECRET!})
        console.log(decodedToken)
    if (!myToken) {
      console.log("gyug")
      redirect("/auth/signin");
    }
    if(decodedToken){
      const cart=await apiServices.getCart(decodedToken.token)
      console.log(cart);
      return (
      <ShoppingCart2 cart={cart}/>
  )}
    
  
  
}

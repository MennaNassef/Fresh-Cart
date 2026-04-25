import { cookies } from "next/headers";
import apiServices from "@/app/services/api";
import {decode} from 'next-auth/jwt'
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import Link from "next/link";
import SignInButton from "@/components/layout/wishlist/SignInButton";
import WishlistEmpty from "@/components/layout/wishlist/WishlistEmpty";
import Image from "next/image";
import WishlistItem from "@/components/layout/wishlist/WishlistItem";
import WishlistAllItems from "../../../components/layout/wishlist/wishlistAllItems";

export default async function WishlistPage() {
  const cookie =await cookies();
  const myToken =
   cookie.get("next-auth.session-token")?.value ||
   cookie.get("__Secure-next-auth.session-token")?.value;
  // const myToken = cookie.get("next-auth.session-token")?.value;
  console.log(myToken)
  if (!myToken) {
    return (
    <WishlistEmpty/>
  )}
  const decodedToken=await decode({token:myToken ,secret:process.env.NEXTAUTH_SECRET!})
  console.log(decodedToken)
  if(decodedToken){
    const wishlist = await apiServices.getUserWishlist(decodedToken.token);
    console.log(wishlist)
    return <WishlistAllItems wishlist={wishlist}/>
    
  }
  return (
    <h1>Error</h1>
  )
}
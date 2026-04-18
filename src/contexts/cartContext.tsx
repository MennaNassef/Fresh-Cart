"use client"
import apiServices from "@/app/services/api";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import {Provider} from "react-redux"
import Cookies from "js-cookie";
export const cartContext=createContext<{
    cartCount: number; 
    setCartCount: Dispatch<SetStateAction<number>>;
    isLoading:boolean;
}>({
    cartCount: 0,
    setCartCount: ()=>{},
    isLoading:true
})
export default function CartContextProvider({
    children,
}:{
    children:ReactNode;
}){
    const[cartCount,setCartCount]=useState(0);
    const[isLoading,setIsLoading]=useState(true);

    async function getCart(){
         const token = Cookies.get("token") || ""
        setIsLoading(true)
        const resopnse=apiServices.getCart(token)
        setCartCount((await resopnse).numOfCartItems)
        setIsLoading(false)
    }
    useEffect(()=>{
        getCart();
    },[])
    return (
        <Provider store={store}>
            <SessionProvider>
                <cartContext.Provider value={{cartCount,setCartCount ,isLoading}}>
                    {children}
                </cartContext.Provider>
            </SessionProvider>
        </Provider>
    )
}
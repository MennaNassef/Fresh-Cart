import apiServices from "@/app/services/api";
import { IProduct } from "@/interfaces/IProduct";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState:{
    products:IProduct[]
}={
    products:[]
}

export const getAllProducts=createAsyncThunk("products/getAllProducts",async ()=>{
    const products =await apiServices.getProducts()
    return products
})
const productsSlice=createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(getAllProducts.pending,(state,action)=>{
            console.log("pending");
        })
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
            console.log("fulfilled");
            state.products=action.payload 
        })
        builder.addCase(getAllProducts.rejected,(state,action)=>{
            console.log("rejected");
        })
    }
})
export const productsReducer=productsSlice.reducer

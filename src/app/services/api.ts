// import { ICartResponse } from "@/interfaces/cart/ICartResponse"
// import { ICategory } from "@/interfaces/ICategory"
// import { IProduct } from "@/interfaces/IProduct"
// import { ResponseType } from "@/types/ResponseType"
// import { SignInResponse } from "@/types/SignInRespose"


// class ApiServices{
//     #BASE_URL=process.env.NEXT_PUBLIC_BASE_URL
//     #headers={
//         "content-type":"application/json",
//         token:  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZGQ0MDA2NDVlYWMzNTc1OTQyNzNiYiIsIm5hbWUiOiJNZW5uYSBOYXNzZWYiLCJyb2xlIjoidXNlciIsImlhdCI6MTc3NjExMzM3MSwiZXhwIjoxNzgzODg5MzcxfQ.vLLHPSxSO3zuwlq0FIqaZME8FIbiScBywv2duA_wiD4'
//     }
//     async getProducts():Promise<IProduct[]>{
//         const response = await fetch(this.#BASE_URL+"/api/v1/products")
//         const {data:product}:ResponseType<IProduct> =await response.json()
//         return product
//     }

//     async getProductDetails(productId:string):Promise<IProduct>{
//         const response = await fetch(this.#BASE_URL+"/api/v1/products/" +productId)
//         const {data:product} =await response.json()
//         return product
//     }

//     async addProductToCart(productId:string):Promise<ICartResponse>{
//         const response = await fetch(this.#BASE_URL+"/api/v2/cart" ,{
//             method:'post',
//             body:JSON.stringify({
//                 productId:productId
//             }),
//             headers:this.#headers
//         })
//         const data =await response.json()
//         console.log(data);
//         return data
//     }
//     async getCart():Promise<ICartResponse>{
//         const response = await fetch(this.#BASE_URL+"/api/v2/cart" ,{
//             headers:this.#headers
//         })
//         const data =await response.json()
//         console.log(data);
        
//         return data
//     }

//     async removeProductFromCart(productId:string):Promise<ICartResponse>{
//         const response = await fetch(this.#BASE_URL+"/api/v2/cart/" + productId ,{
//             method:'delete',
//             headers:this.#headers
//         })
//         const data =await response.json()
//         console.log(data);
//         return data
//     }

//     async clearCart():Promise<any>{
//         const response = await fetch(this.#BASE_URL+"/api/v2/cart/"  ,{
//             method:'delete',
//             headers:this.#headers
//         })
//         const data =await response.json()
//         return data
//     }
//     async updateProductCount(productId:string,count:number):Promise<ICartResponse>{
//         const response = await fetch(this.#BASE_URL+"/api/v2/cart/" +productId  ,{
//             method:'put',
//             headers:this.#headers,
//             body:JSON.stringify({
//                 count
//             })
//         })
//         const data =await response.json()
//         return data
//     }

//     async checkout(cartId:string){
//         // const response = 
//         return await fetch(this.#BASE_URL+"/api/v1/orders/checkout-session/" +cartId +"?url=http://localhost:3000"  ,{
//             method:'post',
//             headers:this.#headers,
//             body:JSON.stringify({
//                 "shippingAddress":{
//                     "details":"details",
//                     "phone":"01010700998",
//                     "city":"cairo"
//                 }
//             })
//         }).then(res=>res.json())
//         // const data =await response.json()
//         // return data
//     }

//     async signIn(email:string,password:string):Promise<SignInResponse>{
//         const response = await fetch(this.#BASE_URL+"/api/v1/auth/signin"  ,{
//             method:'post',
//             headers:this.#headers,
//             body:JSON.stringify({
//                 email,
//                 password
//             })
//         })
//         const data =await response.json()
//         console.log(data.token)
//         if (data.token) { localStorage.setItem("token", data.token); }
//         console.log( localStorage.setItem("token", data.token))
//         return data
//     }
//     async getCategories():Promise<ICategory[]>{
//         const response = await fetch(this.#BASE_URL+"/api/v1/categories"  ,{
//             method:'get',
//             headers:this.#headers
            
//         })
//         const data =await response.json()
//         return data.data
//     }
// }
// const apiServices=new ApiServices()
// export default apiServices

import { ICartResponse } from "@/interfaces/cart/ICartResponse";
import { IBrand } from "@/interfaces/IBrand";
import { ICategory } from "@/interfaces/ICategory";
import { IProduct } from "@/interfaces/IProduct";
import { ISubcategory } from "@/interfaces/ISubcategory";
import { IWishlist } from "@/interfaces/IWishlist";
import { IWishlistResponse } from "@/interfaces/IWishlistResponse";
import { ResponseType } from "@/types/ResponseType";
import { SignInResponse } from "@/types/SignInRespose";

class ApiServices {
  #BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  // const cookie=await cookies()
  // const myToken=cookie.get("next-auth.session-token")?.value
  // console.log(myToken)
  #getToken() {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
    return null;
  }

  #getHeaders() {
    return {
      "content-type": "application/json",
      token: this.#getToken() || "",
    };
  }

  async getProducts(): Promise<IProduct[]> {
    const response = await fetch('https://ecommerce.routemisr.com/api/v1/products');
    console.log(response)
    const data=await response.json();
    return data?.data || [];;
  }

  async getProductDetails(productId: string): Promise<IProduct> {
    const response = await fetch(
      'https://ecommerce.routemisr.com/api/v1/products/' + productId 
    );
    console.log(productId)
    const { data: product } = await response.json();
    return product;
  }

  async getCategoryDetails(categoryId: string): Promise<ICategory> {
    const response = await fetch(
      this.#BASE_URL + "/api/v1/categories/" + categoryId
    );
    console.log(response)
    const data  = await response.json();
    console.log(data)
    return data.data;
  }
  async getSubcategories(subcategoriesId: string): Promise<ISubcategory[]> {
    const response = await fetch(
      this.#BASE_URL + "/api/v1/categories/" + subcategoriesId +"/subcategories"
    );
    const data  = await response.json();
    console.log(data.data)
    return data.data;
  }

  async addProductToCart(productId: string): Promise<ICartResponse> {
    const response = await fetch(this.#BASE_URL + "/api/v2/cart", {
      method: "post",
      body: JSON.stringify({
        productId,
      }),
      headers: this.#getHeaders(),
    });

    const data = await response.json();
    console.log(data);
    return data;
  }

  async getCart(token:string): Promise<ICartResponse> {
    const response = await fetch(this.#BASE_URL + "/api/v2/cart", {
      method: "get",
      headers:{  "content-type": "application/json",
      token: token || "",
  }});

    const data = await response.json();
    console.log(data);
    return data;
  }

  async removeProductFromCart(productId: string): Promise<ICartResponse> {
    const response = await fetch(
      this.#BASE_URL + "/api/v2/cart/" + productId,
      {
        method: "delete",
        headers: this.#getHeaders(),
      }
    );

    const data = await response.json();
    console.log(data);
    return data;
  }

  async clearCart(): Promise<any> {
    const response = await fetch(this.#BASE_URL + "/api/v2/cart/", {
      method: "delete",
      headers: this.#getHeaders(),
    });

    const data = await response.json();
    return data;
  }

  async updateProductCount(
    productId: string,
    count: number
  ): Promise<ICartResponse> {
    const response = await fetch(
      this.#BASE_URL + "/api/v2/cart/" + productId,
      {
        method: "put",
        headers: this.#getHeaders(),
        body: JSON.stringify({
          count,
        }),
      }
    );

    const data = await response.json();
    return data;
  }

  async checkout(cartId: string) {
    return await fetch(
      this.#BASE_URL +
        "/api/v1/orders/checkout-session/" +
        cartId +
        "?url=${process.env.NEXT_PUBLIC_BASE_URL",
      {
        method: "post",
        headers: this.#getHeaders(),
        body: JSON.stringify({
          shippingAddress: {
            details: "details",
            phone: "01010700998",
            city: "cairo",
          },
        }),
      }
    ).then((res) => res.json());
  }

  async signIn(
    email: string,
    password: string
  ): Promise<SignInResponse> {
    const response = await fetch(
      this.#BASE_URL + "/api/v1/auth/signin",
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    console.log(data.token);
    if (typeof window !== "undefined" && data.token) {
      localStorage.setItem("token", data.token);
    }

    return data;
  }

  async getCategories(): Promise<ICategory[]> {
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/categories",
      {
        method: "get",
        // headers: this.#getHeaders(),
      }
    );

    const data = await response.json();
    return data.data;
  }

  async getBrands(token:string): Promise<IBrand[]> {
    const response = await fetch(
      this.#BASE_URL + "/api/v1/brands",
      {
        method: "get",
        headers:{  "content-type": "application/json",
      token: token || "",
  }});
      const text = await response.text();

  if (!response.ok) {
    console.error("API Error:", text);
    return [];
  }

  try {
    const data = JSON.parse(text);
    return data.data;
  } catch (err) {
    console.error("Invalid JSON:", text);
    return [];
  }
  }
  async addProductToWishlist(productId: string,token:string): Promise<IWishlistResponse> {
    const response = await fetch(this.#BASE_URL + "/api/v1/wishlist/", {
      method: "post",
      body: JSON.stringify({
        productId,
      }),
      headers:{  "content-type": "application/json",
      token: token || "",
  }
    });

    const data = await response.json();
    console.log(data)
    return data;
  }
  async getUserWishlist(token:string): Promise<IWishlist[]> {
    const response = await fetch(this.#BASE_URL + "/api/v1/wishlist/", {
      method: "get",
      headers:{  "content-type": "application/json",
      token: token || "",
    }
    });

    const data = await response.json();
    console.log(data)
    return data.data;
  }
  async removeProductFromWishlist(productId:string): Promise<IWishlistResponse>  {
    const response = await fetch(this.#BASE_URL + "/api/v1/wishlist/"+productId ,{
      method: "delete",
      headers: this.#getHeaders(),
    });

    const data = await response.json();
    console.log(data)
    return data;
  }
}

const apiServices = new ApiServices();
export default apiServices;
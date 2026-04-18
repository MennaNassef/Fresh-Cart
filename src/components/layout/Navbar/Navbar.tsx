// "use client";

// import { Loader2, MenuIcon } from "lucide-react";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { cn } from "@/lib/utils";
// import Link from 'next/link';
// import { useContext } from "react";
// import { cartContext } from './../../../contexts/cartContext';
// import { signOut, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useSelector } from "react-redux";
// import { RootState } from "@/redux/store";


// interface NavbarProps {
//   className?: string;
// }

// export default function Navbar ({ className }: NavbarProps) {
//   const session =useSession()
  
  
//   const router=useRouter()
//   const features = [
//     {
//       title: "Dashboard",
//       description: "Overview of your activity",
//       href: "#",
//     },
//     {
//       title: "Analytics",
//       description: "Track your performance",
//       href: "#",
//     },
//     {
//       title: "Settings",
//       description: "Configure your preferences",
//       href: "#",
//     },
//     {
//       title: "Integrations",
//       description: "Connect with other tools",
//       href: "#",
//     },
//     {
//       title: "Storage",
//       description: "Manage your files",
//       href: "#",
//     },
//     {
//       title: "Support",
//       description: "Get help when needed",
//       href: "#",
//     },
//   ];
//   const {cartCount ,isLoading}=useContext(cartContext)
  
//   const {counter}=useSelector((state:RootState)=> state.counter)

//   return (
//     <section className={cn("p-4", className)}>
//       <div className="container mx-auto">
//         <nav className="flex items-center justify-between">
//           <Link
//             href="/"
//             className="flex items-center gap-2"
//           >
//             <img
//               src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
//               className="max-h-8"
//               alt="Shadcn UI Navbar"
//             />
//             <span className="text-lg font-semibold tracking-tighter">
//               TECHMART {counter}
//             </span>
//           </Link>
//           <NavigationMenu className="hidden lg:block">
//             <NavigationMenuList>

//               <NavigationMenuItem>
//                 <Link
//                   href="/products"
//                   className={navigationMenuTriggerStyle()}
//                 >
//                   Products
//                 </Link>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <Link
//                   href="/categories"
//                   className={navigationMenuTriggerStyle()}
//                 >
//                   Categories
//                 </Link>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <Link
//                   href="/brands"
//                   className={navigationMenuTriggerStyle()}
//                 >
//                   Brands
//                 </Link>
//               </NavigationMenuItem>

//               {session.status=="authenticated" && (
//                 <>
//                 <NavigationMenuItem>
//                   <Link
//                     href="/orders"
//                     className={navigationMenuTriggerStyle()}
//                   >
//                     Orders
//                   </Link>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                     <Link
//                       href="/cart"
//                       className={navigationMenuTriggerStyle()}
//                     >
//                       Cart
//                     </Link>
//                       <span 
//                       className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary text-white flex justify-center items-center ">
//                         {isLoading? <Loader2 className='animate-spin bg-white text-black'/>:cartCount}
//                       </span>
//                 </NavigationMenuItem>
//               </>)}

//             </NavigationMenuList>
//           </NavigationMenu>
//           {session.status=="unauthenticated" ?(
//             <div className="hidden items-center gap-4 lg:flex">
//               <Button  onClick={() => router.push("/auth/signin")}  variant="outline">Sign in</Button>
//             </div>
//             ):(
//             <div className="hidden items-center gap-4 lg:flex">
//               <Button onClick={() =>signOut({callbackUrl: '/api/auth/signin'})} variant="outline">Sign Out</Button>
//             </div>)}

//           <Sheet>
//             <SheetTrigger asChild className="lg:hidden">
//               <Button variant="outline" size="icon">
//                 <MenuIcon className="h-4 w-4" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="top" className="max-h-screen overflow-auto">
//               <SheetHeader>
//                 <SheetTitle>
//                   <Link
//                     href="/"
//                     className="flex items-center gap-2"
//                   >
//                     <img
//                       src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
//                       className="max-h-8"
//                       alt="Shadcn UI Navbar"
//                     />
//                     <span className="text-lg font-semibold tracking-tighter">
//                       TECHMART
//                     </span>
//                   </Link>
//                 </SheetTitle>
//               </SheetHeader>
//               <div className="flex flex-col p-4">
//                 <Accordion type="single" collapsible className="mt-4 mb-2">
//                   <AccordionItem value="solutions" className="border-none">
//                     <AccordionTrigger className="text-base hover:no-underline">
//                       Features
//                     </AccordionTrigger>
//                     <AccordionContent>
//                       <div className="grid md:grid-cols-2">
//                         {features.map((feature, index) => (
//                           <a
//                             href={feature.href}
//                             key={index}
//                             className="rounded-md p-3 transition-colors hover:bg-muted/70"
//                           >
//                             <div key={feature.title}>
//                               <p className="mb-1 font-semibold text-foreground">
//                                 {feature.title}
//                               </p>
//                               <p className="text-sm text-muted-foreground">
//                                 {feature.description}
//                               </p>
//                             </div>
//                           </a>
//                         ))}
//                       </div>
//                     </AccordionContent>
//                   </AccordionItem>
//                 </Accordion>
//                 <div className="flex flex-col gap-6">
//                   <a href="#" className="font-medium">
//                     Templates
//                   </a>
//                   <a href="#" className="font-medium">
//                     Blog
//                   </a>
//                   <a href="#" className="font-medium">
//                     Pricing
//                   </a>
//                 </div>
//                 <div className="mt-6 flex flex-col gap-4">
//                   <Button onClick={() => router.push("/auth/signin")} variant="outline">Sign in</Button>
//                   <Button>Start for free</Button>
//                 </div>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </nav>
//       </div>
//     </section>
//   );
// };

// export default Navbar ;







"use client";

import { Loader2, Menu, Search, Heart, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";
import { cartContext } from "@/contexts/cartContext";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const { cartCount, isLoading } = useContext(cartContext);
  const { status } = useSession();
  const router = useRouter();
console.log(status);

  return (
    <>
      {/* 🔹 Top Bar */}
      <div className="hidden bg-gray-100 text-sm py-2 px-16 lg:flex justify-between items-center">
        <div className="flex gap-6">
          <span className="flex gap-4 items-center text-gray-500"> 
            <svg data-prefix="fas" data-icon="truck" className="text-[#16a34a] w-3 h-3 svg-inline--fa fa-truck text-primary-600 text-xs" role="img" viewBox="0 0 576 512" aria-hidden="true"><path fill="currentColor" d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" /></svg>
            Free Shipping on Orders 500 EGP
          </span>
          <span className="flex gap-4 items-center text-gray-500"> 
            <svg data-prefix="fas" data-icon="gift" className="text-[#16a34a] w-3 h-3 svg-inline--fa fa-gift text-primary-600 text-xs" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M321.5 68.8C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40s-17.9 40-40 40l-73.3 0 34.8-59.2zm-131 0l34.8 59.2-73.3 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zm89.6-24.3l-24.1 41-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0c-48.6 0-88 39.4-88 88 0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40 0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4zM480 272l-200 0 0 208 136 0c35.3 0 64-28.7 64-64l0-144zm-248 0l-200 0 0 144c0 35.3 28.7 64 64 64l136 0 0-208z" /></svg>
            New Arrivals Daily
          </span>
        </div>

        <div className="flex gap-6 items-center">
          <span className='flex items-center gap-2 text-gray-500'> 
            <svg data-prefix="fas" data-icon="phone" className="w-3 h-3 svg-inline--fa fa-phone text-xs" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z" /></svg>
            +1 (800) 123-4567
          </span>
          <span className='flex items-center gap-2 text-gray-500'>
            <svg data-prefix="far" data-icon="envelope" className="w-3 h-3 svg-inline--fa fa-envelope text-xs" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M61.4 64C27.5 64 0 91.5 0 125.4 0 126.3 0 127.1 .1 128L0 128 0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256-.1 0c0-.9 .1-1.7 .1-2.6 0-33.9-27.5-61.4-61.4-61.4L61.4 64zM464 192.3L464 384c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-191.7 154.8 117.4c31.4 23.9 74.9 23.9 106.4 0L464 192.3zM48 125.4C48 118 54 112 61.4 112l389.2 0c7.4 0 13.4 6 13.4 13.4 0 4.2-2 8.2-5.3 10.7L280.2 271.5c-14.3 10.8-34.1 10.8-48.4 0L53.3 136.1c-3.3-2.5-5.3-6.5-5.3-10.7z" /></svg>
            support@freshcart.com
          </span>

          {status === "unauthenticated" ? (
            <>
              <button onClick={() => router.push("/auth/signin")} className='text-gray-500 flex items-center gap-2'>
                Sign In
              </button>
              <button onClick={() => router.push("/auth/signup")} className='text-gray-500 flex items-center gap-2'>
                Sign Up
              </button>
            </>
          ) : (
            <>
            <span className='flex items-center gap-2 text-gray-500'>
              <svg data-prefix="far" data-icon="user" className=" w-3 h-3 svg-inline--fa fa-user text-xs" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM48 480c0-70.7 57.3-128 128-128l96 0c70.7 0 128 57.3 128 128l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z" /></svg>
              Menna Nassef
            </span>
            <button onClick={() => signOut({ callbackUrl: "/" })} className='text-gray-500 flex items-center gap-2'>
                <svg data-prefix="fas" data-icon="right-from-bracket" className="w-3 h-3 svg-inline--fa fa-right-from-bracket text-xs" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" /></svg>
              Sign Out
            </button>
            </>
          )}
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav className="bg-white shadow-sm px-16 py-4 flex items-center justify-between ">
        {/* Logo */}
        <Link href="/" className="w-35 font-bold text-green-600">
          <img src="\FreshCart.png" alt="" />
        </Link>

        {/* 🔍 Search */}
        <div className="hidden lg:flex items-center w-[40%] border rounded-full px-4 py-2">
          
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            className="w-full outline-none px-2"
          />
          <Search className="w-4 h-4 text-[#00C950]" />
        </div>

        {/* 🔹 Menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>

            <NavigationMenuItem>
              <Link href="/" className="px-3 py-2">Home</Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/shop" className="px-3 py-2">Shop</Link>
            </NavigationMenuItem>

            {/* Categories Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-55 gap-2 p-4">
                  <li>
                    <Link href="/categories" className="block p-2 hover:bg-gray-100 rounded">
                      All Categories
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/electronics" className="block p-2 hover:bg-gray-100 rounded">
                      Electronics
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/women" className="block p-2 hover:bg-gray-100 rounded">
                      Women's Fashion
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/men" className="block p-2 hover:bg-gray-100 rounded">
                      Men's Fashion
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/beauty" className="block p-2 hover:bg-gray-100 rounded">
                      Beauty & Health
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/brands" className="ps-3 py-2">Brands</Link>
            </NavigationMenuItem>
             
            
            
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* 🔹 Icons */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center bg-[#f0fdf4] text-[#16a34a] rounded-full">
              <svg data-prefix="fas" data-icon="headset" className=" w-4 h-4 svg-inline--fa fa-headset text-primary-600" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M224 64c-79 0-144.7 57.3-157.7 132.7 9.3-3 19.3-4.7 29.7-4.7l16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0c-53 0-96-43-96-96l0-64C0 100.3 100.3 0 224 0S448 100.3 448 224l0 168.1c0 66.3-53.8 120-120.1 120l-87.9-.1-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 0 40 0c39.8 0 72-32.2 72-72l0-20.9c-14.1 8.2-30.5 12.8-48 12.8l-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l16 0c10.4 0 20.3 1.6 29.7 4.7-13-75.3-78.6-132.7-157.7-132.7z" /></svg>
            </div>
            <div>
              <p className="text-gray-400 text-[12px]">Support</p>
              <p className="text-[12px]">24/7 Help</p>
            </div>
            
            <span className='h-10 bg-gray-400 w-px ms-3'></span>
          </div>
          <Link href='/wishlist'>
            <Heart/>
          </Link>
          

          {/* Cart */}
          <Link href="/cart" className="relative hover:bg-gray-100 rounded-full">
            <ShoppingCart className="stroke-2"/>

            <span className="absolute -top-2 -right-2 bg-green-600 border-2 border-white text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {isLoading ? (
                <Loader2 className="animate-spin w-3 h-3" />
              ) : (
                cartCount
              )}
            </span>
          </Link>
        
        <NavigationMenu className="hidden lg:flex items-center">
  <NavigationMenuList >
    <NavigationMenuItem className="relative " >

      {/* 👤 Icon Trigger */}
      <NavigationMenuTrigger className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100">
        <User />
      </NavigationMenuTrigger>

      {/* Dropdown */}
      <NavigationMenuContent className="w-64 p-4 shadow-lg ">
        {/* <div className="w-64 bg-white shadow-lg p-4 space-y-3" > */}

          {/* User Info */}
          <div className="border-b pb-3">
            <p className="font-semibold">Menna Nassef</p>
            <p className="text-sm text-gray-500">
              mennanassef347@gmail.com
            </p>
          </div>

          {/* Menu Links */}
          <ul className="space-y-2 text-sm list-none p-0 m-0">
            <li>
              <Link href="/profile" className="block p-2 rounded hover:bg-gray-100">
                My Profile
              </Link>
            </li>

            <li>
              <Link href="/orders" className="block p-2 rounded hover:bg-gray-100">
                My Orders
              </Link>
            </li>

            <li>
              <Link href="/wishlist" className="block p-2 rounded hover:bg-gray-100">
                My Wishlist
              </Link>
            </li>

            <li>
              <Link href="/addresses" className="block p-2 rounded hover:bg-gray-100">
                Addresses
              </Link>
            </li>

            <li>
              <Link href="/settings" className="block p-2 rounded hover:bg-gray-100">
                Settings
              </Link>
            </li>
          </ul>

          {/* Sign out */}
          <div className="border-t pt-2">
            <button onClick={() =>signOut({callbackUrl: '/api/auth/signin'})}  className="w-full text-left text-red-500 hover:bg-red-50 p-2 rounded">
              Sign Out
            </button>
          </div>

        {/* </div> */}
      </NavigationMenuContent>

    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
          
          
        </div>

        {/* 🔹 Mobile Menu */}
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu />
          </SheetTrigger>

          <SheetContent side="right" className="">
            <Link href="/" className="w-full border-b border-e border-gray-200 font-bold text-green-600 p-5 bg-gray-50 ">
                <img src="\FreshCart.png" alt="" className='w-30' />
              </Link>
              
              {/* <hr /> */}
            <div className="flex flex-col gap-1 px-5">
              <div className="flex items-center w-[90%] border rounded-full px-3 py-2 mb-3">
                  
                  <input
                    type="text"
                    placeholder="Search for products, brands and more..."
                    className="w-full outline-none px-1"
                  />
                  <Search className="w-4 h-4 text-[#00C950]" />
                </div>
               <hr/>
              <Link href="/" className="font-semibold text-gray-700 py-3 px-4 hover:bg-green-50 hover:text-green-600 rounded-xl">Home</Link>
              <Link href="/products" className="font-semibold text-gray-700 py-3 px-4 hover:bg-green-50 hover:text-green-600 rounded-xl">Shop</Link>
              <Link href="/categories" className="font-semibold text-gray-700 py-3 px-4 hover:bg-green-50 hover:text-green-600 rounded-xl">Categories</Link>
              <Link href="/brands" className="font-semibold text-gray-700 py-3 px-4 hover:bg-green-50 hover:text-green-600 rounded-xl">Brands</Link>

              {status === "authenticated" && (
                <>
                  <Link href="/orders">Orders</Link>
                  <Link href="/cart">Cart ({cartCount})</Link>
                </>
              )}

              <hr />

              {status === "unauthenticated" ? (
                <>
                  <button onClick={() => router.push("/auth/signin")}>
                    Sign In
                  </button>
                  <button onClick={() => router.push("/auth/signup")}>
                    Sign Up
                  </button>
                </>
              ) : (
                <button onClick={() => signOut({ callbackUrl: "/" })}>
                  Sign Out
                </button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
}
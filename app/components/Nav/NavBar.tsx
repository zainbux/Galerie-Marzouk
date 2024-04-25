"use client";

import Link from "next/link";
import Image from "next/image";
import NavMenu from "./NavMenu";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";

import { NavLinks } from "@/app/constants";
import ShopButton from "./ShopButton";
import { useShoppingCart } from "use-shopping-cart";



export default function Navbar() {

  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  return (
    <header className="lg:px-28 bg-orange-50 ">
        
      <div className="flex items-center justify-between px-4 sm:px-6 ">

        <Link href="/">
        <Image 
          src={'/logo.png'}
          alt="Product image"
          className="pt-5"
          width={110}
          height={110}
        />

        </Link>

            <nav className="hidden gap-10 md:flex 2xl:ml-16">

              {NavLinks.map((link, idx) => (
                
                  <div key={idx}>
                  {pathname === link.href ? (
                    
                      <Link
                      className="text-md font-semibold text-amber-700"
                      href={link.href}
                      >
                      {link.name}
                      </Link>
                  ) : (
                    
                      <Link
                      href={link.href}
                      className="text-md font-semibold text-gray-600 transition duration-100 hover:text-primary"
                      >
                      {link.name}
                      </Link>
                      
                  )}
                  
                  </div>
              ))}
                            <ShopButton/>

            </nav>

        <div className="flex text-center items-center space-x-5">
            <div className="flex divide-x bg-orange-50">
              <Button
                  variant={"outline"}
                  onClick={() => handleCartClick()}
                  className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-20 md:w-24 rounded-none bg-orange-50"
              >
                  <ShoppingBag />
                  <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                  Cart
                  </span>
              </Button>
            </div>                  
            <div className="items-center">
                <NavMenu/>
            </div>        
        </div>



      </div>
    </header>
  );
}
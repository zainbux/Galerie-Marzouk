'use client'

import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Hamburger from './Hamburger';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import { usePathname } from 'next/navigation';


const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/About" },
  { name: "All Items", href: "/Allitems" },
  { name: "Contact", href: "/Contact" },
];

const NavMenu = () => {

  const pathname = usePathname();

  return (
    <div className=''>
    
    <Sheet >
      <SheetTrigger><Hamburger/></SheetTrigger>
      <SheetContent side={"top"}>

        <div className="text-center items-center">
          
            
            <nav className="space-y-3">
            {links.map((link, idx) => (
                <div key={idx} className='gap-y-5'>
                {pathname === link.href ? (
                    <Link
                    className="text-lg font-semibold text-amber-700"
                    href={link.href}
                    >
                    {link.name}
                    </Link>
                ) : (
                    <Link
                    href={link.href}
                    className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                    >
                    {link.name}
                    </Link>
                )}
                </div>
            ))}  

            </nav>
        </div>

      </SheetContent>
    </Sheet>

    </div>
  );
};

export default NavMenu;

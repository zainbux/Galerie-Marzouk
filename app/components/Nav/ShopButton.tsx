import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import Link from "next/link"
import React from 'react'

type Props = {}

const ShopButton = (props: Props) => {
  return (
    <div className=""> 
        <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
            <NavigationMenuTrigger className="text-md font-semibold text-gray-600 transition duration-100 hover:text-primary">Shop</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white text--900">
                <ul className="grid gap-3 p-3 md:w-[300px] ">
                    <Link href="/Category/rugs"  className="p-1 hover:underline text-md font-semibold text-gray-600 transition duration-100 hover:text-primary">
                        Rugs
                    </Link>
                    <Link href="/Category/poufs"  className="p-1 hover:underline text-md font-semibold text-gray-600 transition duration-100 hover:text-primary">
                        Poufs
                    </Link>
                    <Link href="/Category/pillowsblankets"  className="p-1 hover:underline text-md font-semibold text-gray-600 transition duration-100 hover:text-primary">
                        Pillows & Blankets
                    </Link>
                    <Link href="/Category/lampsfixtures"  className="p-1 hover:underline text-md font-semibold text-gray-600 transition duration-100 hover:text-primary">
                        Lamps & Fixtures
                    </Link>
                    <Link href="/Category/other"  className="p-1 hover:underline text-md font-semibold text-gray-600 transition duration-100 hover:text-primary">
                        Other Decor
                    </Link>
                </ul>            
                </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
</div>
  )
}

export default ShopButton

'use client'

import { AboutUs, FollowUs, OurServices } from "@/app/constants"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Link from "next/link"
  
type Props = {}

function MobileFooter({}: Props) {
  return (
    <div className=" items-center justify-center p-10 bg-gray-900 text-white">
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">About Us</AccordionTrigger>
                <AccordionContent>
                {AboutUs.map((link, idx) => (
                <div key={idx} className='p-1'>
                        <Link className="text-md font-semibold text-white hover:underline" href={link.href}>
                        {link.name}
                        </Link>
                    </div>
                ))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">Our Services</AccordionTrigger>
                <AccordionContent>
                {OurServices.map((link, idx) => (
                <div key={idx} className='p-1'>
                        <Link className="text-md font-semibold text-white hover:underline" href={link.href}>
                        {link.name}
                        </Link>
                    </div>
                ))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">Follow Us</AccordionTrigger>
                <AccordionContent>
                {FollowUs.map((link, idx) => (
                <div key={idx} className='p-1'>
                        <Link className="text-md font-semibold text-white hover:underline" href={link.href}>
                        {link.name}
                        </Link>
                    </div>
                ))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>

    </div>
  )
}

export default MobileFooter
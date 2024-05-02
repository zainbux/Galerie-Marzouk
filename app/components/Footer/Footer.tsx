import React from 'react'
import Email from './Email'
import { AboutUs, OurServices, FollowUs } from '@/app/constants'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import MobileFooter from './MobileFooter'
import { PhoneIncomingIcon } from 'lucide-react'

const Footer = () => {
  return (
    <div className='w-full mt-20'>

      {/* <Email/> */}
      
      <div className='hidden bg-gray-900 justify-evenly p-10 md:px-48 md:flex'>

        <nav className='gap-28'>

        <p className='text-white text-3xl mb-5'>About Us</p>

          {AboutUs.map((link, idx) => (
              <div key={idx} className='p-1'>
                    <Link className="text-md font-semibold text-white hover:underline" href={link.href}>
                      {link.name}
                    </Link>
                </div>
            ))}

        </nav>

        <nav className='gap-28'>

          <p className='text-white text-3xl mb-5'>Our Services</p>

          {OurServices.map((link, idx) => (
              <div key={idx} className='p-1'>
                    <Link className="text-md font-semibold text-white hover:underline" href={link.href}>
                      {link.name}
                    </Link>
                </div>
            ))}
            
        </nav>

        <nav className='gap-28'>

        <p className='text-white text-3xl mb-5'>Follow Us</p>

          {FollowUs.map((link, idx) => (
              <div key={idx} className='p-1'>
                    <Link className="text-md font-semibold text-white hover:underline flex gap-1 items-center" href={link.href}>
                      {link.name} 
                      <HiArrowNarrowRight/>
                    </Link>
                </div>
            ))}
              
        </nav>


        


      </div>

      <div className="md:hidden">
        <MobileFooter/>
      </div>




      <div className='py-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 text-xs bg-gray-900'>

          <hr/>
          <p className='text-white'>@2024 Berbers Bazaar Inc. All rights reserved</p>
          <div className='flex gap-5'>
          <Link className="text-md font-semibold text-white hover:underline" href={'/privacy'}>
            Privacy Policy
          </Link>
          <Link className="text-md font-semibold text-white hover:underline" href={'/terms'}>
            Terms of Use
          </Link> 
          </div>

      </div>


    </div>
  )
}

export default Footer
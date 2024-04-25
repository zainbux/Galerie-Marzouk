'use client'

import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { scrollToSection } from '../utils/utils'


const Hero = () => {
  const handleScrollToProducts = () => {
    scrollToSection({ sectionId: "categories_section" });
  }

  return (
    <div className='w-full h-[500px] md:h-[780px] relative'>

        <Image
            src="/Designer (5).png"
            alt="image"
            fill={true}
            className='object-cover'
        />
        <div className='text- absolute top-0 left-0 w-full h-[370px] bg-gradient-to-b from-orange-50 via-orange-50 to-transparent pointer-events-none'>
            <h1 className=' text-3xl md:text-5xl text-center pt-9'>Welcome to the </h1>
            <h1 className=' text-5xl md:text-8xl text-center font-bold'>Galerie Marzouk</h1>

            <div className='hidden md:flex backdrop-blur-sm p-5  justify-center w-[50vw] mx-auto'>
              <h1 className='text-xl text-center font-semibold '>
                Step into a world of timeless beauty and cultural richness at Galerie Marzouk where every thread tells a tale of Moroccan heritage and craftsmanship
              </h1>
            </div>


        </div>
        
        <div onClick={handleScrollToProducts} className='absolute bottom-48 lg:bottom-72 flex justify-center w-full hover:cursor-pointer hover:scale-110 transition'>
          <div className='shadow-2xl '>
          <span >
            <span className='text-white text-xl md:text-2xl font-semibold rounded-full bg-gray-900 group px-6 py-4 flex items-center transition duration-300  hover:bg-amber-600 hover:text-gray-900   '>
                All Products
            <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'  />
            </span>
            </span>
          </span>
        </div>
        
        </div>

    </div>
  )
}

export default Hero
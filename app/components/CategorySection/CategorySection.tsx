
import Image from 'next/image'
import React from 'react'
import CategoryCarousel from './CategoryCarousel'
import CTAButton from '../CTAButton'

type Props = {
  image: string
  category: string
  pageTo: string
  btn: string
}

const CategorySection = (props: Props) => {

  return (
    <section className='mt-20'>

      <div className='w-full h-[400px] md:h-[680px] relative'>
          
          <Image
              src={`${props.image}`}
              alt="image"
              fill={true}
              className='object-cover'
          />
          <div className='absolute top-0 left-0 w-full h-[190px] bg-gradient-to-b from-orange-50 via-orange-50 to-transparent pointer-events-none'>
              <h1 className='font-bold text-3xl md:text-7xl text-center '>{props.btn}</h1>
          </div>

          <div className='absolute bottom-32 lg:bottom-32 flex justify-center w-full'>
            <CTAButton whereTo={props.pageTo} text={`Shop all ${props.btn}`} />
          </div>

      </div>

      <CategoryCarousel category={props.category}/>

    </section>
  )
}

export default CategorySection

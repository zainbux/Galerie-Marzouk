import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    image: string
    category: string
}

const CategoryCard = (props: Props) => {
  return (
    <div className="w-[80vw] lg:w-[20vw] h-[50vh]  relative rounded-xl overflow-hidden ">

        <Link href={`/allItems/${props.category}`} >
            <Image
                src={`${props.image}`}
                alt="image"
                fill={true}
                className='object-cover hover:opacity-80 hover:scale-110 ease-in duration-150 '
            />
            

            <div className='absolute bottom-5 left-5 '>
                <h1 className='text-white md:text-3xl text-xl font-serif font-semibold'>
                    {props.category}
                </h1>
            </div>
        </Link>

    </div>
  )
}

export default CategoryCard

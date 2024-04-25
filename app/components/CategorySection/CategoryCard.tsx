import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    image: String
    category: String
}

const CategoryCard = (props: Props) => {
  return (
    <div className="md:w-[40vw] h-[50vh] mb-7 relative rounded-xl overflow-hidden ">

        <Link href={`/products/${props.category}`} >
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

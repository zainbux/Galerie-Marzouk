import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { calculateOriginalPrice, feetToCentimeters } from '../utils/utils'

type Props = {

    id:string,
    soldOut:boolean,
    name:string,    
    ThumbnailImage:string,
    price:number,
    discount:number,
    length:number,
    width:number,

}

const ProductCard = (props: Props) => {
  return (
    <div>

        <div className="lg:w-[300px] w-full h-[40vh] border border-slate-100 mb-4 relative rounded-xl overflow-hidden ">

            <Link href={`/products/${props.id}`} >
                <Image
                    src={`${props.ThumbnailImage}`}
                    alt="image"
                    fill={true}
                    className='object-cover hover:opacity-80 hover:scale-110 ease-in duration-150 '
                />

                {props.soldOut && (
                    <div className='absolute top-3 left-3 '>
                        <div className='bg-zinc-400 text-white font-bold p-1 px-2 rounded-full'>
                            <p>SOLD OUT</p>
                        </div>
                    </div>
                )}

            </Link> 

        </div>

        <div className=''> 
            <h1 className='sm:text-sm text-xl font-bold'>
                {props.name}
            </h1>
            <p className=''>
                {props.length} x {props.width} ft / {feetToCentimeters(props.length)} x {feetToCentimeters(props.width)} cm
            </p>
            <div className='flex gap-2'>

                <p className='font-bold text-xl'>
                    ${props.price} 
                </p>
                <p className='text-red-900'>
                    |  <span className='line-through text-red-900'>${calculateOriginalPrice(props.price, props.discount)}</span> (-{props.discount}%)                       
                </p>
            </div>
        </div>

    </div>

  )
}

export default ProductCard


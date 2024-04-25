import React from 'react'
import { FaStar } from 'react-icons/fa'
import { VerifiedIcon } from 'lucide-react'
import Image from 'next/image'

type Props = {

    customerName:string,
    productName:string,
    date:string,
    description:string,
    image:string

}

const ReviewCard = (props:Props) => {

  return (
    <div className=' bg-orange-100 text-slate-600 flex-col justify-center p-5 w-full lg:w-[300px] lg:h-[370px] rounded-xl'>
        <div className='flex justify-between space-x-5'>
            <div>
                <h1 className='font-bold'>{props.customerName}</h1>
                <p className='text-sm'>{props.date}</p>
            </div>
            <div className="flex justify-center items-center">
                <FaStar className='text-blue-500 text-sm'/>
                <FaStar className='text-blue-500 text-sm'/>
                <FaStar className='text-blue-500 text-sm'/>
                <FaStar className='text-blue-500 text-sm'/>  
                <FaStar className='text-blue-500 text-sm'/>
            </div>
        </div>

        <div className='my-3 w-fit text-sm flex px-3 py-1 gap-1 items-center rounded-full bg-slate-300'>
            <VerifiedIcon size={17}/>
            <p>Verified Review</p>
        </div>

        <div className='text'>
            {props.productName}
        </div>

        <div className='my-5 text-sm'>
            {props.description}
        </div>

        <div className='h-20 w-20 relative' >
            <Image
                src={`${props.image}`}
                alt="image"
                fill={true}
                className='object-cover rounded-lg'
            />
        </div>




    </div>
  )
}

export default ReviewCard
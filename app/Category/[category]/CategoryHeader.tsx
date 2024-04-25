import Image from 'next/image'
import React from 'react'

type Props = {
    header: string,
    CategoryImage: string,
    description: string,
}

const CategoryHeader = (props: Props) => {
    return (
        <div className='lg:mx-28 mx-10 justify-center mb-20'>

            <h1 className='font-bold text-3xl md:text-7xl py-7'>
                {props.header}
            </h1>

            <div className='w-full h-full flex flex-col lg:flex-row rounded-xl overflow-auto'>

                <div className='lg:w-[35%] bg-orange-100 p-5 '>
                    <h1 className='text-xl my-5 font-semibold'>Tradtional Berber Rugs</h1>
                    <p className=''>
                        {props.description}
                    </p>
                </div>

                <div className='w-full relative'>
                    <div className="min-h-[40vh] lg:h-[auto]">
                        <Image
                            src={`${props.CategoryImage}`}
                            alt="image"
                            fill={true}
                            className='object-cover h-full'
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CategoryHeader

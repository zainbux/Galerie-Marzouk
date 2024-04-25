import Image from 'next/image'
import React from 'react'

type Props = {

}

const AboutSection = () => {
    return (
        <div className='space-y-10'>

            <div className='justify-center mt-20'>

                <h1 className='font-bold text-3xl md:text-7xl pb-14 text-center'>
                    About Us
                </h1>

                <div className='w-full h-full flex flex-col lg:flex-row overflow-auto lg:pl-10'>

                    <div className='lg:w-[55%] p-5 '>
                        <h1 className='text-xl my-5 font-semibold'>What we're about</h1>
                        <p className=''>

                        At Galerie Marzouk, we value more than just offering beautiful Moroccan rugs. We're committed to supporting artisans and preserving traditions. Join us as we make a difference in their lives through healthcare, housing, and education initiatives. Discover the heart of Galerie Marzouk with us.
                        </p>
                    </div>

                    <div className='w-full relative'>
                        <div className="min-h-[40vh] lg:h-[auto]">
                            <Image
                                src={'/Designer (1).png'}
                                alt="image"
                                fill={true}
                                className='object-cover h-full lg:rounded-l-2xl'
                            />
                        </div>
                    </div>

                </div>
            </div>        
            
            <div className='justify-center '>

                <div className='w-full h-full flex flex-col lg:flex-row overflow-auto lg:pr-10'>

                    <div className='w-full relative'>
                        <div className="min-h-[40vh] lg:h-[auto]">
                            <Image
                                src={'/Designer (13).png'}
                                alt="image"
                                fill={true}
                                className='object-cover h-full lg:rounded-r-2xl'
                            />
                        </div>
                    </div>

                    <div className='lg:w-[55%] p-5 order-first lg:order-last'>
                        <h1 className='text-xl my-5 font-semibold text-center '>Our heritage</h1>
                        <p className=''>
                        Rug weaving is a cherished tradition in Morocco, woven into the fabric of its culture and history. At Galerie Marzouk, we recognize its significance and invest in training young artisans, especially women, to preserve this legacy. Our commitment ensures that this timeless craft not only endures but flourishes for future generations.
                        </p>
                    </div>


                </div>
            </div> 
                    
        
        </div>

    )
}

export default AboutSection

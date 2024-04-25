import Image from 'next/image'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='space-y-10'>

            <div className='justify-center mt-20'>

                <h1 className='font-bold text-3xl md:text-7xl pb-24 text-center'>
                    Our Story
                </h1>

                <div className='w-full h-full flex flex-col lg:flex-row overflow-auto lg:pl-10 justify-center items-center'>

                    <div className='lg:w-[35%] p-5 '>
                        <h1 className='text-2xl my-5 font-semibold text-center'>Where it started!</h1>
                        <p className='text-xl'>

                        Hi, I'm Abdullah Marzouk, I'm deeply rooted in the heritage of Berber nomads from Morocco, inheriting generations of family knowledge and expertise. At Galerie Marzouk, I curate a collection that reflects our cultural richness, featuring renowned rugs and handpicked artifacts. With a passion for preserving tradition, I invite you to explore Moroccan culture through my eyes, where each piece embodies resilience and creativity. Welcome to Galerie Marzouk, where my family's legacy thrives in every treasure.                        </p>
                    </div>

                    <div className='relative '>
                        <div className="min-h-[70vh] lg:h-[auto] mx-auto p-5">
                            <Image
                                src={'/self.jpg'}
                                alt="image"
                                height={500}
                                width={500}
                                className='h-full lg:rounded-2xl mx-auto '
                            />
                        </div>
                    </div>

                </div>
            </div>        
            
            <div className='justify-center '>

                <div className='w-full h-full flex flex-col lg:flex-row overflow-auto lg:pr-10 justify-center items-center'>

                    <div className='relative'>
                        <div className="min-h-[70vh] lg:h-[auto] p-5 mx-auto items-center">
                            <Image
                                src={'/carpetmountain.jpg'}
                                alt="image"
                                height={800}
                                width={800}
                                className='h-full lg:rounded-2xl mx-auto'
                            />
                        </div>
                    </div>

                    <div className='lg:w-[35%] p-5 order-first lg:order-last items-center'>
                        <h1 className='text-2xl my-5 font-semibold text-center '>Our Bread & Butter</h1>
                        <p className='text-xl'>
                        In the majestic Atlas Mountains, Berber artisans uphold age-old traditions passed down through generations, employing the same time-honored techniques as their ancestors to craft each exquisite rug. With skilled hands and a deep reverence for their craft, they begin by meticulously hand-spinning wool sourced from local sheep, imbuing each fiber with the essence of the land. Through a painstaking process of knotting and weaving on traditional looms, they bring intricate patterns and vibrant colors to life, each knot a testament to their expertise and dedication. As the rugs take shape, they become more than mere floor coverings; they are woven narratives, reflecting the beauty, history, and spirit of the Berber people.
                        </p>
                    </div>


                </div>

            </div> 
                    
        
        </div>

    )
}

export default page
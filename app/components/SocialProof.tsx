import { FaStar } from "react-icons/fa";
import React from 'react'
import Image from "next/image";

type Props = {}

const SocialProof = (props: Props) => {
  return (
    <div className="">
        
{/*         <div className='text-center mx-5'>
            <h1 className='text-3xl md:text-5xl font-sans font-semibold'>Trusted & Treasuerd</h1>
            <p className='text-gray-400 text- md:text-2xl font-semibold p-1'>Establishing Excellence: Over 2000+ 5-Star Ratings</p>
            <div className="flex justify-center">
                <FaStar className='text-amber-400 text-xl'/>
                <FaStar className='text-amber-400 text-xl'/>
                <FaStar className='text-amber-400 text-xl'/>
                <FaStar className='text-amber-400 text-xl'/>
                <FaStar className='text-amber-400 text-xl'/>  
            </div>
        </div> */}

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mt-14 bg-orange-400 py-12 text-white">

                <div className="w-64 text-center">
                    <Image
                        src="/star.png"  
                        width={50}
                        height={50}
                        alt="morocco"
                        className="mx-auto pb-5 hover:scale-125 transition"
                    />
                    <p>Ethically Sourced from the Atlas Mountains of Morocco</p>
                </div>                
                <div className="w-64 text-center">
                    <Image
                        src="/infinite (1).png"
                        width={50}
                        height={50}
                        alt="morocco"
                        className="mx-auto pb-5 hover:scale-125 transition"
                    />
                    <p>Lasting Quality Pieces Made with Care</p>
                </div>
                <div className="w-64 text-center">
                    <Image
                        src="/guaranteed.png"
                        width={50}
                        height={50}
                        alt="morocco"
                        className="mx-auto pb-5 hover:scale-125 transition"
                    />
                    <p>Traditional Berber Rugs that Embody Authenticity</p>
                </div>
                <div className="w-64 text-center">
                    <Image
                        src="/hand-made (1).png"
                        width={50}
                        height={50}
                        alt="hand-made.png"
                        className="mx-auto pb-5 hover:scale-125 transition"
                    />
                    <p >100% Handcrafted by Generational Weavers</p>
                </div>

        </div>
    </div>
  )
}

export default SocialProof

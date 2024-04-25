import React from 'react'

type Props = {}

const Email = (props: Props) => {
  return (
    <div className='block lg:flex items-center justify-center w-full bg-orange-400 px-10 lg:px-44 py-10 '>

        <div className='py-10  text-white'>
        {/* <h1 className='font-bold text-3xl md:text-5xl text-center my-10 mx-10'>How does 20% off your first order sound?</h1> */}

            <h1 className='font-semibold mx-16 text-center text-2xl'>
            Signup to join the Berbers Bazaar and gain early access to product releases and exclusive discounts ❤️
            </h1>
        </div>

        <div className='flex justify-center'>
          <div className='bg-white z-30 p-2 space-x-2 rounded-full flex'>
            <input placeholder="Email" className='rounded-full px-2 focus:outline-none text-black'/> 
            <button className='text-white bg-gray-900 rounded-full p-3 font-semibold text-sm text-nowrap hover:opacity-80'>
                SIGN UP
            </button> 
          </div>
        </div>

    </div>
  )
}

export default Email
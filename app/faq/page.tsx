import React from 'react'
import FAQ from '../components/FAQ'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <h1 className='font-bold text-3xl md:text-7xl py-7 text-center'>FAQ's</h1>

        <div className='text-3xl text-center '>
            <FAQ/>
        </div>
    </div>
  )
}

export default page
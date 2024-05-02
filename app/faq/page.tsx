import React from 'react'
import FAQ from '../components/FAQ'
import { MailIcon, PhoneIcon } from 'lucide-react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <h1 className='font-bold text-3xl md:text-7xl py-7 text-center'>FAQ's</h1>

        <div className='text-3xl text-center '>
            <FAQ/>
        </div>

        <div id="Contact">
          <div className='md:flex justify-center md:mt-14 mt-5'>

              <div className='text-center md:px-20 py-3 md:py-0'>
                <PhoneIcon className='mx-auto size-10'/>
                <h1 className='md:text-2xl py-2'>Call Us</h1>
                <p className='md:text-2xl'>+212 661-803170</p>
              </div>

              <div className='text-center md:px-20 py-3 md:py-0'>
                <MailIcon className='mx-auto size-10'/>
                <h1 className='md:text-2xl py-2'>Email Us</h1>
                <p className='md:text-2xl'>galeriemarzoukm@gmail.com</p>
              </div>

          </div>
        </div>
    </div>
  )
}

export default page
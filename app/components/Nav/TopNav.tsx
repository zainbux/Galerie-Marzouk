import React from 'react'

type Props = {}

const TopNav = (props: Props) => {
  return (
    <div className='bg-orange-400 w-full h-7 px-10 flex justify-between'>
        <div className='items-center '>
            <span className='text-white text-xs '>Designed in Ottawa</span>
        </div>
        {/* <div className='text-white space-x-2'>
            <text>EN</text>
            <span className='border rounded-full'>0O0</span>
        </div> */}
    </div>
  )
}

export default TopNav
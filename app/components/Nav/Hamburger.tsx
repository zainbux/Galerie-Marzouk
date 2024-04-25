'use client'

import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';




const Hamburger = () => {

    const [nav, setNav] = useState(false);

    const handleNav:any = () => {
      setNav(!nav);
    };
  

  return (
    <div>      
        <AiOutlineMenu
        
        onClick={handleNav}
        className={`sm:size-6 cursor-pointer md:hidden ${
        nav ? 'text-black' : 'text-black'
        }`}
    />
  </div>
  )
}

export default Hamburger
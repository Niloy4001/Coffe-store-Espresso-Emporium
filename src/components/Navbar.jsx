import React from 'react'
import rectangle from '../assets/Rectangle 1.png'
import logo from '../assets/more/logo1.png'
const Navbar = () => {
  return (
    <div className='relative '>
        <img src={rectangle} alt="" className='w-full h-[120px]'/>
        <div className='flex items-center gap-2 absolute justify-center top-0 bottom-0 w-full px-4 lg:px-0'>
            <img src={logo} alt=""  className='w-[75px] h-[90px]'/>
            <h1 className='font-rancho font-medium text-[30px] md:text-[40px] lg:text-[60px] text-white'>Espresso Emporium</h1>
        </div>
    </div>
  )
}

export default Navbar
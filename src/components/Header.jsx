import React from 'react'
import Logo from "./img/logo.png"
import {MdShoppingBasket} from "react-icons/md"

const Header = () => {
  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
      {/* desktop */}
      <div className='hidden md:flex w-full h-full justify-between  '>
        <div className='flex items-center gap-2'>
          <img src={Logo} className='w-8 object-cover' alt='logo'/>
          <p className='text-headingColor text-xl font-bold'>City</p>
        </div>
        <div className="flex gap-8">
        <ul className="flex gap-8 items-center">
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
        </ul>
        <div className='relative flex justify-center items-center'>
          <MdShoppingBasket className='text-textColor text-2xl cursor-pointer'/>
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className='text-xs text-white font-semibold'>2</p>
          </div>
        </div>
        </div>
        
      </div>
      {/* mobile */}
      <div className='flex md:hidden w-full h-full'>

      </div>
    </header>
  )
}

export default Header
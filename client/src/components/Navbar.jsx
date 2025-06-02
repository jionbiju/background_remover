import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-8  lg:mx-16 pt-6'>
        <Link to='/'><img width={100} className='w-22 sm:w-28 md:w-34 xl:w-40 ' src={assets.logo} alt="" /></Link>
        <button className='bg-orange-500  text-white font-medium flex gap-1.5 items-center text-[13px]  sm:px-2.5 sm:py-1.5  
        rounded-full hover:bg-red-600 md:px-2.5 md:py-2 px-1.5 py-1.5 lg:px-4 lg:py-2.5 xl:py-4 lg:text-[16px] transform ease-in-out duration-300'>
            Get Started
            <img className='w-3 sm:w-4' src={assets.arrow_icon} alt="" />
        </button>
    </div>
  )
}

export default Navbar
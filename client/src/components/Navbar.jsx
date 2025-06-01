import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-8  lg:mx-12 pt-6'>
        <Link to='/'><img className='w-32 sm:w-44' src={assets.logo} alt="" /></Link>
        <button className='bg-orange-500  text-white flex gap-4 items-center text-sm px-4 py-4 sm:px-5 sm:py-3  
        rounded-full hover:bg-red-500 '>
            Get Started
            <img className='w-3 sm:w-4' src={assets.arrow_icon} alt="" />
        </button>
    </div>
  )
}

export default Navbar
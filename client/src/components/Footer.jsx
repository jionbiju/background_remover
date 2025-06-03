import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-gradient-to-tr from-gray-300 to-gray-200 min-h-44 flex flex-col sm:flex-row items-center justify-center sm:justify-between lg:px-10 md:px-8 sm:px-4 px-6 py-8 sm:py-0 gap-6 sm:gap-0'>
        <div>
            <img width={100} className='sm:w-28 w-22' src={assets.logo} alt="" />
        </div>
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-2 items-center text-center sm:text-left'>
            <p className='text-sm sm:text-base flex items-center gap-2'>
                <span>Copyright</span>
                <img width={20} className='h-5 sm:w-6 sm:h-6 w-5' src={assets.copyRight_icon} alt="" />
                <span className='sm:hidden'>Jion Biju</span>
                <span className='hidden sm:inline'>Jion Biju. All rights reserved.</span>
            </p>
            <p className='text-sm sm:text-base sm:hidden'>All rights reserved.</p>
        </div>
        <div className='flex gap-5 sm:gap-5'>
            <a href="https://www.linkedin.com/in/jion-biju-738072283" target="_blank" rel="noopener noreferrer">
                <img width={35} className='sm:w-10 sm:h-10 w-8 h-8 hover:opacity-80 transition-opacity cursor-pointer' src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/jion__17" target="_blank" rel="noopener noreferrer">
                <img width={35} className='sm:w-10 sm:h-10 w-8 h-8 hover:opacity-80 transition-opacity cursor-pointer' src={assets.insta_icon} alt="Instagram" />
            </a>
        </div>           
    </div>
  )
}

export default Footer
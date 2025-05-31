import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between Na'>
        <img src={assets.logo} alt="" />
        <button>
            Get Started
            <img src={assets.arrow_icon} alt="" />
        </button>
    </div>
  )
}

export default Navbar
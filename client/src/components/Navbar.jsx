import React, { useContext, useEffect } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const {openSignIn} = useClerk();
  const {isSignedIn, user} = useUser();
  const {credit,loadCreditsData} = useContext(AppContext)
  useEffect(() => {
    if(isSignedIn){
      loadCreditsData()
    }
  },[isSignedIn,user])
  return (
    <div className='flex items-center justify-between mx-8  lg:mx-16 pt-6'>
        <Link to='/'><img width={100} className='w-22 sm:w-28 md:w-34 xl:w-40 ' src={assets.logo} alt="" /></Link>
        {
          isSignedIn
          ? <div className='flex items-center gap-2 sm:gap-3 '>
            <button className='flex items-center gap-2 bg-blue-100 rounded-full px-2 sm:px-7 py-1.5 sm:py-2.5 hover:scale-105 transition-all duration-700'>
              <img className='w-6' src={assets.credit_icon} alt="" />
              <p className='text-xs sm:text-sm font-medium text-gray-600'>Credits:{credit}</p>
            </button>
            <p className='text-gray-600 max-sm:hidden font-medium'>Hi, {user.fullName}</p>
            <UserButton appearance={{
              elements:{
                userButtonAvatarBox:"w-10 h-10 sm:w-12 sm:h-12",
              },
            }}/>
          </div>
          :<button onClick={() => openSignIn({})} className='bg-orange-500  text-white font-medium flex gap-1.5 items-center text-[13px]  sm:px-2.5 sm:py-1.5  
        rounded-full hover:bg-red-600 md:px-2.5 md:py-2 px-1.5 py-1.5 lg:px-4 lg:py-2.5 xl:py-4 lg:text-[16px] transform ease-in-out duration-300'>
            Get Started
            <img className='w-3 sm:w-4' src={assets.arrow_icon} alt="" />
          </button>
        }
        
    </div>
  )
}

export default Navbar
import React from 'react'
import { assets, plans } from '../assets/assets'

const BuyCredit = () => {
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='border border-gray-500 px-4 py-2 rounded-full'>Our Plans</button>
      <h1 className='text-center pb-1 text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent'>Choose the plan that's right for you</h1>
      <div className='flex flex-wrap justify-center gap-6 text-left mt-10'>
        {plans.map((items,index) => {
          return(
            <div key={index} className='bg-white border drop-shadow-sm rounded-lg px-8 text-gray-700 py-12 hover:scale-105 transition-all duration-700 cursor-pointer'>
              <img src={assets.logo_icon} width={60} alt="" />
              <p className='mt-3 font-semibold'>{items.id}</p>
              <p className='text-sm'>{items.desc}</p>
              <p className='mt-6'>
                <span className='text-3xl font-medium'>${items.price}</span>/ {items.credits} credits.
              </p>
              <button className='w-full bg-gray-800 text-white rounded-md mt-8 text-sm py-2 min-w-52'>Purchase</button>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default BuyCredit

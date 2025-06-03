import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div>
        <h1 className='mb-12 sm:mb-20 text-center pb-1 text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent'>They love us. You will too.</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 md:px-9 lg:px-12 lg:grid-cols-3  gap-10 max-w-7xl  mx-auto px-4 pb-24'>

            {testimonialsData.map((items,index) => (
                <div className='h-[300px] sm:w-[350px] sm:h-[280px] xl:w-[380px] xl:h-[250px] lg:w-[270px] lg:h-[300px]  md:w-[220px] md:h-[370px] m bg-white max-w-lg rounded-xl drop-shadow-xl p-6 m-auto hover:scale-105 transition-all duration-700' key={index}>
                    <img width={80} className='mb-1' src={assets.five_star} alt="" />
                    <p className='text-[16px] text-gray-500'>"{items.text}"</p>
                    <div className='flex gap-5 items-center mt-5 absolute bottom-9'>
                        <img className='w-14 rounded-full' src={items.image} alt="" />
                        <div className=''>
                            <p>{items.author}</p>
                            <p className='text-sm text-gray-600'>{items.jobTitle}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials

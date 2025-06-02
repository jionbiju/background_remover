import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 xl:py-40 pb-14'>
      <h1 className='text-center pb-1 text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent'>Steps to remove background<br />image in seconds</h1>
      <div className='flex items-start flex-wrap gap-8 mt-16 xl:mt-24 justify-center'>
        <div className='flex w-[250px] h-[150px] md:w-[300px] md:h-[200px] items-center bg-white border gap-5 drop-shadow-lg p-7 pb-10 rounded-xl hover:scale-105 transition-all duration-500'>
            <img width={40} className='max-w-10' src={assets.upload_icon} alt="" />
            <div>
                <p className='text-xl font-medium'>Upload image</p>
                <p className='text-sm  text-neutral-500 mt-1'>Pick an image from your <br /> device to get started.</p>
            </div>
        </div>
        <div className='flex w-[250px] h-[150px] md:w-[300px] md:h-[200px] items-center bg-white border gap-5 drop-shadow-lg p-7 pb-10 rounded-xl hover:scale-105 transition-all duration-500'>
            <img width={40} className='max-w-10' src={assets.remove_bg_icon} alt="" />
            <div>
                <p className='text-xl font-medium'>Remove background</p>
                <p className='text-sm  text-neutral-500 mt-1'>We’ll quickly take out<br /> the  background for you.</p>
            </div>
        </div>
        <div className='flex w-[250px] h-[150px] md:w-[300px] md:h-[200px] items-center bg-white border gap-5 drop-shadow-lg p-7 pb-10 rounded-xl hover:scale-105 transition-all duration-500'>
            <img width={40} className='max-w-10' src={assets.download_icon} alt="" />
            <div>
                <p className='text-xl font-medium'>Download image</p>
                <p className='text-sm  text-neutral-500 mt-1'>Save the new image to your <br /> device easily.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Steps

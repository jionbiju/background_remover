import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex items-center justify-between  max-sm:flex-col px-4 mt-10 xl:mx-40 lg:mx-14  md:mx-px sm:mt-20'>
      {/*----------LEFT SIDE----------------*/}
      <div className='w-full max-w-md mb-10 sm:mt-7 lg:mt-0 xl:mt-7'>
        <img width={350} className='rounded-3xl w-64 m-auto lg:w-96 md:w-80 xl:w-max' src={assets.header_img} alt="" />        
      </div>
      {/*----------RIGHT SIDE----------------*/}
      <div className='mb-28'>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-800 leading-tight'>
            Remove Image <br /> <span className='bg-gradient-to-r from-orange-600 to-yellow-400 bg-clip-text text-transparent' >Background</span>
        </h1>
        <p className='my-4 text-[15px] md:text-[16px] sm:text-[14px] lg:text-[20px] text-gray-800'>Fully automated in 5 seconds with 1 click</p>
        <div>
            <input type="file" id='upload1'hidden />
            <label htmlFor="upload1" className='inline-flex gap-3  sm:w-70 lg:w-70 lg:px-6 lg:py-4 xl:px-7 xl:py-5 w-50 px-3.5 py-3.5 rounded-full
             cursor-pointer bg-gradient-to-r from-orange-600 to-yellow-400 m-auto hover:scale-105 transition-all duration-700 '>
                <img width={17} src={assets.upload_btn_icon} alt="" />
                <p className='text-sm text-white font-bold lg:text-[16px]'>Upload your Image</p>
            </label>
        </div>
      </div>
    </div>
  )
}

export default Header

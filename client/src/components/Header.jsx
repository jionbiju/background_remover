import React from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Header = () => {
  const { removeBg } = useContext(AppContext)
  return (
    <div className='flex items-center justify-between  max-sm:flex-col px-4 mt-10 xl:mx-40 lg:mx-12 md:mx-px sm:mt-24 sm:mx-14 sm:gap-3 xl:mt-16'>
      {/*----------LEFT SIDE----------------*/}
      <div className='w-full max-w-md mb-10 sm:mb-16 lg:mt-0 xl:mt-7 sm:mr-12'>
        <img width={350} className='rounded-3xl w-64 m-auto lg:w-96 md:w-80 xl:w-max lg:ml-2  ' src={assets.header_img} alt="" />        
      </div>
      {/*----------RIGHT SIDE----------------*/}
      <div className='mb-28 sm:mt-7'>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-800 leading-tight'>
            Remove Image <br /> <span className='bg-gradient-to-r from-orange-600 to-yellow-400 bg-clip-text text-transparent' >Background</span>
        </h1>
        <p className='my-4 text-[15px] md:text-[16px] sm:text-[14px] lg:text-[20px] text-gray-800'>Fully automated in 5 seconds with 1 click</p>
        <div>
            <input onChange={e => removeBg(e.target.files[0])} type="file" accept='image/*' id='upload1'hidden />
            <label htmlFor="upload1" className='inline-flex gap-3  sm:w-70  lg:px-3 md:px-2.5 md:py-2 lg:py-3.5 xl:px-5 xl:py-5 w-50 px-2.5 py-2.5 rounded-full
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

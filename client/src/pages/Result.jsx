// import React from 'react'
// import { assets } from '../assets/assets'

// const Result = () => {
//   return (
//     <div className='mx-4 my-3  lg:mx-44 mt-14 min-h-[75vh]'>
//       <div className='bg-white px-8 py-6 rounded-lg drop-shadow-lg'>
//         {/*Image container*/}
//         <div className='flex flex-col sm:grid grid-cols-2 gap-8 ml-20'>
//           {/*Left Side*/}
//           <div>
//             <p className='mb-2 font-semibold text-gray-500'>Original</p>
//             <img  className='w-[360px] rounded-lg' src={assets.image_w_bg} alt="" />
//           </div>

//           {/*Right Side*/}
//           <div className='flex flex-col'>
//             <p className='mb-2  font-semibold text-gray-500'>Background Removed</p>
//             <div className='w-[360px] h-full rounded-lg border border-gray-400  relative bg-layer overflow-hidden'>
//               <img  src={assets.image_wo_bg} alt="" />
//               {/* <div className='absolute right-1/2 bottom-1/2 transform translate-x-1/2  translate-y-1/2'>
//                 <div className='border-4 border-orange-500 rounded-full w-12 h-12 border-t-transparent animate-spin'></div>
//               </div> */}
//             </div>
//           </div>
//         </div>
//         {/* ------Button---- */}
//         <div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6 '>
//           <button className='px-8 py-2.5 text-orange-600 text-[14px] font-medium border rounded-full border-orange-500 hover:scale-105 transition-all duration-700'>Try another image</button>
//           <a href="" className='px-8 py-2.5 text-white text-[14px] font-medium bg-gradient-to-r from-orange-500 to bg-yellow-400 rounded-full hover:scale-105 transition-all duration-700'>Download image</a>
//         </div>
//       </div>
      
//     </div>
//   )
// }

// export default Result

import React from 'react'
import { assets } from '../assets/assets'

const Result = () => {
  return (
    <div className='mx-2 my-3 sm:mx-4 lg:mx-44 mt-8 sm:mt-14 min-h-[75vh]'>
      <div className='bg-white px-4 py-4 sm:px-8 sm:py-6 rounded-lg drop-shadow-lg'>
        {/*Image container*/}
        <div className='flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:ml-28'>
          {/*Left Side*/}
          <div className='flex flex-col items-center lg:items-start'>
            <p className='mb-2 font-semibold text-gray-500 text-sm sm:text-base'>Original</p>
            <img 
              className='w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] rounded-lg' 
              src={assets.image_w_bg} 
              alt="Original" 
            />
          </div>
          
          {/*Right Side*/}
          <div className='flex flex-col items-center lg:items-start '>
            <p className='mb-2 font-semibold text-gray-500 text-sm sm:text-base'>Background Removed</p>
            <div className='w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] aspect-square rounded-lg border border-gray-400 relative bg-gray-50 overflow-hidden'>
              <img 
                className='w-full h-full object-contain' 
                src={assets.image_wo_bg} 
                alt="Background removed"/>
              {/* Loading spinner - uncomment when needed */}
              {/* <div className='absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-90'>
                <div className='border-4 border-orange-500 rounded-full w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border-t-transparent animate-spin'></div>
              </div> */}
            </div>
          </div>
        </div>
        
        {/* ------Buttons---- */}
        <div className='flex flex-col sm:flex-row justify-center lg:justify-end items-center gap-3 sm:gap-4 mt-6 sm:mt-8'>
          <button className='w-full sm:w-auto px-6 sm:px-8 py-2.5 text-orange-600 text-sm sm:text-[14px] font-medium border rounded-full border-orange-500 hover:scale-105 transition-all duration-700 order-2 sm:order-1'>
            Try another image
          </button>
          <a 
            href="#" 
            className='w-full sm:w-auto px-6 sm:px-8 py-2.5 text-white text-sm sm:text-[14px] font-medium bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full hover:scale-105 transition-all duration-700 text-center order-1 sm:order-2'
          >
            Download image
          </a>
        </div>
      </div>
    </div>
  )
}

export default Result
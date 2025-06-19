import React, { useState } from "react";
import { assets } from "../assets/assets.js";

const Slider = () => {
  const [sliderPosition, setSliderPosition] = useState(30);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };
  
  return (
    <div className="pb-10 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 xl:gap-20 max-w-7xl mx-auto">
        
        {/*Left Side*/}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-2xl pb-1 sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent leading-tight mb-6">
            Instant and Automatic Background Remover
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl leading-relaxed text-gray-700 max-w-2xl mx-auto lg:mx-0">
            Bg Remover takes the hassle out of background removal — done in
            under seconds! Using advanced AI technology, it quickly and
            accurately removes backgrounds from HEIC, PNG, or JPG images, giving
            you clean, transparent results with zero manual effort. Whether
            you're a pro designer or just getting started, Bg Remover delivers
            high-quality cutouts in seconds. Perfect for product photos, profile
            pictures, or creative edits — fast, easy, and free. Try Bg Remover
            today and experience background removal like never before!
          </p>
        </div>
        
        {/*Right Side - Image Slider*/}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[400px] xl:max-w-[480px] overflow-hidden rounded-xl shadow-lg">
            {/*Background image*/}
            <img
              className="w-full h-auto block"
              src={assets.image_w_bg}
              style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
              alt="Original image with background"
            />

            {/*Foreground image */}
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={assets.image_wo_bg}
              style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
              alt="Image without background"
            />

            {/*Slider*/}
            <input
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider"
              type="range"
              min={0}
              max={100}
              value={sliderPosition}
              onChange={handleSliderChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
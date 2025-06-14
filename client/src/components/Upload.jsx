import React, { useContext } from "react";
import { assets } from '../assets/assets'
import { AppContext } from "../context/AppContext";

const Upload = () => {
  const { removeBg } = useContext(AppContext)
  return (
    <div >
      <h1 className="mb-12 sm:mb-2 text-center pb-1 text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent py-6 md:py-16">
        Get a transparent background for any image.
      </h1>
      <div className="text-center pb-36">
        <input onChange={e => removeBg(e.target.files[0])} type="file" accept='image/*' id="upload2" hidden />
        <label
          htmlFor="upload2"
          className="inline-flex gap-3  sm:w-70  lg:px-3 md:px-2.5 md:py-2 lg:py-3.5 xl:px-5 xl:py-5 w-50 px-2.5 py-2.5 rounded-full
                     cursor-pointer bg-gradient-to-r from-orange-600 to-yellow-400 m-auto hover:scale-105 transition-all duration-700 "
        >
          <img width={17} src={assets.upload_btn_icon} alt="" />
          <p className="text-sm text-white font-bold lg:text-[16px]">
            Upload your Image
          </p>
        </label>
      </div>
    </div>
  );
};

export default Upload;

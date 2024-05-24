import React from 'react'

const Shimmer_SingleMov = () => {
  return (
    <div className="z-[121] text-white bg-black bg-opacity-65 min-h-screen w-11/12 py-4 md:px-10 flex flex-col-reverse md:flex-row justify-evenly items-center">
          <div className=" flex  flex-col w-full md:max-w-[60%] px-20 gap-8 relative py-7 md:py-0">
            <h1 className="shimmerclass opacity-40 bg-black h-10 text-white text-4xl md:text-[400%] font-bold">
              
            </h1>
            <h2 className="shimmerclass opacity-40 bg-black h-10 text-white text-2xl md:text-[150%] ">
            </h2>
            <div className="shimmerclass opacity-40 bg-black h-10 flex gap-1 text-3xl font-semibold ">
              
            </div>
            <h4 className="shimmerclass opacity-40 bg-black h-10  text-2xl font-semibold">
              </h4>
            <h4 className="shimmerclass opacity-40 bg-black h-10 text-3xl font-semibold">
              </h4>
          </div>
          <div
            className="shimmerclass opacity-40 bg-black h-[20vh] z-[10] w-[80%]  md:w-[30%] md:h-[70vh] md:opacity-40 object-cover "
            
          ></div>
        </div>
  )
}

export default Shimmer_SingleMov
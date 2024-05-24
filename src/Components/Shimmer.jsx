import React from "react";

const Shimmer = () => {
  return (
    <div className=" w-full h-[68vh] bg-black bg-opacity-50 px-24 py-8">
      <div className="flex flex-col gap-10">
        <h1 className="shimmerclass bg-black bg-opacity-90  h-20"></h1>
        <div className=" flex flex-wrap gap-5 justify-center">
          <div className="shimmerclass w-64 h-[40vh] bg-black bg-opacity-90"></div>
          <div className=" hidden md:inline-block shimmerclass w-64 h-[40vh] bg-black bg-opacity-90"></div>
          <div className=" hidden lg:inline-block shimmerclass w-64 h-[40vh] bg-black bg-opacity-90"></div>
          <div className=" hidden lg:inline-block shimmerclass w-64 h-[40vh] bg-black bg-opacity-90"></div>
          <div className=" hidden lg:inline-block shimmerclass w-64 h-[40vh] bg-black bg-opacity-90"></div>
          <div className=" hidden lg:inline-block shimmerclass w-64 h-[40vh] bg-black bg-opacity-90"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;

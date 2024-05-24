import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const MovieList = ({ name, list }) => {
  if (!list) return;

  const ref= useRef()

  const scrollLeft = () => {
    ref.current.scrollLeft -= 850;
  };

  const scrollRight = () => {
    ref.current.scrollLeft += 850;
  };

  return (
    <div className=" text-white pl-16 pr-12 relative">
      <div onClick={scrollLeft} className=" text-4xl p-2 bg-black rounded-full hover:opacity-70 cursor-pointer absolute top-[50%] z-[111] left-7"><MdOutlineKeyboardArrowLeft></MdOutlineKeyboardArrowLeft></div>
      <div onClick={scrollRight} className=" text-4xl p-2 bg-black rounded-full hover:opacity-70 cursor-pointer absolute top-[50%] z-[111] right-7 "><MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight></div>
      <div className="flex flex-col gap-6 ">
        <h1 className="text-4xl font-semibold capitalize">{name}</h1>
        <div ref={ref} className="flex  gap-6  overflow-x-auto scrollhide scroll-smooth" >
            {
                list.map( (d,i)=><Link to={"/movie/"+d?.id} key={i}><MovieCard data={d} ></MovieCard></Link> ) 
            }
          
        </div>
      </div>
    </div>
  );
};

export default MovieList;

import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { IoVolumeMuteOutline } from "react-icons/io5";
import { GoUnmute } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { toggleMuteTrailer } from "../Redux/MovieSlice";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview }) => {

  const navigate =useNavigate()
  const now_playing_movie_res = useSelector(state=>state.movies.now_playing?.results)
  const isMute = useSelector(state=>state.movies.trailer_mute)
  const dispatch = useDispatch()

  return (
    <div className=" w-full flex justify-between items-center text-opacity-80  px-[6%] absolute top-[35%] md:top-0  aspect-video  bg-gradient-to-r text-white from-black ">
      <div className="flex flex-col gap-6 -translate-y-5">
        <h1 className=" text-2xl md:text-4xl lg:text-5xl  font-bold">{title}</h1>
        <h2 className=" hidden lg:block text-2xl w-1/3">{overview}</h2>
        <div className="flex gap-2">
          <button onClick={()=>{navigate("/movie/"+now_playing_movie_res[0]?.id)}} className="bg-white text-black border border-black py-3 gap-1 px-2 md:px-6 rounded-xl font-bold text-xl  hover:opacity-90 transition flex justify-center items-center">
            <FaPlay></FaPlay>Play Now
          </button>
          <button onClick={()=>{navigate("/movie/"+now_playing_movie_res[0]?.id)}} className=" hidden  hover:bg-gray-500 bg-gray-600 transition text-white py-3 gap-1 px-6 rounded-xl font-bold text-xl md:flex justify-center items-center">
            {" "}
            <FaCircleInfo></FaCircleInfo> More Info
          </button>
        </div>
      </div>
        <div className=" border border-white text-4xl p-2 rounded-full cursor-pointer" onClick={()=>{dispatch(toggleMuteTrailer())}}>{!isMute ? <IoVolumeMuteOutline></IoVolumeMuteOutline> : <GoUnmute></GoUnmute>}</div>
    </div>
  );
};

export default VideoTitle;

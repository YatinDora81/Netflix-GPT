import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { add_trailer_info } from "../Redux/MovieSlice";
import useFetchBGTrailer from "../Hooks/useFetchBGTrailer";

const VideoBackground = ({movieId}) => {
  const trailerData = useSelector((state) => state.movies?.main_trailer);
  const isMute = useSelector(state=>state.movies.trailer_mute)
  useFetchBGTrailer(movieId)

  return (
  
      <iframe
      className="w-full  aspect-video  z[1]"
        src={"https://www.youtube.com/embed/" + trailerData?.key +"?playlist=" + trailerData?.key + "&autoplay=1&loop=1&mute=" + ( !isMute ? "1" : "0" ) }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    
  );
};

export default VideoBackground;

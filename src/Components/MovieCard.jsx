import React from "react";
import { TMDB_PIC_LINK } from "../utils/constants";

const MovieCard = ({ data }) => {
  // console.log(data);
  if(!data?.poster_path) return;
  const str = data?.title || data?.name
  return (
    
      <div className=" relative p" >
        <div className="px-2 hidden cc bg-black bg-opacity-60 text-3xl font-semibold text-center">{ str.length>16 ? str.substring(0,16)+"..." : str}</div>
        <img className=" min-w-56 max-h-[38vh] h-[38vh]" alt="" src={TMDB_PIC_LINK + data?.poster_path}></img>
        </div>
      
    
  );
};

export default MovieCard;

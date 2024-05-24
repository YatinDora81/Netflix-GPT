import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { add_trailer_info } from "../Redux/MovieSlice";

const useFetchBGTrailer = (movieId)=>{

    const dispatch = useDispatch();
    const maint = useSelector((state)=>state.movies.main_trailer);
  
    const fetchtrailer = async ()=>{
      if(movieId){
        const f = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
      const data =await f.json();
  
      // console.log(data.results);
      const filtered =await data.results.filter((i)=>i.type==="Trailer")
      const org =await filtered.length ? filtered[0] : data.results[0]
      // console.log(org);
      dispatch(add_trailer_info(org));
      }
  
    }
  
    useEffect(()=>{
      if(maint?.key==="DXb7tWC2W5o") fetchtrailer()
    },[])
    
}

export default useFetchBGTrailer;
import { useDispatch, useSelector } from "react-redux";
import { add_Now_playing } from "../Redux/MovieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import useFetchBGTrailer from "./useFetchBGTrailer";

const useFetchMovies = ()=>{
  //now playing fetch
    const dispatch = useDispatch();
    const nowp = useSelector((state)=>state.movies.now_playing);

    const fetchMovie = async()=>{
        const d= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2', API_OPTIONS)
        const data =await d.json();
        // console.log(data);

        dispatch(add_Now_playing(data));

        // useFetchBGTrailer(data?.results[0])

      }
    
      useEffect(()=>{
        if( !nowp?.results?.length || nowp?.results?.length<2) fetchMovie();
      },[])
}

export default useFetchMovies
import { useDispatch, useSelector } from "react-redux";
import {  add_toprated } from "../Redux/MovieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useFetchTopRated = ()=>{
    const dispatch = useDispatch();
    const topr =useSelector((state)=>state.movies.toprated); 

    const fetchMovie = async()=>{
        const d= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2', API_OPTIONS)
        const data =await d.json();
        // console.log(data.results);

        dispatch(add_toprated(data));
      }
    
      useEffect(()=>{
        if(!topr) fetchMovie()
      },[])
}

export default useFetchTopRated
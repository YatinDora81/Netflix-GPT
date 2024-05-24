import { useDispatch, useSelector } from "react-redux";
import {  add_popular } from "../Redux/MovieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useFetchPopularMovie = ()=>{
    const dispatch = useDispatch();
    const popu =useSelector((state)=>state.movies.popular); 

    const fetchMovie = async()=>{
        const d= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=4', API_OPTIONS)
        const data =await d.json();
        // console.log(data.results);

        dispatch(add_popular(data));
      }
    
      useEffect(()=>{
        if(!popu) fetchMovie()
      },[])
}

export default useFetchPopularMovie
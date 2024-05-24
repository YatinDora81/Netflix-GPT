import { useDispatch, useSelector } from "react-redux";
import {  add_upcomming } from "../Redux/MovieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useFetchUpcomming = ()=>{
    const dispatch = useDispatch();
    const upco =useSelector((state)=>state.movies.upcomming); 

    const fetchMovie = async()=>{
        const d= await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=4', API_OPTIONS)
        const data =await d.json();
        // console.log(data.results);

        dispatch(add_upcomming(data));
      }
    
      useEffect(()=>{
        if(!upco) fetchMovie()
      },[])
}

export default useFetchUpcomming
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { languages } from "../utils/langConstant";
import { API_OPTIONS } from "../utils/constants";
import { addCollectionMovies, addMoviesName, addMovieText, addMultiMovies, clearAllMovies, toggleShimmer } from "../Redux/gptSlice";

const GptSeachBar = () => {
  const lang = useSelector((state) => state.appConfig.language);
  const dispatch = useDispatch();

  const textref = useRef(null);

  useEffect(()=>{
    return ()=>{
      // dispatch(clearAllMovies());
    }
  },[])


  const gptSearchSubmitHandler = (e)=>{
    e.preventDefault();
    if(textref.current.value === "") return;
    fetchGptFetchApi();
  }

  const fetchGptFetchApi = async ()=>{

    // //active shimmer ui
    dispatch(toggleShimmer())

    dispatch(addMovieText(textref.current.value))
    
    // // fetch seachCollection tmdb api
    const coll =await fetch("https://api.themoviedb.org/3/search/collection?query=+"+ textref.current.value  +"&include_adult=false&language=en-US&page=1", API_OPTIONS)
    const coll_data = await coll.json();
    const farr =await coll_data?.results.filter( (d)=>d?.poster_path )
    // console.log(farr);
    dispatch(addCollectionMovies(farr))


    // // fetch multi tmdb api
    const multi = await fetch('https://api.themoviedb.org/3/search/multi?query=' + textref.current.value + '&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const multi_data = await multi.json();
    const farr1 =await multi_data?.results.filter( (d)=>d?.poster_path )
    dispatch(addMultiMovies(farr1))


    // // fech movie(search) tmbd api 
    const movi = await fetch('https://api.themoviedb.org/3/search/movie?query='+ textref.current.value +'&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const movi_data = await movi.json();
    const farr2 =await movi_data?.results.filter( (d)=>d?.poster_path )
    dispatch(addMoviesName(farr2))



    // //remove shimmer ui
    dispatch(toggleShimmer())


  }

  return (
    <div className=" z-[11] w-full mb-6 ">
      <form onSubmit={gptSearchSubmitHandler} className=" w-10/12 md:w-1/2 mx-auto mt-[30vh] md:mt-[22vh] bg-black p-2 rounded-xl ">
        <input
          ref={textref}
          type="text"
          className=" w-[85%]  text-xl text-black px-4  rounded-l-2xl py-2 font-semibold "
          placeholder={languages[lang]?.gptSearchPlaceholder}
        ></input>
        <button className=" text-white text-xl bg-red-700 w-[15%] py-2 font-bold rounded-r-xl hover:bg-red-600">
          {languages[lang]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSeachBar;

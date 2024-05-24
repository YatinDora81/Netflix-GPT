import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {

  const gptSlice = useSelector((state)=>state.gpt);
  if( (!gptSlice?.moviesName && !gptSlice?.collectionMovies && !gptSlice?.multiMovies) ) return <h1 className=" text-white text-4xl md:text-6xl font-semibold bg-black bg-opacity-50 px-4 py-2 w-full text-center h-[60vh] md:h-[68vh]">Search Movies Now</h1>;
  if( (gptSlice?.moviesName?.length==0 && gptSlice?.collectionMovies?.length==0 && gptSlice?.multiMovies?.length==0 ) ) return <h1 className=" text-white text-4xl md:text-6xl font-semibold bg-black bg-opacity-50 px-4 py-2 w-full text-center h-[60vh] md:h-[68vh]">No Movies Found</h1>

  return (
    <>
      <div className="z-[200] w-full bg-black bg-opacity-80 py-5 flex flex-col gap-12">

        { gptSlice?.moviesName?.length>0 &&  <MovieList name={gptSlice?.movieText} list={gptSlice?.moviesName}></MovieList>}
        { gptSlice?.collectionMovies?.length>0 && <MovieList name={gptSlice?.movieText} list={gptSlice?.collectionMovies}></MovieList>}
        { gptSlice?.multiMovies?.length>0 && <MovieList name={gptSlice?.movieText} list={gptSlice?.multiMovies}></MovieList>}
    
      </div>
    </>
  );
};

export default GptMovieSuggestion;

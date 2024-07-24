import React from 'react'
import GptSeachBar from './GptSeachBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import Shimmer from './Shimmer'
import { useSelector } from 'react-redux'

const GptSearchPage = () => {

  const isShimmer = useSelector((state)=>state.gpt.shimmer);

  return (
    <div className=' min-h-screen  relative flex flex-col  items-center '>
        <img
        className=" fixed top-0 left-0 object-cover min-w-full h-screen bg-black bg-blend-darken -z-[1]"
        alt="bg-movies"
        loading="lazy"
        src="/Netflix_Bg.jpg"
      ></img>
        <GptSeachBar></GptSeachBar>
        { isShimmer && <Shimmer></Shimmer>}
        <GptMovieSuggestion></GptMovieSuggestion>
    </div>
  )
}

export default GptSearchPage
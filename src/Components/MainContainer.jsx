import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'
import useFetchAllTypeMovie from '../Hooks/useFetchAllTypeMovie'


const MainContainer = () => {
    const allmovies = useSelector(state=>state.movies?.now_playing);
    
    useFetchAllTypeMovie()
    const singlemovie = (allmovies?.results?.length) ? allmovies?.results[0] : null

    
    

  return (
    <div className=' relative pt-[30%] md:pt-0 '>
        <VideoTitle title={singlemovie?.title} overview={singlemovie?.overview}></VideoTitle>
        <VideoBackground movieId={singlemovie?.id}></VideoBackground>
    </div>
  )
}

export default MainContainer
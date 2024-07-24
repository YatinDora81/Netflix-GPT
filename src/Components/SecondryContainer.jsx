import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {

  const allType = useSelector(state=>state.movies);
  if(!allType) return

  return (
    <div className=' bg-black'>
    <div className=' flex flex-col gap-12 md:-translate-y-20 lg:-translate-y-64   z-[123]'>
      <MovieList name="Now Playing" list={allType?.now_playing?.results}></MovieList>
      <MovieList name="Top Rated" list={allType?.toprated?.results}></MovieList>
      <MovieList name="Popular" list={allType?.popular?.results}></MovieList>
      <MovieList name="Upcomming" list={allType?.upcomming?.results}></MovieList>

    </div>
    </div>
  )
}

export default SecondryContainer
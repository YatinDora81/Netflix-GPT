import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondryContainer from './SecondryContainer'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import useFetchMovies from '../Hooks/useFetchMovies'
import GptSearchPage from './GptSearchPage'

const Browse = () => {

  useFetchMovies();
  
  // // // sign out every time when i refresh the app
  // const navigate = useNavigate();
  // const user = useSelector((state) => state.user);
  
  // const logoutHandler = () => {
  //   signOut(auth)
  //     .then(() => {
  //       // Sign-out successful.
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //     });
  // };
  
  // if(!user){
  //   return logoutHandler()
  // }
  
  
  const isGpt = useSelector(state=>state.gpt.showGptSearch)
  

  

  return (
    <div>
      <Header></Header>

      {
        !isGpt ? (<div className=' bg-black '>
        <MainContainer></MainContainer>
        <SecondryContainer></SecondryContainer>
        </div>) : (<GptSearchPage></GptSearchPage>)
      }

    </div>
  )
}

export default Browse
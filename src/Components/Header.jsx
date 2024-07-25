import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Redux/UserSlice";
import { NETFLIX_LOGO } from "../utils/constants";
import { toggleGptSeach } from "../Redux/gptSlice";
import { supportedLanguage } from "../utils/langConstant";
import { changeLanguage } from "../Redux/appConfigSlice";

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const isHome = useSelector(state=>state.gpt.showGptSearch)
  const currLang = useSelector((state)=>state.appConfig.language)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        navigate("/");
        dispatch(removeUser());
      }
    });

    //insubscribe when comoponets unmount
    return ()=> unsubscribe()
  }, []);

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };


  const handleGptChange = ()=>{
    dispatch(toggleGptSeach())
  }

  if (!user) {
    return (
      <div className="bg-gradient-to-b from-black to-transparent z-[2] absolute  w-[100%]">
        <img
        className=" w-80 ml-[7vw] p-1   "
        src={ "/Netflix_Logo.png" ||NETFLIX_LOGO}
      ></img>
      </div>
    );
  }


  const langChangeHandler = (e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className=" absolute w-full bg-gradient-to-b from-black  max-h-40 z-[100]">
      <div className="flex md:flex-row flex-col  md:justify-between items-center w-11/12 mx-auto ">
        <img
          className="z-[2] w-52  md:w-80  p-1  "
          src={ "Netflix_Logo.png" || NETFLIX_LOGO}
        ></img>

        <div className="flex gap-1 items-center">
          {
            isHome && (
              <select value={currLang} onChange={(e)=>{langChangeHandler(e)}} className=" p-1 md:p-3 bg-gray-900 text-xl md:mr-2 text-white rounded-xl">
                {
                  supportedLanguage.map( (lang,i)=><option key={i} value={lang?.identifier} >{lang?.name}</option>)
                }
              </select>
            )
          }
          <button onClick={handleGptChange} className= {` bg-purple-800 text-white px-4 h-10 md:h-16 hover:bg-opacity-80 rounded-lg mr-2 font-bold bg-opacity-70 ${isHome && "px-9"} `} >{isHome ? "Home" : "GPT Search"}</button>
          <img
            className=" w-12 h-12 md:w-16 md:h-16 object-cover "
            src={ "/User_Icon.jpg" || user?.photoURL}
            alt="yoyo"
          ></img>
          <div className="flex flex-col justify-center">
            <h1 className="text-xl text-white">{user?.displayName}</h1>
            <button
              onClick={logoutHandler}
              className=" bg-red-600 text-white font-bold px-4 py-0 md:py-1"
            >
              SignOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

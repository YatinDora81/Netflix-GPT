import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Redux/UserSlice";
import { NETFLIX_BG_POSTER, USERICON } from "../utils/constants";

const Login = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();

    const mess = checkValidation(email.current.value, password.current.value);

    setErrorMessage(mess);

    // console.log(password.current.value);
    //not valid
    if (mess) return;

    if (!isLoginPage) {
      //signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);

          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: USERICON,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              const errorCode = error.code;
              const errorMessage = error.message;
              // console.log("sign up " + errorCode + "-" + errorMessage);
              setErrorMessage("sign up " + errorCode + "-" + errorMessage);
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log("sign up " + errorCode + "-" + errorMessage);
          setErrorMessage("sign up " + errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //SIGNIN
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log("sign in reeor"  + errorCode + "-" + errorMessage);
          setErrorMessage("sign in " + errorCode + "-" + errorMessage);
        });
    }
  }

  return (
    <div className=" relative z-[1] ">
      <Header></Header>

      <div className="h-screen flex justify-center items-center">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col gap-10 relative text-white z-[100] bg-black md:w-11/12  w-11/12 lg:w-4/12 px-10 md:px-16 lg:px-20 py-16 bg-opacity-80 rounded-xl"
        >
          <h1 className="text-4xl font-semibold">
            {isLoginPage ? "Sign In" : "Sign Up"}
          </h1>
          <div className="flex flex-col gap-6">
            {!isLoginPage && (
              <input
                className="text-xl py-2 px-4 bg-gray-800 text-gray-200"
                type="text"
                ref={name}
                required
                minLength={3}
                placeholder="Enter Your Name"
              ></input>
            )}
            <input
              className="text-xl py-2 px-4 bg-gray-800 text-gray-200"
              type="text"
              ref={email}
              placeholder="Enter Your Email"
            ></input>
            <div className="w-full relative">
              <input
                className="text-xl w-full py-2 px-4 bg-gray-800 text-gray-200"
                type={showPassword ? "text" : "password"}
                ref={password}
                placeholder="Enter Your Password"
              ></input>
              {!showPassword ? (
                <FaRegEye
                  onClick={() => setShowPassword(!showPassword)}
                  className=" absolute right-3 cursor-pointer text-3xl bottom-2"
                ></FaRegEye>
              ) : (
                <FaRegEyeSlash
                  onClick={() => setShowPassword(!showPassword)}
                  className=" absolute right-3 cursor-pointer text-3xl bottom-2"
                ></FaRegEyeSlash>
              )}
            </div>
            {errorMessage && (
              <h1 className=" -mt-4 -mb-5 pl-2 text-red-500">
                **{errorMessage}**
              </h1>
            )}
            <button className=" bg-red-600 font-semibold py-2 text-2xl transition  hover:bg-red-700">
              {isLoginPage ? "Sign In" : "Sign Up"}
            </button>
          </div>

          <h1 className="text-lg ">
            {isLoginPage ? "New to Netflix? " : "Already on Netflix? "}
            <span
              onClick={() => setIsLoginPage(!isLoginPage)}
              className=" underline italic hover:text-red-500 cursor-pointer"
            >
              {isLoginPage ? "SignUp Now" : "SignIn Now"}
            </span>
          </h1>
        </form>
      </div>

      <img
        className=" absolute top-0 left-0 object-cover min-w-full h-screen bg-black bg-blend-darken"
        alt="bg-movies"
        loading="lazy"
        src={NETFLIX_BG_POSTER}
      ></img>
    </div>
  );
};

export default Login;

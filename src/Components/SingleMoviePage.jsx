import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {
  API_OPTIONS,
  TMDB_PIC_LINK,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  add_singleMovieData,
  clear_singleMovieData,
  false_shimmer_singleMovie,
  true_shimmer_singleMovie,
} from "../Redux/MovieSlice";
import Shimmer_SingleMov from "./Shimmer_SingleMov";

const SingleMoviePage = () => {
  // const [moviedata, setMovieData] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const moviedata = useSelector((state) => state.movies.singleMovieData);
  const isShimmer = useSelector((state) => state.movies.shimmer_singleMovie);

  const fetchMovieData = async () => {

    dispatch(true_shimmer_singleMovie())

    const d = await fetch(
      "https://api.themoviedb.org/3/movie/" + params?.id + "?language=en-US",
      API_OPTIONS
    );
    const data = await d.json();
    dispatch(add_singleMovieData(data));

    dispatch(false_shimmer_singleMovie())
    // console.log(data);
    // setMovieData(data);
  };

  useEffect(() => {
    fetchMovieData();

    return () => {
      dispatch(clear_singleMovieData());
    };
  }, []);

  return (
    <div className=" min-h-screen  relative flex flex-col  items-center ">
      <img
        className=" fixed top-0 left-0 object-cover min-w-full min-h-screen h-full bg-black bg-blend-darken -z-[1]"
        alt="bg-movies"
        loading="lazy"
        src="/Netflix_Bg.jpg"
      ></img>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className=" absolute bg-red-700 text-xl py-2 px-5 rounded-xl top-[1.5%] left-[7%] md:top-[7%] md:left-[10%] z-[211] font-bold  hover:bg-red-900 flex gap-1 items-center justify-center"
      >
        <FaArrowLeft></FaArrowLeft>Back
      </button>

      {isShimmer ? (
        <Shimmer_SingleMov></Shimmer_SingleMov>
      ) : (
        <div className=" text-white bg-black bg-opacity-80 min-h-screen w-11/12 py-4 md:px-10 flex flex-col-reverse md:flex-row justify-evenly items-center flex-wrap">
          <div className=" flex  flex-col w-full md:max-w-[60%] px-20 gap-8 relative py-7 md:py-0">
            <h1 className=" text-white text-4xl md:text-[400%] font-bold">
              {moviedata?.original_title || moviedata?.title}
            </h1>
            <h2 className=" text-white text-2xl md:text-[150%] opacity-85">
              {moviedata?.overview}
            </h2>
            <div className=" flex flex-wrap gap-1 text-3xl font-semibold opacity-85">
              Geners :
              {moviedata?.genres?.map((d,i) => (
                <h3 key={i}>{d?.name},</h3>
              ))}
            </div>
            <h4 className=" opacity-85 text-2xl font-semibold">
              Release Date : {moviedata?.release_date}
            </h4>
            <h4 className=" text-3xl opacity-85 font-semibold">
              Rating : {moviedata?.vote_average} ⭐
            </h4>
          </div>
          <img
            className="z-[10] w-[80%] opacity-80 md:w-[30%] md:h-[60%] md:opacity-95 object-cover "
            alt="pic"
            src={TMDB_PIC_LINK + moviedata?.poster_path}
          ></img>
        </div>
      )}
    </div>
  );
};

export default SingleMoviePage;

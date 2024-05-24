import useFetchPopularMovie from "./useFetchPopularMovie"
import useFetchTopRated from "./usefetchTopRated";
import useFetchUpcomming from "./useFetchUpcomming";

const useFetchAllTypeMovie = ()=>{
    useFetchPopularMovie();
    useFetchTopRated();
    useFetchUpcomming();
}

export default useFetchAllTypeMovie;
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPlayingMovie } from "../utils/store/slice/moviesSlice";

const usePlayMovie = (movieId) => {
  const dispatch = useDispatch();
  const currentMovie = useSelector((store) => store.movies?.currentMovie);
  const getMovie = async () => {
    console.log("method called");
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addPlayingMovie(json));
  };
  useEffect(() => {
    !currentMovie && getMovie();
  }, []);
};

export default usePlayMovie;

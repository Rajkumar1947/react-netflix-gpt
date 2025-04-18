// https://api.themoviedb.org/3/movie/{movie_id}/videos

// import { useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/store/slice/moviesSlice";
import { useEffect } from "react";

const useMovieClipByType = (movie_id, type) => {
  const dispatch = useDispatch();
  const getMovieClipByType = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
      API_OPTIONS
    );

    const json = await data.json();
    const trailer =
      json?.results?.find((video) => video.type === type) || json?.results?.[0];

    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieClipByType();
  }, []);
};

export default useMovieClipByType;

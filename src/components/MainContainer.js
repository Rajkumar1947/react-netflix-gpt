import React from "react";
import { VideoBreakGround } from "./VideoBreakGround";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const popularMovies = useSelector((store) => store.movies?.nowPopularMovies);

  if (!popularMovies) return;
  const popularMovie = popularMovies[0];
  console.log("Popular MOvies", popularMovie);
  const { original_title, overview, id } = popularMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBreakGround movieId={id} />
    </div>
  );
};

export default MainContainer;

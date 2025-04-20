import React from "react";
import Header from "../Header";
import usePlayMovie from "../../hook/usePlayMovie";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { movieId } = useParams();
  usePlayMovie(movieId);

  return (
    <div>
      <Header />
      {/* <MainContainer /> */}
      <div className="w-screen">
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/CMyrp5Vk3mU?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Movie;

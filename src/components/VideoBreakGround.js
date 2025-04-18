import React from "react";
import useMovieClipByType from "../hook/useMovieClipByType";
import { useSelector } from "react-redux";

export const VideoBreakGround = ({ movieId }) => {
  useMovieClipByType(movieId, "Trailer");
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  console.log("trailerVideo", trailerVideo);

  return (
    <div>
      {trailerVideo?.key && (
        <div className="w-screen">
          <iframe
            className="w-screen aspect-video"
            src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

import Header from "./Header";
import usePopularMovie from "../hook/usePopularMovie";
import MainContainer from "./browse/MainContainer";
import SecondaryContainer from "./browse/SecondaryContainer";
import useNowPlayingMovies from "../hook/useNowPlayingMovie";

const Browse = () => {
  usePopularMovie();
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: {
    nowPopularMovies: null,
    trailerVideo: null,
    nowPlayingMovies: null,
    currentMovie: null,
  },
  reducers: {
    addPopularMovies: (state, action) => {
      state.nowPopularMovies = action.payload;
    },
    addNowPlayingMovies: (state, acttion) => {
      state.nowPlayingMovies = acttion.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPlayingMovie: (state, action) => {
      state.currentMovie = action.payload;
    },
  },
});

export const {
  addPopularMovies,
  addNowPlayingMovies,
  addTrailerVideo,
  addPlayingMovie,
} = moviesSlice.actions;

export default moviesSlice.reducer;

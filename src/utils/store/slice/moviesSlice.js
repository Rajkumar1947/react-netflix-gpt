import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: {
    nowPopularMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addPopularMovies: (state, action) => {
      state.nowPopularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addPopularMovies, addTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;

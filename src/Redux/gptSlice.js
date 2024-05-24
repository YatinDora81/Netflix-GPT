import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    //tmdb api data
    movieText: null,
    collectionMovies: null,
    multiMovies: null,
    moviesName: null,
    shimmer: false,
  },
  reducers: {
    toggleGptSeach: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addMovieText: (state, action) => {
      state.movieText = action.payload;
    },
    addCollectionMovies: (state, action) => {
      state.collectionMovies = action.payload;
    },
    addMultiMovies: (state, action) => {
      state.multiMovies = action.payload;
    },
    addMoviesName: (state, action) => {
      state.moviesName = action.payload;
    },
    clearAllMovies: (state, action) => {
      state.moviesName = null;
      state.collectionMovies = null;
      state.multiMovies = null;
    },
    toggleShimmer: (state, action) => {
      state.shimmer = !state.shimmer;
    },
  },
});

export const {
  toggleGptSeach,
  addCollectionMovies,
  addMultiMovies,
  addMoviesName,
  clearAllMovies,
  addMovieText,
  toggleShimmer,
} = gptSlice.actions;
export default gptSlice.reducer;

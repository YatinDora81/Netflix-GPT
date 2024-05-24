import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movie",
  initialState: {
    // //bydeafault for maincontainer VideoTitle
    now_playing: {
      results: [
        {
          adult: false,
          backdrop_path: "/3Kzc6V4MWs3RXCmE5DhAYnfWL8F.jpg",
          id: 1239251,
          original_language: "en",
          original_title: "Megamind vs. the Doom Syndicate",
          overview:
            "Megamind's former villain team, The Doom Syndicate, has returned. Our newly crowned blue hero must now keep up evil appearances until he can assemble his friends (Roxanne, Ol' Chum and Keiko) to stop his former evil teammates from launching Metro City to the Moon.",

          poster_path: "/fko8CPrnspewLXgFUlUkivyvpHX.jpg",
          title: "Megamind vs. the Doom Syndicate",
        },
      ],
    },
    // // now_playing : null,
    popular: null,
    toprated: null,
    upcomming: null,
    // //main_trailer : null,

    // //by deafault trailer
    main_trailer: {
      iso_639_1: "en",
      iso_3166_1: "US",
      name: "Official Trailer",
      key: "DXb7tWC2W5o",
      site: "YouTube",
      size: 1080,
      type: "Trailer",
      official: true,
      published_at: "2024-02-01T18:00:06.000Z",
      id: "65bcc4df7646fd0163be3c99",
    },

    trailer_mute: false,
    singleMovieData : {},
    shimmer_singleMovie : false,

  },
  reducers: {
    add_Now_playing: (state, action) => {
      state.now_playing = action.payload;
    },
    add_trailer_info: (state, action) => {
      state.main_trailer = action.payload;
    },
    toggleMuteTrailer: (state, action) => {
      state.trailer_mute = !state.trailer_mute;
    },
    add_popular: (state, action) => {
      state.popular = action.payload;
    },
    add_toprated: (state, action) => {
      state.toprated = action.payload;
    },
    add_upcomming: (state, action) => {
      state.upcomming = action.payload;
    },
    add_singleMovieData : (state,action)=>{
      state.singleMovieData = action.payload;
    },
    clear_singleMovieData : (state,action)=>{
      state.singleMovieData = {}
    },
    toggle_shimmer_singleMovie : (state,action)=>{
      state.shimmer_singleMovie = !state.shimmer_singleMovie
    },
    false_shimmer_singleMovie : (state,action)=>{
      state.shimmer_singleMovie = false
    },
    true_shimmer_singleMovie : (state,action)=>{
      state.shimmer_singleMovie = true
    },
  },
});

export const {
  add_Now_playing,
  add_trailer_info,
  toggleMuteTrailer,
  add_popular,
  add_toprated,
  add_upcomming,
  add_singleMovieData,
  clear_singleMovieData,
  toggle_shimmer_singleMovie,
  false_shimmer_singleMovie,
  true_shimmer_singleMovie
} = MovieSlice.actions;
export default MovieSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import UserSliceReducer from "./UserSlice";
import MovieSliceReducer from "./MovieSlice";
import gptSliceReducer from "./gptSlice";
import appConfigSliceReducer from "./appConfigSlice";

const Store = configureStore({
  reducer: {
    "user": UserSliceReducer,
    "movies": MovieSliceReducer,
    "gpt" : gptSliceReducer,
    "appConfig" : appConfigSliceReducer,
  },
});

export default Store;
import { configureStore } from '@reduxjs/toolkit';
import star_wars_slice from "../reducer/reducer.js";

export const store = configureStore({
  reducer: {
    global_state: star_wars_slice,
  },
})
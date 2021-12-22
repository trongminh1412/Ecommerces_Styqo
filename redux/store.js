//import { createStore } from "redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import playlistDataSlice from "./playlistDataSlice";

const store = configureStore({
  reducer: combineReducers({
    playlistData: playlistDataSlice,
  }),
  devTools: true,
});
export const makeStore = () => store;

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });

import { createAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const hydrate = createAction(HYDRATE);

const initialState = {
  currentPlaylist: null,
  allPlaylists: [],
};

export const playlistData = () =>
  createSlice({
    name: "playlistData",

    initialState: initialState,

    reducers: {},

    extraReducers(builder) {
      builder.addCase(hydrate, (state) => {
        return {
          ...state,
        };
      });
    },
  });

const { reducer } = playlistData;

export default reducer;

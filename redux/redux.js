import { configureStore, createSlice } from "@reduxjs/toolkit";
import favSlice from "./favSlice";
import languageSlice from "./languageSlice";

export const { addLike, supLike, deleteLike, emptyLike } = favSlice.actions;
export const { changeLanguage } = languageSlice.actions;

export const store = configureStore({
  reducer: {
    fav: favSlice.reducer,
    language: languageSlice.reducer,
  },
});

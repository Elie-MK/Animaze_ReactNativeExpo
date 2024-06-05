import { configureStore, createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "favSlice",
  initialState: [],
  reducers: {
    getLike: (state, action) => {
      return state;
    },
    addLike: (state, action) => {
      const product = state.find(
        (data) => data.detail.id === action.payload.detail.id
      );
      if (product) {
        product.qte = product.qte + 1;
      } else {
        state.push(action.payload);
      }
    },
    supLike: (state, action) => {
      const product = state.find(
        (data) => data.detail.id === action.payload.detail.id
      );
      if (product) {
        product.qte = product.qte - 1;
      } else {
        state.push(action.payload);
      }
    },

    deleteLike: (state, action) => {
      state = state.filter((id) => id.detail.id !== action.payload);
      return state;
    },
    emptyLike: (state, action) => {
      state = [];
      return state;
    },
  },
});

export default favSlice;

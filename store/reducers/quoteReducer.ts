"use client";
import { createSlice } from "@reduxjs/toolkit";
// Define a type for the slice state
interface cartState {
  [x: string]: any;
  secure_url: any[];
}

type ReducerProps = {};

const initialState: cartState = {
  secure_url: [],
};

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    addToQuote: (state, action) => {
      state.secure_url.push(action.payload);
    },

    clearQuote: (state) => {
      state.secure_url = [];
    },
  },
});

export const { addToQuote, clearQuote } = quoteSlice.actions;

export const selectSecureUrl = (state: cartState) => state.quote.secure_url;

export default quoteSlice.reducer;

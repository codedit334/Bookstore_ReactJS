import { createSlice } from "@reduxjs/toolkit";

const booksState = [];

const booksSlice = createSlice({
  name: "books",
  booksState,
  reducers: {
    bookAdded(state, action) {
      state.push(action.payload);
    },
    bookRemoved(state, action) {
      state.filter((book) => book.item_id !== action.payload);
    },
  },
});

export const { bookAdded, bookRemoved } = booksSlice.actions;

export default booksSlice.reducer;

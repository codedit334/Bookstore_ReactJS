import { configureStore } from '@reduxjs/toolkit';
import bookssReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

export default configureStore({
  reducer: {
    books: bookssReducer,
    categories: categoriesReducer,
  },
});

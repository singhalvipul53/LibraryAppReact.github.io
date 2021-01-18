import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import bookReducer from '../features/bookSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
  },
});

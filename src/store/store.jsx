import { configureStore } from '@reduxjs/toolkit';
import newUserSlice from '../slice/userSlice'; 

const store = configureStore({
  reducer: {
    user: newUserSlice, 
  },
});

export default store;
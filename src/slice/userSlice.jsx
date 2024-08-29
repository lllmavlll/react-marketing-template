import { createSlice } from '@reduxjs/toolkit';

const newUserSlice = createSlice({
  name: 'user',
  initialState: {
    username: null, // Initial state for username
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload; // Set the username with the provided payload
    },
    clearUsername: (state) => {
      state.username = null; // Clear the username
    },
  },
});

export const { setUsername, clearUsername } = newUserSlice.actions;

export default newUserSlice.reducer;

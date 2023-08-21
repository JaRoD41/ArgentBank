import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '',
  token: '',
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    }
  },
});

export const { setUsername } = authSlice.actions;
export default authSlice.reducer;
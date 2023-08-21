import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
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
      state.email = action.payload;
    },
    setPasword: (state, action) => {
      state.password = action.payload;
    }
  },
});

export const { setUsername, setPasword } = authSlice.actions;
export default authSlice.reducer;
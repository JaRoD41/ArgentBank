import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   password: '',
//   token: '',
//   isLoggedIn: false,
//   isLoading: false,
//   error: null,
// };

const initialState = {
  email: null,
  password: null,
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    }
  },
});

export const { setUsername, setPassword } = auth.actions;
export default auth.reducer;
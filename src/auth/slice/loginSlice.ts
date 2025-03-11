import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginCredential } from '../../models/LoginCredential';
const initialState = {
  success: false,
  errors: [],
  isAuthenticated: true
};

const loginSlice = createSlice({
  name: 'auth/login',
  initialState,
  reducers: {
    submitLogin: (state, action: PayloadAction<LoginCredential>) => { },
    loginSuccess: (state) => {
      state.success = true;
      state.errors = [];
      state.isAuthenticated = true;
    },
    loginError: (state, action) => {
      state.success = false;
      state.errors = action.payload;
      state.isAuthenticated = false;
    },
  },
});

export const {
  actions: loginAction,
  reducer: loginReducer
} = loginSlice;

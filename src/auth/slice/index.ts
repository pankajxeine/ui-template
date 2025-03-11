import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from './loginSlice';
// import register from './registerSlice';
import { userReducer } from './userSlice';

const authReducers = combineReducers({
  login: loginReducer,
  user: userReducer,
});

export default authReducers;

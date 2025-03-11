import { createSlice } from '@reduxjs/toolkit';
// export const setUserDataAuth0 = (tokenData) => async (dispatch) => {
//   const user = {
//     role: ['admin'],
//     from: 'auth0',
//     data: {
//       displayName: tokenData.username || tokenData.name,
//       photoURL: tokenData.picture,
//       email: tokenData.email,
//       settings:
//         tokenData.user_metadata && tokenData.user_metadata.settings
//           ? tokenData.user_metadata.settings
//           : {},
//       shortcuts:
//         tokenData.user_metadata && tokenData.user_metadata.shortcuts
//           ? tokenData.user_metadata.shortcuts
//           : [],
//     },
//   };

//   return dispatch(setUserData(user));
// };

// export const setUserData = (user) => async (dispatch, getState) => {
//   /*
//         You can redirect the logged-in user to a specific route depending on his role
//          */

//   history.location.state = {
//     redirectUrl: user.redirectUrl, // for example 'apps/academy'
//   };

//   /*
//     Set User Settings
//      */
//   dispatch(setDefaultSettings(user.data.settings));

//   dispatch(setUser(user));
// };

// export const updateUserSettings = (settings) => async (dispatch, getState) => {
//   const oldUser = getState().auth.user;
//   const user = merge({}, oldUser, { data: { settings } });

//   dispatch(updateUserData(user));

//   return dispatch(setUserData(user));
// };

// export const updateUserShortcuts = (shortcuts: any) => async (dispatch, getState) => {
//   const { user } = getState().auth;
//   const newUser = {
//     ...user,
//     data: {
//       ...user.data,
//       shortcuts,
//     },
//   };

//   dispatch(updateUserData(user));

//   return dispatch(setUserData(newUser));
// };

const initialState = {
  email: '',
  shortcuts: ['calendar', 'mail', 'contacts', 'todo'],
};


const userSlice = createSlice({
  name: 'auth/user',
  initialState,
  reducers: {
    setUser: (state, action) => action.payload,
    resetUserData: (state) => initialState,
    userLoggedOut: (state) => { initialState },
    updateUserData: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    },
  },
});

export const {
  actions: userAction,
  reducer: userReducer
} = userSlice;
import { createSlice } from '@reduxjs/toolkit';
// import 'firebase/auth';
import { createBrowserHistory } from 'history';
import merge from 'lodash/merge';
const history = createBrowserHistory();

export const setUserData = (user: any) => async (dispatch: any, getState: any) => {
  /*
        You can redirect the logged-in user to a specific route depending on his role
         */

  history.location.state = {
    redirectUrl: user.redirectUrl, // for example 'apps/academy'
  };

  /*
    Set User Settings
     */
  // dispatch(setDefaultSettings(user.data.settings));

  dispatch(setUser(user));
};

export const updateUserSettings = (settings: any) => async (dispatch: any, getState: any) => {
  const oldUser = getState().auth.user;
  const user = merge({}, oldUser, { data: { settings } });

  dispatch(updateUserData(user));

  return dispatch(setUserData(user));
};

export const updateUserShortcuts = (shortcuts: any) => async (dispatch: any, getState: any) => {
  const { user } = getState().auth;
  const newUser = {
    ...user,
    data: {
      ...user.data,
      shortcuts,
    },
  };

  dispatch(updateUserData(user));

  return dispatch(setUserData(newUser));
};

export const logoutUser = () => async (dispatch: any, getState: any) => {
  const { user } = getState().auth;

  if (!user.role || user.role.length === 0) {
    // is guest
    return null;
  }

  history.push({
    pathname: '/',
  });

  // switch (user.from) {
  //   case 'firebase': {
  //     firebaseService.signOut();
  //     break;
  //   }
  //   case 'auth0': {
  //     auth0Service.logout();
  //     break;
  //   }
  //   default: {
  //     jwtService.logout();
  //   }
  // }

  // dispatch(setInitialSettings());
  //return dispatch(userLoggedOut());
};

export const updateUserData = (user: any) => async (dispatch: any, getState: any) => {
  if (!user.role || user.role.length === 0) {
    // is guest
    return;
  }
  // switch (user.from) {
  //   case 'firebase': {
  //     firebaseService
  //       .updateUserData(user)
  //       .then(() => {
  //         dispatch(showMessage({ message: 'User data saved to firebase' }));
  //       })
  //       .catch((error) => {
  //         dispatch(showMessage({ message: error.message }));
  //       });
  //     break;
  //   }
  //   case 'auth0': {
  //     auth0Service
  //       .updateUserData({
  //         settings: user.data.settings,
  //         shortcuts: user.data.shortcuts,
  //       })
  //       .then(() => {
  //         dispatch(showMessage({ message: 'User data saved to auth0' }));
  //       })
  //       .catch((error) => {
  //         dispatch(showMessage({ message: error.message }));
  //       });
  //     break;
  //   }
  //   default: {
  //     jwtService
  //       .updateUserData(user)
  //       .then(() => {
  //         dispatch(showMessage({ message: 'User data saved with api' }));
  //       })
  //       .catch((error) => {
  //         dispatch(showMessage({ message: error.message }));
  //       });
  //     break;
  //   }
  // }
};

const initialState = {
  role: [], // guest
  data: {
    displayName: 'John Doe',
    photoURL: 'assets/images/avatars/Velazquez.jpg',
    email: 'johndoe@withinpixels.com',
    shortcuts: ['calendar', 'mail', 'contacts', 'todo'],
  },
};

const userSlice = createSlice({
  name: 'auth/user',
  initialState,
  reducers: {
    setUser: (state, action) => action.payload,
    userLoggedOut: (state) => initialState,
  },
});

export const { setUser, userLoggedOut } = userSlice.actions;

export default userSlice.reducer;

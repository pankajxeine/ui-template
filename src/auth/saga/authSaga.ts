import get from "lodash/get";
import moment from "moment";
import { call, fork, put, takeLatest, all } from "redux-saga/effects";

import authentication from "../services/auth.service";
import { userAction } from "../slice/userSlice";
// import { setInitialSettings } from '~/core/store/slices/app/settingsSlice';
import { loginAction } from "../slice/loginSlice";
import { LoginCredential } from "models/LoginCredential";
import { PayloadAction } from "@reduxjs/toolkit";
const _ = { get };
/**
 * worker for logout
 */
function* workerLogout() {
  // code for handling registration.
  // const { user } = getState().auth;

  // if (!user.role || user.role.length === 0) {
  //   // is guest
  //   return null;
  // }

  yield put(authentication.logout)
  // yield put(setInitialSettings);
  yield put(userAction.userLoggedOut)

  // history.push({
  //   pathname: '/',
  // });
}
/**
 * worker for login
 */
function* workerLogin(action: PayloadAction<LoginCredential>): any {
  // code for handling login.
  try {
    const response = yield call(authentication.signInWithCredentail, action.payload);
    //This is to check if error or not
    const res_body = _.get(response, "data.data");
    const res_status = _.get(res_body, "status", true);

    if (res_status) {
      // Check if user has requested for temporary password
      const passwordToken = _.get(res_body, "user.password_token", "");
      const passwordExpireAt = _.get(res_body, "user.password_expire_at", "");

      if (passwordToken && passwordExpireAt) {
        const tokenTime = moment(passwordExpireAt);
        const currentTime = moment();
        const timeDiff = tokenTime.diff(currentTime, "minute");

        // Redirect user to change password screen
        if (timeDiff > 0) {
          //history.push(`/change-password/${passwordToken}`);
        } else {
          // Token has expired, stay at login page
          // NotificationMessage(
          //   "error",
          //   i18n.t(
          //     "Your temporary password has expired. Please click on Forgot Password to get a new one."
          //   )
          // );
        }

        // Reset login form
        yield put(loginAction.loginError({
          payload: { code: 422, status: false, message: "" }
        }));
      } else {
        yield put(loginAction.loginSuccess());
        yield put(userAction.updateUserData(res_body.user));
      }
    } else {
      yield put(loginAction.loginError("login error"));
      // yield put({
      //   type: actionTypes.ERROR_LOGIN,
      //   payload: res_body
      // });
    }
  } catch (err) {
    yield put(loginAction.loginError);
    // yield put({ type: actionTypes.ERROR_LOGIN });
  }
}

//
/**
 * watch for registration action.
 */
function* watchLogout() {
  yield takeLatest(userAction.userLoggedOut, workerLogout);
}

//
/**
 * watch for login action.
 */
function* watchLogin() {
  yield takeLatest(loginAction.submitLogin, workerLogin);
}

function* authSaga() {
  yield all([fork(watchLogin), fork(watchLogout)]);
}
export default authSaga;


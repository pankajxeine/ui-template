import { all, fork } from 'redux-saga/effects';


import authSaga from '../auth/saga/authSaga';
import gatwaySaga from 'sagas/gatway.saga';
// import usersSaga from '../containers/Users/saga/users.saga';

/**
 * rootSaga
 */
export default function* root() {
  yield all([
    fork(authSaga),
    fork(gatwaySaga)
    //fork(usersSaga)
  ]);
}
import { call, fork, put, takeLatest, all } from "redux-saga/effects";
import authentication from "../services/auth.service";
import { userAction } from "../slice/userSlice"

/**
 * worker for logout
 */
function* workerDataUpdate(action: any): any {
    try {
        // yield call(authentication.updateUserData, action.payload);
        //yield put(userAction.setUserData);
    } catch (error) {

    }
}

/**
 * watchUpdateData
 */
function* watchUpdateData() {
    // yield takeLatest(userAction.updateUserData, workerDataUpdate);
}

function* userSaga() {
    yield all([fork(watchUpdateData)]);
}
export default userSaga;


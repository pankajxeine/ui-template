import { combineReducers } from '@reduxjs/toolkit';
import layoutReducer from "./slices/layoutSlice";
import auth from "auth/slice";

const createReducer = (asyncReducers?: any) => (state: any, action: any) => {
    const combinedReducer = combineReducers({
        layout: layoutReducer,
        auth,
        ...asyncReducers,
    });

    /*
      Reset the redux store when user logged out
       */
    if (action.type === 'userLoggedOut') {
        state = undefined;
    }

    return combinedReducer(state, action);
};

export default createReducer;

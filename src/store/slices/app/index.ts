import { combineReducers } from '@reduxjs/toolkit';
import settings from './settingsSlice';
import { initialState } from './settingsSlice';
import navbar from './navbarSlice';
import navigation from './navigationSlice';
export const appInitState = {
    settings: initialState,
};
const appReducers = combineReducers({
    settings,
    navbar,
    navigation
});

export default appReducers;

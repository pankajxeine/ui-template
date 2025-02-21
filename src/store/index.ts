import { configureStore } from '@reduxjs/toolkit';
import createReducer from './rootReducer';
import middlewares, { sagaMiddleware } from './middlewares';
import rootSaga from '../sagas';

export const configStore = (preloadedState: any = {}) => {
  const enhancedStore = configureStore({
    reducer: createReducer(),
    preloadedState,
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(middlewares),
    devTools: process.env.NODE_ENV === 'development',
  });

  sagaMiddleware.run(rootSaga);

  return enhancedStore;
};

const store = configStore();

//@ts-ignore
store.asyncReducers = {};

export const injectReducer = (key: string, reducer: any) => {
  //@ts-ignore
  if (store.asyncReducers[key]) {
    return false;
  }
  //@ts-ignore
  store.asyncReducers[key] = reducer;
  //@ts-ignore
  store.replaceReducer(createReducer(store.asyncReducers));
  return store;
};

export default store;

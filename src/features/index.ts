import { all } from '@redux-saga/core/effects';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import pageSlice from './pages/slice';

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield all([]);
}

const store = configureStore({
  reducer: pageSlice,
  devTools: true,
  middleware: [sagaMiddleware],
});

const createStore = () => {
  sagaMiddleware.run(rootSaga);
  return store;
};

export default createStore;

export type RootState = ReturnType<typeof store.getState>;

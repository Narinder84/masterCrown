/** @format */

import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunks from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root.reducer';

import rootSaga from './root.sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, logger];

// if (process.env.NODE_ENV === 'development') {
// 	middleware.push(logger);
// }

export const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

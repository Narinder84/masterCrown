/** @format */

/** @format */

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import dictionaryReducer from './dictionary/dictionary.reducer';
import collectionsReducer from './collections/collections.reducer';
import shopReducer from './cart/cart.reducer';
import userReducer from './user/user.root.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart'],
};

const rootReducer = combineReducers({
	sections: dictionaryReducer,
	collections: collectionsReducer,
	cart: shopReducer,
	user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);

export type AppState = ReturnType<typeof rootReducer>;

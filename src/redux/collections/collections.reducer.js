/** @format */

import { collectionActions } from './collections.actionTypes';
import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
	collections: [],
	isFetching: false,
	errMessage: undefined,
};

const collectionReducer = (state = INITIAL_STATE, action = {}) => {
	switch (action.type) {
		case collectionActions.FETCH__COLLECTIONS_STARTS:
			return {
				...state,
				isFetching: true,
			};

		case collectionActions.FETCH__COLLECTIONS_SUCCESS:
			return {
				...state,
				collections: action.payload,
				isFetching: false,
			};
		case collectionActions.FETCH__COLLECTIONS_FAILS:
			return {
				...state,
				errMessage: 'some thing wrong',
				isFetching: false,
			};
		default:
			return state;
	}
};

export default collectionReducer;

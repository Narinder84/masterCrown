/** @format */

import { shopActionTypes } from './cart.actionTypes';

import { addItems, reduceItems, deleteItem } from './cartUtils';

const INITIAL_STATE = {
	shopItems: [],
	isHidden: false,
};

const shopReducer = (state = INITIAL_STATE, action = {}) => {
	switch (action.type) {
		case shopActionTypes.ADD_ITEM_TO_CART:
			return {
				...state,
				shopItems: addItems(state.shopItems, action.payload),
			};
		case shopActionTypes.REDUCE_ITEM:
			return {
				...state,
				shopItems: reduceItems(state.shopItems, action.payload),
			};
		case shopActionTypes.DELETE_ALL_ITEMS:
			return {
				...state,
				shopItems: [],
			};
		case shopActionTypes.DELETE_ITEM:
			return {
				...state,
				shopItems: deleteItem(state.shopItems, action.payload),
			};
		case shopActionTypes.TOGGLE_CART:
			return {
				...state,
				isHidden: !state.isHidden,
			};

		default:
			return state;
	}
};

export default shopReducer;

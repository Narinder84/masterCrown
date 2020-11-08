/** @format */
import { shopActionTypes } from './cart.actionTypes';

export const addItemToCart = (item) => ({
	type: shopActionTypes.ADD_ITEM_TO_CART,
	payload: item,
});

export const reduceItemFromCart = (item) => ({
	type: shopActionTypes.REDUCE_ITEM,
	payload: item,
});
export const deleteItemFromCart = (item) => ({
	type: shopActionTypes.DELETE_ITEM,
	payload: item,
});

export const deleteAllItems = () => ({
	type: shopActionTypes.DELETE_ALL_ITEMS,
});

export const toggleCart = () => ({
	type: shopActionTypes.TOGGLE_CART,
});

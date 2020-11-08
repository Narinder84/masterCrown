/** @format */

import { createSelector } from 'reselect';

const getCart = (state) => {
	return state.cart;
};

export const isHidden = createSelector([getCart], (cart) => cart.isHidden);

export const getShopItems = createSelector(
	[getCart],

	(cart) => cart.shopItems,
);

export const getItemsCount = createSelector(
	[getShopItems],

	(shopItems) => shopItems.reduce((acc, item) => acc + item.quantity, 0),
);

export const getGrandTotal = createSelector([getShopItems], (shopItems) =>
	shopItems.reduce((acc, item) => acc + item.quantity * item.price, 0),
);

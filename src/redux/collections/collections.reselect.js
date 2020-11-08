/** @format */

/** @format */

import { createSelector } from 'reselect';

const collectionsState = (state) => {
	return state.collections;
};

export const getCollections = createSelector(
	[collectionsState],
	(state) => state.collections,
);

export const isCollectionFetching = createSelector(
	[getCollections],
	(collections) => collections.isFetching,
);

export const collectionsById = (idParam) =>
	createSelector([getCollections], (collections) => {
		if (collections !== null) {
			return collections.find(
				(collection) =>
					collection.routeName === idParam.match.params.categoryId,
			);
		}
	});

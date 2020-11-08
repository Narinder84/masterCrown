/** @format */

import { collectionActions } from './collections.actionTypes';
import { fetchCollectionsFromFireStore } from '../../firabase/fireBaseUtils';

export const fetchCollectionsStarts = () => ({
	type: collectionActions.FETCH__COLLECTIONS_STARTS,
});

export const fetchCollectionsSuccess = (collections) => ({
	type: collectionActions.FETCH__COLLECTIONS_SUCCESS,
	payload: collections,
});

export const fetchCollectionsFails = (err) => ({
	type: collectionActions.FETCH__COLLECTIONS_FAILS,
	payload: err,
});

export const fetchCollectionsAsync = () => {
	return (dispatch) => {
		const getFetchCollections = async () => {
			dispatch(fetchCollectionsStarts());
			const data = await fetchCollectionsFromFireStore();
			if (data) {
				await dispatch(fetchCollectionsSuccess(data));
			} else {
				dispatch(fetchCollectionsFails(data.message));
			}
		};
		getFetchCollections();
	};
};

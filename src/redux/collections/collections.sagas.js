/** @format */

import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchCollectionsFromFireStore } from '../../firabase/fireBaseUtils';
import {
	fetchCollectionsSuccess,
	fetchCollectionsFails,
} from './collections.actions';

import { collectionActions } from './collections.actionTypes';

export function* fetchCollectionAsync() {
	const data = yield call(fetchCollectionsFromFireStore);

	if (data.length > 0) {
		yield put(fetchCollectionsSuccess(data));
	} else {
		yield put(fetchCollectionsFails());
	}
}

export function* fetchCollection() {
	yield takeEvery(
		collectionActions.FETCH__COLLECTIONS_STARTS,
		fetchCollectionAsync,
	);
}

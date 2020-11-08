/** @format */

import { call, all } from 'redux-saga/effects';

import { fetchCollection } from './collections/collections.sagas';
import { userSagas } from './user/user.sagas';

export default function* rootSaga() {
	yield all([call(fetchCollection), call(userSagas)]);
}

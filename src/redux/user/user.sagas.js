/** @format */

import { put, takeLatest, call, all } from 'redux-saga/effects';

import {
	getCurrentUser,
	googleSignIn,
	createDataBaseForUser,
} from '../../firabase/fireBaseUtils';

import userActionsTypes from './user.action.types';

import {
	googleSignInFails,
	googleSignInSuccess,
	isUserAuthenticateSuccess,
} from './user.action';

function* signInWithGoogle() {
	try {
		const { user } = yield call(googleSignIn);
		const userRef = yield call(createDataBaseForUser, user);
		const userSnaphot = yield userRef.get();
		yield put(
			googleSignInSuccess({ id: userSnaphot.id, ...userSnaphot.data() }),
		);
	} catch (error) {
		yield put(googleSignInFails(error));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(userActionsTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;
		const userRef = yield call(createDataBaseForUser, userAuth);
		const userSnaphot = yield userRef.get();
		yield put(
			isUserAuthenticateSuccess({
				id: userSnaphot.id,
				displayName: userSnaphot.data().displayName,
				email: userSnaphot.data().email,
			}),
		);
	} catch (error) {}
}

export function* onUserCheck() {
	yield takeLatest(userActionsTypes.CHECK_USER, isUserAuthenticated);
}

export function* userSagas() {
	yield all([call(onGoogleSignInStart), call(onUserCheck)]);
}

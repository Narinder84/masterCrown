/** @format */

import { IUser } from './user';

const userActionsTypes = {
	GET_CURRENT_USER: 'GET_CURRENT_USER',
	SIGN_OUT: 'SIGN_OUT',
	GOOGLE_SIGN_IN_START: 'GOOGLE_SIGN_IN_START',
	GOOGLE_SIGN_IN_SUCCESS: 'GOOGLE_SIGN_IN_SUCCESS',
	GOOGLE_SIGN_IN_FAIL: 'GOOGLE_SIGN_IN_FAIL',
	EMAIL_SIGN_IN_START: 'EMAIL_SIGN_IN_START',
	EMAIL_SIGN_IN_SUCCESS: 'EMAIL_SIGN_IN_SUCCESS',
	EMAIL_SIGN_IN_FAIL: 'EMAIL_SIGN_IN_FAIL',
	CHECK_USER: 'CHECK_USER',
	USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
};

export default userActionsTypes;

export interface CheckCurrentUser {
	type: typeof userActionsTypes.CHECK_USER;
	payload: null;
}

export interface googleSignInSuccess {
	type: typeof userActionsTypes.GOOGLE_SIGN_IN_SUCCESS;
	payload: IUser;
}
export interface emailSignInSuccess {
	type: typeof userActionsTypes.EMAIL_SIGN_IN_SUCCESS;
	payload: IUser;
}
export interface userLogInSuccess {
	type: typeof userActionsTypes.USER_LOGIN_SUCCESS;
	payload: IUser;
}
export interface userLogInFail {
	type: typeof userActionsTypes.EMAIL_SIGN_IN_FAIL;
	payload: string;
}
export interface googleLogInFail {
	type: typeof userActionsTypes.GOOGLE_SIGN_IN_FAIL;
	payload: string;
}

export type UserActions =
	| googleSignInSuccess
	| emailSignInSuccess
	| userLogInSuccess
	| googleLogInFail
	| userLogInFail;

export type AppActions = UserActions;

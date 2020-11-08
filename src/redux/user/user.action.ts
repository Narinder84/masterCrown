/** @format */

import userActionsTypes from '../../types/user/action';
import { AppActions } from '../../types/user/action';
import { IUser } from '../../types/user/user';

export const getCurrentUser = (currentUser: IUser): AppActions => ({
	type: userActionsTypes.GET_CURRENT_USER,
	payload: currentUser,
});

export const getUserSinghOut = () => ({
	type: userActionsTypes.SIGN_OUT,
});

export const googleSignInStart = () => ({
	type: userActionsTypes.GOOGLE_SIGN_IN_START,
});

export const googleSignInSuccess = (currentUser: IUser): AppActions => ({
	type: userActionsTypes.GOOGLE_SIGN_IN_SUCCESS,
	payload: currentUser,
});

export const googleSignInFails = (currentUser: string): AppActions => ({
	type: userActionsTypes.GOOGLE_SIGN_IN_FAIL,
	payload: currentUser,
});

export const emailSignInStart = (emailAndPassword: any) => ({
	type: userActionsTypes.EMAIL_SIGN_IN_START,
	payload: emailAndPassword,
});

export const emailSignInSuccess = (currentUser: IUser): AppActions => ({
	type: userActionsTypes.EMAIL_SIGN_IN_SUCCESS,
	payload: currentUser,
});

export const emailSignInFails = (currentUser: string) => ({
	type: userActionsTypes.EMAIL_SIGN_IN_FAIL,
	payload: currentUser,
});

export const checkUser = (currentUser: any = null) => ({
	type: userActionsTypes.CHECK_USER,
	payload: currentUser,
});

export const isUserAuthenticateSuccess = (currentUser: IUser): AppActions => ({
	type: userActionsTypes.USER_LOGIN_SUCCESS,
	payload: currentUser,
});

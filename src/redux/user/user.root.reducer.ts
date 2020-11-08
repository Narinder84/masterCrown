/** @format */
import userActionsTypes from './user.action.types';
import { IUser } from '../../types/user/user';

import { UserActions } from '../../types/user/action';

interface UserState {
	currentUser: IUser | null | string;
	errMessage: string | null | IUser;
}

const INITIAL_STATE: UserState = {
	currentUser: null,
	errMessage: null,
};

const userReducer = (state = INITIAL_STATE, action: UserActions): UserState => {
	console.log(action.payload);

	switch (action.type) {
		case userActionsTypes.GOOGLE_SIGN_IN_SUCCESS:
		case userActionsTypes.EMAIL_SIGN_IN_SUCCESS:
		case userActionsTypes.USER_LOGIN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				errMessage: null,
			};

		case userActionsTypes.GOOGLE_SIGN_IN_FAIL:
		case userActionsTypes.EMAIL_SIGN_IN_FAIL:
			return {
				...state,

				errMessage: action.payload,
			};
		case userActionsTypes.SIGN_OUT:
			return {
				...state,
				currentUser: null,
			};

		default:
			return state;
	}
};

export default userReducer;

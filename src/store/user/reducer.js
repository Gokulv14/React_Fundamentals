import * as types from './types.js';

export const initialUserProfile = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};
export const UserReducer = (state = initialUserProfile, action) => {
	switch (action.type) {
		case types.SAVE_USERINFO:
			return {
				isAuth: true,
				name: action.payload.name,
				email: action.payload.email,
				token: action.payload.token,
				role: action.payload.role,
			};
		case types.RESET_USERINFO:
			return initialUserProfile;
		default:
			return state;
	}
};

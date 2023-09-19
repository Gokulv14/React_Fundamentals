import * as types from './types.js';

export const InitialUserProfile = {
	isAuth: false,
	name: '',
	email: '',
	token: 'string',
};
export const UserReducer = (state = InitialUserProfile, action) => {
	switch (action.type) {
		case types.SAVE_USERINFO:
			return {
				...state,
				isAuth: true,
			};
		default:
			return state;
	}
};

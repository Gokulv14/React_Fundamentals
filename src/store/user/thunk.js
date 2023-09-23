import { makeGetRequest } from '../../services';
import * as types from './types';

export const getUserProfile = () => {
	return async function (dispatch) {
		const result = await makeGetRequest(`/users/me`);
		const response = await result.json();
		dispatch({
			type: types.SAVE_USERINFO,
			payload: {
				name: response.result.name,
				token: localStorage.getItem('userToken'),
				email: response.result.email,
				role: response.result.role,
			},
		});
	};
};

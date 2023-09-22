import * as types from './types.js';

export const saveUserInfo = (payload) => ({
	type: types.SAVE_USERINFO,
	payload,
});

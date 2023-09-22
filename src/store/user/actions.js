import * as types from './types.js';

export const SAVE_USERINFO = (payload) => ({
	type: types.SAVE_USERINFO,
	payload,
});

export const RESET_USERINFO = () => ({
	type: types.RESET_USERINFO,
});

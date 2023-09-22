import * as types from './types';

export const GET_AUTHORS = (payload) => ({
	type: types.GET_AUTHORS,
	payload,
});

export const ADD_AUTHORS = (payload) => ({
	type: types.ADD_AUTHORS,
	payload,
});

export const RESET_AUTHORS = () => ({
	type: types.RESET_AUTHORS,
});

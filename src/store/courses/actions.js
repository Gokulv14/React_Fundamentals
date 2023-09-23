import * as types from './types';

export const GET_COURSES = (payload) => ({
	type: types.GET_COURSES,
	payload,
});

export const ADD_COURSES = (payload) => ({
	type: types.ADD_COURSES,
	payload,
});

export const RESET_COURSES = () => ({
	type: types.RESET_COURSES,
});

export const DELETE_COURSES = (payload) => ({
	type: types.DELETE_COURSES,
	payload,
});

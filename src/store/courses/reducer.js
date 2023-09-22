import * as types from './types';

export const initialCourseList = [];

export const courseReducer = (state = initialCourseList, action) => {
	switch (action.type) {
		case types.GET_COURSES:
			return [...state, ...action.payload];
		default:
			return state;
	}
};

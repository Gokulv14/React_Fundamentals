import * as types from './types';

export const initialCourseList = [];

export const courseReducer = (state = initialCourseList, action) => {
	switch (action.type) {
		case types.GET_COURSES:
			return action.payload;
		case types.ADD_COURSES:
			return [...state, action.payload];
		case types.RESET_COURSES:
			return initialCourseList;
		case types.DELETE_COURSES:
			return state.filter((c) => c.id !== action.payload);
		case types.UPDATE_COURSES:
			const index = state.findIndex((doc) => doc.id === action.payload.id);
			return (state[index] = action.payload);
		default:
			return state;
	}
};

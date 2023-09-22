import * as types from './types';

export const initialAuthorsList = [];

export const authorsReducer = (state = initialAuthorsList, action) => {
	switch (action.type) {
		case types.GET_AUTHORS:
			return action.payload;
		case types.ADD_AUTHORS:
			return [...state, action.payload];
		case types.RESET_AUTHORS:
			return initialAuthorsList;
		default:
			return state;
	}
};

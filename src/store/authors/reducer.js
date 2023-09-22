import * as types from './types';

export const initialAuthorsList = [];

export const authorsReducer = (state = initialAuthorsList, action) => {
	switch (action.type) {
		case types.GET_AUTHORS:
			return state.concat(action.payload);
		default:
			return state;
	}
};

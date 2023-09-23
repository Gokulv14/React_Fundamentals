import { makeGetRequest } from '../../services';
import * as types from './types';

export const getAllAuthors = () => {
	return async function (dispatch) {
		const result = await makeGetRequest(`/authors/all`);
		const response = await result.json();
		dispatch({
			type: types.GET_AUTHORS,
			payload: response.result,
		});
	};
};

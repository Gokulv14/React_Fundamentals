import {
	makeGetRequest,
	makeDeleteRequest,
	makePostRequest,
	makePutRequest,
} from '../../services';
import * as types from './types';

export const getAllCourses = () => {
	return async function (dispatch) {
		const result = await makeGetRequest(`/courses/all`);
		const response = await result.json();
		dispatch({
			type: types.GET_COURSES,
			payload: response.result,
		});
	};
};

export const deleteCourses = (id) => {
	return async function (dispatch) {
		await makeDeleteRequest(`/courses/${id}`);
		dispatch({
			type: types.DELETE_COURSES,
			payload: id,
		});
	};
};

export const saveCourses = (payload) => {
	return async function (dispatch) {
		const result = await makePostRequest(`/courses/add`, payload);
		const response = await result.json();
		dispatch({
			type: types.ADD_COURSES,
			payload: response.result,
		});
	};
};

export const updateCourses = (id, payload) => {
	return async function (dispatch) {
		const result = await makePutRequest(`/courses/${id}`, payload);
		const response = await result.json();
		dispatch({
			type: types.UPDATE_COURSES,
			payload: response.result,
		});
	};
};

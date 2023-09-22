import { COURSES_BACKEND_URL } from './constants';

const headers = {
	'Content-Type': 'application/json',
	Authorization: localStorage.getItem('userToken'),
};

export const makeGetRequest = async (endPoint) => {
	const options = { method: 'GET', headers };
	return await fetch(`${COURSES_BACKEND_URL}${endPoint}`, options);
};

export const makePostRequest = async (endPoint, body) => {
	const options = { method: 'POST', headers, body: JSON.stringify(body) };
	return await fetch(`${COURSES_BACKEND_URL}${endPoint}`, options);
};

export const makeDeleteRequest = async (endPoint) => {
	const options = { method: 'DELETE', headers };
	return await fetch(`${COURSES_BACKEND_URL}${endPoint}`, options);
};

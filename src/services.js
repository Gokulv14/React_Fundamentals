import { COURSES_BACKEND_URL } from './constants';

const headers = {
	'Content-Type': 'application/json',
};

const getToken = () => localStorage.getItem('userToken');

export const makeGetRequest = async (endPoint) => {
	const options = {
		method: 'GET',
		headers: { ...headers, Authorization: getToken() },
	};
	return await fetch(`${COURSES_BACKEND_URL}${endPoint}`, options);
};

export const makePostRequest = async (endPoint, body) => {
	const options = {
		method: 'POST',
		headers: { ...headers, Authorization: getToken() },
		body: JSON.stringify(body),
	};
	return await fetch(`${COURSES_BACKEND_URL}${endPoint}`, options);
};

export const makePutRequest = async (endPoint, body) => {
	const options = {
		method: 'PUT',
		headers: { ...headers, Authorization: getToken() },
		body: JSON.stringify(body),
	};
	return await fetch(`${COURSES_BACKEND_URL}${endPoint}`, options);
};

export const makeDeleteRequest = async (endPoint) => {
	const options = {
		method: 'DELETE',
		headers: { ...headers, Authorization: getToken() },
	};
	return await fetch(`${COURSES_BACKEND_URL}${endPoint}`, options);
};

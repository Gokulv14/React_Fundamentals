import { COURSES_BACKEND_URL } from './constants';

const headers = {
	'Content-Type': 'application/json',
};

export const makeRequest = async (endPoint, method = 'GET') => {
	const options = { method, headers };
	return await fetch(`${COURSES_BACKEND_URL}${endPoint}`, options);
};

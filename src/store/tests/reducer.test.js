import { cleanup } from '@testing-library/react';
import { initialCourseList, courseReducer } from '../courses/reducer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

afterEach(cleanup);
describe('coursesReducer', () => {
	it(`should return the initial state`, async () => {
		const middlewares = [thunk];
		const mockStore = configureMockStore(middlewares);
		mockStore(initialCourseList);
		const newState = courseReducer(undefined, {});
		expect(newState).toEqual(initialCourseList);
	});

	it(`should handle SAVE_COURSE and returns new state`, async () => {
		const previousState = [];
		const action = {
			type: 'ADD_COURSES',
			payload: {
				title: 'title',
				description: 'description',
				creationDate: '9/3/2021',
				duration: 30,
				authors: ['9b87e8b8-6ba5-40fc-a439-c4e30a373d36'],
				id: '66cc289e-6de9-49b2-9ca7-8b4f409d6467',
			},
		};
		const newState = courseReducer(previousState, action);
		expect(newState).toEqual([action.payload]);
	});
});

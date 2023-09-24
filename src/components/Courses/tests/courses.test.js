import { React } from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Courses from '../Courses';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState } from '../../../test.constant';

afterEach(cleanup);
describe('Courses Component', () => {
	const middlewares = [thunk];
	const mockStore = configureStore(middlewares);
	let store;
	it(`should display amount of CourseCard equal length of courses array`, async () => {
		store = mockStore(initialState);
		store.dispatch = jest.fn();
		const { container } = render(
			<Provider store={store}>
				<BrowserRouter>
					<Courses />
				</BrowserRouter>
			</Provider>
		);

		expect(
			container.getElementsByClassName('course-card-component').length
		).toBe(initialState.courses.length);
	});

	it(`CourseForm should be shown after a click on the "Add new course" button`, async () => {
		store = mockStore(initialState);
		store.dispatch = jest.fn();
		const { container } = render(
			<Provider store={store}>
				<BrowserRouter>
					<Courses />
				</BrowserRouter>
			</Provider>
		);

		const button = container.querySelector('#ADD_NEW_COURSE');
		fireEvent.click(button);

		expect(button).toBeInTheDocument();
	});
});

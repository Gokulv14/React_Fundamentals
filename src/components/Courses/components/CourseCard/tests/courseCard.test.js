import { React } from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import CourseCard from '../CourseCard';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { handleDuration } from '../../../../../helpers/getCourseDuration';
import { formatCreationDate } from '../../../../../helpers/formatCreationDate';
import { initialState } from '../../../../../test.constant';

afterEach(cleanup);

describe('CourseCard Component', () => {
	const mockStore = configureStore();
	let store;
	it(`Should display title`, async () => {
		store = mockStore(initialState);
		const { container } = render(
			<Provider store={store}>
				<BrowserRouter>
					<CourseCard
						coursesData={initialState.courses[0]}
						authorList={initialState.authors}
					/>
				</BrowserRouter>
			</Provider>
		);

		expect(
			container.getElementsByClassName('course-title')[0].textContent
		).toBe('title');
	});

	it(`Should display description`, async () => {
		store = mockStore(initialState);
		const { container } = render(
			<Provider store={store}>
				<BrowserRouter>
					<CourseCard
						coursesData={initialState.courses[0]}
						authorList={initialState.authors}
					/>
				</BrowserRouter>
			</Provider>
		);

		expect(
			container.getElementsByClassName('course-content')[0].textContent
		).toBe('description');
	});

	it(`Should display duration in the correct format`, async () => {
		store = mockStore(initialState);
		render(
			<Provider store={store}>
				<BrowserRouter>
					<CourseCard
						coursesData={initialState.courses[0]}
						authorList={initialState.authors}
					/>
				</BrowserRouter>
			</Provider>
		);
		const duration = handleDuration(initialState.courses[0].duration);
		expect(screen.findByText(duration)).toBeTruthy();
		const regex = /^([0-9][0-9]):[0-5][0-9] hours$/;
		const regExTest = regex.test(duration);
		expect(regExTest).toBeTruthy();
	});

	it(`display created date in the correct format`, async () => {
		store = mockStore(initialState);
		render(
			<Provider store={store}>
				<BrowserRouter>
					<CourseCard
						coursesData={initialState.courses[0]}
						authorList={initialState.authors}
					/>
				</BrowserRouter>
			</Provider>
		);

		const creationDate = formatCreationDate(
			initialState.courses[0].creationDate
		);
		expect(screen.findByText(creationDate)).toBeTruthy();
		const regex = /^([1-9]|[12][0-9]|3[01])\.([1-9]|1[0-2])\.\d{4}$/;
		const regExTest = regex.test(creationDate);
		expect(regExTest).toBeTruthy();
	});

	it(`should display authors list`, async () => {
		store = mockStore(initialState);
		render(
			<Provider store={store}>
				<BrowserRouter>
					<CourseCard
						coursesData={initialState.courses[0]}
						authorList={initialState.authors}
					/>
				</BrowserRouter>
			</Provider>
		);

		initialState.courses[0].authors.forEach((doc) => {
			const authors = initialState.authors.find((e) => e.id === doc);
			expect(screen.findByText(authors.name)).toBeTruthy();
		});
	});
});

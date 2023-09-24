import { React } from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { initialState } from '../../../test.constant';

afterEach(cleanup);
describe('Header Component', () => {
	const mockStore = configureStore();
	let store;
	it(`Should Check Logo and user's name`, async () => {
		store = mockStore(initialState);
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		);

		expect(screen.getByAltText('Logo')).toBeInTheDocument();
		expect(screen.findByText('My Profile')).toBeTruthy();
	});
});

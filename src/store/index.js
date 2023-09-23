import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer.js';
import { initialUserProfile } from './user/reducer.js';
import { initialCourseList } from './courses/reducer.js';
import { initialAuthorsList } from './authors/reducer.js';
import thunk from 'redux-thunk';

const appInitialState = {
	user: initialUserProfile,
	courses: initialCourseList,
	authors: initialAuthorsList,
};

const store = createStore(
	rootReducer,
	appInitialState,
	compose(applyMiddleware(thunk), composeWithDevTools())
);

export default store;

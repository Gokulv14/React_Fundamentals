import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import rootReducer from './rootReducer.js';
import { initialUserProfile } from './user/reducer.js';
import { initialCourseList } from './courses/reducer.js';
import { initialAuthorsList } from './authors/reducer.js';

const appInitialState = {
	user: initialUserProfile,
	courses: initialCourseList,
	authors: initialAuthorsList,
};

const store = createStore(rootReducer, appInitialState, composeWithDevTools());

export default store;

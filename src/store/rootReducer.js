import { combineReducers } from 'redux';

import { UserReducer } from './user/reducer.js';
import { courseReducer } from './courses/reducer.js';
import { authorsReducer } from './authors/reducer.js';

const rootReducer = combineReducers({
	user: UserReducer,
	courses: courseReducer,
	authors: authorsReducer,
});

export default rootReducer;

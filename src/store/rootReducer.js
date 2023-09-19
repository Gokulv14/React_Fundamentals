import { combineReducers } from '@reduxjs/toolkit';

import { UserReducer } from './user/reducer.js';

const rootReducer = combineReducers({
	user: UserReducer,
});

export default rootReducer;

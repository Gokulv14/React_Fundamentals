import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer.js';
import { InitialUserProfile } from './user/reducer.js';

const appInitialState = {
	user: InitialUserProfile,
};

const store = configureStore({
	reducer: rootReducer,
	preloadedState: appInitialState,
});

export default store;

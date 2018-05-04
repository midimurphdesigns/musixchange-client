import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import { postReducer } from './reducers/postReducer';
import protectedDataReducer from './reducers/protected-data';
import authReducer from './reducers/auth';
import { loadAuthToken } from './local-storage';
import { setAuthToken } from './actions/auth';
import { getUserInfo } from './actions/users';

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    post: postReducer,
    protectedData: protectedDataReducer,
  }),
  composeWithDevTools(
    applyMiddleware(thunk, logger),
    // other store enhancers if any
  ),
);

// Hydrate the authToken from locaStorage if it exists
const authToken = loadAuthToken();
if (authToken) {
  store.dispatch(setAuthToken(authToken));
  store.dispatch(getUserInfo());
  // store.dispatch(refreshAuthToken());
}

export default store;

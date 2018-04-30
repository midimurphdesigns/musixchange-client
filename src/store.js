import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';

import { adReducer } from './reducers/adReducer';
import protectedDataReducer from './reducers/protected-data';
import authReducer from './reducers/auth';
import { loadAuthToken } from './local-storage';
import { setAuthToken, refreshAuthToken } from './actions/auth';

const store = createStore(combineReducers({
  form: formReducer,
  auth: authReducer,
  ad: adReducer,
  protectedData: protectedDataReducer
}), composeWithDevTools(
  applyMiddleware(thunk),
    // other store enhancers if any
  ));

// Hydrate the authToken from locaStorage if it exists
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { adReducer } from './reducers/adReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(adReducer, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));

export default store;
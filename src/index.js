import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
// import {createStore, applyMiddleware} from 'redux';
// import {Provider} from 'react-redux';
// import thunk from 'redux-thunk';

import './index.css';
// import {mainReducer} from './reducers/mainReducer'
import Frontpage from './components/frontpage/frontpage';
import registerServiceWorker from './registerServiceWorker';

// const store = createStore(mainReducer, applyMiddleware(thunk));
// store.getState();

ReactDOM.render(
    // <Provider store={store}>
    <Router>
        <Frontpage />
    </Router>,
    // </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

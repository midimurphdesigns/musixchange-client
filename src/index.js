import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import store from './store';
import Frontpage from './components/frontpage/frontpage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Frontpage />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {messages} from './reducers/index';
import {StoreState} from './types/index';

import './index.css';

const store = createStore<StoreState>(messages, { responses: [] });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

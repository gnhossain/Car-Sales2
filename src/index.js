import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './reducers/reducer';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
console.log(store);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store= {store}>
    <App />
    </Provider>,
 rootElement);

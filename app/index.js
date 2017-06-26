import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router } from 'react-router-dom';

import history from './history';
import './style/style.scss';
import Board from './containers/Board';
import { observe } from './Game';

import reducers from './reducers';


// redux store configuration:
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(
reducers,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const rootEl = document.getElementById('root');

observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    rootEl,
  )
)

/*
<Provider store={store}>
    <Router history={history}>
      <Board knightPosition={[7, 4]} />
    </Router>
  </Provider>,*/

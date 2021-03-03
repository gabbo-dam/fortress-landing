// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.

import promiseMiddleware from 'redux-promise-middleware';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer';

const createStoreWithMiddleware = compose(
  applyMiddleware(
    thunkMiddleware,
    promiseMiddleware({ promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'] }),
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)(createStore);

export default function configureStore() {
  const store = createStoreWithMiddleware(rootReducer);
  return store;
}

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import * as reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
)(createStore);
const reducer = combineReducers(reducers);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}

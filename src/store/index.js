import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutablejs';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Map } from 'immutable';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);

let state = Map({});
state = reducer(state);

const logger = createLogger({
  transformer: state => state.toJS(),
});
const store = applyMiddleware(thunk, logger)(createStore)(reducer, state);

export default store;

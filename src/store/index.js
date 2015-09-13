import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk';
import logger from '../middleware/logger';
import { Map } from 'immutable';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);

let state = Map({});
state = reducer(state, {
  name: 'CONSTRUCT',
});

const store = applyMiddleware(thunk, logger)(createStore)(reducer, state);

export default store;

import { createReducer } from 'redux-immutablejs';
import Immutable, { List } from 'immutable';
import { actionTypes } from '../constants';

const initialState = Immutable.fromJS({
  fetchingTeams: false,
  fetchTeamsError: null,
  teams: [],
});

export default createReducer(initialState, {
  [actionTypes.FETCHING_TEAMS] (state, action) {
    return initialState.set('fetchingTeams', true);
  },

  [actionTypes.FETCH_TEAMS_ERROR] (state, action) {
    const error = new Map({
      message: action.error.error,
    });

    return initialState.set('fetchTeamsError', error);
  },

  [actionTypes.FETCHED_TEAMS] (state, action) {
    const teams = new List(action.data.teams);
    return initialState.set('teams', teams);
  },
});

import * as actionTypes from '../constants/actionTypes';

const initialState = {
  fetchingTeams: false,
  fetchTeamsError: null,
  teams: [],
};

export default function teams(state = initialState, action = {}) {
  switch (action.type) {
  case actionTypes.FETCHING_TEAMS:
    return Object.assign({}, initialState, {
      fetchingTeams: true,
    });

  case actionTypes.FETCH_TEAMS_ERROR:
    return Object.assign({}, initialState, {
      fetchTeamsError: {
        message: action.error.error,
      },
    });

  case actionTypes.FETCHED_TEAMS:
    return Object.assign({}, initialState, {
      teams: action.teams,
    });

  default:
    return state;
  }
}

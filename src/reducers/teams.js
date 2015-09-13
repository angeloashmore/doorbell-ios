import Immutable, { List } from 'immutable';

const initialState = {
  fetchingTeams: false,
  fetchTeamsError: null,
  teams: [],
};

export const CONSTRUCT = () => Immutable.fromJS(initialState);

export const FETCHING_TEAMS = (domain, action) => {
  return CONSTRUCT()
    .set('fetchingTeams', true);
};

export const FETCH_TEAMS_ERROR = (domain, action) => {
  const error = {
    message: action.data.error.error,
  };

  return CONSTRUCT()
    .set('fetchTeamsError', Immutable.fromJS(error));
};

export const FETCHED_TEAMS = (domain, action) => {
  return CONSTRUCT()
    .set('teams', new List(action.data.teams));
};

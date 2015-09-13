import config from '../config';
import { actionTypes } from '../constants';

function fetchingTeams() {
  return {
    type: actionTypes.FETCHING_TEAMS,
  };
}

function fetchTeamsError(error) {
  return {
    type: actionTypes.FETCH_TEAMS_ERROR,
    data: { error },
  };
}

function fetchedTeams(teams) {
  return {
    type: actionTypes.FETCHED_TEAMS,
    data: { teams },
  };
}

export function fetchTeamsForCurrentUser(jwt) {
  return dispatch => {
    dispatch(fetchingTeams());

    const options = {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    };

    fetch(`http://${config.DoorbellAPI.DOMAIN}/teams`, options)
      .then(res => res.json())
      .then(json => {
        if (!!json.error) {
          dispatch(fetchTeamsError(json));
        } else {
          dispatch(fetchedTeams(json.data));
        }
      });
  }
}

import config from '../config';

const fetchingTeams = () => ({
  name: 'FETCHING_TEAMS',
});

const fetchTeamsError = error => ({
  name: 'FETCH_TEAMS_ERROR',
  data: { error },
});

const fetchedTeams = teams => ({
  name: 'FETCHED_TEAMS',
  data: { teams },
});

export const fetchTeamsForCurrentUser = jwt => (dispatch => {
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
});

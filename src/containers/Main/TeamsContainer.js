import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';

import { fetchTeamsForCurrentUser } from '../../actions/TeamsActions';
import { Teams } from '../../components/Main';

function mapStateToProps(state) {
  return {
    error: state.teams.fetchTeamsError,
    loading: state.teams.fetchingTeams,
    jwt: state.auth.jwt,
    teams: state.teams.teams,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTeamsForCurrentUser }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teams);

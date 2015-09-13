import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';

import { fetchTeamsForCurrentUser } from '../../actions/TeamsActions';
import { Teams } from '../../components/Main';

const mapStateToProps = state => ({
  error: state.getIn(['teams', 'fetchTeamsError']),
  loading: state.getIn(['teams', 'fetchingTeams']),
  jwt: state.getIn(['auth', 'jwt']),
  teams: state.getIn(['teams', 'teams']).toArray(),
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchTeamsForCurrentUser }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teams);

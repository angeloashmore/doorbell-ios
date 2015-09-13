import { connect } from 'react-redux/native';

import { Entry } from '../components';

const mapStateToProps = state => ({
  isSignedIn: !!state.getIn(['auth', 'jwt']),
});

export default connect(
  mapStateToProps,
  null,
)(Entry);

import { connect } from 'react-redux/native';

import { Entry } from '../components';

function mapStateToProps(state) {
  return {
    isSignedIn: !!state.auth.jwt,
  };
}

export default connect(
  mapStateToProps,
  null,
)(Entry);

import { connect } from 'react-redux/native';

import Entry from '../components/Entry';

function mapStateToProps(state) {
  return {
    isSignedIn: !!state.auth.jwt,
  };
}

export default connect(
  mapStateToProps,
  null,
)(Entry);

import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';

import { signIn } from '../actions/AuthActions';
import { SignIn } from '../components';

function mapStateToProps(state) {
  return {
    error: state.auth.error,
    signingIn: !!state.auth.signingIn,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signIn }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';

import { signIn } from '../../actions/AuthActions';
import { SignIn } from '../../components/Auth';

const mapStateToProps = state => ({
  error: state.getIn(['auth', 'signInError']),
  loading: state.getIn(['auth', 'signingIn']),
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ signIn }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

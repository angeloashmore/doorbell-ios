import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';

import { signIn } from '../actions/AuthActions';
import SignIn from '../components/SignIn';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signIn }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SignIn);

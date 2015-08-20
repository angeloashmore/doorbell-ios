import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';

import { changePassword } from '../actions/AuthActions';
import { ChangePassword } from '../components';

function mapStateToProps(state) {
  return {
    error: state.auth.changePasswordError,
    loading: !!state.auth.changingPassword,
    success: state.auth.changePasswordSuccess,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changePassword }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePassword);

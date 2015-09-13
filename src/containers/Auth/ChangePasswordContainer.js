import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';

import { changePassword } from '../../actions/AuthActions';
import { ChangePassword } from '../../components/Auth';

const mapStateToProps = state => ({
  error: state.getIn(['auth', 'changePasswordError']),
  loading: state.getIn(['auth', 'changingPassword']),
  success: state.getIn(['auth', 'changePasswordSuccess']),
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ changePassword }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePassword);

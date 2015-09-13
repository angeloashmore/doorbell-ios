import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';

import { NewChat } from '../../components/Main';

const mapStateToProps = state => ({
  jwt: state.getIn(['auth', 'jwt']),
});

export default connect(
  mapStateToProps,
  null,
)(NewChat);

import React, { Component, PropTypes, View, Text } from 'react-native';
import { bindActionCreators } from 'rx-redux';
import { connect } from 'react-redux/native';

import * as AuthActions from '../actions/AuthActions';

@connect(state => ({
  auth: state.auth,
}))
export default class Home extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    const { auth, dispatch } = this.props;

    return (
      <View>
        <Text>Testing!</Text>
      </View>
    );
  }
}

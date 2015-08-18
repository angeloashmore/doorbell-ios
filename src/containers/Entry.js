import React, { Component, PropTypes, StyleSheet, Modal, View, Text } from 'react-native';
import { connect } from 'react-redux/native';
import { bindActionCreators } from 'rx-redux';

import * as AuthActions from '../actions/AuthActions';
import SignIn from '../components/SignIn';

@connect(state => ({
  auth: state.auth,
}))
export default class Entry extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  componentDidMount() {
    this.determineModalState();
  }

  componentWillReceiveProps(nextProps) {
    this.determineModalState(nextProps);
  }

  determineModalState(props = this.props) {
    const { auth } = props;
    this.setState({ modalOpen: !auth.jwt });
  }

  render() {
    const { modalOpen } = this.state;
    const { dispatch } = this.props;

    return (
      <View style={styles.container}>
        <Text>Entry</Text>

        <Modal animated={true} visible={modalOpen}>
          <SignIn {...bindActionCreators(AuthActions, dispatch)} />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

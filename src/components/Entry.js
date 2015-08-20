import React, { Component, PropTypes } from 'react-native';
import { Main } from '../components';
import { SignInContainer } from '../containers';

export default class Entry extends Component {
  static propTypes = {
    isSignedIn: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    isSignedIn: false,
  }

  render() {
    const { isSignedIn } = this.props;
    return isSignedIn ? <Main /> : <SignInContainer />;
  }
}

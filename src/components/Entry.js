import React, { Component, PropTypes } from 'react-native';
import { MainNavigator } from './Main';
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
    // return isSignedIn ? <MainNavigator /> : <SignInContainer />;
    return <MainNavigator />;
  }
}

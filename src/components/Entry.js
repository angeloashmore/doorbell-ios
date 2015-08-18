import React, { Component, PropTypes } from 'react-native';
import Main from '../components/Main';
import SignInContainer from '../containers/SignInContainer';

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

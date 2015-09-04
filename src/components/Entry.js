import React, { Component, PropTypes } from 'react-native';
import { MainNavigator } from './Main';
import { SignInContainer } from '../containers';
import { Teams } from './Main';

export default class Entry extends Component {
  static propTypes = {
    isSignedIn: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    isSignedIn: false,
  }

  render() {
    const { isSignedIn } = this.props;

    const initialRoute = {
      component: Teams,
      navigationBar: Teams.NavigationBar,
    };

    return isSignedIn ? <MainNavigator initialRoute={initialRoute} /> : <SignInContainer />;
    // return <MainNavigator initialRoute={initialRoute} />;
  }
}

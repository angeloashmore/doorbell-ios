import React, { Component, PropTypes } from 'react-native';
import { SignInContainer } from '../containers/Auth';
import { TeamsContainer } from '../containers/Main';
import { MainNavigator, Teams } from './Main';

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
      component: TeamsContainer,
      navigationBar: <Teams.NavigationBar />,
    };

    return isSignedIn ? <MainNavigator initialRoute={initialRoute} /> : <SignInContainer />;
    // return <MainNavigator initialRoute={initialRoute} />;
  }
}

import React from 'react-native';
import { NavigationBar } from '../../../elements';

export default class TeamsNavigationBar extends NavigationBar {
  render() {
    return (
      <NavigationBar
        hidePrev={true}
        title="Teams"
        {...this.props} />
    );
  }
}

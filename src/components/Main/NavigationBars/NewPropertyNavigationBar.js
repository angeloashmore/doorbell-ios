import React from 'react-native';
import { NavigationBar } from '../../../elements';

export default class NewPropertyNavigationBar extends NavigationBar {
  render() {
    return (
      <NavigationBar
        customNext={this._renderNext()}
        hidePrev={true}
        title="New Property"
        {...this.props} />
    );
  }

  _renderNext() {
    return (
      <NavigationBar.Button
        noIcon={true}
        position="right">
        Cancel
      </NavigationBar.Button>
    );
  }
}

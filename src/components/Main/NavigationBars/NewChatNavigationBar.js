import React from 'react-native';
import { NavigationBar } from '../../../elements';

export default class NewChatNavigationBar extends NavigationBar {
  render() {
    return (
      <NavigationBar
        customPrev={this._renderPrev()}
        hidePrev={true}
        title="New Message"
        {...this.props} />
    );
  }

  _renderPrev() {
    return (
      <NavigationBar.Button
        icon={require('../../../assets/images/navbar-close-icon.png')} />
    );
  }
}

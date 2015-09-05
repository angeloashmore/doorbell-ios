import React, { PropTypes, ActionSheetIOS } from 'react-native';
import customSceneConfigs from '../../../lib/customSceneConfigs';
import { NavigationBar } from '../../../elements';
import NewChat from '../NewChat';

export default class ChatsNavigationBar extends NavigationBar {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    property: PropTypes.object.isRequired,
  }

  render() {
    return (
      <NavigationBar
        title="Chats"
        {...this.props}
        customPrev={this._renderPrev()}
        customNext={this._renderNext()} />
    );
  }

  _renderPrev() {
    const icon = require('../../../assets/images/navbar-prev-icon.png');
    return <NavigationBar.Button icon={icon} />;
  }

  _renderNext() {
    const icon = require('../../../assets/images/navbar-more-icon.png');
    return (
      <NavigationBar.Button
        icon={icon}
        iconPosition="after"
        onPress={this._handleMorePress.bind(this)}
        position="right" />
    );
  }

  _handleMorePress() {
    const buttons = [
      'Create New Chat…',
      'Archive Property',
      'Cancel',
    ];

    ActionSheetIOS.showActionSheetWithOptions({
      options: buttons,
      cancelButtonIndex: 2,
      destructiveButtonIndex: 1,
    }, this._handleActionSheetPress.bind(this));
  }

  _handleActionSheetPress(buttonIndex) {
    const { navigator } = this.props;

    switch (buttonIndex) {
    case 0:
      navigator.push({
        component: NewChat,
        navigationBar: <NewChat.NavigationBar subtitle="Test" />,
        sceneConfig: customSceneConfigs.FlatFloatFromBottom,
      });
      break;

    default: break;
    }
  }
}

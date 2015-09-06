import React, { PropTypes, ActionSheetIOS } from 'react-native';
import customSceneConfigs from '../../../lib/customSceneConfigs';
import { NavigationBar } from '../../../elements';
import NewChat from '../NewChat';

export default class PropertiesNavigationBar extends NavigationBar {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    property: PropTypes.object.isRequired,
  }

  render() {
    return (
      <NavigationBar
        title="Properties"
        {...this.props}
        customPrev={this._renderPrev()}
        customNext={this._renderNext()} />
    );
  }

  _renderPrev() {
    const icon = require('../../../assets/images/navbar-teams-icon.png');
    return <NavigationBar.Button icon={icon} />;
  }

  _renderNext() {
    const icon = require('../../../assets/images/navbar-plus-icon.png');
    return (
      <NavigationBar.Button
        icon={icon}
        iconPosition="after"
        onPress={this._handlePress.bind(this)}
        position="right" />
    );
  }

  _handlePress() {
    const { navigator } = this.props;

    navigator.push({
      component: NewChat,
      navigationBar: <NewChat.NavigationBar subtitle="Test" />,
      sceneConfig: customSceneConfigs.FlatFloatFromBottom,
    });
  }
}

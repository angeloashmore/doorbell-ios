import React from 'react-native';
import customSceneConfigs from '../../../lib/customSceneConfigs';
import { NavigationBar } from '../../../elements';
import NewProperty from '../NewProperty';

export default class PropertiesNavigationBar extends NavigationBar {
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
        onPress={this._handleAddPress.bind(this)}
        position="right" />
    );
  }

  _handleAddPress() {
    const { navigator } = this.props;
    navigator.push({
      component: NewProperty,
      navigationBar: <NewProperty.NavigationBar />,
      sceneConfig: customSceneConfigs.FlatFloatFromBottom,
    })
  }
}

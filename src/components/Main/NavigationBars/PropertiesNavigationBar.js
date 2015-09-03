import React, { Component, PropTypes } from 'react-native';
import { NavigationBar } from '../../../elements';

export default class PropertiesNavigationBar extends NavigationBar {
  render() {
    return (
      <NavigationBar
        {...this.props}
        title="Properties"
        />
    );
  }
}

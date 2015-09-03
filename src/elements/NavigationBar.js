import React, { Component, PropTypes, StyleSheet, View, Text } from 'react-native';
import NavBar from 'react-native-navbar';
import { colors, fonts } from '../styles';

export default class NavigationBar extends NavBar {
  static propTypes = {
    title: PropTypes.string,
  }

  render() {
    return (
      <NavBar
        {...this.props}
        backgroundStyle={styles.navBarContainer}
        customTitle={this._renderCustomTitle()}
        style={styles.navBar}
        />
    );
  }

  _renderCustomTitle() {
    return (
      <View style={styles.title}>
        <Text style={styles.titleText}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBarContainer: {
    backgroundColor: colors.get('tint'),
    height: 80,
  },

  navBar: {
    marginTop: 15,
    height: 65,
  },

  title: {
    alignItems: 'center',
    bottom: 20,
    left: 0,
    position: 'absolute',
    right: 0,
  },

  titleText: {
    color: colors.get('white'),
    fontFamily: fonts.get('base'),
    fontSize: 20,
    letterSpacing: 1,
  },
});

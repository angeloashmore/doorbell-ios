import React, { PropTypes, StyleSheet, View, Text } from 'react-native';
import NavBar from 'react-native-navbar';
import { colors, fonts } from '../../styles';
import Button from './Button';

export default class NavigationBar extends NavBar {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
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

  static STATUS_BAR_HEIGHT = 15;
  static NAVIGATION_BAR_HEIGHT = 65;
  static TOTAL_HEIGHT = 80;

  static Button = Button;

  _renderCustomTitle() {
    let { title } = this.props;
    const { subtitle } = this.props;
    title = title.toUpperCase();

    return (
      <View style={styles.title}>
        {!!subtitle && <Text style={styles.subtitleText}>{subtitle}</Text>}
        <Text style={styles.titleText}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBarContainer: {
    backgroundColor: colors.get('tint'),
    height: NavigationBar.TOTAL_HEIGHT,
  },

  navBar: {
    alignItems: 'flex-end',
    marginTop: NavigationBar.STATUS_BAR_HEIGHT,
    height: NavigationBar.NAVIGATION_BAR_HEIGHT,
    position: 'relative',
  },

  title: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -5,
    height: NavigationBar.NAVIGATION_BAR_HEIGHT,
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

  subtitleText: {
    color: colors.get('white'),
    fontFamily: fonts.get('base'),
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: 1,
  },
});

import React, { PropTypes, StyleSheet, View, Text } from 'react-native';
import NavBar from 'react-native-navbar';
import { colors, fonts } from '../../styles';
import Prev from './Prev';

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

  state = {
    title: this.props.title,
  }

  static STATUS_BAR_HEIGHT = 15;
  static NAVIGATION_BAR_HEIGHT = 65;
  static TOTAL_HEIGHT = 80;
  static Prev = Prev;

  _renderCustomTitle() {
    let { title } = this.state;
    title = title.toUpperCase();

    return (
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    );
  }

  setTitle(title) {
    this.state({ title });
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

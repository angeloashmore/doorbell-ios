import React, { Component, StyleSheet, Navigator, View, Text } from 'react-native';
import NavigationBar from 'react-native-navbar';
import Teams from './Teams';
import { colors, fonts } from '../../styles';

export default class Main extends Component {
  render() {
    return (
      <Navigator
        configureScene={this.configureScene}
        renderScene={this._renderScene}
        initialRoute={{
          component: Teams,
          navigationBar: this._renderNavigationBar(),
        }}
        sceneStyle={styles.scene}
        />
    );
  }

  _configureScene() {
    return Navigator.SceneConfigs.PushFromRight;
  }

  _renderScene(route, navigator) {
    const PassedComponent = route.component;
    let navBar = route.navigationBar;

    if (navBar) {
      navBar = React.addons.cloneWithProps(navBar, {
        navigator: navigator,
        route: route,
      });
    }

    return (
      <View style={styles.scene}>
        {navBar}
        <PassedComponent navigator={navigator} route={route} />
      </View>
    );
  }

  _renderNavigationBar() {
    return (
      <NavigationBar
        backgroundStyle={styles.navBarContainer}
        customTitle={this._renderCustomTitle()}
        style={styles.navBar}
        title="Initial View"
        />
    );
  }

  _renderCustomTitle() {
    return (
      <View style={styles.title}>
        <Text style={styles.titleText}>TITLE</Text>
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

  scene: {
    backgroundColor: colors.get('background'),
    flex: 1,
  },
});

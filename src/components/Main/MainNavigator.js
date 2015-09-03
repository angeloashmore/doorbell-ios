import React, { Component, StyleSheet, Navigator, View } from 'react-native';
import { colors } from '../../styles';
import Teams from './Teams';

export default class MainNavigator extends Component {
  render() {
    return (
      <Navigator
        configureScene={this.configureScene}
        renderScene={this._renderScene}
        initialRoute={{
          component: Teams,
          navigationBar: Teams.NavigationBar,
        }}
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
      navBar = React.cloneElement(navBar, {
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
}

const styles = StyleSheet.create({
  scene: {
    backgroundColor: colors.get('background'),
    flex: 1,
  },
});

import React, { Component, PropTypes, StyleSheet, Navigator, View } from 'react-native';
import customSceneConfigs from '../../lib/customSceneConfigs';
import { colors } from '../../styles';

export default class MainNavigator extends Component {
  static propTypes = {
    initialRoute: PropTypes.object.isRequired,
  }

  render() {
    const { initialRoute } = this.props;

    return (
      <Navigator
        configureScene={this._configureScene}
        initialRoute={initialRoute}
        renderScene={this._renderScene}
        sceneStyle={styles.scene}
        />
    );
  }

  _configureScene(route) {
    const { sceneConfig } = route;
    return sceneConfig || customSceneConfigs.FlatFloatFromRight;
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
      <View style={styles.sceneContainer}>
        {navBar}
        <PassedComponent navigator={navigator} route={route} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    overflow: 'visible',
    shadowColor: colors.get('black'),
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 0},
  },

  sceneContainer: {
    backgroundColor: colors.get('background'),
    flex: 1,
  },
});

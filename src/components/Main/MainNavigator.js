import React, { Component, PropTypes, StyleSheet, Navigator, View } from 'react-native';
import { colors } from '../../styles';

export default class MainNavigator extends Component {
  static propTypes = {
    initialRoute: PropTypes.object.isRequired,
  }

  render() {
    const { initialRoute } = this.props;

    return (
      <Navigator
        configureScene={this.configureScene}
        renderScene={this._renderScene}
        initialRoute={initialRoute}
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

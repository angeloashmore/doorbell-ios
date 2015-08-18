import React, { AppRegistry, Component, StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux/native';

import configureStore from './store/configureStore';

import Home from './containers/Home';

const store = configureStore();

class DoorbellIOS extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Home />}
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f',
  },
});

AppRegistry.registerComponent('DoorbellIOS', () => DoorbellIOS);

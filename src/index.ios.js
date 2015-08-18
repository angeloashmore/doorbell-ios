import React, { AppRegistry, Component } from 'react-native';
import { Provider } from 'react-redux/native';

import configureStore from './store/configureStore';

import Entry from './containers/Entry';

const store = configureStore();

class DoorbellIOS extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Entry />}
      </Provider>
    );
  }
}

AppRegistry.registerComponent('DoorbellIOS', () => DoorbellIOS);

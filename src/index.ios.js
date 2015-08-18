import React, { AppRegistry, Component } from 'react-native';
import { Provider } from 'react-redux/native';

import configureStore from './store/configureStore';

import EntryContainer from './containers/EntryContainer';

const store = configureStore();

class DoorbellIOS extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <EntryContainer />}
      </Provider>
    );
  }
}

AppRegistry.registerComponent('DoorbellIOS', () => DoorbellIOS);

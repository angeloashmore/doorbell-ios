import React, { AppRegistry, Component, StatusBarIOS } from 'react-native';
import { Provider } from 'react-redux/native';

import configureStore from './store/configureStore';

import { EntryContainer } from './containers';

const store = configureStore();

class DoorbellIOS extends Component {
  componentDidMount() {
    StatusBarIOS.setStyle('light-content');
  }

  render() {
    return (
      <Provider store={store}>
        {() => <EntryContainer />}
      </Provider>
    );
  }
}

AppRegistry.registerComponent('DoorbellIOS', () => DoorbellIOS);

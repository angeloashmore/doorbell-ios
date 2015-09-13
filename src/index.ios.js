import React, { AppRegistry, Component, StatusBarIOS } from 'react-native';
import { Provider } from 'react-redux/native';
import store from './store';
import { EntryContainer } from './containers';

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

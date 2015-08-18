import React, { Component, TabBarIOS, Text } from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item>
          <Text>Test!</Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item>
          <Text>Another</Text>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

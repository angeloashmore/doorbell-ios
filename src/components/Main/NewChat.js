import React, { Component, PropTypes, StyleSheet, Animated, View } from 'react-native';
import KeyboardEvents, { Emitter as KeyboardEventEmitter } from 'react-native-keyboardevents';
import config from '../../config';
import { colors } from '../../styles';
import { AutocompleteTextInput } from '../../elements';
import NavigationBar from './NavigationBars/NewChatNavigationBar';

export default class NewChat extends Component {
  static propTypes = {
    jwt: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
  }

  componentDidMount() {
    KeyboardEventEmitter.on(KeyboardEvents.KeyboardWillShowEvent, this._updateKeyboardSpace.bind(this));
    KeyboardEventEmitter.on(KeyboardEvents.KeyboardWillHideEvent, this._resetKeyboardSpace.bind(this));
  }

  componentWillUnmount() {
    KeyboardEventEmitter.off(KeyboardEvents.KeyboardWillShowEvent, this._updateKeyboardSpace.bind(this));
    KeyboardEventEmitter.off(KeyboardEvents.KeyboardWillHideEvent, this._resetKeyboardSpace.bind(this));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputs}>
          <AutocompleteTextInput
            dataProvider={this._dataProvider.bind(this)}
            label="Team"
            ref="teamInput"/>
          <AutocompleteTextInput
            dataProvider={this._dataProvider.bind(this)}
            label="Person" />
          <AutocompleteTextInput
            dataProvider={this._dataProvider.bind(this)}
            label="Property"
            placeholder="Optional" />
        </View>

        <AutocompleteTextInput
          dataProvider={this._dataProvider}
          label="Property" />

        <Animated.View
          style={[
            styles.keyboardSpace,
            { height: this.state.keyboardSpace },
          ]} />
      </View>
    );
  }

  state = {
    keyboardSpace: new Animated.Value(0),
  }

  _dataProvider(textValue) {
    const { jwt } = this.props;

    const options = {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    };

    return fetch(`http://${config.DoorbellAPI.DOMAIN}/teams?query=${textValue}`, options)
      .then(res => res.json())
      .then(json => json.data)
      .then(teams => teams.map(team => ({
        accessoryType: 'pin',
        title: team.name,
      })));
  }

  _updateKeyboardSpace(frames) {
    Animated.timing(
      this.state.keyboardSpace,
      {
        duration: 100,
        toValue: frames.end.height,
      },
    ).start();
  }

  _resetKeyboardSpace() {
    Animated.timing(
      this.state.keyboardSpace,
      {
        duration: 100,
        toValue: 0,
      },
    ).start();
  }

  static NavigationBar = NavigationBar;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inputs: {
    flex: 1,
  },

  keyboardSpace: {
    backgroundColor: colors.get('white'),
  },
});

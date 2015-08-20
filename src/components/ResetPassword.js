import React, { Component, PropTypes, Animated, AlertIOS, StatusBarIOS, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import KeyboardEvents, { Emitter as KeyboardEventEmitter } from 'react-native-keyboardevents';
import { colors, fonts } from '../styles';
import { BoxForm } from '../elements';

export default class ResetPassword extends Component {
  static propTypes = {
    hideResetPassword: PropTypes.func.isRequired,
  }

  state = {
    email: null,
    password: null,
    keyboardSpace: new Animated.Value(0),
    keyboardOpen: false,
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
    const { keyboardOpen } = this.state;
    const { hideResetPassword } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={hideResetPassword}
          style={styles.close}>
          <Image source={require('../assets/images/navbar-close-icon.png')} />
        </TouchableOpacity>

        {!keyboardOpen ? (
          <Text style={styles.text}>Enter your email address and new password below.</Text>
        ) : null}

        <BoxForm style={styles.boxForm}>
          <BoxForm.Field isFirst={true}>
            <BoxForm.Label>EMAIL</BoxForm.Label>
            <BoxForm.TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              enablesReturnKeyAutomatically={true}
              keyboardType="email-address"
              onChangeText={value => this._onInputChange('email', value)}
              placeholder="name@example.com"
              placeholderTextColor={colors.get('textSuperUnpronounced')}
              returnKeyType="next"
              />
          </BoxForm.Field>
          <BoxForm.Field>
            <BoxForm.Label>NEW PASSWORD</BoxForm.Label>
            <BoxForm.TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              enablesReturnKeyAutomatically={true}
              onChangeText={value => this._onInputChange('password', value)}
              placeholder="Required"
              placeholderTextColor={colors.get('textSuperUnpronounced')}
              returnKeyType="go"
              secureTextEntry={true}
              />
          </BoxForm.Field>
          <BoxForm.Field isButton={true} isLast={true}>
            <BoxForm.Button>
              RESET PASSWORD
            </BoxForm.Button>
          </BoxForm.Field>
        </BoxForm>

        <Text style={styles.text}>We'll send you an email with a link to activate your new password.</Text>

        <Animated.View style={{ height: this.state.keyboardSpace }}></Animated.View>
      </View>
    );
  }

  _onInputChange(fieldName, value) {
    this.setState(state => state[fieldName] = value);
  }

  _signIn() {
    const { signIn } = this.props;
    const { email, password } = this.state;
    signIn(email, password);
  }

  _updateKeyboardSpace(frames) {
    Animated.spring(
      this.state.keyboardSpace,
      { toValue: frames.end.height }
    ).start();
    this.setState({ keyboardOpen: true });
  }

  _resetKeyboardSpace() {
    Animated.spring(
      this.state.keyboardSpace,
      { toValue: 0 }
    ).start();
    this.setState({ keyboardOpen: false });
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: colors.get('tint'),
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 30,
    position: 'relative',
  },

  close: {
    left: 15,
    position: 'absolute',
    top: 36,
  },

  text: {
    color: colors.get('white'),
    fontFamily: fonts.get('base'),
    fontSize: 18,
    letterSpacing: 1,
    textAlign: 'center',
  },

  boxForm: {
    marginBottom: 40,
    marginTop: 40,
  },
});

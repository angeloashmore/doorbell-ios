import React, { Component, PropTypes, Animated, AlertIOS, StatusBarIOS, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import KeyboardEvents, { Emitter as KeyboardEventEmitter } from 'react-native-keyboardevents';
import { colors, fonts } from '../styles';
import { BoxForm } from '../elements';

export default class ChangePassword extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    success: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    loading: false,
    success: false,
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

  componentWillReceiveProps(nextProps) {
    const { loading, error, success } = nextProps;
    StatusBarIOS.setNetworkActivityIndicatorVisible(loading);
    if (error) AlertIOS.alert('Change Password Error', error.message);
    if (success) {
      AlertIOS.alert('Email sent!', 'Check your email to activate your new password.');
      this.props.closeModal();
    }
  }

  render() {
    const { keyboardOpen } = this.state;
    const { closeModal } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={closeModal}
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
              onSubmitEditing={() => this.refs.newPassword.focus()}
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
              onSubmitEditing={this._changePassword.bind(this)}
              placeholder="Required"
              placeholderTextColor={colors.get('textSuperUnpronounced')}
              ref="newPassword"
              returnKeyType="go"
              secureTextEntry={true}
              />
          </BoxForm.Field>
          <BoxForm.Field isButton={true} isLast={true}>
            <BoxForm.Button
              isDisabled={this.props.loading}
              onPress={this._changePassword.bind(this)}>
              CHANGE PASSWORD
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

  _changePassword() {
    const { changePassword, hideChangePassword } = this.props;
    const { email, password } = this.state;
    changePassword(email, password);
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

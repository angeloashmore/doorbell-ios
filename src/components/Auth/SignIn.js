import React, { Component, PropTypes, Animated, AlertIOS, StatusBarIOS, StyleSheet, Modal, View, Text, TouchableOpacity } from 'react-native';
import KeyboardEvents, { Emitter as KeyboardEventEmitter } from 'react-native-keyboardevents';
import { colors, fonts } from '../../styles';
import { ChangePasswordContainer } from '../../containers/Auth';
import { BoxForm } from '../../elements';

export default class SignIn extends Component {
  static propTypes = {
    signIn: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
  }

  static defaultProps = {
    loading: false,
  }

  componentDidMount() {
    KeyboardEventEmitter.on(KeyboardEvents.KeyboardWillShowEvent, this._updateKeyboardSpace.bind(this));
    KeyboardEventEmitter.on(KeyboardEvents.KeyboardWillHideEvent, this._resetKeyboardSpace.bind(this));
  }

  componentWillReceiveProps(nextProps) {
    const { loading, error } = nextProps;
    StatusBarIOS.setNetworkActivityIndicatorVisible(loading);
    if (error) AlertIOS.alert('Sign In Error', error.message);
  }

  componentWillUnmount() {
    KeyboardEventEmitter.off(KeyboardEvents.KeyboardWillShowEvent, this._updateKeyboardSpace.bind(this));
    KeyboardEventEmitter.off(KeyboardEvents.KeyboardWillHideEvent, this._resetKeyboardSpace.bind(this));
  }

  render() {
    const { showChangePassword } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>DOORBELL</Text>
        <Text style={styles.tagline}>LIGHTNING FAST ANSWERS</Text>

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
              onSubmitEditing={() => this.refs.password.focus()}
              placeholder="name@example.com"
              ref="email"
              returnKeyType="next"
              />
          </BoxForm.Field>
          <BoxForm.Field>
            <BoxForm.Label>PASSWORD</BoxForm.Label>
            <BoxForm.TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              enablesReturnKeyAutomatically={true}
              onChangeText={value => this._onInputChange('password', value)}
              onSubmitEditing={this._signIn.bind(this)}
              placeholder="Required"
              ref="password"
              returnKeyType="go"
              secureTextEntry={true}
              />
          </BoxForm.Field>
          <BoxForm.Field isButton={true} isLast={true}>
            <BoxForm.Button
              isDisabled={this.props.loading}
              onPress={this._signIn.bind(this)}>
              SIGN IN
            </BoxForm.Button>
          </BoxForm.Field>
        </BoxForm>

        <TouchableOpacity onPress={this._toggleShowChangePassword.bind(this)}>
          <Text style={styles.forgotPassword}>FORGOT YOUR PASSWORD?</Text>
        </TouchableOpacity>

        <Modal animated={true} visible={showChangePassword}>
          <ChangePasswordContainer closeModal={this._toggleShowChangePassword.bind(this)} />
        </Modal>

        <Animated.View style={{ height: this.state.keyboardSpace }}></Animated.View>
      </View>
    );
  }

  state = {
    email: null,
    password: null,
    showChangePassword: false,
    keyboardSpace: new Animated.Value(0),
  }

  _onInputChange(fieldName, value) {
    this.setState(state => state[fieldName] = value);
  }

  _signIn() {
    const { signIn } = this.props;
    const { email, password } = this.state;
    signIn(email, password);
  }

  _toggleShowChangePassword() {
    const { showChangePassword } = this.state;
    this.setState({ showChangePassword: !showChangePassword });
  }

  _updateKeyboardSpace(frames) {
    Animated.spring(
      this.state.keyboardSpace,
      { toValue: frames.end.height }
    ).start();
  }

  _resetKeyboardSpace() {
    Animated.spring(
      this.state.keyboardSpace,
      { toValue: 0 }
    ).start();
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: colors.get('tint'),
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 30,
    paddingRight: 30,
    paddingBottom: 30,
    paddingLeft: 30,
  },

  logo: {
    color: colors.get('white'),
    fontFamily: fonts.get('base'),
    fontSize: 36,
    letterSpacing: 1.8,
    marginBottom: 5,
    textAlign: 'center',
  },

  tagline: {
    color: colors.get('tintAlt'),
    fontFamily: fonts.get('base'),
    fontSize: 18,
    letterSpacing: 1.5,
    textAlign: 'center',
  },

  forgotPassword: {
    color: colors.get('tintAlt'),
    fontFamily: fonts.get('base'),
    fontSize: 14,
    letterSpacing: 1,
    textAlign: 'center',
  },

  boxForm: {
    marginBottom: 40,
    marginTop: 40,
  },
});

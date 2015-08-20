import React, { Component, PropTypes, AlertIOS, StatusBarIOS, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../styles';
import { BoxForm } from '../elements';

export default class SignIn extends Component {
  static propTypes = {
    signIn: PropTypes.func.isRequired,
    signingIn: PropTypes.bool.isRequired,
    error: PropTypes.object,
  }

  static defaultProps = {
    signingIn: false,
  }

  state = {
    email: null,
    password: null,
  }

  componentWillReceiveProps(nextProps) {
    const { signingIn, error } = nextProps;
    StatusBarIOS.setNetworkActivityIndicatorVisible(signingIn);
    if (error) AlertIOS.alert('Sign In Error', error.message);
  }

  render() {
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
              placeholder="name@example.com"
              placeholderTextColor={colors.get('textSuperUnpronounced')}
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
              placeholder="Required"
              placeholderTextColor={colors.get('textSuperUnpronounced')}
              returnKeyType="go"
              secureTextEntry={true}
              />
          </BoxForm.Field>
          <BoxForm.Field isButton={true} isLast={true}>
            <BoxForm.Button
              isDisabled={this.props.signingIn}
              onPress={this._signIn.bind(this)}>
              SIGN IN
            </BoxForm.Button>
          </BoxForm.Field>
        </BoxForm>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>FORGOT YOUR PASSWORD?</Text>
        </TouchableOpacity>
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
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: colors.get('tint'),
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 30,
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

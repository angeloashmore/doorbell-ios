import React, { Component, PropTypes, AlertIOS, StatusBarIOS, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import NavigationBar from 'react-native-navbar';
import { colors, fonts } from '../styles';
import { BoxForm } from '../elements';

export default class ResetPassword extends Component {
  static propTypes = {
    hideResetPassword: PropTypes.func.isRequired,
  }

  state = {
    email: null,
    password: null,
  }

  render() {
    const { hideResetPassword } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={hideResetPassword}
          style={styles.close}>
          <Text>Close</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Enter your email address and new password below.</Text>
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

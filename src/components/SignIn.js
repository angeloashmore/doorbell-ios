import React, { Component, PropTypes, StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

export default class SignIn extends Component {
  static propTypes = {
    signIn: PropTypes.func.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
          clearButtonMode="while-editing"
          placeholder="Email"
          returnKeyType="next"
          onChangeText={value => this._onInputChange('email', value)}
          style={styles.input}
          />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
          clearButtonMode="while-editing"
          placeholder="Password"
          returnKeyType="go"
          onChangeText={value => this._onInputChange('password', value)}
          secureTextEntry={true}
          style={styles.input}
          />
        <TouchableHighlight onPress={this._signIn.bind(this)}>
          <Text>Sign In</Text>
        </TouchableHighlight>
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
    flex: 1,
    padding: 30,
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 30,
    padding: 5,
    width: 100,
  },
});

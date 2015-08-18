import React, { Component, PropTypes, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class SignIn extends Component {
  static propTypes = {
    signIn: PropTypes.func.isRequired,
  }

  render() {
    const { signIn } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={signIn}>
          <Text>Render the sign in form here</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

import React, { Component, PropTypes, StyleSheet, TextInput } from 'react-native';
import { colors, fonts } from '../../styles';

export default class BoxFormTextInput extends Component {
  render() {
    return (
      <TextInput
        style={[
          styles.textInput,
          this.props.style
        ]}
        {...this.props}
        />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    color: colors.get('text'),
    flex: 1,
    fontFamily: fonts.get('base'),
    fontSize: 20,
    height: 24,
  },
});

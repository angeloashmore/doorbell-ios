import React, { StyleSheet, TextInput } from 'react-native';
import { colors, fonts } from '../../styles';

export default class BoxFormTextInput extends TextInput {
  render() {
    return (
      <TextInput
        style={[
          styles.textInput,
          this.props.clearButtonMode && this.props.clearButtonMode !== 'never' && styles.textInputWithClearButton,
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

  textInputWithClearButton: {
    marginRight: -10,
  },
});

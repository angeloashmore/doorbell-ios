import React, { Component, PropTypes, StyleSheet, View, Text, TextInput } from 'react-native';
import { colors, fonts } from '../../styles';

export default class AutocompleteTextInputInput extends Component {
  static propTypes = {
    onChangeText: PropTypes.func.isRequired,
  }

  render() {
    const { onChangeText } = this.props;

    return (
      <TextInput
        clearButtonMode="while-editing"
        placeholderTextColor={colors.get('textSuperUnpronounced')}
        onChangeText={onChangeText}
        style={styles.input} />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    color: colors.get('text'),
    flex: 1,
    fontFamily: fonts.get('base'),
    fontSize: 16,
    height: 19,
    letterSpacing: 1,
    marginRight: -5,
  },
});

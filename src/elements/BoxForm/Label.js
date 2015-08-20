import React, { Component, PropTypes, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../styles';

export default class BoxFormLabel extends Component {
  render() {
    return (
      <Text
        style={[
          styles.label,
          this.props.style
        ]}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    color: colors.get('textUnpronounced'),
    fontFamily: fonts.get('base'),
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: 5,
  },
});

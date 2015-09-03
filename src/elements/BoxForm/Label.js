import React, { Component, PropTypes, StyleSheet, Text } from 'react-native';
import { colors, fonts } from '../../styles';

export default class BoxFormLabel extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.number,
  }

  render() {
    return (
      <Text
        style={[
          styles.label,
          this.props.style,
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

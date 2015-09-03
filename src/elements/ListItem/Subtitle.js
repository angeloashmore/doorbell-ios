import React, { Component, PropTypes, StyleSheet, Text } from 'react-native';
import { colors, fonts } from '../../styles';

export default class Subtitle extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.number,
  }

  render() {
    return (
      <Text
        style={[
          styles.subtitle,
          this.props.style,
        ]}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  subtitle: {
    color: colors.get('textUnpronounced'),
    fontFamily: fonts.get('base'),
    fontSize: 16,
  },
});

import React, { Component, PropTypes, StyleSheet, Text } from 'react-native';
import { colors, fonts } from '../../styles';

export default class Subtitle extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <Text style={styles.subtitle}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  subtitle: {
    color: colors.get('textUnpronounced'),
    fontFamily: fonts.get('base'),
    fontSize: 14,
    marginTop: 3,
  },
});

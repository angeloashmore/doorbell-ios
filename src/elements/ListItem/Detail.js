import React, { Component, PropTypes, StyleSheet, Text } from 'react-native';
import { colors, fonts } from '../../styles';

export default class Title extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.number,
  }

  render() {
    return (
      <Text
        style={[
          styles.detail,
          this.props.style,
        ]}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  detail: {
    color: colors.get('textUnpronounced'),
    fontFamily: fonts.get('base'),
    fontSize: 16,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

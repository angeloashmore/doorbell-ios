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
          styles.title,
          this.props.style,
        ]}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: colors.get('text'),
    fontFamily: fonts.get('base'),
    fontSize: 16,
    letterSpacing: 1,
  },
});

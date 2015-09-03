import React, { Component, PropTypes, StyleSheet, Text } from 'react-native';
import { colors, fonts } from '../../styles';

export default class Title extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
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
    fontSize: 18,
    letterSpacing: 1,
  },
});

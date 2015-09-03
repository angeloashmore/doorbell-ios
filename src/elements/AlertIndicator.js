import React, { Component, StyleSheet, View, Text } from 'react-native';
import { colors, fonts } from '../styles';

export default class AlertIndicator extends Component {
  static propTypes: {
    children: PropTypes.string,
    style: PropTypes.object,
  }

  render() {
    return (
      <View
        style={[
          styles.alertIndicator,
          this.props.style,
        ]}>
        <View style={styles.dot} />
        {this.props.children ? (
          <Text style={styles.text}>{this.props.children}</Text>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  alertIndicator: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  dot: {
    backgroundColor: colors.get('alert'),
    borderRadius: 7,
    height: 14,
    width: 14,
  },

  text: {
    color: colors.get('alert'),
    fontFamily: fonts.get('base'),
    fontSize: 16,
    marginLeft: 5,
  },
});

import React, { Component, PropTypes, StyleSheet, View, Text } from 'react-native';
import { colors, fonts } from '../styles';
import Dot from './Dot';

export default class AlertIndicator extends Component {
  static propTypes = {
    children: PropTypes.string,
    style: PropTypes.number,
  }

  render() {
    return (
      <View
        style={[
          styles.alertIndicator,
          this.props.style,
        ]}>
        <Dot
          color={colors.get('alert')}
          diameter={14} />

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

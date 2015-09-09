import React, { Component, PropTypes, StyleSheet, View, ListView, Text, TouchableOpacity, Image } from 'react-native';
import { colors, fonts } from '../styles';
import { Dot } from '../elements';

export default class ObjectInfo extends Component {
  static propTypes = {
    accessoryType: PropTypes.oneOf(['person', 'property']),
    title: PropTypes.string.isRequired,
    style: PropTypes.number,
    subtitle: PropTypes.string,
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          this.props.style,
        ]}>
        {this._renderAccessory()}
        <Text style={styles.title}>{this.props.title}</Text>
        {this._renderSubtitle()}
      </View>
    );
  }

  _renderAccessory() {
    const { accessoryType } = this.props;
    if (!accessoryType) return;

    const icon = require('../assets/images/icon-pin-mini.png');
    const color = colors.get('green');

    return (
      <Dot
        color={color}
        diameter={20}
        style={styles.accessory}>
        <Image source={icon} />
      </Dot>
    );
  }

  _renderSubtitle() {
    const { subtitle } = this.props;
    if (!subtitle) return;
    return <Text style={styles.subtitle}>{subtitle}</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
  },

  accessory: {
    marginRight: 10,
  },

  title: {
    color: colors.get('text'),
    fontFamily: fonts.get('base'),
    fontSize: 16,
  },

  subtitle: {
    color: colors.get('textUnpronounced'),
    fontFamily: fonts.get('base'),
    fontSize: 16,
    marginLeft: 10,
  },
});

import React, { Component, PropTypes, StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { colors, fonts } from '../../styles';

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    icon: PropTypes.number,
    iconPosition: PropTypes.oneOf(['before', 'after']),
    navigator: PropTypes.object,
    noIcon: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    position: PropTypes.oneOf(['left', 'right']),
    style: PropTypes.number,
  }

  static defaultProps = {
    iconPosition: 'before',
    noIcon: false,
    onPress: navigator => navigator.pop(),
    position: 'left',
  }

  render() {
    const { icon, iconPosition, navigator, noIcon, onPress, position } = this.props;

    const content = [
      (!noIcon && <Image source={icon} />),
      <Text style={styles.text}>{this.props.children}</Text>,
    ];
    if (iconPosition === 'after') content.reverse();

    return (
      <TouchableOpacity onPress={() => onPress(navigator)}>
        <View
          style={[
            styles.button,
            styles[position],
            this.props.style,
          ]}>
          {content}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    bottom: 0,
    flexDirection: 'row',
    height: 49,
    position: 'absolute',
    paddingLeft: 13,
    paddingRight: 13,
  },

  left: {
    left: 0,
  },

  right: {
    right: 0,
  },

  text: {
    color: colors.get('white'),
    fontFamily: fonts.get('base'),
    fontSize: 18,
    letterSpacing: 1,
    paddingLeft: 5,
    paddingRight: 5,
  },
});

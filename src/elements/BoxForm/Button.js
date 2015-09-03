import React, { Component, PropTypes, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../styles';

export default class BoxFormButton extends Component {
  static propTypes = {
    children: PropTypes.node,
    isDisabled: PropTypes.bool.isRequired,
    style: PropTypes.number,
  }

  static defaultProps = {
    isDisabled: false,
  }

  render() {
    const { isDisabled } = this.props;
    const ProperComponent = isDisabled ? View : TouchableOpacity;

    return (
      <ProperComponent
        style={[
          styles.button,
          this.props.style,
        ]}
        {...this.props}>
        <Text
          style={[
            styles.text,
            isDisabled && styles.disabled,
          ]}>
          {this.props.children}
        </Text>
      </ProperComponent>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.get('transparent'),
    padding: 15,
  },

  text: {
    color: colors.get('tint'),
    fontFamily: fonts.get('base'),
    fontSize: 18,
    letterSpacing: 1.5,
    textAlign: 'center',
  },

  disabled: {
    color: colors.get('textUnpronounced'),
  },
});

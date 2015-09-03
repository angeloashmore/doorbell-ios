import React, { Component, PropTypes, StyleSheet, View, Text } from 'react-native';
import color from 'color';
import { fonts } from '../styles';

export default class Tag extends Component {
  static propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    style: PropTypes.number,
  }

  render() {
    return (
      <View style={[
        styles.tag,
        { backgroundColor: this.props.color },
        this.props.style,
      ]}>
        <Text
          style={[
            styles.text,
            this._textColor(),
          ]}>
          {this.props.children}
        </Text>
      </View>
    );
  }

  _textColor() {
    return {
      color: color(this.props.color).darken(0.6).rgbString(),
    };
  }
}

const styles = StyleSheet.create({
  tag: {
    alignSelf: 'flex-start',
    borderRadius: 4,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
  },

  text: {
    flex: 0,
    fontFamily: fonts.get('base'),
    fontSize: 10,
    letterSpacing: 1,
  },
});

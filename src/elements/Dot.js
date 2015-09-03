import React, { Component, PropTypes, StyleSheet, View } from 'react-native';
import { colors } from '../styles';

export default class Dot extends Component {
  static propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    diameter: PropTypes.number,
    style: PropTypes.number,
  }

  static defaultProps = {
    color: colors.get('black'),
  }

  render() {
    return (
      <View
        style={[
          this._styles().dot,
          this.props.style,
        ]}>
        {this.props.children}
      </View>
    );
  }

  _styles() {
    const { color, diameter } = this.props;
    const radius = diameter / 2;

    const styles = StyleSheet.create({
      dot: {
        alignItems: 'center',
        backgroundColor: color,
        borderRadius: radius,
        justifyContent: 'center',
        height: diameter,
        width: diameter,
      },
    });

    return styles;
  }
}

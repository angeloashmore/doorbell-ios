import React, { Component, PropTypes, StyleSheet, View, Text, Image } from 'react-native';
import { colors, fonts } from '../styles';

export default class NoObjects extends Component {
  static propTypes = {
    children: PropTypes.string,
    icon: PropTypes.number,
    title: PropTypes.string.isRequired,
    style: PropTypes.number,
  }

  static defaultProps = {
    title: 'Empty',
  }

  render() {
    const { icon, title } = this.props;

    return (
      <View style={[
        styles.noObjects,
        this.props.style,
      ]}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.title}>{title.toUpperCase()}</Text>
        {this._renderChildren()}
      </View>
    );
  }

  _renderChildren() {
    if (!this.props.children) return null;

    return (
      <Text style={styles.text}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  noObjects: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },

  icon: {
    marginBottom: 25,
  },

  title: {
    color: colors.get('textUnpronounced'),
    fontFamily: fonts.get('base'),
    fontSize: 20,
    letterSpacing: 1,
    marginBottom: 15,
  },

  text: {
    color: colors.get('textUnpronounced'),
    fontFamily: fonts.get('base'),
    fontSize: 16,
    letterSpacing: 1,
    textAlign: 'center',
  },
});

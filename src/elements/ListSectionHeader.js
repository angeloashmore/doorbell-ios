import React, { Component, PropTypes, StyleSheet, View, Text } from 'react-native';
import { colors, fonts } from '../styles';

export default class ListSectionHeader extends Component {
  static propTypes = {
    children: PropTypes.string,
    style: PropTypes.object,
  }

  render() {
    let { children } = this.props;
    children = children.toUpperCase();

    return (
      <View
        style={[
          styles.listSectionHeader,
          this.props.style,
        ]}>
        <Text style={styles.text}>{children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listSectionHeader: {
    backgroundColor: colors.get('background'),
    paddingBottom: 7,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 7,
    shadowColor: colors.get('black'),
    shadowOffset: { height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 0.5,
  },

  text: {
    color: colors.get('textSlightlyUnpronounced'),
    fontFamily: fonts.get('base'),
    fontSize: 10,
    letterSpacing: 1,
  },
});

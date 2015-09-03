import React, { Component, PropTypes, StyleSheet, View, Text } from 'react-native';
import { fonts } from '../styles';

export default class Tag extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <View style={styles.tag}>
        <Text style={styles.text}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tag: {
    alignSelf: 'flex-start',
    borderRadius: 4,
    backgroundColor: '#A6E864',
    marginBottom: 5,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
  },

  text: {
    color: 'rgba(0, 0, 0, 0.5)',
    flex: 0,
    fontFamily: fonts.get('base'),
    fontSize: 10,
    letterSpacing: 1,
  },
});

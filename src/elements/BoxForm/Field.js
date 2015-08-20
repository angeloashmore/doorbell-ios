import React, { Component, PropTypes, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../styles';

export default class BoxFormField extends Component {
  static propTypes = {
    isButton: PropTypes.bool.isRequired,
    isFirst: PropTypes.bool.isRequired,
    isLast: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    isButton: false,
    isFirst: false,
    isLast: false,
  }

  render() {
    return (
      <View
        {...this.props}
        style={[
          styles.field,
          this.props.isButton && styles.button,
          this.props.isFirst && styles.first,
          this.props.isLast && styles.last,
          this.props.style,
        ]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  field: {
    backgroundColor: colors.get('white'),
    borderBottomWidth: 1,
    borderColor: colors.get('divider'),
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 15,
    paddingLeft: 20,
  },

  button: {
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
  },

  first: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  last: {
    borderBottomWidth: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});

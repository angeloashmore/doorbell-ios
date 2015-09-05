import React, { Component, PropTypes, StyleSheet, View, Text, TextInput } from 'react-native';
import { colors, fonts } from '../../styles';

export default class Input extends Component {
  static propTypes = {
    clearButtonMode: PropTypes.string,
    children: PropTypes.node,
    label: PropTypes.string,
    style: PropTypes.number,
  }

  render() {
    const { label } = this.props;

    return (
      <View
        style={[
          styles.container,
          this.props.style,
        ]}>
        {!!label && (
          <Text style={styles.label}>
            {this.props.label.toUpperCase()}:
          </Text>
        )}

        <TextInput
          placeholderTextColor={colors.get('textSuperUnpronounced')}
          {...this.props}
          style={[
            styles.input,
            this.props.clearButtonMode && this.props.clearButtonMode !== 'never' && styles.inputWithClearButton,
            this.props.style,
          ]}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.get('white'),
    flexDirection: 'row',
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    position: 'relative',
    shadowColor: colors.get('black'),
    shadowOffset: { height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 0.5,
  },

  input: {
    color: colors.get('text'),
    flex: 1,
    fontFamily: fonts.get('base'),
    fontSize: 16,
    height: 19,
    letterSpacing: 1,
  },

  inputWithClearButton: {
    marginRight: -5,
  },

  label: {
    color: colors.get('textUnpronounced'),
    fontFamily: fonts.get('base'),
    fontSize: 16,
    marginRight: 10,
  },
});

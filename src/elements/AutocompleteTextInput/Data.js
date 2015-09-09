import React, { Component, PropTypes, StyleSheet, View, ListView, Text, TouchableOpacity, Image } from 'react-native';
import { colors, fonts } from '../../styles';
import { ObjectInfo } from '../../elements';

export default class AutocompleteTextInputData extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    onClear: PropTypes.func.isRequired,
  }

  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <ObjectInfo
          accessoryType={data.accessoryType}
          title={data.title}
          subtitle={data.subtitle} />

        <TouchableOpacity
          activeOpacity={0.3}
          onPress={this.props.onClear}
          style={styles.clear}>
          <Image source={require('../../assets/images/clear.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },

  clear: {
    paddingLeft: 15,
  },
});

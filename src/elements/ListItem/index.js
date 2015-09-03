import React, { Component, PropTypes, StyleSheet, TouchableHighlight, View, Image } from 'react-native';
import { colors } from '../../styles';
import Title from './Title';
import Subtitle from './Subtitle';

export default class ListItem extends Component {
  static propTypes = {
    accessory: PropTypes.oneOf(['disclosure']),
    children: PropTypes.node,
    onPress: PropTypes.func,
  }

  render() {
    const { onPress } = this.props;

    return (
      <TouchableHighlight onPress={onPress}>
        <View style={styles.row}>
          <View style={styles.body}>
            {this.props.children}
          </View>
          {this._renderAccessory()}
        </View>
      </TouchableHighlight>
    );
  }

  static Title = Title;
  static Subtitle = Subtitle;

  _renderAccessory() {
    const { accessory } = this.props;

    let element;
    switch (accessory) {
    case 'disclosure':
      element = <Image source={require('../../assets/images/listview-accessory-disclosure.png')} />;
      break;

    default: break;
    }

    return (
      <View style={styles.accessory}>
        {element}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    backgroundColor: colors.get('white'),
    flexDirection: 'row',
    shadowColor: colors.get('black'),
    shadowOffset: { height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 0.5,
    padding: 15,
  },

  body: {
    flex: 1,
  },

  accessory: {
    marginLeft: 15,
  },
});

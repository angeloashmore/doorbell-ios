import React, { Component, PropTypes, StyleSheet, TouchableHighlight, View, Image } from 'react-native';
import { colors } from '../../styles';
import Detail from './Detail';
import Subtitle from './Subtitle';
import Title from './Title';

export default class ListItem extends Component {
  static propTypes = {
    leftAccessory: PropTypes.node,
    rightAccessory: PropTypes.oneOf(['disclosure']),
    children: PropTypes.node,
    onPress: PropTypes.func,
    style: PropTypes.object,
  }

  render() {
    const { onPress } = this.props;

    return (
      <TouchableHighlight onPress={onPress}>
        <View
          style={[
            styles.row,
            this.props.style,
          ]}>
          {this._renderLeftAccessory()}
          <View style={styles.body}>
            {this.props.children}
          </View>
          {this._renderRightAccessory()}
        </View>
      </TouchableHighlight>
    );
  }

  static Detail = Detail;
  static Subtitle = Subtitle;
  static Title = Title;

  _renderLeftAccessory() {
    const { leftAccessory } = this.props;

    if (!leftAccessory) return null;

    return (
      <View style={styles.leftAccessory}>
        {leftAccessory}
      </View>
    );
  }

  _renderRightAccessory() {
    const { rightAccessory } = this.props;

    let element;
    switch (rightAccessory) {
    case 'disclosure':
      element = <Image source={require('../../assets/images/listview-accessory-disclosure.png')} />;
      break;

    default: return null;
    }

    return (
      <View style={styles.rightAccessory}>
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
    position: 'relative',
  },

  body: {
    flex: 1,
  },

  leftAccessory: {
    marginRight: 11,
  },

  rightAccessory: {
    marginLeft: 15,
  },
});

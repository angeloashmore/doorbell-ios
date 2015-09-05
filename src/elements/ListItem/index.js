import React, { Component, PropTypes, StyleSheet, TouchableHighlight, View, Image } from 'react-native';
import { colors } from '../../styles';
import Detail from './Detail';
import Subtitle from './Subtitle';
import TextInput from './TextInput';
import Title from './Title';

export default class ListItem extends Component {
  static propTypes = {
    leftAccessory: PropTypes.node,
    rightAccessory: PropTypes.oneOf(['disclosure']),
    children: PropTypes.node,
    noPadding: PropTypes.bool,
    onPress: PropTypes.func,
    style: PropTypes.object,
  }

  static defaultProps = {
    noPadding: false,
  }

  render() {
    const { noPadding, onPress } = this.props;

    return (
      <TouchableHighlight onPress={onPress}>
        <View
          style={[
            styles.listItem,
            !noPadding && styles.padding,
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
  static TextInput = TextInput;
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
  listItem: {
    alignItems: 'center',
    backgroundColor: colors.get('white'),
    flexDirection: 'row',
    shadowColor: colors.get('black'),
    shadowOffset: { height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 0.5,
    position: 'relative',
  },

  padding: {
    padding: 15,
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

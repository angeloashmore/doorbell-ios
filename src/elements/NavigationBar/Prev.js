import React, { Component, PropTypes, StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { colors, fonts } from '../../styles';

export default class Prev extends Component {
  static propTypes = {
    children: PropTypes.node,
    image: PropTypes.number,
    navigator: PropTypes.object.isRequired,
    noImage: PropTypes.bool,
    style: PropTypes.number,
  }

  static defaultProps = {
    image: require('../../assets/images/navigator-prev.png'),
    noImage: false,
  }

  render() {
    const { image, noImage } = this.props;

    return (
      <TouchableOpacity onPress={this._handlePress.bind(this)}>
        <View
          style={[
            styles.prev,
            this.props.style,
          ]}>
          {!noImage && <Image source={image} />}
          {this.props.children && <Text style={styles.text}>{this.props.children}</Text>}
        </View>
      </TouchableOpacity>
    );
  }

  _handlePress() {
    const { navigator } = this.props;
    navigator.pop();
  }
}

const styles = StyleSheet.create({
  prev: {
    alignItems: 'center',
    bottom: 0,
    flexDirection: 'row',
    height: 65,
    position: 'absolute',
    paddingLeft: 13,
    paddingRight: 15,
  },

  text: {
    color: colors.get('white'),
    fontFamily: fonts.get('base'),
    fontSize: 20,
    letterSpacing: 1,
    marginLeft: 5,
  },
});

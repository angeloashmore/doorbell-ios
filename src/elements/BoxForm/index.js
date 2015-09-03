import React, { Component, PropTypes, View } from 'react-native';
import Button from './Button';
import Field from './Field';
import Label from './Label';
import TextInput from './TextInput';

export default class BoxForm extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <View {...this.props}>
        {this.props.children}
      </View>
    );
  }

  static Button = Button;
  static Field = Field;
  static Label = Label;
  static TextInput = TextInput;
}

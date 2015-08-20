import React, { Component, View } from 'react-native';
import Button from './Button';
import Field from './Field';
import Label from './Label';
import TextInput from './TextInput';

export default class BoxForm extends Component {
  static Button = Button;
  static Field = Field;
  static Label = Label;
  static TextInput = TextInput;

  render() {
    return (
      <View {...this.props}>
        {this.props.children}
      </View>
    );
  }
}

import React, { Component, PropTypes, StyleSheet, View, ListView, Text } from 'react-native';
import { colors, fonts } from '../../styles';
import AutocompleteTextInputData from './Data';
import AutocompleteTextInputInput from './Input';
import AutocompleteTextInputListView from './ListView';

export default class AutocompleteTextInput extends Component {
  static propTypes = {
    dataProvider: PropTypes.func.isRequired,
    label: PropTypes.string,
    maxNumberOfRows: PropTypes.number.isRequired,
    placeholder: PropTypes.string,
    style: PropTypes.number,
  }

  static defaultProps = {
    maxNumberOfRows: 4,
  }

  render() {
    return (
      <View style={this.props.style}>
        <View style={styles.inputAndDataContainer}>
          {this._renderLabel()}
          {!this.state.selectedData ? this._renderInput() : this._renderData()}
        </View>

        {this._renderListView()}
      </View>
    );
  }

  state = {
    dataSource: this._createEmptyDataSource(),
    selectedData: null,
  }

  _renderLabel() {
    const { label } = this.props;

    if (!label) return;

    return (
      <Text style={styles.label}>
        {label.toUpperCase()}:
      </Text>
    );
  }

  _renderInput() {
    return (
      <AutocompleteTextInputInput
        onChangeText={this._onChangeText.bind(this)}
        placeholder={this.props.placeholder} />
    );
  }

  _renderData() {
    return (
      <AutocompleteTextInputData
        data={this.state.selectedData}
        onClear={this._onClear.bind(this)} />
    );
  }

  _renderListView() {
    const { dataSource } = this.state;

    if (dataSource._cachedRowCount < 1) return;

    return (
      <AutocompleteTextInputListView
        dataSource={this.state.dataSource}
        maxNumberOfRows={this.props.maxNumberOfRows}
        onSelect={this._onSelect.bind(this)} />
    );
  }

  _onChangeText(text) {
    this._generateDataSource(text);
  }

  _onSelect(selectedData) {
    const dataSource = this._createEmptyDataSource();
    this.setState({ dataSource, selectedData });
  }

  _onClear() {
    this.setState({ selectedData: null });
  }

  _createEmptyDataSource() {
    return new ListView.DataSource({
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
  }

  _generateDataSource(inputValue) {
    const { dataProvider } = this.props;
    const emptyDataSource = this._createEmptyDataSource();

    dataProvider(inputValue)
      .then(rows => emptyDataSource.cloneWithRows(rows))
      .then(dataSource => this.setState({ dataSource }));
  }
}

const styles = StyleSheet.create({
  inputAndDataContainer: {
    backgroundColor: colors.get('white'),
    flexDirection: 'row',
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    shadowColor: colors.get('black'),
    shadowOffset: { height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 0.5,
  },

  label: {
    color: colors.get('textUnpronounced'),
    fontFamily: fonts.get('base'),
    fontSize: 16,
    marginRight: 10,
  },
});

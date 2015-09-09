import React, { Component, PropTypes, StyleSheet, TouchableHighlight, View, ListView, Text } from 'react-native';
import { ListItem, ObjectInfo } from '../../elements';
import { colors } from '../../styles';

export default class AutocompleteTextInputListView extends Component {
  static propTypes = {
    maxNumberOfRows: PropTypes.number.isRequired,
    onSelect: PropTypes.func.isRequired,
    dataSource: PropTypes.instanceOf(ListView.DataSource).isRequired,
  }

  componentWillReceiveProps(nextProps) {
    const { height, lockedHeight } = this.state;
    const { dataSource, maxNumberOfRows } = nextProps;
    const rowCount = dataSource._cachedRowCount;

    if (rowCount <= maxNumberOfRows) {
      this.setState({ lockHeight: false, lockedHeight: null });
    } else {
      this.setState({ lockHeight: true, lockedHeight: height });
    }
  }

  render() {
    return (
      <ListView
        alwaysBounceVertical={false}
        automaticallyAdjustContentInsets={false}
        dataSource={this.props.dataSource}
        onLayout={this._onLayout.bind(this)}
        renderRow={this._renderRow.bind(this)}
        style={[
          styles.listView,
          this.state.lockHeight && { height: this.state.height },
        ]} />
    );
  }

  state = {
    height: null,
    lockedHeight: null,
    lockHeight: false,
  }

  _onLayout(event) {
    const { height } = event.nativeEvent.layout;
    this.setState({ height });
  }

  _renderRow(rowData) {
    return (
      <ListItem onPress={() => this.props.onSelect(rowData)}>
        <ObjectInfo
          accessoryType={rowData.accessoryType}
          subtitle={rowData.subtitle}
          title={rowData.title} />
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  listView: {
    backgroundColor: colors.get('white'),
  },
});

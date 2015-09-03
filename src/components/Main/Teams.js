import React, { Component, PropTypes, StyleSheet, ListView } from 'react-native';
import { ListItem, Tag } from '../../elements';

export default class Teams extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource.cloneWithRows(['COLDWELL BANKER PACIFIC PROPERTIES — HONOLULU', 'DOORBELL'])}
        renderRow={this._renderRow.bind(this)}
        style={styles.list}
        />
    );
  }

  state = {
    dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
  }

  _renderRow(rowData) {
    return (
      <ListItem
        accessory="disclosure"
        onPress={this._handlePress.bind(this)}>
        <Tag>REAL ESTATE AGENT</Tag>
        <ListItem.Title>{rowData}</ListItem.Title>
        <ListItem.Subtitle>8 properties</ListItem.Subtitle>
      </ListItem>
    );
  }

  _handlePress() {
    const { navigator, route } = this.props;
    navigator.push({
      component: Teams,
      navigationBar: route.navigationBar,
    });
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

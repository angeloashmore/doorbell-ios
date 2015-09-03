import React, { Component, PropTypes, StyleSheet, ListView } from 'react-native';
import { colors } from '../../styles';
import { AlertIndicator, ListItem, NavigationBar, Tag } from '../../elements';
import Properties from './Properties';

export default class Teams extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    };
  }

  render() {
    return (
      <ListView
        automaticallyAdjustContentInsets={false}
        dataSource={this.state.dataSource.cloneWithRows(['COLDWELL BANKER PACIFIC PROPERTIES — HONOLULU', 'DOORBELL'])}
        renderRow={this._renderRow.bind(this)}
        style={styles.list}
        />
    );
  }

  _renderRow(rowData) {
    return (
      <ListItem
        accessory="disclosure"
        onPress={this._handlePress.bind(this)}>
        <Tag
          color={colors.get('green')}
          style={styles.tag}>
          REAL ESTATE AGENT
        </Tag>

        <ListItem.Title style={styles.title}>
          {rowData}
        </ListItem.Title>

        <AlertIndicator style={styles.alertIndicator}>
          3 new messages
        </AlertIndicator>

        <ListItem.Subtitle>
          8 properties
        </ListItem.Subtitle>
      </ListItem>
    );
  }

  _handlePress() {
    const { navigator } = this.props;
    navigator.push({
      component: Properties,
      navigationBar: Properties.NavigationBar,
    });
  }

  static NavigationBar = <NavigationBar title="Teams" />;
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },

  tag: {
    marginBottom: 8,
  },

  title: {
    marginBottom: 5,
  },

  alertIndicator: {
    marginBottom: 5,
  },
});

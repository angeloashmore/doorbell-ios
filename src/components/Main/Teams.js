import React, { Component, PropTypes, StyleSheet, ListView } from 'react-native';
import { colors } from '../../styles';
import { AlertIndicator, ListItem, Tag } from '../../elements';
import { TeamsNavigationBar as NavigationBar } from './NavigationBars';
import Properties from './Properties';

export default class Teams extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
  }

  render() {
    return (
      <ListView
        automaticallyAdjustContentInsets={false}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow.bind(this)}
        style={styles.list}
        />
    );
  }

  state = {
    dataSource: this._setupDataSource(),
  }

  _setupDataSource() {
    let dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    dataSource = dataSource.cloneWithRows([
      {
        name: 'Coldwell Banker Pacific Properties – Honolulu',
        properties_qty: 8,
        new_messages_qty: 3,
        title: 'Real Estate Agent',
      },
      {
        name: 'Doorbell',
        properties_qty: 3,
        new_messages_qty: 0,
        title: 'Owner',
      },
    ]);

    return dataSource;
  }

  _renderRow(rowData) {
    const hasNewMessages = rowData.new_messages_qty > 0;

    return (
      <ListItem
        rightAccessory="disclosure"
        onPress={() => this._handlePress(rowData)}>
        <ListItem.Title style={styles.title}>
          {rowData.name.toUpperCase()}
        </ListItem.Title>

        <Tag
          color={colors.get('green')}
          style={styles.tag}>
          {rowData.title.toUpperCase()}
        </Tag>

        {hasNewMessages ? (
          <AlertIndicator style={styles.alertIndicator}>
            {rowData.new_messages_qty} new messages
          </AlertIndicator>
        ) : null}

        <ListItem.Subtitle>
          {rowData.properties_qty} properties
        </ListItem.Subtitle>
      </ListItem>
    );
  }

  _handlePress(rowData) {
    const { navigator } = this.props;
    navigator.push({
      component: Properties,
      navigationBar: <Properties.NavigationBar />,
      team: rowData,
    });
  }

  static NavigationBar = NavigationBar;
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },

  tag: {
    marginBottom: 8,
  },

  title: {
    marginBottom: 8,
  },

  alertIndicator: {
    marginBottom: 8,
  },
});

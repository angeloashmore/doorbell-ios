import React, { Component, PropTypes, StyleSheet, ListView, View, Image } from 'react-native';
import { colors } from '../../styles';
import { AlertIndicator, Dot, ListItem, ListSectionHeader, NavigationBar } from '../../elements';
import Chats from './Chats';

export default class Properties extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
  }

  render() {
    return (
      <ListView
        automaticallyAdjustContentInsets={false}
        dataSource={this.state.dataSource}
        renderSectionHeader={this._renderSectionHeader}
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
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    dataSource = dataSource.cloneWithRowsAndSections({
      'Prospectives': {
        0: {
          name: 'Prospectives',
          active_chats_qty: 3,
          new_messages_qty: 1,
          last_message_timestamp: '12:04 PM',
        },
      },
      'Properties': {
        0: {
          name: '680 Ala Moana Blvd',
          active_chats_qty: 3,
          new_messages_qty: 2,
          last_message_timestamp: '9:32 AM',
        },
        1: {
          name: '3439 Ala Hapuu St.',
          active_chats_qty: 3,
          new_messages_qty: 0,
          last_message_timestamp: '6:41 AM',
        },
      },
    });

    return dataSource;
  }

  _renderSectionHeader(sectionData, sectionId) {
    switch (sectionId) {
    case 'Prospectives':
      return null;

    default:
      return <ListSectionHeader>{sectionId}</ListSectionHeader>;
    }
  }

  _renderRow(rowData, sectionId) {
    let icon;
    let iconColor;
    switch (sectionId) {
    case 'Prospectives':
      icon = <Image source={require('../../assets/images/icon-eye.png')} />;
      iconColor = colors.get('yellow');
      break;

    default:
      icon = <Image source={require('../../assets/images/icon-pin.png')} />;
      iconColor = colors.get('green');
      break;
    }

    const leftAccessory = <Dot color={iconColor} diameter={45}>{icon}</Dot>;

    const hasNewMessages = rowData.new_messages_qty > 0;

    return (
      <ListItem
        leftAccessory={leftAccessory}
        onPress={() => this._handlePress(rowData)}>
        <View style={styles.title}>
          {hasNewMessages ? <AlertIndicator style={styles.alertIndicator} /> : null}
          <ListItem.Title style={hasNewMessages && styles.titleAlert}>
            {rowData.name.toUpperCase()}
          </ListItem.Title>
        </View>

        <ListItem.Subtitle>
          {hasNewMessages ? (
            `${rowData.new_messages_qty} new messages`
          ) : (
            `${rowData.active_chats_qty} active chats`
          )}
        </ListItem.Subtitle>

        <ListItem.Detail>
          {rowData.last_message_timestamp}
        </ListItem.Detail>
      </ListItem>
    );
  }

  _handlePress(rowData) {
    const { navigator } = this.props;
    navigator.push({
      component: Chats,
      navigationBar: <Chats.NavigationBar title={rowData.name} />,
    });
  }

  static NavigationBar = class _NavigationBar extends NavigationBar {
    render() {
      return (
        <NavigationBar
          title="Properties"
          {...this.props}
          customPrev={this._renderPrev()}
          customNext={this._renderNext()} />
      );
    }

    _renderPrev() {
      const icon = require('../../assets/images/navbar-teams-icon.png');
      return <NavigationBar.Button icon={icon} />;
    }

    _renderNext() {
      const icon = require('../../assets/images/navbar-plus-icon.png');
      return (
        <NavigationBar.Button
          icon={icon}
          iconPosition="after"
          onPress={() => null}
          position="right" />
      );
    }
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },

  title: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 3,
  },

  titleAlert: {
    color: colors.get('alert'),
  },

  alertIndicator: {
    marginRight: 6,
  },
});

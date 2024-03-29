import React, { Component, PropTypes, StyleSheet, ListView, Image } from 'react-native';
import { colors } from '../../styles';
import { Dot, ListItem, ListSectionHeader } from '../../elements';
import Teams from './Teams';
import { ChatsNavigationBar as NavigationBar } from './NavigationBars';

export default class Chats extends Component {
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
      'Active': {
        0: {
          title: 'Prospectives',
          subtitle: '1 new message from Jasmine',
          time: '12:04 PM',
        },
      },
      'Archived': {
        0: {
          title: '680 Ala Moana Blvd.',
          subtitle: '2 new messages from Aaron and 1 other',
          time: '9:32 AM',
        },
        1: {
          title: '3439 Ala Hapuu St.',
          subtitle: '3 active chats',
          time: '6:41 AM',
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
    let { title } = rowData;
    const { subtitle, time } = rowData;

    title = title.toUpperCase();

    const icon = <Image source={require('../../assets/images/icon-person.png')} />;
    let color;
    switch (sectionId) {
    default:
      color = colors.get('blue');
      break;
    }

    const leftAccessory = <Dot color={color} diameter={45}>{icon}</Dot>;

    return (
      <ListItem
        leftAccessory={leftAccessory}
        onPress={this._handlePress.bind(this)}>
        <ListItem.Title style={styles.title}>
          {title}
        </ListItem.Title>

        <ListItem.Subtitle>
          {subtitle}
        </ListItem.Subtitle>

        <ListItem.Detail>
          {time}
        </ListItem.Detail>
      </ListItem>
    );
  }

  _handlePress(rowData) {
    const { navigator } = this.props;
    navigator.push({
      component: Teams,
      navigationBar: Teams.NavigationBar,
      chat: rowData,
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
    marginBottom: 3,
  },

  alertIndicator: {
    marginBottom: 5,
  },
});

import React, { Component, PropTypes, StyleSheet, ListView } from 'react-native';
import { colors } from '../../styles';
import { Dot, ListItem, ListSectionHeader, NavigationBar } from '../../elements';
import Teams from './Teams';

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
          title: 'Prospectives',
          subtitle: '1 new message from Jasmine',
        },
      },
      'Properties': {
        0: {
          title: '680 Ala Moana Blvd.',
          subtitle: '2 new messages from Aaron and 1 other',
        },
        1: {
          title: '3439 Ala Hapuu St.',
          subtitle: '3 active chats',
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

  _renderRow(rowData) {
    let { title } = rowData;
    const { subtitle } = rowData;

    title = title.toUpperCase();

    const leftAccessory = (
      <Dot color={colors.get('yellow')} diameter={45} />
    );

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
      </ListItem>
    );
  }

  _handlePress() {
    const { navigator } = this.props;
    navigator.push({
      component: Teams,
      navigationBar: Teams.NavigationBar,
    });
  }

  static NavigationBar = <NavigationBar title="Properties" />;
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

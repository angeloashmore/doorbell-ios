import React, { Component, PropTypes, StyleSheet, ListView, View, Image } from 'react-native';
import { colors } from '../../styles';
import { Dot, ListItem, TextInput } from '../../elements';
import NavigationBar from './NavigationBars/NewChatNavigationBar';

export default class NewChat extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize="words"
          autoCorrect={false}
          clearButtonMode="while-editing"
          label="Team"
          placeholder="Team Name" />
        <TextInput
          autoCapitalize="words"
          autoCorrect={false}
          clearButtonMode="while-editing"
          label="Person"
          placeholder="Name or Email" />
        <TextInput
          autoCapitalize="words"
          autoCorrect={false}
          clearButtonMode="while-editing"
          label="Property"
          placeholder="Optional" />
        <ListView
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          style={styles.list}
          />
      </View>
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
        street: '3439 Ala Hapuu St.',
        city: 'Honolulu',
        state: 'HI',
        country: 'United States',
        zipCode: '96818',
      },
      {
        street: '3439 Ala Hapuu Ave.',
        city: 'Honolulu',
        state: 'HI',
        country: 'United States',
        zipCode: '96818',
      },
    ]);

    return dataSource;
  }

  _renderRow(rowData) {
    const icon = <Image source={require('../../assets/images/icon-person-mini.png')} />;
    const iconColor = colors.get('blue');
    const leftAccessory = <Dot color={iconColor} diameter={21}>{icon}</Dot>;

    return (
      <ListItem
        leftAccessory={leftAccessory}
        onPress={() => this._handlePress(rowData)}
        style={styles.listItem}>
        <View style={styles.listItemBody}>
          <ListItem.Title style={styles.title}>
            {rowData.street}
          </ListItem.Title>

          <ListItem.Subtitle style={styles.subtitle}>
            {rowData.city}, {rowData.state}, {rowData.zipCode}
          </ListItem.Subtitle>
        </View>
      </ListItem>
    );
  }

  _handlePress() {
    const { navigator } = this.props;
    navigator.pop();
  }

  static NavigationBar = NavigationBar;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  list: {
    backgroundColor: colors.get('transparent'),
    flex: 1,
  },

  listItemBody: {
    flexDirection: 'row',
  },

  title: {
    alignSelf: 'flex-start',
    marginRight: 8,
    letterSpacing: 0,
  },

  subtitle: {
    alignSelf: 'flex-start',
  },
});

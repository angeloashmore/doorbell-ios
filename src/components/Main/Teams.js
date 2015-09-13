import React, { Component, PropTypes, StyleSheet, View, ListView, Image, Text, ActivityIndicatorIOS } from 'react-native';
import { List } from 'immutable';
import { colors, fonts } from '../../styles';
import { TeamsNavigationBar as NavigationBar } from './NavigationBars';
import { AlertIndicator, ListItem, NoObjects, Tag } from '../../elements';
import Properties from './Properties';

export default class Teams extends Component {
  static propTypes = {
    error: PropTypes.object,
    fetchTeamsForCurrentUser: PropTypes.func.isRequired,
    jwt: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    teams: PropTypes.array.isRequired,
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
  }

  static defaultProps = {
    loading: false,
    teams: [],
  }

  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
    };
  }

  componentDidMount() {
    const { fetchTeamsForCurrentUser, jwt } = this.props;
    fetchTeamsForCurrentUser(jwt);
  }

  componentWillReceiveProps(nextProps) {
    const { teams } = nextProps;
    const { dataSource } = this.state;
    this.setState({ dataSource: dataSource.cloneWithRows(teams) });
  }

  render() {
    const { loading, teams } = this.props;

    return (
      <View style={styles.container}>
        {loading ? this._renderLoading() : null}
        {!loading && teams.length < 1 ? this._renderNoObjects() : null}
        {!loading && teams.length > 0 ? this._renderListView() : null}
      </View>
    );
  }

  _renderLoading() {
    return (
      <View style={styles.loading}>
        <ActivityIndicatorIOS size="large" />
      </View>
    );
  }

  _renderNoObjects() {
    return (
      <NoObjects
        icon={require('../../assets/images/icon-person-large.png')}
        title="No Teams">
        Teams are managed on the Doorbell web app. Create a team or ask your manager to add you.
      </NoObjects>
    );
  }

  _renderListView() {
    const { dataSource } = this.state;

    return (
      <ListView
        automaticallyAdjustContentInsets={false}
        dataSource={dataSource}
        renderRow={this._renderRow.bind(this)}
        style={styles.list}
        />
    );
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
      </ListItem>
    );

    // return (
    //   <ListItem
    //     rightAccessory="disclosure"
    //     onPress={() => this._handlePress(rowData)}>
    //     <ListItem.Title style={styles.title}>
    //       {rowData.name.toUpperCase()}
    //     </ListItem.Title>
    //
    //     <Tag
    //       color={colors.get('green')}
    //       style={styles.tag}>
    //       {rowData.title.toUpperCase()}
    //     </Tag>
    //
    //     {hasNewMessages ? (
    //       <AlertIndicator style={styles.alertIndicator}>
    //         {rowData.new_messages_qty} new messages
    //       </AlertIndicator>
    //     ) : null}
    //
    //     <ListItem.Subtitle>
    //       {rowData.properties_qty} properties
    //     </ListItem.Subtitle>
    //   </ListItem>
    // );
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
  container: {
    flex: 1,
  },

  loading: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

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

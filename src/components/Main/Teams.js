import React, { Component, PropTypes, StyleSheet, ListView, View, TouchableHighlight, Image, Text } from 'react-native';
import { colors, fonts } from '../../styles';

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
      <TouchableHighlight onPress={this._handlePress.bind(this)}>
        <View style={styles.row}>
          <View style={styles.rowBody}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>REAL ESTATE AGENT</Text>
            </View>
            <Text style={styles.rowTitle}>{rowData}</Text>
            <Text style={styles.rowSubtitle}>8 properties</Text>
          </View>
          <Image
            source={require('../../assets/images/listview-row-arrow.png')}
            style={styles.rowArrow}
            />
        </View>
      </TouchableHighlight>
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

  row: {
    alignItems: 'center',
    backgroundColor: colors.get('white'),
    flexDirection: 'row',
    shadowColor: colors.get('black'),
    shadowOffset: { height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 0.5,
    padding: 15,
  },

  rowBody: {
    flex: 1,
  },

  rowTitle: {
    color: colors.get('text'),
    fontFamily: fonts.get('base'),
    fontSize: 16,
    letterSpacing: 1,
  },

  rowSubtitle: {
    color: colors.get('textUnpronounced'),
    fontFamily: fonts.get('base'),
    fontSize: 14,
    marginTop: 3,
  },

  tag: {
    alignSelf: 'flex-start',
    borderRadius: 4,
    backgroundColor: '#A6E864',
    marginBottom: 5,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
  },

  tagText: {
    color: 'rgba(0, 0, 0, 0.5)',
    flex: 0,
    fontFamily: fonts.get('base'),
    fontSize: 10,
    letterSpacing: 1,
  },

  rowArrow: {
    marginLeft: 15,
  },
});

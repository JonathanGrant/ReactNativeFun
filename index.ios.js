/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import ViewContainer from './app/components/ViewContainer.js'
import StatusBarBackground from './app/components/StatusBarBackground.js'
import Icon from 'react-native-vector-icons/FontAwesome'

const people = [
  {firstName: "Jonathan", lastName: "Grant", id: 1},
  {firstName: "Gary", lastName: "Vee", id: 2},
  {firstName: "Mike", lastName: "Swift", id: 3},
]

class ReactNative extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      peopleWithDataSource: ds.cloneWithRows(people)
    }
  }

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <ListView
        dataSource={this.state.peopleWithDataSource}
        renderRow={(person) => {return this._renderPersonRow(person) }}>
        </ListView>
      </ViewContainer>
    );
  }

  _renderPersonRow(person) {
    return (
      <View style={styles.personRow}>
        <Text style={styles.personName}>{person.firstName}</Text>
        <Icon name="chevron-right" />
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  personRow: {
    flexDirection: "row",
    justifyContent: 'center',
  },
  personName: {

  }
});

AppRegistry.registerComponent('ReactNative', () => ReactNative);

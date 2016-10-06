/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Linking,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import ViewContainer from './app/components/ViewContainer.js'
import StatusBarBackground from './app/components/StatusBarBackground.js'
import Icon from 'react-native-vector-icons/FontAwesome'

class ReactNative extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
    }
  }

  render() {
    return (
      <ViewContainer style={styles.container}>
        <StatusBarBackground />
        <Icon name="instagram" style={styles.oAuthIcon} onPress={() => Linking.openURL('http://instagram.com')}/>
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  oAuthIcon: {
    fontSize: 80,
  }
});

AppRegistry.registerComponent('ReactNative', () => ReactNative);

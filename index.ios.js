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
import IgOAuthContainer from './app/oauth/instagram.js'

const oauthBtns = [
  IgOAuthContainer,
]

class ReactNative extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      oauthBtns: ds.cloneWithRows(oauthBtns)
    }
  }

  render() {
    return (
      <ViewContainer style={styles.container}>
        <StatusBarBackground />
        <IgOAuthContainer />
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
});

AppRegistry.registerComponent('ReactNative', () => ReactNative);

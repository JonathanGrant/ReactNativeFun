'use strict'

import React, { Component } from 'react'
import {Linking, View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class IgOAuthContainer extends Component {
	render() {
		return (
			<View style={styles.viewContainer}>
				<Icon name="instagram" onPress={() => Linking.openURL('http://instagram.com')}/>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	viewContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "stretch"
	}
})

module.exports = IgOAuthContainer

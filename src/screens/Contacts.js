import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SingleContact from '../components/SingleContact';

function Contacts(props) {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator>
			<Stack.Screen name="SingleContact" component={SingleContact} />
		</Stack.Navigator>
	);
}
export default Contacts;

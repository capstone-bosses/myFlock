import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import MapView from '../screens/MapView';

const StackNavigator = (props) => {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			options={{ gestureEnabled: false }}
		>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Map" component={MapView} />
		</Stack.Navigator>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default StackNavigator;

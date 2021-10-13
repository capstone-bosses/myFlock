import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import AddInterest from '../screens/AddInterest';
import LoginScreen from '../screens/Login';
import EditProfileScreen from '../screens/EditProfileScreen';
import ProfileView from '../screens/ProfileView';
import RegisterScreen from '../screens/RegisterScreen';

//whatever you do, MAKE SURE YOU ADD A PERIOD IN BETWEEN TAB.NAVIGATOR ELSE IT WILL NOT COMPILE
//YOU WILL SPEND HOURS WITH A BLACK SCREEN AND NO CONSOLE.LOG NOT KNOWING WHAT HAPPENED
function TabNavigator({}) {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator>
			<Tab.Screen name="StackNavigator" component={StackNavigator} />
			<Tab.Screen name="Add Interest" component={AddInterest} />
			<Tab.Screen name="Login" component={LoginScreen} />
			<Tab.Screen name="Register" component={RegisterScreen} />
			<Tab.Screen name="Edit Profile" component={EditProfileScreen} />
			<Tab.Screen name="Profile View" component={ProfileView} />
		</Tab.Navigator>
	);
}

export default TabNavigator;

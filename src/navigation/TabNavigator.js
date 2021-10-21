/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {Icon} from 'react-native-elements'
import ProfileView from '../screens/ProfileView';
import ChatScreen from '../screens/ChatScreen';
import NestViewScreen from '../screens/NestViewScreen';
import AddChatScreen from '../screens/AddChat';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Map from '../screens/Map';
import NearbyUsers from '../maps/util/NearbyUsers';

function TabNavigator(props) {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator
			screenOptions={
				{headerShown: false }, 
				({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === 'Profile') {
						iconName = focused ? 'user-alt' : 'user-alt';
					} else if (route.name === 'Map') {
						iconName = focused ? 'map-marker-alt' : 'map-marker-alt';
					} else if (route.name === 'Messages') {
						iconName = focused ? 'feather-alt' : 'feather-alt';
					}
					else if (route.name === 'Chat') {
						iconName = focused ? 'comment' : 'comment';
					}
					return <Icon type="ionicon" name={iconName} size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: '#1F142E',
				inactiveTintColor: '#bf90b1',
			}}
		>
			<Tab.Screen
				name="Profile"
				component={ProfileView}
				/* options={{
					title: 'Profile',
					headerRight: () => (
						<Button
							onPress={() => navigation.navigate('Settings')}
							title="Settings"
							color="#1F142E"
						/>
					),
				}} */
			/>
			<Tab.Screen name="Map" component={Map} /> 
			<Tab.Screen name="Nest View" component={NestViewScreen} />
			{/* <Tab.Screen name="Chat" component={AddChatScreen} /> */}
			<Tab.Screen name="ChatScreen" component={ChatScreen} />

		</Tab.Navigator>
	);
}

export default TabNavigator;

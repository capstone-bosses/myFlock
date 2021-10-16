import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import Onboarding from './src/components/Onboarding';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import Login from './src/screens/Login';
import RegisterScreen from './src/screens/RegisterScreen';
import ChatScreen from './src/screens/ChatScreen';
import AddInterest from './src/screens/AddInterest';

const Stack = createStackNavigator();

function App() {
	const isLoggedIn = true;

	return (
		<>
			<StatusBar style="dark" />
			<NavigationContainer>
				{isLoggedIn ? (
					<>
						<DrawerNavigator />
					</>
				) : (
					<Stack.Navigator headerMode="none">
						<>
							<Stack.Screen name="LogIn" component={Login} />
							<Stack.Screen name="Onboard" component={Onboarding} />
							<Stack.Screen name="Register" component={RegisterScreen} />
							<Stack.Screen name="Drawer" component={DrawerNavigator} />
							
						</>
					</Stack.Navigator>
				)}
			</NavigationContainer>
		</>
	);
}

export default App;

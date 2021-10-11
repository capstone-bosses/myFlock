import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

//the idea is you are going to have 1 component for Contact
//then under Contacts component you are going to map out each element in your seed array of contacts
//contactsArray.map.forEach((contact) => {
//<Stack.Screen> name="SingleContact" component={SingleContact} /></Stack.Screen>

const SingleContact = (props) => {
	return (
		<View style={styles.container}>
			<Text>My Contact</Text>
		</View>
	);
};

export default SingleContact;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

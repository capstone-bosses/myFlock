import React from 'react';
import MapView, /* {PROVIDER_GOOGLE} */ from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

class MapView extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<MapView
/*             provider={PROVIDER_GOOGLE}
 */				style={{ flex: 1 }}
				region={{
					latitude: 42.882004,
					longitude: 74.582748,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
				showsUserLocation={true}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
});

export default MapView;

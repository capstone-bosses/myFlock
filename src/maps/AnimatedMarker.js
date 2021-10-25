/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState, useLayoutEffect} from 'react';
import MapView, {Marker, Callout, Circle} from 'react-native-maps';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const AnimatedMarker = (props) => {
  const mapView = React.createRef();
  const radiusMiles = 3; //miles
  const radiusMeters = radiusMiles * 1609.34;

  //props
  const {ListOfUsersObject} = props;
  const {latitude, longitude} = props;
  const {zoomRadius} = props;

  const {width, height} = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = Platform.OS === global.platformIOS ? 1.5 : 0.5;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const initialMapRegion = {
    latitude: 47.7330388,
    longitude: -122.40371218,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };
  const [mapRegion, setmapRegion] = useState(initialMapRegion);
	const [currentZoomRadius, setCurrentZoomRadius] = useState(zoomRadius);
  // const [mapRegion, setmapRegion] = useState({
  // 	latitude: latitude,
  // 	longitude: longitude,
  // 	latitudeDelta: LATITUDE_DELTA,
  // 	longitudeDelta: LONGITUDE_DELTA,
  // });

  useEffect(() => {
    setmapRegion((prevMapRegion) => {
      return {
        ...prevMapRegion,
        latitude: latitude,
        longitude: longitude,
      };
    });
		setCurrentZoomRadius(zoomRadius)
		alert(zoomRadius);
  }, [latitude, longitude, zoomRadius]);

  //we can return this function inside the return() because it returns a component
  const mapMarkers = () => {
    //received array of nearby user locations from getNearbyLocations

    return ListOfUsersObject.map((element, idx) => (
      <Marker
        key={idx}
        pinColor="#bf90b1"
        coordinate={{
          latitude: element.latitude,
          longitude: element.longitude,
        }}
        title={element.name}
      >
        <Callout>
          <View>
            <View style={styles.bubble}>
              <Image
                style={styles.image}
                source={require('../../assets/user_profile_photos/PearlMann.png')}
              />
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>
    ));
  };
  //if you are not rendering a component in your function, then you must place it inside of useEffect
  //you cannot place it inside the return()
  useEffect(() => {
    mapView.current.animateToRegion(
      {
        latitude: mapRegion.latitude,
        longitude: mapRegion.longitude,
        latitudeDelta: LATITUDE_DELTA * Number(radiusMiles / currentZoomRadius),
        longitudeDelta: LONGITUDE_DELTA * Number(radiusMiles / currentZoomRadius),
      },
      2000
    );
  }, [mapRegion, currentZoomRadius]);

  console.log('>>>> AnimatedMarker object', ListOfUsersObject.length);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.container}
        initialRegion={mapRegion}
        showsUserLocation={true}
        onRegionChangeComplete={(region) => setmapRegion(region)}
        ref={mapView}
      >
        <Circle
          center={{latitude: mapRegion.latitude, longitude: mapRegion.longitude}}
          radius={radiusMeters} //in meters
          strokeColor="#4F6D7A"
          strokeWidth={2}
          fillColor={'rgba(230,238,255,0.75)'}
          onRegionChangeComplete={(region) => setmapRegion(region)}
        />
        {ListOfUsersObject ? mapMarkers() : <Text>Loading Users...</Text>}
      </MapView>
    </View>
  );
};

export default AnimatedMarker;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
    // marginBottom: -15
  },
});

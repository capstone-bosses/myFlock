import React, { useState, useEffect } from 'react';
import {View, Text, Button} from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';


const UserLocation = () => {

  return (

    <>
    <View style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
      <Button title="Get Location"/>
        </View>
        <Text>Latitude: </Text>
        <Text>Longitude: </Text>
        <View style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        <Button title="Send Location"/>
    </View>
    </>
);
}



export default UserLocation;



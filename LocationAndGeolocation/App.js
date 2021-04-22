import React, { useState } from 'react';
import Geolocation from 'react-native-geolocation-service';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {View, StyleSheet, Button} from 'react-native';

const App = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const local = () =>{
    Geolocation.watchPosition(
      position => {
        setLatitude(position.coords.latitude),
        setLongitude(position.coords.longitude)
      },
      error => {
        console.log(error);
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 200,
        maximumAge: 0,
        distanceFilter: 0
      }
    );
  }
  return (
    <>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}>
          </Marker>
        </MapView>
        <Button title="Your location" onPress={local} />
      </View>
    </>
  );
};

export default App;
const styles = StyleSheet.create({
  mapContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

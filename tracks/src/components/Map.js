import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 22.5726 + i * 0.001,
      longitude: 88.3639 + i * 0.001
    });
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 22.5726,
        longitude: 88.3639,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 500
  }
});

export default Map;

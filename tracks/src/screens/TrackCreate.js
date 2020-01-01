import "../mockLocation";
import React, { useContext, useCallback } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Button } from "react-native-elements";
import Map from "../components/Map";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

const TrackCreate = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation
  } = useContext(LocationContext);
  const callback = useCallback(
    location => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h1>TrackCreate</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreate);

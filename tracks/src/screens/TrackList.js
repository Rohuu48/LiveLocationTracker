import React from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";

const TrackList = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 50 }}>TrackList</Text>
      <Button
        title="Go to TrackDetails screen"
        onPress={() => navigation.navigate("TrackDetails")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackList;

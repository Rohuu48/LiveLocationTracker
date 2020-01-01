import React, { useContext } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity
} from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";
import SafeAreaView from "react-native-safe-area-view";
const TrackList = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  console.log(state);
  return (
    <>
      <SafeAreaView forceInset={{ top: "always" }}>
        <NavigationEvents onWillFocus={fetchTracks} />
        <Text style={{ fontSize: 50 }}>TrackList</Text>
        <FlatList
          data={state}
          keyExtractor={item => item._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("TrackDetails", { _id: item._id });
                }}
              >
                <ListItem chevron title={item.name} />
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackList;

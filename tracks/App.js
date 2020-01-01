import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Account from "./src/screens/Account";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import TrackCreate from "./src/screens/TrackCreate";
import TrackDetails from "./src/screens/TrackDetails";
import TrackList from "./src/screens/TrackList";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
import { setNavigator } from "./src/navigationRef";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { FontAwesome } from "@expo/vector-icons";
const switchNavigator = createSwitchNavigator(
  {
    ResolveAuthScreen: ResolveAuthScreen,
    loginFlow: createStackNavigator({
      SignUp: {
        screen: SignUp,
        navigationOptions: () => ({
          header: null
        })
      },
      SignIn: {
        screen: SignIn,
        navigationOptions: () => ({
          header: null
        })
      }
    }),
    mainFlow: createBottomTabNavigator({
      trackListFlow: createStackNavigator({
        TrackList: {
          screen: TrackList,
          navigationOptions: () => ({
            headerTitle: "Tracks",
            headerTitleStyle: {
              marginLeft: 150,
              fontWeight: "bold",
              fontSize: 16
            }
          })
        },
        TrackDetails: TrackDetails
      }),

      TrackCreate: {
        screen: TrackCreate,
        navigationOptions: () => ({
          tabBarIcon: <FontAwesome name="plus" size={20} />
        })
      },
      Account: Account
    })
  },
  {
    initialRouteName: "ResolveAuthScreen",
    headerMode: "none"
  }
);

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App
            ref={navigator => {
              setNavigator(navigator);
            }}
          />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};

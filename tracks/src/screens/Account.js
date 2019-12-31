import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import Space from "../components/Space";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-navigation";

const Account = ({ navigation }) => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 50 }}>Account</Text>
      <Space>
        <Button title="Sign Out" onPress={signout} />
      </Space>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Account;

import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AuthForm from "../components/AuthForm";
import Space from "../components/Space";
import { Text, Input, Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";

const SignIn = ({ navigation }) => {
  const { state, signin, clearErrMsg } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrMsg} />
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Space>
          <Text style={styles.link}>Don't have an account? Sign Up</Text>
        </Space>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100
  },
  link: {
    color: "blue"
  }
});

export default SignIn;

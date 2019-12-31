import React, { useContext, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Space from "../components/Space";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import { NavigationEvents } from "react-navigation";

const SignUp = ({ navigation }) => {
  const { state, signup, clearErrMsg, tryLocalSignIn } = useContext(
    AuthContext
  );

  useEffect(() => {
    tryLocalSignIn();
  }, []);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrMsg} />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />

      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Space>
          <Text style={styles.link}>Already have an account? Sign In</Text>
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

export default SignUp;

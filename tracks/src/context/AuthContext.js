import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";
const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_err_msg":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignIn = dispatch => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("TrackList");
  } else {
    navigate("loginFlow");
  }
};

const clearErrMsg = dispatch => () => {
  dispatch({ type: "clear_err_msg" });
};

const signup = dispatch => async ({ email, password }) => {
  try {
    //api request to signup
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    //modify state after authentication
    dispatch({ type: "signup", payload: response.data.token });

    navigate("TrackList");
  } catch (error) {
    //failing to sign up
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up"
    });
  }
};

const signin = dispatch => async ({ email, password }) => {
  //api request to signin
  try {
    const response = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    navigate("TrackList");
  } catch (error) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign in"
    });
  }
  //modify state after authentication
  //failing to sign up
};

const signout = dispatch => async () => {
  //api request
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("loginFlow");
  //failing to sign up
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout, clearErrMsg, tryLocalSignIn },
  { token: null, errorMessage: "" }
);

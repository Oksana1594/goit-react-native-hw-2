import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";

export default function App() {
  return (
    <>
      <LoginScreen />
      {/* <RegistrationScreen /> */}
      <StatusBar style="auto" />
    </>
  );
}

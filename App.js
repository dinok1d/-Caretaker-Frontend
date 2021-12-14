// import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox, StyleSheet } from "react-native";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./components/navigation/Navigation";

// import OnBoardingUi from "./components/landingpage/OnBoardingUi";

export default function App() {
  LogBox.ignoreAllLogs(); // this removes all warnings
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

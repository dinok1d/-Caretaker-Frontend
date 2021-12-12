// import { StatusBar } from "expo-status-bar";
// import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./components/navigation/Navigation";

// import OnBoardingUi from "./components/landingpage/OnBoardingUi";

export default function App() {
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

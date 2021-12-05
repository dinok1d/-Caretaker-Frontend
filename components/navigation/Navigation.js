import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Home";
import CareTakerSignin from "../signin/CareTakerSignin";
import GuardianSignup from "../signup/GuardianSignup";
const Navigation = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="CareTakerSignin"
      screenOptions={{
        headerStyle: { backgroundColor: "#ECE450" },
        headerTintColor: "white",
        headerTitleStyle: { fontStyle: "italic", fontWeight: "bold" },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: { backgroundColor: "#ECE450" },
        }}
      />

      <Screen
        name="CareTakerSignin"
        component={CareTakerSignin}
        options={{
          headerStyle: { backgroundColor: "#ECE450" },
        }}
      />
      <Screen
        name="GuardianSignup"
        component={GuardianSignup}
        options={{
          headerStyle: { backgroundColor: "#ECE450" },
          
        }}
      />
    </Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});

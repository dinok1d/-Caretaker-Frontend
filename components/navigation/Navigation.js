import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Home";
import GuardianSignin from "../signin/GuardianSignin";

const Navigation = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="GuardianSignin"
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
        name="GuardianSignin"
        component={GuardianSignin}
        options={{
          headerStyle: { backgroundColor: "#ECE450" },
        }}
      />
    </Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});

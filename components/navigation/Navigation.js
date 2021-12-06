import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ListOfAppointments from "../listofappointment/ListOfAppointments";
import AppointmentDetail from "../listofappointment/AppointmentDetail";
import ListOfCareTakers from "../listofcaretaker/ListOfCareTakers";
import Home from "../Home";

import GuardianSignin from "../signin/GuardianSignin";

import CareTakerSignin from "../signin/CareTakerSignin";
import GuardianSignup from "../signup/GuardianSignup";
import CareTakerDetail from "../listofcaretaker/CareTakerDetail";

const Navigation = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="CaretakerList"
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

      <Screen name="AppointmentList" component={ListOfAppointments} />
      <Screen name="AppointmentDetail" component={AppointmentDetail} />
      <Screen name="CaretakerList" component={ListOfCareTakers} />
      <Screen name="CaretakerDetail" component={CareTakerDetail} />
    </Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});

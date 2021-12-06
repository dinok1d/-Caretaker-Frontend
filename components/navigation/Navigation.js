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

const Navigation = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator

      initialRouteName="CaretakerList"

      screenOptions={{
        headerStyle: { backgroundColor: "#fadd97" },
        headerTintColor: "white",
        headerTitleStyle: { fontStyle: "italic", fontWeight: "bold" },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: { backgroundColor: "#fadd97" },
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
          headerStyle: { backgroundColor: "#fadd97" },
        }}
      />
      <Screen
        name="GuardianSignup"
        component={GuardianSignup}
        options={{

          headerStyle: { backgroundColor: "#ECE450" },
        }}
      />

      <Screen name="CaretakerList" component={ListOfCareTakers} />

          headerStyle: { backgroundColor: "#fadd97" },
        }}
      />

      <Screen
        name="AppointmentList"
        component={ListOfAppointments}
        options={{
          headerStyle: { backgroundColor: "#fadd97" },
        }}
      />
      <Screen
        name="AppointmentDetail"
        component={AppointmentDetail}
        options={{
          headerStyle: { backgroundColor: "#fadd97" },
        }}
      />
    </Navigator>
  );
};
// "#5ac3dc"
export default Navigation;

const styles = StyleSheet.create({});

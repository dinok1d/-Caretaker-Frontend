import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ListOfAppointments from "../listofappointment/ListOfAppointments";
import AppointmentDetail from "../listofappointment/AppointmentDetail";
import GuardianProfileList from "../profiles/guardian/GuardianProfileList";
import CareTakerProfileList from "../profiles/caretaker/CareTakerProfileList";
import Home from "../Home";

import CareTakerSignin from "../signin/CareTakerSignin";
import GuardianSignup from "../signup/GuardianSignup";
import CareTakerDetail from "../listofcaretaker/CareTakerDetail";
import ListOfCareTakers from "../listofcaretaker/ListOfCareTakers";
import BookingCalender from "../listofcaretaker/BookingCalender";
import BookingTime from "../listofcaretaker/BookingTime";
const Navigation = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="Home"
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
        name="CareTakerSignin"
        component={CareTakerSignin}
        options={{
          headerStyle: { backgroundColor: "#fadd97" },
          headerShown: false,
        }}
      />
      <Screen
        name="GuardianSignup"
        component={GuardianSignup}
        options={{
          headerStyle: { backgroundColor: "#fadd97" },
          headerShown: false,
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
      <Screen
        name="GuardianProfileList"
        component={GuardianProfileList}
        options={{
          headerStyle: { backgroundColor: "#fadd97" },
        }}
      />
      <Screen
        name="CareTakerProfileList"
        component={CareTakerProfileList}
        options={{
          headerStyle: { backgroundColor: "#fadd97" },
        }}
      />
      <Screen
        name="CaretakerList"
        component={ListOfCareTakers}
        options={{
          headerStyle: { backgroundColor: "#fadd97" },
        }}
      />
      <Screen
        name="CaretakerDetail"
        component={CareTakerDetail}
        options={{
          headerStyle: { backgroundColor: "#fadd97" },
        }}
      />
      <Screen
        name="BookingCalender"
        component={BookingCalender}
        options={{
          headerStyle: { backgroundColor: "#8285E0" },
        }}
      />
      <Screen
        name="BookingTime"
        component={BookingTime}
        options={{
          headerStyle: { backgroundColor: "#8285E0" },
        }}
      />
    </Navigator>
  );
};
// "#5ac3dc"
export default Navigation;

const styles = StyleSheet.create({});

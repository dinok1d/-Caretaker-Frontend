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
import { Card } from "native-base";
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
          headerStyle: {
            backgroundColor: "#8285E0",
            borderBottomColor: "#FA2F60",
            borderTopWidth: "20",
            borderTopColor: "#91C8FF",
            shadowColor: "#000",

            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.43,
            shadowRadius: 9.51,

            elevation: 15,
          },
          headerTitleStyle: {
            fontFamily: "KohinoorTelugu-Regular",
          },
          headerBackTitleVisible: false,
          title: "Appointments",
          headerLeft: false,
        }}
      />

      <Screen
        name="AppointmentDetail"
        component={AppointmentDetail}
        options={{
          headerStyle: {
            backgroundColor: "#8285E0",
            borderBottomColor: "#FA2F60",
            borderTopWidth: "20",
            borderTopColor: "#91C8FF",
            shadowColor: "#000",

            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.43,
            shadowRadius: 9.51,

            elevation: 15,
          },
          headerTitleStyle: {
            fontFamily: "KohinoorTelugu-Regular",
          },
          headerBackTitleVisible: false,
          title: "Information",
        }}
      />
      {/* REVIEW: It's not a list, why is the component and screen called list? */}
      <Screen
        name="GuardianProfileList"
        component={GuardianProfileList}
        options={{
          headerStyle: { backgroundColor: "#fadd97" },
        }}
      />
      {/* REVIEW: It's not a list, why is the component and screen called list? */}
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
          headerStyle: {
            backgroundColor: "#8285E0",

            borderBottomColor: "#FA2F60",
            borderTopWidth: "20",
            borderTopColor: "#91C8FF",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.43,
            shadowRadius: 9.51,

            elevation: 15,
          },
          headerTitleStyle: {
            fontFamily: "KohinoorTelugu-Regular",
          },

          headerLeft: false,
          title: "Choose Your Caretaker",
        }}
      />

      <Screen
        name="CaretakerDetail"
        component={CareTakerDetail}
        options={{
          headerStyle: {
            backgroundColor: "#8285E0",
            borderBottomColor: "#FA2F60",
            borderTopWidth: "20",
            borderTopColor: "#91C8FF",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.43,
            shadowRadius: 9.51,

            elevation: 15,
          },
          headerTitleStyle: {
            fontFamily: "KohinoorTelugu-Regular",
          },
          title: "Information",
          headerBackTitleVisible: false,
        }}
      />

      <Screen
        name="BookingCalender"
        component={BookingCalender}
        options={{
          headerStyle: {
            backgroundColor: "#8285E0",
            borderBottomColor: "#FA2F60",
            borderTopWidth: "20",
            borderTopColor: "#91C8FF",
            shadowColor: "#000",

            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.43,
            shadowRadius: 9.51,

            elevation: 15,
          },
          headerTitleStyle: {
            fontFamily: "KohinoorTelugu-Regular",
          },
          headerBackTitleVisible: false,
          title: "Calendar",
        }}
      />

      <Screen
        name="BookingTime"
        component={BookingTime}
        options={{
          headerStyle: {
            backgroundColor: "#8285E0",
            borderBottomColor: "#FA2F60",
            borderTopWidth: "20",
            borderTopColor: "#91C8FF",
            shadowColor: "#000",

            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.43,
            shadowRadius: 9.51,

            elevation: 15,
          },
          headerTitleStyle: {
            fontFamily: "KohinoorTelugu-Regular",
          },
          headerBackTitleVisible: false,
          title: "Booking Times",
        }}
      />
    </Navigator>
  );
};
// "#5ac3dc"
export default Navigation;
// REVIEW: Remove
const styles = StyleSheet.create({});

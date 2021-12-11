import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ListOfAppointments from "../listofappointment/ListOfAppointments";
import AppointmentDetail from "../listofappointment/AppointmentDetail";
import GuardianProfile from "../profiles/guardian/GuardianProfile";
import CareTakerProfile from "../profiles/caretaker/CareTakerProfile";
import Home from "../Home";
import CareTakerSignin from "../signin/CareTakerSignin";
import GuardianSignup from "../signup/GuardianSignup";
import CareTakerDetail from "../listofcaretaker/CareTakerDetail";
import ListOfCareTakers from "../listofcaretaker/ListOfCareTakers";
import BookingCalender from "../listofcaretaker/BookingCalender";
import BookingTime from "../listofcaretaker/BookingTime";
import GuardianProfile from "../profiles/guardian/GuardianProfile";

const Navigation = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    // <>
    <Navigator
      initialRouteName="CareTakerSignin"
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
        options={({ navigation }) => {
          return {
            headerRight: () => <ProfileButton navigation={navigation} />,
          };
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
            borderTopWidth: Platform.OS === "ios" ? 30 : 30,
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
            borderTopWidth: Platform.OS === "ios" ? 30 : 30,
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

      <Screen
        name="GuardianProfile"
        component={GuardianProfile}
        options={{
          headerStyle: { backgroundColor: "#fadd97" },
        }}
      />

      <Screen
        name="CareTakerProfile"
        component={CareTakerProfile}
        options={{
          headerStyle: { backgroundColor: "#fadd97" },
        }}
      />
      <Screen
        name="GuardianProfile"
        component={GuardianProfile}
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
            borderTopWidth: Platform.OS === "ios" ? 30 : 30,
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
            borderTopWidth: Platform.OS === "ios" ? 30 : 30,
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
            borderTopWidth: Platform.OS === "ios" ? 30 : 30,
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
            borderTopWidth: Platform.OS === "ios" ? 30 : 30,
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

    /* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="CareTakerProfile" component={CareTakerProfile} />
      </Drawer.Navigator>
    </> */
  );
};
export default Navigation;

const styles = StyleSheet.create({});

import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ListOfAppointments from "../listofappointment/ListOfAppointments";
import AppointmentDetail from "../listofappointment/AppointmentDetail";

import Home from "../Home";

const Navigation = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="AppointmentList"
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
      <Screen name="AppointmentList" component={ListOfAppointments} />
      <Screen name="AppointmentDetail" component={AppointmentDetail} />
    </Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});

import React from "react";
import { observer } from "mobx-react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import appointStore from "../../Store/AppointmentStore";
import AppointmentItem from "./AppointmentItem";
import careTakerStore from "../../Store/CareTakerStore";
import guardianStore from "../../Store/GuardianStore";

const ListOfAppointments = ({ navigation }) => {
  //--------------------------This is done------------------------------
  // if (careTakerStore.caretaker._id) {
  //   const filteredList = appointStore.appointment
  //     .filter(
  //       (appointment) =>
  //         careTakerStore.caretaker._id === appointment.caretaker.toString()
  //     )
  //     .map((appointment) => (
  //       <AppointmentItem
  //         appointment={appointment}
  //         navigation={navigation}
  //         key={appointment._id}
  //       />
  //     ));
  // } else {
  //   const filteredList = appointStore.appointment
  //     .filter(
  //       (appointment) =>
  //         guardianStore.Guardian._id === appointment.Guardian.toString()
  //     )
  //     .map((appointment) => (
  //       <AppointmentItem
  //         appointment={appointment}
  //         navigation={navigation}
  //         key={appointment._id}
  //       />
  //     ));
  // }
  //---------------------------------------------------------------------------------------------
  //-----------------USE this line of code for testing purposes to show all appointments---
  const appointments = appointStore.appointment.map((appointment) => (
    <AppointmentItem
      appointment={appointment}
      navigation={navigation}
      key={appointment._id}
    />
  ));
  return <View>{appointments}</View>;
  //-------------------------------------------------------------------------
  // return <View>{filteredList}</View>;
};
export default observer(ListOfAppointments);
const styles = StyleSheet.create({});

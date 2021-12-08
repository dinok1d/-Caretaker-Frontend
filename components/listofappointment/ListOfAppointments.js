import React from "react";
import { observer } from "mobx-react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import appointStore from "../../Store/AppointmentStore";
import AppointmentItem from "./AppointmentItem";
import careTakerStore from "../../Store/CareTakerStore";

const ListOfAppointments = ({ navigation }) => {

  const filteredList = appointStore.appointment

    .filter(
      (appointment) =>
        careTakerStore.caretaker._id === appointment.caretaker.toString()
    )

    .map((appointment) => (
      <AppointmentItem
        appointment={appointment}
        navigation={navigation}
        key={appointment._id}
      />
    ));

  //   .filter(
  //     (appointment) =>
  //       GuardianStore.Guardian._id === appointment.Guardian.toString()
  //   )
  // const appointments = appointStore.appointment.map((appointment) => (
  //   <AppointmentItem
  //     appointment={appointment}
  //     navigation={navigation}
  //     key={appointment._id}
  //   />
  // ));
  // return <View>{appointments}</View>;
  return <View>{filteredList}</View>;

};
export default observer(ListOfAppointments);
const styles = StyleSheet.create({});

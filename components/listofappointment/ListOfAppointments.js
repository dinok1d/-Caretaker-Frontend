import React from "react";
import { observer } from "mobx-react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import appointStore from "../../Store/AppointmentStore";
import AppointmentItem from "./AppointmentItem";

const ListOfAppointments = ({ navigation }) => {
  const appointList = appointStore.appointment.map((appointment) => (
    <AppointmentItem
      appointment={appointment}
      navigation={navigation}
      key={appointment._id}
    />
  ));

  return <ScrollView>{appointList}</ScrollView>;
};
export default observer(ListOfAppointments);
const styles = StyleSheet.create({});

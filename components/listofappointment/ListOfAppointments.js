import React from "react";
import { observer } from "mobx-react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import appointStore from "../../Store/AppointmentStore";
import AppointmentItem from "./AppointmentItem";
import careTakerStore from "../../Store/CareTakerStore";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../listofappointment/styles";

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

  return (
    <ScrollView>
      <LinearGradient
        colors={["#C0D6F9", "#B07DF0", "#C0D6F9"]}
        style={styles.background}
      />
      {filteredList}
    </ScrollView>
  );
};
export default observer(ListOfAppointments);

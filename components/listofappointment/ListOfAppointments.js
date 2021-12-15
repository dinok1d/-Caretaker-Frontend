import React from "react";
import { observer } from "mobx-react";
import { ScrollView } from "react-native";
import appointStore from "../../Store/AppointmentStore";
import AppointmentItem from "./AppointmentItem";
import careTakerStore from "../../Store/CareTakerStore";
import guardianStore from "../../Store/GuardianStore";

import { LinearGradient } from "expo-linear-gradient";
import styles from "../listofappointment/styles";

const ListOfAppointments = ({ navigation }) => {
  if (careTakerStore.isLoading) {
    return <Spinner />;
  }
  // console.log("this is caretakeaassar", careTakerStore.caretaker._id);
  // console.log("this is caretaker", guardianStore.guardian._id);

  const filteredList = appointStore.appointment
    .filter(
      (appointment) =>
        careTakerStore.caretaker?._id === appointment.caretaker.toString() ||
        guardianStore.guardian?._id === appointment.guardian.toString()
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

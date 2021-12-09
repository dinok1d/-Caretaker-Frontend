import React from "react";
import { View, Text, ScrollView } from "react-native";
import { observer } from "mobx-react";
import careStore from "../../Store/CareStore";
import CareTakerItem from "./CareTakerItem";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../listofappointment/styles";

const ListOfCareTakers = ({ navigation }) => {
  const caretakerList = careStore.caretakers.map((caretaker) => (
    <CareTakerItem
      caretaker={caretaker}
      navigation={navigation}
      key={caretaker._id}
    />
  ));

  return (
    <ScrollView>
      <LinearGradient
        colors={["#C0D6F9", "#B07DF0", "#C0D6F9"]}
        style={styles.background}
      />
      {caretakerList}
    </ScrollView>
  );
};

export default observer(ListOfCareTakers);

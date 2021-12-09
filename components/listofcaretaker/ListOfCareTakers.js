import React from "react";
import { View, Text, ScrollView } from "react-native";
import { observer } from "mobx-react";
import careStore from "../../Store/CareStore";
import CareTakerItem from "./CareTakerItem";
// REVIEW: Bad naming, good example: CaretakerList
const ListOfCareTakers = ({ navigation }) => {
  const caretakerList = careStore.caretakers.map((caretaker) => (
    <CareTakerItem
      caretaker={caretaker}
      navigation={navigation}
      key={caretaker._id}
    />
  ));

  return <ScrollView>{caretakerList}</ScrollView>;
};

export default observer(ListOfCareTakers);

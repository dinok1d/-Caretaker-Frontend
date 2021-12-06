import React from "react";
import { View, Text, ScrollView } from "react-native";
import { observer } from "mobx-react";
import careStore from "../../Store/CareStore";
import CareTakerItem from "./CareTakerItem";

const ListOfCareTakers = ({ navigation }) => {
  const caretakerList = careStore.caretaker.map((caretaker) => (
    <CareTakerItem
      caretaker={caretaker}
      navigation={navigation}
      key={caretaker._id}
    />
  ));

  return <ScrollView>{caretakerList}</ScrollView>;
};

export default observer(ListOfCareTakers);

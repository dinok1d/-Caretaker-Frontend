import React from "react";
import { View, Text } from "react-native";
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

  return <View>{caretakerList}</View>;
};

export default observer(ListOfCareTakers);

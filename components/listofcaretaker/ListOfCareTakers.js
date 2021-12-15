import React, { useEffect } from "react";
import { ScrollView, BackHandler, Alert } from "react-native";
import { observer } from "mobx-react";
import careStore from "../../Store/CareStore";
import CareTakerItem from "./CareTakerItem";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../listofappointment/styles";
import guardianStore from "../../Store/GuardianStore";
import BottomNav from "../../tesingP/BottomNav";

const ListOfCareTakers = ({ navigation }) => {
  const caretakerList = careStore.caretakers.map((caretaker) => (
    <CareTakerItem
      caretaker={caretaker}
      navigation={navigation}
      key={caretaker._id}
    />
  ));
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => guardianStore.logout(navigation) },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  return (
    <>
      <ScrollView>
        <LinearGradient
          colors={["#C0D6F9", "#B07DF0", "#C0D6F9"]}
          style={styles.background}
        />
        {caretakerList}
      </ScrollView>

      <BottomNav navigation={navigation} />
    </>
  );
};

export default observer(ListOfCareTakers);

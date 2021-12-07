import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import careTakerStore from "../../../Store/CareTakerStore";
import { Button } from "native-base";

const CareTakerProfileList = () => {
  return (
    <View>
      <Text>user name</Text>
      <Text>last name</Text>
      {/* <Image
        source={{ uri: baseURL + profile.image }}
        style={{ width: 60, height: 60 }}
      /> */}
      <Text>qualification</Text>
      <Text>pastExp</Text>
      <Text>bio</Text>
      <Text>status</Text>

      <Button onPress={() => careTakerStore.logout()}>logout</Button>
    </View>
  );
};

export default CareTakerProfileList;

const styles = StyleSheet.create({});

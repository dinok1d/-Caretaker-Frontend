import { Button } from "native-base";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import guardianStore from "../../../Store/GuardianStore";
// import { baseURL } from "../../../Store/instance";

const GuardianProfileList = () => {
  return (
    <View>
      <Text>first name</Text>
      <Text>last name</Text>
      {/* <Image
        source={{ uri: baseURL + profile.image }}
        style={{ width: 60, height: 60 }}
      /> */}
      <Text>number of kids</Text>
      <Text>bio</Text>
      <Button onPress={() => guardianStore.logout()}>logout</Button>
    </View>
  );
};

export default GuardianProfileList;

const styles = StyleSheet.create({});

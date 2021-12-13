import React from "react";

import { View, Text } from "react-native";
import { HStack, Spinner, Image } from "native-base";
import { Card, Button } from "react-native-elements";

import styles from "../../listofappointment/styles";
import { LinearGradient } from "expo-linear-gradient";
import Styles from "../../../Styles";
import guardStore from "../../../Store/GuardStore";
import guardianStore from "../../../Store/GuardianStore";
import { useEffect } from "react";

const GuardianDetail = ({ navigation, route }) => {
  // console.log("this is before useffect", guardianStore.guardian.profile);
  // useEffect(async () => {
  //   const GuardProfile = guardStore.fetchGuardianProfile(
  //     guardianStore.guardian._id
  //   );
  // }, []);
  // console.log(guardianStore.guardian._id);
  // console.log(GuardProfile);

  const dumbData = {
    username: "hassan",
    firstName: "Sayed ",
    lastName: "Hassan",
    numberOfKids: 0,
    bio: "boring",
  };
  return (
    <View style={styles.background}>
      <LinearGradient
        colors={["#C0D6F9", "#B07DF0", "#C0D6F9"]}
        style={styles.background}
      />
      <Card containerStyle={Styles.container} wrapperStyle={Styles.wrapper}>
        <Card.Title
          style={{
            fontSize: 20,
          }}
        >
          {dumbData.username}
        </Card.Title>
        <Card.Divider />

        <Image
          style={{
            height: 140,
            marginBottom: 10,
            borderRadius: 70,
          }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1876/1876934.png",
            alt: "image",
          }}
        />

        <Text
          style={{
            fontSize: 16,
          }}
        >
          Full name: {"\n"}
          {dumbData.firstName} {dumbData.lastName}
        </Text>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          {"\n"}
          numberOfKids: {"\n"}
          {dumbData.numberOfKids}
        </Text>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          {"\n"}
          Bio:
          {dumbData.bio} {"\n"}
          {"\n"}
        </Text>

        <HStack>
          <Button
            title="Edit Profile"
            buttonStyle={{
              borderRadius: Platform.OS === "ios" ? 20 : 20,
              marginLeft: 30,
              marginTop: 10,
              backgroundColor: "#FA2F60",
              // width: 40%,
            }}
            onPress={() => navigation.navigate("GuardianProfile")}
          />
          <Button
            title="My Appointments"
            buttonStyle={{
              borderRadius: Platform.OS === "ios" ? 20 : 20,
              marginLeft: 25,
              marginTop: 10,
              backgroundColor: "#FA2F60",
              // width: 40%,
            }}
            onPress={() => navigation.navigate("AppointmentList")}
          />
        </HStack>
      </Card>
    </View>
  );
};

export default GuardianDetail;

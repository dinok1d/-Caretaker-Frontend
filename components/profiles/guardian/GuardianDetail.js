import React from "react";
import { Text, ScrollView } from "react-native";
import { HStack, Image } from "native-base";
import { Card, Button } from "react-native-elements";
import styles from "../../listofappointment/styles";
import { LinearGradient } from "expo-linear-gradient";
import Styles from "../../../Styles";

const GuardianDetail = ({ navigation, route }) => {
  const { guardianProfile } = route.params;

  return (
    <ScrollView style={styles.background}>
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
          {guardianProfile.profile.username}
        </Card.Title>
        <Card.Divider />

        <Image
          style={{
            height: 280,
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
          Full Name: {"\n"}
          {guardianProfile.profile.firstName} {guardianProfile.profile.lastName}
        </Text>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          {"\n"}
          Number of Kids: {"\n"}
          {guardianProfile.profile.numberOfKids}
        </Text>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          {"\n"}
          Biography: {"\n"}
          {guardianProfile.profile.bio}
          {"\n"}
        </Text>

        <HStack>
          <Button
            title="Edit Profile"
            buttonStyle={{
              borderRadius: Platform.OS === "ios" ? 20 : 20,
              marginLeft: 20,
              marginTop: 10,
              backgroundColor: "#FA2F60",
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
            }}
            onPress={() => navigation.navigate("AppointmentList")}
          />
        </HStack>
      </Card>
    </ScrollView>
  );
};

export default GuardianDetail;

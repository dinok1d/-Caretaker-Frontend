import React from "react";
import { Text, ScrollView } from "react-native";
import { Image } from "native-base";
import { Card } from "react-native-elements";
import styles from "../../listofappointment/styles";
import { LinearGradient } from "expo-linear-gradient";
import Styles from "../../../Styles";
import { baseURL } from "../../../Store/instance";

const ViewGuardianDetail = ({ route }) => {
  const { userProfile } = route.params;

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
          {userProfile.profile.username}
        </Card.Title>
        <Card.Divider />
        <Image
          style={{
            height: 160,
            marginBottom: 10,
            borderRadius: 30,
          }}
          source={{
            uri: baseURL + userProfile.profile.image,
            alt: "image",
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Full Name:
        </Text>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          {userProfile.profile.firstName} {userProfile.profile.lastName}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          {"\n"}
          Number of Kids:
        </Text>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          {userProfile.profile.numberOfKids}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          {"\n"}
          Biography:
        </Text>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          {userProfile.profile.bio}
          {"\n"}
        </Text>
      </Card>
    </ScrollView>
  );
};

export default ViewGuardianDetail;

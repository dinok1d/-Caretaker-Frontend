import React from "react";
import { observer } from "mobx-react";
import { View, Text, Alert } from "react-native";
import { HStack, Spinner } from "native-base";
import { Card, Button } from "react-native-elements";
import careStore from "../../Store/CareStore";
import { Image } from "native-base";
import styles from "../listofappointment/styles";
import { LinearGradient } from "expo-linear-gradient";
import Styles from "../../Styles";

import { baseURL } from "../../Store/instance";
import careTakerStore from "../../Store/CareTakerStore";
import guardianStore from "../../Store/GuardianStore";

const CareTakerDetail = ({ navigation, route }) => {
  if (careStore.isLoading) return <Spinner />;
  const caretaker = route.params.caretaker;

  console.log(careTakerStore.caretaker);
  console.log(guardianStore.guardian);

  const guestUser = () =>
    Alert.alert("Not Signed in", "You not Signedin press OK to Signin", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => navigation.replace("CareTakerSignin") },
    ]);
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
          {caretaker.profile.firstName} {caretaker.profile.lastName}
        </Card.Title>
        <Card.Divider />

        <Image
          style={{
            height: 140,
            marginBottom: 10,
            borderRadius: 30,
          }}
          source={{
            uri: baseURL + caretaker.profile.image,
          }}
          alt="Logo"
        />
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Full name:
          </Text>
          <Text
            style={{
              fontSize: 16,
            }}
          >
            {caretaker.profile.firstName} {caretaker.profile.lastName}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            {"\n"}
            Qualification:{" "}
          </Text>
          <Text
            style={{
              fontSize: 16,
            }}
          >
            {caretaker.profile.qualification}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            {"\n"}
            Past Experience:
          </Text>
          <Text
            style={{
              fontSize: 16,
            }}
          >
            {caretaker.profile.pastExp}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            {"\n"}
            Bio:
          </Text>
          <Text
            style={{
              fontSize: 16,
            }}
          >
            {caretaker.profile.bio}
            {"\n"}
          </Text>
        </View>
        <HStack>
          {guardianStore.guardian ? (
            <Button
              title="Book"
              buttonStyle={{
                borderRadius: Platform.OS === "ios" ? 20 : 20,
                marginLeft: 190,
                marginTop: 10,
                backgroundColor: "#FA2F60",
                width: 150,
              }}
              onPress={() =>
                navigation.navigate("BookingCalender", {
                  caretaker: caretaker,
                })
              }
            />
          ) : (
            <Button
              title="Book"
              buttonStyle={{
                borderRadius: Platform.OS === "ios" ? 20 : 20,
                marginLeft: 190,
                marginTop: 10,
                backgroundColor: "#FA2F60",
                width: 150,
              }}
              onPress={guestUser}
            />
          )}
        </HStack>
      </Card>
    </View>
  );
};

export default observer(CareTakerDetail);

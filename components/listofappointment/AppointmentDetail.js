import React from "react";
import { observer } from "mobx-react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { HStack, Spinner, Box, useToast, Image } from "native-base";
import appointStore from "../../Store/AppointmentStore";
import { Card, Button } from "react-native-elements";
import styles from "../listofappointment/styles";
import careStore from "../../Store/CareStore";
import guardStore from "../../Store/GuardStore";
import { LinearGradient } from "expo-linear-gradient";
import guardianStore from "../../Store/GuardianStore";

import Styles from "../../Styles";
import careTakerStore from "../../Store/CareTakerStore";
import { baseURL } from "../../Store/instance";

const AppointmentDetail = ({ navigation, route }) => {
  if (appointStore.isLoading) return <Spinner />;
  const { appointment, userProfile } = route.params;

  const toast = useToast();

  const handleAccept = () => {
    appointStore.updateAppointment(
      appointment._id,
      "Accepted",
      navigation,
      toast
    );
  };

  const handleDecline = () => {
    appointStore.updateAppointment(
      appointment._id,
      "Declined",
      navigation,
      toast
    );
  };

  const handleCancel = () => {
    appointStore.updateAppointment(
      appointment._id,
      "Cancelled",
      navigation,
      toast
    );
  };

  // const handleDelete = () => {
  //   appointStore.appointmentDelete(appointment._id);
  //   navigation.navigate("AppointmentList");
  // };

  const caretakerName = careStore.fetchCaretakerProfile(appointment.caretaker);
  const guardianName = guardStore.fetchGuardianProfile(appointment.guardian);
  const fullName =
    userProfile.profile.firstName + " " + userProfile.profile.lastName;

  const HandleProfile = () => {
    navigation.navigate("ViewGuardianDetail", {
      userProfile: userProfile,
    });
  };

  let changeColour = "blue";
  if (appointment.status === "Declined") {
    changeColour = "red";
  } else if (appointment.status === "Accepted") {
    changeColour = "green";
  } else {
    changeColour = "blue";
  }

  return (
    <ScrollView style={styles.background}>
      <LinearGradient
        colors={["#C0D6F9", "#B07DF0", "#C0D6F9"]}
        style={styles.background}
      />
      <Card containerStyle={Styles.container} wrapperStyle={Styles.wrapper}>
        {guardianStore.guardian ? (
          <Card.Title
            style={{
              fontSize: 20,
            }}
          >
            {fullName}
          </Card.Title>
        ) : (
          <Button
            title={fullName}
            onPress={HandleProfile}
            buttonStyle={{
              backgroundColor: "#FA2F60",
            }}
          />
        )}

        <Card.Divider />
        <Image
          style={{ height: 160, borderRadius: 30 }}
          source={{
            uri: baseURL + userProfile.profile.image,
          }}
          alt="Profile Img"
        />
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            {"\n"}
            Guardian:{" "}
          </Text>
          <Text
            style={{
              fontSize: 16,
            }}
          >
            {guardianName.profile.firstName} {guardianName.profile.lastName}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            {"\n"}
            Caretaker:
          </Text>
          <Text>
            {caretakerName.profile.firstName} {caretakerName.profile.lastName}
            {"\n"}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Time:
          </Text>
          <Text
            style={{
              fontSize: 16,
            }}
          >
            ({appointment.date}, {appointment.time}){"\n"}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Status:
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: `${changeColour}`,
            }}
          >
            {appointment.status}
            {"\n"}
          </Text>
        </View>
        {/* <Text
          style={{
            fontSize: 16,
          }}
        >
          Created: {moment(appointment.createdAt).format("h:mm a")}
          {"\n"}
        </Text> */}

        {/* <Text
          style={{
            fontSize: 16,
          }}
        >
          Updated: {moment(appointment.updatedAt).format("h:mm a")}
          {"\n"}
        </Text> */}
        <HStack>
          {(careTakerStore.caretaker?._id === appointment.caretaker &&
            appointment.status === "Declined") ||
            (appointment.status === "Pending" && (
              <Button
                buttonStyle={{
                  borderRadius: 10,
                  marginLeft: 70,
                  marginTop: 10,
                  marginRight: 20,
                  backgroundColor: "#61EB5D",
                }}
                onPress={handleAccept}
                title="Accept"
              />
            ))}
          <Box style={styles.buttonSpace}></Box>

          {guardianStore.guardian?._id === appointment.guardian && (
            <Button
              buttonStyle={{
                borderRadius: 10,
                marginTop: 10,
                backgroundColor: "#F31B01",
                width: 90,
              }}
              onPress={handleCancel}
              title="Cancel"
            />
          )}

          <Box style={styles.buttonSpace}></Box>
          {(careTakerStore.caretaker?._id === appointment.caretaker &&
            appointment.status === "Accepted") ||
            (appointment.status === "Pending" && (
              <Button
                buttonStyle={{
                  borderRadius: 10,
                  marginTop: 10,
                  marginRight: 90,
                  backgroundColor: "#F31B01",
                }}
                onPress={handleDecline}
                title="Decline"
              >
                Decline
              </Button>
            ))}
        </HStack>
      </Card>
    </ScrollView>
  );
};

export default observer(AppointmentDetail);

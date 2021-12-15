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
import moment from "moment";

import Styles from "../../Styles";

const AppointmentDetail = ({ navigation, route }) => {
  if (appointStore.isLoading) return <Spinner />;
  const appointment = route.params.appointment;

  const toast = useToast();
  const guardianProfile = guardStore.fetchGuardianProfile(appointment.guardian);
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

  const handleDelete = () => {
    appointStore.appointmentDelete(appointment._id);
    navigation.navigate("AppointmentList");
  };

  const HandleProfile = () => {
    navigation.navigate("GuardianDetail", { guardianProfile: guardianProfile });
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
        <Button
          title={appointment.guardianName}
          onPress={HandleProfile}
          buttonStyle={{
            backgroundColor: "#FA2F60",
          }}
        />

        <Card.Divider />
        <Image
          style={{ height: 200 }}
          source={{
            uri: "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png",
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
            {appointment.guardianName}
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
            {appointment.caretakerName}
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
          {
            // (appointStore.appointment.status = "accept"(
            <Button
              buttonStyle={{
                borderRadius: 10,
                marginLeft: 50,
                marginTop: 10,
                backgroundColor: "#61EB5D",
              }}
              onPress={handleAccept}
              title="Accept"
            />
            // ))
          }
          <Box style={styles.buttonSpace}></Box>
          {}
          {/* <Button
            buttonStyle={{
              borderRadius: 10,
              marginTop: 10,
              backgroundColor: "#F31B01",
              width: 90,
            }}
            onPress={handleDelete}
            title="Delete"
          /> */}

          <Box style={styles.buttonSpace}></Box>
          <Button
            buttonStyle={{
              borderRadius: 10,
              marginTop: 10,
              marginLeft: 40,
              backgroundColor: "#F31B01",
            }}
            onPress={handleDecline}
            title="Decline"
          >
            Decline
          </Button>
        </HStack>
      </Card>
    </ScrollView>
  );
};

export default observer(AppointmentDetail);

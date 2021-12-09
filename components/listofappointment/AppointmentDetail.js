import React from "react";
import { observer } from "mobx-react";
import { View, Text } from "react-native";
import { HStack, Spinner, Box, useToast, Image, Container } from "native-base";
import appointStore from "../../Store/AppointmentStore";
import { Card, Button } from "react-native-elements";
import styles from "../listofappointment/styles";
import careStore from "../../Store/CareStore";
import { LinearGradient } from "expo-linear-gradient";
import Styles from "../../Styles";

const AppointmentDetail = ({ navigation, route }) => {
  if (appointStore.isLoading) return <Spinner />;
  const appointment = route.params.appointment;

  const CareTakerProfile = careStore.fetchProfile(appointment.caretaker);

  // console.log(
  //   "this is caretaker profile image",
  //   careTakerProfile.profile.image
  // );

  const toast = useToast();

  const handleAccept = () => {
    appointStore.updateAppointment(
      appointment._id,
      "accepted",
      navigation,
      toast
    );
  };

  const handleDecline = () => {
    appointStore.updateAppointment(
      appointment._id,
      "declined",
      navigation,
      toast
    );
  };

  const handleDelete = () => {
    appointStore.appointmentDelete(appointment._id);
    navigation.navigate("AppointmentList");
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
          {appointment.guardianName}
        </Card.Title>
        <Card.Divider />
        <Image
          style={{ height: 200 }}
          source={{
            uri: "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png",
          }}
        />

        <Text
          style={{
            fontSize: 16,
          }}
        >
          {"\n"}
          Guardian: {appointment.guardianName}
          {"\n"}
        </Text>

        <Text
          style={{
            fontSize: 16,
          }}
        >
          Caretaker: {appointment.caretakerName}
          {"\n"}
        </Text>

        <Text
          style={{
            fontSize: 16,
          }}
        >
          Status: {appointment.status}
          {"\n"}
        </Text>

        <Text
          style={{
            fontSize: 16,
          }}
        >
          Created: {appointment.createdAt}
          {"\n"}
        </Text>

        <Text
          style={{
            fontSize: 16,
          }}
        >
          Updated: {appointment.updatedAt}
          {"\n"}
        </Text>
        <HStack>
          {/* {appointStore.appointment.status === "false" && ( */}
          <Button
            buttonStyle={{
              borderRadius: 10,
              marginLeft: 20,
              marginTop: 10,
              backgroundColor: "#FA2F60",
            }}
            onPress={handleAccept}
            title="Accept"
          />
          {/* )} */}
          <Box style={styles.buttonSpace}></Box>
          <Button
            buttonStyle={{
              borderRadius: 10,
              marginTop: 10,
              backgroundColor: "#fff5fb",
              width: 90,
            }}
            titleStyle={{
              color: "#FA2F60",
            }}
            onPress={handleDelete}
            title="Delete"
          />

          <Box style={styles.buttonSpace}></Box>
          <Button
            buttonStyle={{
              borderRadius: 10,
              marginTop: 10,
              backgroundColor: "#FA2F60",
            }}
            onPress={handleDecline}
            title="Decline"
          >Decline</Button>
        </HStack>
      </Card>
    </View>
  );
};

export default observer(AppointmentDetail);

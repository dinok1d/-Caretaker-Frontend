import React from "react";
import { observer } from "mobx-react";
import { View, Text } from "react-native";
import {
  HStack,
  Spinner,
  Box,
  Button,
  useToast,
  Image,
  Container,
} from "native-base";
import appointStore from "../../Store/AppointmentStore";
import { Card } from "react-native-elements";
import styles from "./styles";
import CareStore from "../../Store/CareStore";
import { baseURL } from "../../Store/instance";
import { useState } from "react";

const AppointmentDetail = ({ navigation, route }) => {
  if (appointStore.isLoading) return <Spinner />;
  const appointment = route.params.appointment;
  const [comfirmStatus, setStatus] = useState(appointment.status);

  const CareTakerProfile = CareStore.fetchProfile(appointment.caretaker);

  console.log(
    "this is caretaker profile image",
    CareTakerProfile.profile.image
  );

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
      <Card>
        <Card.Title>Appointment</Card.Title>
        <Card.Divider />
        <Image
          style={styles.Image}
          source={{
            uri: "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png",
          }}
          alt="image"
        />

        <Text style={{ marginBottom: 10 }}>
          Guardian: {appointment.guardianName}
          {"\n"}
          Caretaker: {appointment.caretakerName}
          {"\n"}
          Status: {comfirmStatus}
          {"\n"}
          Created: {appointment.createdAt}
          {"\n"}
          Updated: {appointment.updatedAt}
        </Text>
        <HStack>
          {/* {appointStore.appointment.status === "false" && ( */}
          <Button
            onPress={handleAccept}
            variant="outline"
            colorScheme="green"
            title="Comfirm"
          />
          {/* )} */}
          <Box style={styles.buttonSpace}></Box>
          <Button
            onPress={handleDelete}
            variant="outline"
            colorScheme="danger"
            title="delete"
          />
          <Box style={styles.buttonSpace}></Box>
          <Button
            onPress={handleDecline}
            variant="outline"
            colorScheme="blue"
            title="Decline"
          />
        </HStack>
      </Card>
    </View>
  );
};

export default observer(AppointmentDetail);

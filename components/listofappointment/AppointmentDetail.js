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
import careStore from "../../Store/CareStore";
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
      <Card
        containerStyle={{
          borderColor: "pink",
          borderRadius: 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,

          elevation: 8,
        }}
        wrapperStyle={{
          borderRadius: 50,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
      >
        <Card.Title
          style={{
            fontSize: 20,
          }}
        >
          {appointment.guardianName}
        </Card.Title>
        <Card.Divider />
        <Image
          style={styles.Image}
          source={{
            uri: "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png",
          }}
          alt="image"
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

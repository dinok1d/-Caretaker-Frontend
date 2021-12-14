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
import Styles from "../../Styles";

const AppointmentDetail = ({ navigation, route }) => {
  if (appointStore.isLoading) return <Spinner />;
  const appointment = route.params.appointment;

  const toast = useToast();
  const guardianProfile = guardStore.fetchGuardianProfile(appointment.guardian);
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

  const HandleProfile = () => {
    navigation.navigate("GuardianDetail", { guardianProfile: guardianProfile });
  };

  // navigationByCondition = (item) => {
  //   const { navigation } = this.props;

  //   if (item.status === "Situação: Pending") {
  //     navigation.navigate("OrderAccept");
  //   } else {
  //     navigation.navigate("OrderDetailDelivered");
  //   }
  // };

  // onPress={()=>this.navigationByCondition(item)}

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
          <Pressable onPress={HandleProfile}>
            <Text>{appointment.guardianName}</Text>
          </Pressable>
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
          Caretaker: {appointment.date}
          {"\n"}
        </Text>

        <Text
          style={{
            fontSize: 16,
          }}
        >
          Caretaker: {appointment.time}
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
          {
            // (appointStore.appointment.status = "accept"(
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
            // ))
          }
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
          >
            Decline
          </Button>
        </HStack>
      </Card>
    </ScrollView>
  );
};

export default observer(AppointmentDetail);

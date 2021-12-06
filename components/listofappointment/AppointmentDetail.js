import React from "react";
import { observer } from "mobx-react";
import { View, Text } from "react-native";
import { HStack, Spinner } from "native-base";
import appointStore from "../../Store/AppointmentStore";
import { Card, Button } from "react-native-elements";

const AppointmentDetail = ({ navigation, route }) => {
  if (appointStore.isLoading) return <Spinner />;
  const appointment = route.params.appointment;

  return (
    <View>
      <Card>
        <Card.Title>Appointment</Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 10 }}>
          Guardian: {appointment.guardianName}
          {"\n"}
          Caretaker: {appointment.caretakerName}
          {"\n"}
          Status: {appointment.status}
          {"\n"}
          Created: {appointment.createdAt}
          {"\n"}
          Updated: {appointment.updatedAt}
        </Text>
        <HStack>
          <Button title="Accept" />
          <Button title="Decline" />
        </HStack>
      </Card>
    </View>
  );
};

export default observer(AppointmentDetail);

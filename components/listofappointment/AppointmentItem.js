import React from "react";
import { observer } from "mobx-react";
import { View, Text } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import Navigation from "../navigation/Navigation";

const AppointmentItem = ({ appointment, navigation }) => {
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
          Comfirmation: {appointment.status}
        </Text>
        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="More Details"
          onPress={() => {
            navigation.navigate("AppointmentDetail", {
              appointment: appointment,
            });
          }}
        />
      </Card>
    </View>
  );
};

export default observer(AppointmentItem);

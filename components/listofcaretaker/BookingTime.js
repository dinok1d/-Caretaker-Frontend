import { Button, Center, HStack } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BookingTime = ({ route }) => {
  const day = route.params.day;
  const caretaker = route.params.caretaker;
  return (
    <View>
      <View>
        <Text style={styles.TextDetail}>
          The Appointment Date: {day.dateString}
        </Text>
        <Text style={styles.TextDetail}>
          The CareTaker: {caretaker.username}
        </Text>
      </View>
      {/* careTaker.PreferedTimes below  */}
      <Center style={styles.ContainerTimeSlot}>
        <Text style={styles.timeSlots}>The CareTaker Available </Text>
        <HStack style={styles.timeSlots}>
          <View>
            <Button style={styles.timeSlots}>12:00PM</Button>
            <Button style={styles.timeSlots}>09:00PM</Button>
            <Button style={styles.timeSlots}>07:00PM</Button>
          </View>
        </HStack>
      </Center>
    </View>
  );
};

export default BookingTime;

const styles = StyleSheet.create({
  timeSlots: {
    padding: 20,
    margin: 10,
  },
  ContainerTimeSlot: {
    backgroundColor: "#8285E0",
    width: "60%",
    height: "70%",
    marginLeft: "20%",
    marginTop: "10%",
    borderRadius: 10,
  },
  TextDetail: {
    margin: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
});

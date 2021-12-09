import { Center, HStack } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import appointStore from "../../Store/AppointmentStore";

const BookingTime = ({ route }) => {
  const day = route.params.day;
  const caretaker = route.params.caretaker;

  const handleBook = () => {
    console.log({ _id: caretaker._id });
    appointStore.bookAppointment({ _id: caretaker._id });
  };
  return (
    <View>
      <LinearGradient
        colors={["#C0D6F9", "#B07DF0", "#C0D6F9"]}
        style={styles.background}
      />

      {/* <Text style={styles.TextDetail}>
        The Appointment Date: {day.dateString}
      </Text>
      <Text style={styles.TextDetail}>The CareTaker: {caretaker.username}</Text> */}
      <Center style={styles.shadow}>
        <Text style={{ marginBottom: 20, fontSize: 25 }}>Pick a Time</Text>
        <HStack>
          <Button title="12:00PM" buttonStyle={styles.button} />
          <Button title="04:00PM" buttonStyle={styles.button} />
        </HStack>
        <HStack>
          <Button title="07:00PM" buttonStyle={styles.button} />
          <Button title="09:00AM" buttonStyle={styles.button} />
        </HStack>
      </Center>
    </View>
  );
};

export default BookingTime;

const styles = StyleSheet.create({
  timeSlots: {
    padding: 20,
  },
  ContainerTimeSlot: {
    backgroundColor: "#C0D6F9",
    width: "100%",
    height: "100%",
  },
  TextDetail: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
  button: {
    borderRadius: 100,
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: "#FA2F60",
    width: 100,
    height: 100,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    marginTop: 100,
  },
});

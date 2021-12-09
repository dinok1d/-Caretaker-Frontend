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
      {/* careTaker.PreferedTimes below  */}
      <LinearGradient
        // Background Linear Gradient
        colors={["#C0D6F9", "#8285E0"]}
        style={styles.background}
      />

      <Center
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,

          elevation: 24,
          marginTop: "30%",
        }}
      >
        <Text style={styles.TextDetail}>
          The Appointment Date: {day.dateString}
        </Text>
        <Text style={styles.TextDetail}>
          The CareTaker: {caretaker.username}
        </Text>


        <Text style={{ marginBottom: 10, fontSize: 25 }}>Pick a Time</Text>
        <HStack>
          <Button
            title="12:00PM"
            buttonStyle={{
              borderRadius: 100,
              marginLeft: 10,
              marginRight: 0,
              marginBottom: 10,
              marginTop: 10,

              backgroundColor: "#FA2F60",
              width: 100,
              height: 100,
            }}
          />
          <Button
            title="09:00PM"
            buttonStyle={{
              borderRadius: 100,
              marginLeft: 10,
              marginRight: 0,
              marginBottom: 10,
              marginTop: 10,

              backgroundColor: "#FA2F60",
              width: 100,
              height: 100,
            }}
          />
        </HStack>

        <HStack>
          <Button
            title="07:00PM"
            buttonStyle={{
              borderRadius: 100,
              marginLeft: 10,
              marginRight: 0,
              marginBottom: 10,
              marginTop: 10,

              backgroundColor: "#FA2F60",
              width: 100,
              height: 100,
            }}
          />

          <Button
            title="09:00AM"
            buttonStyle={{
              borderRadius: 100,
              marginLeft: 10,
              marginRight: 0,
              marginBottom: 10,
              marginTop: 10,

              backgroundColor: "#FA2F60",
              width: 100,
              height: 100,
            }}
          />

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
    height: 700,
  },
});

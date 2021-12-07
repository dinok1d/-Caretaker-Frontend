import { Button, Center } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BookingTime = ({ route }) => {
  const day = route.params.day;
  const caretaker = route.params.caretaker;
  return (
    <View>
      <Center>
        <Text>{day.dateString}</Text>
        <Text>{caretaker.username}</Text>

        {/* careTaker.PreferedTimes below  */}
        <Button>12:00PM</Button>
        <Button>09:00PM</Button>
        <Button>07:00PM</Button>
      </Center>
    </View>
  );
};

export default BookingTime;

const styles = StyleSheet.create({});

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from "react-native-calendars";
const BookingCalender = ({ navigation, route }) => {
  const caretaker = route.params.caretaker;
  const handlePickDate = (day) => {
    navigation.navigate("BookingTime", { day: day, caretaker: caretaker });
    console.log(day);
  };
  return (
    <View>
      <Calendar markingType={"period"} onDayPress={handlePickDate}  />
    </View>
  );
};

export default BookingCalender;

const styles = StyleSheet.create({});

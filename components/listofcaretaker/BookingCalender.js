import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
const BookingCalender = ({ navigation, route }) => {
  const caretaker = route.params.caretaker;
  const handlePickDate = (day) => {
    navigation.navigate("BookingTime", { day: day, caretaker: caretaker });
    console.log(day);
  };
  console.log(Date.now());
  return (
    <View style={styles.pageView}>
      <Text style={styles.TextHeading}>Pick the Day for the Appointment:</Text>
      <Calendar
        style={styles.CalendarCSS}
        minDate={Date.now()}
        disableArrowLeft={true}
        markingType={"period"}
        onDayPress={handlePickDate}
        height={20}
        width={22}
      />
      <Text></Text>
    </View>
  );
};

export default BookingCalender;

const styles = StyleSheet.create({
  CalendarCSS: {
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
    borderColor: "pink",
  },
  pageView: {
    height: "100%",
    width: "100%",
    backgroundColor: "#C0D6F9",
  },
  TextHeading: {
    padding: 10,
    fontSize: 20,
    color: "black",
  },
});

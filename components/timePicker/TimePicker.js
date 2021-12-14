import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { useToast } from "native-base";
import appointStore from "../../Store/AppointmentStore";
const TimePicker = ({ bookDate, bookCaretaker, navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(true);

  const toast = useToast();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (time) => {
    console.log("A time has been picked: ", moment(time).format("h:mm a"));
    
    const bookingDetails = {
      _id: bookCaretaker,
      date: bookDate,
      time: moment(time).format("h:mm a"),
    };

    appointStore.bookAppointment(bookingDetails, navigation, toast);

    hideDatePicker();
  };
  return (
    <View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={(hideDatePicker, navigation.goBack)}
      />
    </View>
  );
};

export default TimePicker;

import React from "react";
import { View, Text } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
const CareTakerItem = ({ caretaker, navigation }) => {
  return (
    <View>
      <Card>
        <Card.Title>Caretaker</Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 10 }}>
          {/* <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: u.avatar }}
          /> */}
          Name: {caretaker.username}
          {"\n"}
          Type:
        </Text>
        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
          //   onPress={() => {
          //     navigation.navigate("AppointmentDetail", {
          //       appointment: appointment,
          //     });
          //   }}
        />
      </Card>
    </View>
  );
};

export default CareTakerItem;

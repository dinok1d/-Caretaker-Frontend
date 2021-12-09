import React from "react";
import { observer } from "mobx-react";
import { View, Text } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import Navigation from "../navigation/Navigation";
import { useState } from "react";
import { Image, HStack } from "native-base";
import styles from "./styles";


const AppointmentItem = ({ appointment, navigation }) => {
  return (
    <View >
      <Card
        containerStyle={{
          borderColor: "pink",
          borderRadius: Platform.OS === "ios" ? 30 : 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,

          elevation: 8,
        }}
        wrapperStyle={{
          
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
      >
        <Card.Title
          style={{
            fontSize: 18,
          }}
        >
          {appointment.guardianName}
        </Card.Title>
        <Card.Divider />

        <HStack>
          <Image
            width="20"
            height="100"
            borderRadius= {Platform.OS === "ios" ? 30 : 20}
            marginRight="30"
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/437/437501.png",
              alt: "image",
            }}
          />
          <Text
            style={{
              fontSize: 16,
              marginLeft: 15,
            }}
          >
            {"\n"} Confirmation: {"\n"}
            {appointment.status} Something
          </Text>
        </HStack>

        <Button
          buttonStyle={{
            borderRadius: Platform.OS === "ios" ? 30 : 20,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            marginTop: 10,
            backgroundColor: "#FA2F60",
          }}
          title="SEE MORE"
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

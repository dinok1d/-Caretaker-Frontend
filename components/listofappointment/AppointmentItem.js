import React from "react";
import { observer } from "mobx-react";
import { View, Text } from "react-native";
import { Card, Button } from "react-native-elements";
import { Image, HStack } from "native-base";
import Styles from "../../Styles";

const AppointmentItem = ({ appointment, navigation }) => {
  return (
    <View>
      <Card containerStyle={Styles.container} wrapperStyle={Styles.wrapper}>
        <Card.Title
          style={{
            fontSize: 19,
          }}
        >
          {appointment.guardianName}
        </Card.Title>
        <Card.Divider />

        <HStack>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 30,
              marginRight: 30,
            }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/437/437501.png",
              alt: "image",
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              Status:
            </Text>
            <Text
              style={{
                fontSize: 16,
              }}
            >
              {appointment.status}
            </Text>
          </View>
        </HStack>

        <Button
          buttonStyle={{
            borderRadius: Platform.OS === "ios" ? 20 : 20,
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

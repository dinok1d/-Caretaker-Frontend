import React from "react";
import { observer } from "mobx-react";
import { View, Text } from "react-native";
import { Card, Button } from "react-native-elements";
import { Image, HStack } from "native-base";
import Styles from "../../Styles";
import careStore from "../../Store/CareStore";
import guardStore from "../../Store/GuardStore";
import { baseURL } from "../../Store/instance";
import guardianStore from "../../Store/GuardianStore";

const AppointmentItem = ({ appointment, navigation }) => {
  // changeColour
  let changeColour = "blue";
  if (appointment.status === "Declined") {
    changeColour = "red";
  } else if (appointment.status === "Accepted") {
    changeColour = "green";
  } else {
    changeColour = "blue";
  }

  const userProfile =
    guardianStore.guardian?.type === "guardian"
      ? careStore.fetchCaretakerProfile(appointment.caretaker)
      : guardStore.fetchGuardianProfile(appointment.guardian);

  // const caretakerName = careStore.fetchCaretakerProfile(appointment.caretaker);
  // const userProfile = guardStore.fetchGuardianProfile(appointment.guardian);

  return (
    <View>
      <Card containerStyle={Styles.container} wrapperStyle={Styles.wrapper}>
        <Card.Title
          style={{
            fontSize: 19,
          }}
        >
          {userProfile.profile.firstName} {userProfile.profile.lastName}
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
              uri: baseURL + userProfile.profile.image,
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
                color: `${changeColour}`,
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
              userProfile: userProfile,
            });
          }}
        />
      </Card>
    </View>
  );
};

export default observer(AppointmentItem);

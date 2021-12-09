import React from "react";
import { observer } from "mobx-react";
import { View, Text } from "react-native";
import { HStack, Spinner } from "native-base";
import { Card, Button, Icon } from "react-native-elements";
import careStore from "../../Store/CareStore";
import { Image } from "native-base";
import styles from "../listofappointment/styles";

const CareTakerDetail = ({ navigation, route }) => {
  if (careStore.isLoading) return <Spinner />;
  const caretaker = route.params.caretaker;

  return (
    <View style={styles.background}>
      <Card
        containerStyle={{
          borderColor: "pink",
          borderRadius: Platform.OS === "ios" ? 20 : 20,
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
            fontSize: 20,
          }}
        >
          {caretaker.username}
        </Card.Title>
        <Card.Divider />

        <Image
          width="400"
          height="100"
          borderRadius={Platform.OS === "ios" ? 30 : 20}
          marginBottom="10"
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1876/1876934.png",
            alt: "image",
          }}
        />

        <Text
          style={{
            fontSize: 16,
          }}
        >
          Full name: {"\n"}
          {caretaker.profile.firstName} {caretaker.profile.lastName} something
        </Text>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          {"\n"}
          Qualification: {"\n"}
          {caretaker.profile.qualification} something
        </Text>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          {"\n"}
          Past Experience: {"\n"}
          {caretaker.profile.pastExp} something
        </Text>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          {"\n"}
          Bio:
          {caretaker.profile.bio} {"\n"} something
          {"\n"}
        </Text>

        <HStack>
          <Button
            title="Book"
            buttonStyle={{
              borderRadius: Platform.OS === "ios" ? 20 : 20,
              marginLeft: "50%",
              marginRight: 0,
              marginBottom: 0,
              marginTop: 10,
              backgroundColor: "#FA2F60",
              width: 150,
            }}
            onPress={() =>
              navigation.navigate("BookingCalender", {
                caretaker: caretaker,
              })
            }
          />
        </HStack>
      </Card>
    </View>
  );
};

export default observer(CareTakerDetail);

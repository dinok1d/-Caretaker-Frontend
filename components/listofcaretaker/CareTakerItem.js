import React from "react";
import { View, Text } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import { observer } from "mobx-react";
import { HStack, Image } from "native-base";

const CareTakerItem = ({ caretaker, navigation }) => {
  return (
    <View style={{ backgroundColor: "#C0D6F9" }}>
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
            fontSize: 18,
          }}
        >
          {caretaker.username}
        </Card.Title>
        <Card.Divider />
        <HStack>
          <Image
            width="20"
            height="20"
            borderRadius={Platform.OS === "ios" ? 30 : 20}
            marginRight="30"
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
            {"\n"}
            Type: {"\n"} Nanny, Maid
          </Text>
        </HStack>
        <Button
          buttonStyle={{
            borderRadius: Platform.OS === "ios" ? 20 : 20,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            marginTop: 10,
            backgroundColor: "#FA2F60",
          }}
          title="SEE MORE"
          onPress={() => {
            navigation.navigate("CaretakerDetail", {
              caretaker: caretaker,
            });
          }}
        />
      </Card>
    </View>
  );
};

export default observer(CareTakerItem);

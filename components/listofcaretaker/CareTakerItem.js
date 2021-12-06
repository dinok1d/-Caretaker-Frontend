import React from "react";
import { View, Text } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import { observer } from "mobx-react";
import { Image } from "native-base";

const CareTakerItem = ({ caretaker, navigation }) => {
  return (
    <View>
      <Card>
        <Card.Title>Caretaker</Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 10 }}>
          <Image
            width="20"
            height="20"
            source={{
              uri: "https://i.pinimg.com/originals/9b/6f/a5/9b6fa5020c5f45958b3a6bd68db29bb1.jpg",
            }}
          />
          {"\n"}
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

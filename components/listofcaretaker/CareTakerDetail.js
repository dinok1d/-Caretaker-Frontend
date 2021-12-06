import React from "react";
import { observer } from "mobx-react";
import { View, Text } from "react-native";
import { HStack, Spinner } from "native-base";
import { Card, Button, Icon } from "react-native-elements";
import careStore from "../../Store/CareStore";
import { Image } from "native-base";

const CareTakerDetail = ({ navigation, route }) => {
  if (careStore.isLoading) return <Spinner />;
  const caretaker = route.params.caretaker;

  return (
    <View>
      <Card>
        <Card.Title>Information</Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 10 }}>
          username: {caretaker.username}
          {"\n"}
          Full name:{caretaker.profile.firstName} {caretaker.profile.lastName}
          {"\n"}
          Qualification:{caretaker.profile.qualification}
          {"\n"}
          Past Experience:{caretaker.profile.pastExp}
          {"\n"}
          Bio:{caretaker.profile.bio}
          {"\n"}
          <Image
            width="20"
            height="20"
            source={{
              uri: "https://i.pinimg.com/originals/9b/6f/a5/9b6fa5020c5f45958b3a6bd68db29bb1.jpg",
            }}
          />
        </Text>
        <HStack>
          <Button title="Book" />
        </HStack>
      </Card>
    </View>
  );
};

export default observer(CareTakerDetail);

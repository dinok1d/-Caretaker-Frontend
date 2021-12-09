import React from "react";
import { View, Text } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import { observer } from "mobx-react";
import { HStack, Image } from "native-base";
import Styles from "../../Styles";

const CareTakerItem = ({ caretaker, navigation }) => {
  return (
    <View>
      <Card containerStyle={Styles.container} wrapperStyle={Styles.wrapper}>
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
            style={{ width: 80, height: 80, borderRadius: 30, marginRight: 30 }}
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
            borderRadius: 20,
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

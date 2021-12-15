import React from "react";
import { View, Text } from "react-native";
import { Card, Button } from "react-native-elements";
import { observer } from "mobx-react";
import { HStack, Image } from "native-base";
import Styles from "../../Styles";
import careTakerStore from "../../Store/CareTakerStore";
import { baseURL } from "../../Store/instance";

const CareTakerItem = ({ caretaker, navigation }) => {
  // const profileImage = careTakerStore.profile.image.uri;
  console.log(caretaker.profile.image);

  return (
    <View>
      <Card containerStyle={Styles.container} wrapperStyle={Styles.wrapper}>
        <Card.Title
          style={{
            fontSize: 19,
          }}
        >
          {caretaker.profile.firstName} {caretaker.profile.lastName}
        </Card.Title>
        <Card.Divider />
        <HStack>
          <Image
            style={{ width: 80, height: 80, borderRadius: 30, marginRight: 30 }}
            source={{
              uri: baseURL + caretaker.profile.image,
            }}
            alt="Logo"
          />
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              Specialty:
            </Text>

            <Text
              style={{
                fontSize: 16,
              }}
            >
              {caretaker.profile.specialty}
            </Text>
          </View>
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

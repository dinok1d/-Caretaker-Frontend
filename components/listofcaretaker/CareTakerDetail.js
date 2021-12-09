import React from "react";
import { observer } from "mobx-react";
import { View, Text } from "react-native";
import { HStack, Spinner } from "native-base";
import { Card, Button, Icon } from "react-native-elements";
import careStore from "../../Store/CareStore";
import { Image } from "native-base";
import styles from "../listofappointment/styles";
import { LinearGradient } from "expo-linear-gradient";
import Styles from "../../Styles";

const CareTakerDetail = ({ navigation, route }) => {
  if (careStore.isLoading) return <Spinner />;
  const caretaker = route.params.caretaker;

  return (
    <View style={styles.background}>

      <LinearGradient
        colors={["#C0D6F9", "#B07DF0", "#C0D6F9"]}
        style={styles.background}
      />
      <Card containerStyle={Styles.container} wrapperStyle={Styles.wrapper}>
        <Card.Title
          style={{
            fontSize: 20,
          }}
        >
          {caretaker.username}
        </Card.Title>
        <Card.Divider />

        <Image
          style={{
            height: 140,
            marginBottom: 10,
            borderRadius: 70,
          }}
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
          {caretaker.profile.firstName} {caretaker.profile.lastName}
        </Text>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          {"\n"}
          Qualification: {"\n"}
          {caretaker.profile.qualification}
        </Text>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          {"\n"}
          Past Experience: {"\n"}
          {caretaker.profile.pastExp}
        </Text>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          {"\n"}
          Bio:
          {caretaker.profile.bio} {"\n"}
          {"\n"}
        </Text>

        <HStack>
          <Button
            title="Book"
            buttonStyle={{
             borderRadius: Platform.OS === "ios" ? 20 : 20,
              marginLeft: 150,

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

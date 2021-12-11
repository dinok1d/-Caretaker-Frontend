import { Button } from "native-base";
import React from "react";
import { Text, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => {
          navigation.navigate("GuardianProfile");
        }}
      >
        Guardian Profile
      </Button>

      <Button
        color="#FA2F60"
        marginTop="20"
        onPress={() => {
          navigation.navigate("CareTakerProfile");
        }}
      >
        CareTaker Profile
      </Button>
    </View>
  );
};

export default Home;

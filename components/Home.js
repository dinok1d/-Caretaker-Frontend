import { Button } from "native-base";
import React from "react";
import { Text, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => {
          // REVIEW: If your function is one line only, no need for curly brackets
          navigation.navigate("GuardianProfileList");
        }}
      >
        Guardian Profile
      </Button>

      <Button
        marginTop="20"
        onPress={() => {
          navigation.navigate("CareTakerProfileList");
        }}
      >
        CareTaker Profile
      </Button>
    </View>
  );
};

export default Home;

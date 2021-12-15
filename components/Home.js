import { Button } from "native-base";
import React from "react";
import { View } from "react-native";
import BottomNav from "../tesingP/BottomNav";
import { StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => {
          // alert("hi");
          navigation.navigate("CareTakerSignin");
        }}
      >
        Signin
      </Button>
      <View style={styles.nav}>
        <BottomNav navigation={navigation} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  nav: {
    marginBottom: 100,
  },
});

export default Home;

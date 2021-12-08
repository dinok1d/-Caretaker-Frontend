import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)";

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor: "#87d2df",
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 20, color: "#5ac3dc" }}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 20, color: "#5ac3dc" }}>Next</Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 20, color: "#5ac3dc" }}>Done</Text>
  </TouchableOpacity>
);

const OnBoardingUi = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace("login")}
      onDone={() => navigation.replace("login")}
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../assets/imm.png")} alt="image" />,
          title: "Please Choose Your Role",
          subtitle: "Guardian - CareTaker - Guest",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../assets/imm.png")} alt="image" />,
          title: "Guardian: Specify either Kids or Elderly",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../assets/imm.png")} alt="image" />,
          title: "CareTaker: Please Upload Your C.v",
        },
      ]}
    />
  );
};

export default OnBoardingUi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

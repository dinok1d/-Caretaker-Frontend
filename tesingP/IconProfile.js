import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";
import guardianStore from "../Store/GuardianStore";
import careTakerStore from "../Store/CareTakerStore";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Title } from "react-native-paper";

const IconProfile = ({ navigation }) => {
  const createBtn = () => {
    // return !guardianStore.guardian && !careTakerStore.caretaker ? (
    return (
      <Button
        onPress={() => {
          alert("hi");
          navigation.navigate("CareTakerSignin");
        }}
      >
        Signin
      </Button>
    );
    // ) : careTakerStore.caretaker ? (
    //   <View>
    //     <IconProfile
    //       style={styles.profile}
    //       size={50}
    //       name="account"
    //       onPress={() => {
    //         navigation.navigate("CareTakerProfile");
    //       }}
    //     />

    //     <Title style={styles.title}>I am a CareTaker</Title>

    //     <Icon
    //       style={styles.drawerSection}
    //       padding={30}
    //       style={styles.icon}
    //       size={40}
    //       name="logout"
    //       onPress={() => {
    //         careTakerStore.logout(navigation);
    //       }}
    //     />
    //   </View>
    // ) : (
    //   guardianStore.guardian && (
    //     <View>
    //       <IconProfile
    //         style={styles.profile}
    //         size={50}
    //         name="account"
    //         onPress={() => {
    //           navigation.navigate("GuardianProfile");
    //         }}
    //       />
    //       <Title style={styles.title}>I am a Guardian</Title>
    //       <Icon
    //         style={styles.drawerSection}
    //         size={40}
    //         name="logout"
    //         onPress={() => {
    //           guardianStore.logout(navigation);
    //         }}
    //       />
    //     </View>
    //   )
    // );
  };

  return <View>{createBtn()}</View>;
};
export default IconProfile;

const styles = StyleSheet.create({
  drawerSection: {
    marginTop: 150,
    marginBottom: 400,
    marginLeft: 15,
    color: "#FA2F60",
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    color: "#FA2F60",
    marginLeft: 10,
  },
  profile: {
    color: "#FA2F60",
    marginLeft: 40,
    marginTop: 40,
  },
  icon: {
    marginTop: 10,
    marginLeft: 10,
  },
});

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MenuDrawer from "react-native-side-drawer";
import { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import careTakerStore from "../../Store/CareTakerStore";
import Icon from "react-native-vector-icons/AntDesign";
import guardianStore from "../../Store/GuardianStore";

import Icon from "react-native-vector-icons/AntDesign";
import IconBar from "react-native-vector-icons/Ionicons";
import { observer } from "mobx-react";



const Drawer = () => {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();
  const toggleOpen = () => {
    setOpen(!open);
  };

  drawerContent = () => {
    return (
      <View style={styles.animatedBox}>
        {!guardianStore.guardian && !careTakerStore.caretaker ? (
          <Icon
            style={styles.icon}
            size={40}
            name="login"
            onPress={() => {
              toggleOpen();
              navigation.navigate("CareTakerSignin");
            }}
          />
        ) : careTakerStore.caretaker ? (
          <TouchableOpacity>
            <Text onPress={() => navigation.navigate("CareTakerProfile")}>
              CareTaker Profile
            </Text>
            <Icon
              style={styles.icon}
              size={40}
              name="logout"
              onPress={() => careTakerStore.logout(navigation)}
            />
          </TouchableOpacity>
        ) : (
          guardianStore.guardian && (
            <TouchableOpacity>
              <Text onPress={() => navigation.navigate("GuardianProfile")}>
                Guardian Profile
              </Text>

              <Icon
                style={styles.icon}
                size={40}
                name="logout"
                onPress={() => guardianStore.logout(navigation)}
              />
            </TouchableOpacity>
          )
        )}
        <TouchableOpacity
          onPress={() => {
            toggleOpen();
          }}
        >
          <Text>X</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <MenuDrawer
        open={open}
        drawerContent={drawerContent()}
        drawerPercentage={45}
        animationTime={250}
        overlay={true}
        opacity={0.4}
      >
        <IconBar
          color="white"
          margin={50}
          size={40}
          name="ios-menu"
          onPress={toggleOpen}
        />
      </MenuDrawer>
    </View>
  );
};

export default observer(Drawer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },
  animatedBox: {
    flex: 1,
    backgroundColor: "#91C8FF",
    padding: 10,
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F04812",
  },
  icon: {
    marginTop: 10,
    marginLeft: 10,
  },
  log: {
    marginLeft: 10,
  },
});

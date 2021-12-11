import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MenuDrawer from "react-native-side-drawer";
import { useState } from "react";
import { Button } from "native-base";
import { useNavigation } from "@react-navigation/core";
import careTakerStore from "../../Store/CareTakerStore";
import guardianStore from "../../Store/GuardianStore";
import Icon from "react-native-vector-icons/AntDesign";
import { style } from "dom-helpers";

const Drawer = () => {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();
  const toggleOpen = () => {
    setOpen(!open);
  };

  drawerContent = () => {
    return (
      <View style={styles.animatedBox}>
        {careTakerStore.caretaker == null ? (

          <Text>I am a Guardian</Text>

        ) : (
          <Text>I am a CareTaker</Text>
        )}

        <TouchableOpacity onPress={toggleOpen}>
          <Text onPress={() => navigation.navigate("GuardianProfile")}>
            Guardian Profile
          </Text>

          <Text>Close</Text>

          <>
            <Icon
              style={styles.icon}
              size={40}
              name="logout"
              onPress={() => guardianStore.logout()}
            />
            <Text style={styles.log}>Logout</Text>
          </>
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
        {/* //icon */}
        <Icon size={40} name="bars" onPress={toggleOpen} />
        {/* <Button onPress={toggleOpen}>Test</Button> */}
      </MenuDrawer>
    </View>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
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
    marginTop: 200,
    marginLeft: 10,
  },
  log: {
    marginLeft: 10,
  },
});

// import React from "react";
// import Home from "../Home";
// import CareTakerProfile from "../../components/profiles/caretaker/CareTakerProfile";
// import GuardianProfile from "../../components/profiles/guardian/GuardianProfile";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import ProfileButton from "../profiles/caretaker/ProfileButton";
// import ListOfAppointments from "../listofappointment/ListOfAppointments";

// const DrawerNavigator = () => {
//   const Drawer = createDrawerNavigator();

//   return (
//     <Drawer.Navigator initialRouteName="GuardianProfile">
//       <Drawer.Screen name="GuardianProfile" component={GuardianProfile} />
//       <Drawer.Screen name="CareTakerProfile" component={CareTakerProfile} />
//       <Drawer.Screen
//         name="AppointmentList"
//         component={ListOfAppointments}
//         options={{
//           headerStyle: {
//             backgroundColor: "#8285E0",
//             borderBottomColor: "#FA2F60",
//             borderTopWidth: Platform.OS === "ios" ? 30 : 30,
//             borderTopColor: "#91C8FF",
//             shadowColor: "#000",
//             shadowOffset: {
//               width: 0,
//               height: 7,
//             },
//             shadowOpacity: 0.43,
//             shadowRadius: 9.51,
//             elevation: 15,
//           },
//           headerTitleStyle: {
//             fontFamily: "KohinoorTelugu-Regular",
//           },
//           headerBackTitleVisible: false,
//           //   title: "Appointments",
//           headerLeft: false,

//           drawerLabel: () => null,
//           title: null,
//           drawerIcon: () => null,
//         }}
//       />
//     </Drawer.Navigator>
//   );
// };

// export default DrawerNavigator;

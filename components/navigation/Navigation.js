import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ListOfAppointments from "../listofappointment/ListOfAppointments";
import AppointmentDetail from "../listofappointment/AppointmentDetail";
import CareTakerProfile from "../../components/profiles/caretaker/CareTakerProfile";
import ViewGuardianDetail from "../profiles/guardian/ViewGuardianDetail";
import Home from "../Home";
import CareTakerSignin from "../signin/CareTakerSignin";
import GuardianSignup from "../signup/GuardianSignup";
import CareTakerDetail from "../listofcaretaker/CareTakerDetail";
import ListOfCareTakers from "../listofcaretaker/ListOfCareTakers";
import BookingCalender from "../listofcaretaker/BookingCalender";
import BookingTime from "../listofcaretaker/BookingTime";
import GuardianProfile from "../profiles/guardian/GuardianProfile";
// import ProfileButton from "../profiles/caretaker/ProfileButton";
import GuardianDetail from "../profiles/guardian/GuardianDetail";
import { useState } from "react";
// import DNavigation from "./DNavigation";
// import DrawerIcon from "../navigation/DrawerIcon";
import IconProfile from "../../tesingP/IconProfile";
import BottomNav from "../../tesingP/BottomNav";

const Navigation = () => {
  const { Navigator, Screen } = createStackNavigator();
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    console.log("pressed");
    setOpen(!open);
  };

  return (
    <>
      <Navigator
        initialRouteName="CareTakerSignin"
        screenOptions={{
          headerStyle: { backgroundColor: "#fadd97" },
          headerTintColor: "white",
          headerTitleStyle: { fontStyle: "italic", fontWeight: "bold" },
        }}
      >
        <Screen
          name="BottomNav"
          component={BottomNav}
          options={{
            headerStyle: { backgroundColor: "#39b4bc" },
          }}
        />
        {/* <Screen
          name="Drawer"
          component={DNavigation}
          options={{ headerShown: false }}
        /> */}

        <Screen
          name="Home"
          component={Home}
          options={({ navigation }) => {
            return {
              headerRight: () => <IconProfile navigation={navigation} />,
            };
          }}
        />

        {/* options={({ navigation }) => { */}
        {/* return { */}
        {/* headerRight: () => <ProfileButton navigation={navigation} />, */}
        {/* }; */}
        {/* }} */}

        <Screen
          name="CareTakerSignin"
          component={CareTakerSignin}
          options={{
            headerStyle: { backgroundColor: "#fadd97" },
            headerShown: false,
          }}
        />
        <Screen
          name="GuardianSignup"
          component={GuardianSignup}
          options={{
            headerStyle: { backgroundColor: "#fadd97" },
            headerShown: false,
          }}
        />
        <Screen
          name="AppointmentList"
          component={ListOfAppointments}
          options={{
            headerStyle: {
              backgroundColor: "#8285E0",
              borderBottomColor: "#FA2F60",
              borderTopWidth: Platform.OS === "ios" ? 30 : 30,
              borderTopColor: "#91C8FF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 7,
              },

              shadowOpacity: 0.43,
              shadowRadius: 9.51,
              elevation: 15,
            },
            headerTitleStyle: {
              fontFamily: "KohinoorTelugu-Regular",
            },
            headerBackTitleVisible: false,
            title: "Appointments",
            headerLeft: false,
            // headerLeft: () => <Drawer />,
          }}
        />
    
        <Screen
          name="AppointmentDetail"
          component={AppointmentDetail}
          options={{
            headerStyle: {
              backgroundColor: "#8285E0",
              borderBottomColor: "#FA2F60",
              borderTopWidth: Platform.OS === "ios" ? 30 : 30,
              borderTopColor: "#91C8FF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.43,
              shadowRadius: 9.51,
              elevation: 15,
            },
            headerTitleStyle: {
              fontFamily: "KohinoorTelugu-Regular",
            },
            headerBackTitleVisible: false,
            title: "Information",
          }}
        />
        <Screen
          name="GuardianProfile"
          component={GuardianProfile}
          options={{
            headerStyle: {
              backgroundColor: "#8285E0",
              borderBottomColor: "#FA2F60",
              borderTopWidth: Platform.OS === "ios" ? 30 : 30,
              borderTopColor: "#91C8FF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.43,
              shadowRadius: 9.51,
              elevation: 15,
            },
            headerTitleStyle: {
              fontFamily: "KohinoorTelugu-Regular",
            },
            headerBackTitleVisible: false,
            title: "Guardian Profile",
          }}
        />
        <Screen
          name="CareTakerProfile"
          component={CareTakerProfile}
          options={{
            headerStyle: {
              backgroundColor: "#8285E0",
              borderBottomColor: "#FA2F60",
              borderTopWidth: Platform.OS === "ios" ? 30 : 30,
              borderTopColor: "#91C8FF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.43,
              shadowRadius: 9.51,
              elevation: 15,
            },
            headerTitleStyle: {
              fontFamily: "KohinoorTelugu-Regular",
            },
            headerBackTitleVisible: false,
            title: "Caretaker Profile",
          }}
        />
        <Screen
          name="CaretakerList"
          component={ListOfCareTakers}
          options={{
            headerStyle: {
              backgroundColor: "#8285E0",
              borderBottomColor: "#FA2F60",
              borderTopWidth: Platform.OS === "ios" ? 30 : 30,
              borderTopColor: "#91C8FF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.43,
              shadowRadius: 9.51,
              elevation: 15,
            },
            headerTitleStyle: {
              fontFamily: "KohinoorTelugu-Regular",
            },

            title: "Choose Your Caretaker",

            headerLeft: false,
            // headerLeft: () => <Drawer />,
          }}
        />
        <Screen
          name="CaretakerDetail"
          component={CareTakerDetail}
          options={{
            headerStyle: {
              backgroundColor: "#8285E0",
              borderBottomColor: "#FA2F60",
              borderTopWidth: Platform.OS === "ios" ? 30 : 30,
              borderTopColor: "#91C8FF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 7,
              },
              headerTitleStyle: {
                fontFamily: "KohinoorTelugu-Regular",
              },
              title: "Information",
              headerBackTitleVisible: false,
            },
          }}
        />
        <Screen
          name="GuardianDetail"
          component={GuardianDetail}
          options={{
            headerStyle: {
              backgroundColor: "#8285E0",
              borderBottomColor: "#FA2F60",
              borderTopWidth: Platform.OS === "ios" ? 30 : 30,
              borderTopColor: "#91C8FF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.43,
              shadowRadius: 9.51,
              elevation: 15,
            },

          
          headerTitleStyle: {
            fontFamily: "KohinoorTelugu-Regular",
          },
          title: "Information",
          headerBackTitleVisible: false,
        }}
      />

      <Screen
        name="ViewGuardianDetail"
        component={ViewGuardianDetail}
        options={{
          headerStyle: {
            backgroundColor: "#8285E0",
            borderBottomColor: "#FA2F60",
            borderTopWidth: Platform.OS === "ios" ? 30 : 30,
            borderTopColor: "#91C8FF",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.43,
            shadowRadius: 9.51,
            elevation: 15,
          },
          headerTitleStyle: {
            fontFamily: "KohinoorTelugu-Regular",
          },
          title: "Information",
          headerBackTitleVisible: false,
        }}
      />
  
        <Screen
          name="BookingCalender"
          component={BookingCalender}
          options={{
            headerStyle: {
              backgroundColor: "#8285E0",
              borderBottomColor: "#FA2F60",
              borderTopWidth: Platform.OS === "ios" ? 30 : 30,
              borderTopColor: "#91C8FF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.43,
              shadowRadius: 9.51,

              elevation: 15,
            },
            headerTitleStyle: {
              fontFamily: "KohinoorTelugu-Regular",
            },
            headerBackTitleVisible: false,
            title: "Calendar",
          }}
        />
        <Screen
          name="BookingTime"
          component={BookingTime}
          options={{
            headerStyle: {
              backgroundColor: "#8285E0",
              borderBottomColor: "#FA2F60",
              borderTopWidth: Platform.OS === "ios" ? 30 : 30,
              borderTopColor: "#91C8FF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.43,
              shadowRadius: 9.51,

              elevation: 15,
            },
            headerTitleStyle: {
              fontFamily: "KohinoorTelugu-Regular",
            },
            headerBackTitleVisible: false,
            title: "Booking Times",
          }}
        />
      </Navigator>

      {/* <Drawer open={open} setOpen={setOpen} /> */}
    </>
  );
};
export default Navigation;

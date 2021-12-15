// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import GuardianProfile from "../../components/profiles/guardian/GuardianProfile";
// import CareTakerProfile from "../../components/profiles/caretaker/CareTakerProfile";
// import ListOfAppointments from "../listofappointment/ListOfAppointments";
// import { createDrawerNavigator } from "@react-navigation/drawer";

// const DNavigation = () => {
//   const { Navigator, Screen } = createDrawerNavigator();
// // if condition either it returns screen "CT profile" or Screen "Gprofile"
// if(){
//     return <Navigator>
//     <Screen
//       name="CareTakerProfile"
//       component={CareTakerProfile}
//       options={{
//         headerStyle: {
//           backgroundColor: "#8285E0",
//           borderBottomColor: "#FA2F60",
//           borderTopWidth: Platform.OS === "ios" ? 30 : 30,
//           borderTopColor: "#91C8FF",
//           shadowColor: "#000",
//           shadowOffset: {
//             width: 0,
//             height: 7,
//           },
//           shadowOpacity: 0.43,
//           shadowRadius: 9.51,
//           elevation: 15,
//         },
//         headerTitleStyle: {
//           fontFamily: "KohinoorTelugu-Regular",
//         },
//         headerBackTitleVisible: false,
//         title: "Caretaker Profile",
//       }}
//     />
//     <Screen
//       name="AppointmentList"
//       component={ListOfAppointments}
//       options={{
//         drawerLabel: () => null,
//       }}
//     />
//   </Navigator>

// }
// else{
//     <Navigator>
//     <Screen name="GuardianProfile" component={GuardianProfile} />
//     <Screen
//       name="AppointmentList"
//       component={ListOfAppointments}
//       options={{
//         drawerLabel: () => null,
//       }}
//     />
//     </Navigator>

// }
// //   return (

//     // <Navigator>
//     //   <Screen
//     //     name="CareTakerProfile"
//     //     component={CareTakerProfile}
//     //     options={{
//     //       headerStyle: {
//     //         backgroundColor: "#8285E0",
//     //         borderBottomColor: "#FA2F60",
//     //         borderTopWidth: Platform.OS === "ios" ? 30 : 30,
//     //         borderTopColor: "#91C8FF",
//     //         shadowColor: "#000",
//     //         shadowOffset: {
//     //           width: 0,
//     //           height: 7,
//     //         },
//     //         shadowOpacity: 0.43,
//     //         shadowRadius: 9.51,
//     //         elevation: 15,
//     //       },
//     //       headerTitleStyle: {
//     //         fontFamily: "KohinoorTelugu-Regular",
//     //       },
//     //       headerBackTitleVisible: false,
//     //       title: "Caretaker Profile",
//     //     }}
//     //   />
//     //   <Screen name="GuardianProfile" component={GuardianProfile} />
//     //   <Screen
//     //     name="AppointmentList"
//     //     component={ListOfAppointments}
//     //     options={{
//     //       drawerLabel: () => null,
//     //     }}
//     //   />
//     // </Navigator>
// //   );
// };

// export default DNavigation;

// const styles = StyleSheet.create({});

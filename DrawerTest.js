// import React from "react";
// import CareTakerProfile from "./components/profiles/caretaker/CareTakerProfile";
// // import GuardianProfile from "./components/profiles/guardian/GuardianProfile";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";
// import { NativeBaseProvider } from "native-base";

// const Drawer = createDrawerNavigator();

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Close drawer"
//         onPress={() => props.navigation.closeDrawer()}
//       />
//       <DrawerItem
//         label="Toggle drawer"
//         onPress={() => props.navigation.toggleDrawer()}
//       />
//     </DrawerContentScrollView>
//   );
// }

// function MyDrawer() {
//   return (
//     <NavigationContainer>
//       <NativeBaseProvider>
//         <Drawer.Navigator
//           drawerContent={(props) => <CustomDrawerContent {...props} />}
//         >
//           <Drawer.Screen name="CareTakerProfile" component={CareTakerProfile} />
//           {/* <Drawer.Screen name="GuardianProfile" component={GuardianProfile} /> */}
//         </Drawer.Navigator>
//       </NativeBaseProvider>
//     </NavigationContainer>
//   );
// }

// export default MyDrawer();

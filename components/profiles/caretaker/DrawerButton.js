// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { Button } from "native-base";
// import { observer } from "mobx-react";
// import careTakerStore from "../../../Store/CareTakerStore";
// const DrawerButton = ({ navigation }) => {
//   const checkUser = () => {
//     if (careTakerStore.caretaker) {
//       return (
//         <Button
//           backgroundColor="#FA2F60"
//           marginRight="2"
/* <Button onPress={() => guardianStore.logout()}>Logout</Button> */
//         >
//           logout
//         </Button>
//       );
//     } else {
//       return (
//         <Button
//           backgroundColor="#FA2F60"
//           marginRight="3"
//           onPress={() => navigation.navigate("CareTakerSignin")}
//         >
//           Signin/up
//         </Button>
//       );
//     }
//   };
//   return <View>{checkUser()}</View>;
// };

// export default observer(DrawerButton);

// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { useState } from "react";
// import { useTheme, TouchableRipple, Switch } from "react-native-paper";

// const Settingss = () => {
//   const [isDarkTheme, setIsDarkTheme] = useState(false);
//   const toggleTheme = () => {
//     setIsDarkTheme(!isDarkTheme);
//   };
//   return (
//     <TouchableRipple
//       onPress={() => {
//         toggleTheme();
//       }}
//     >
//       <View style={styles.preference}>
//         <Text>Dark Theme</Text>
//         <View pointerEvents="none">
//           <Switch value={isDarkTheme} />
//         </View>
//       </View>
//     </TouchableRipple>
//   );
// };

// export default Settingss;

// const styles = StyleSheet.create({
//   preference: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingTop: 30,
//   },
//   title: {
//     fontSize: 16,
//     marginTop: 3,
//     fontWeight: "bold",
//     color: "#FA2F60",
//     marginLeft: 10,
//   },
// });

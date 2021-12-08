// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { VStack, Button, FormControl, Input } from "native-base";
// import ImagePickUpdate from "./ImagePickUpdate";
// import tripsStore from "../Store/tripsStore";
// import careTakerStore from "../../../Store/CareTakerStore";
// const UpdateCareProfile = ({ route, navigation }) => {
//   const { caretaker } = route.params;

//   const [updateCareTaker, setupdateCareTaker] = React.useState(caretaker);

//   //   const onSubmit = () => {
//   //     careTakerStore.editProfile(updateCareTaker, navigation);
//   //   };
//   return (
//     <VStack width="90%" mx="3">
//       <FormControl>
//         <FormControl.Label _text={{ bold: true }}>First Name</FormControl.Label>
//         <Input
//           margin="3"
//           //   placeholder={caretaker.profile.firstName}
//           onChangeText={(value) =>
//             setupdateCareTaker({ ...updateCareTaker, firstName: value })
//           }
//         />
//         <FormControl.Label _text={{ bold: true }}>
//           <ImagePickUpdate
//             setupdateCareTaker={setupdateCareTaker}
//             updateCareTaker={updateCareTaker}
//           />
//         </FormControl.Label>

//         <FormControl.Label _text={{ bold: true }}>
//           Description
//         </FormControl.Label>
//         <Input
//           placeholder={trip.description}
//           onChangeText={(value) =>
//             setUpdateTrip({ ...updateCareTaker, description: value })
//           }
//         />
//       </FormControl>
//       <Button onPress={onSubmit} mt="5" colorScheme="cyan">
//         Submit
//       </Button>
//     </VStack>
//   );
// };

// export default UpdateCareProfile;

// const styles = StyleSheet.create({});

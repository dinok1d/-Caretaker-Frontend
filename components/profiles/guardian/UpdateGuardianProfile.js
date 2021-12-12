import React from "react";
import { StyleSheet, View, Button, Platform } from "react-native";
import { VStack, Button, FormControl, Input } from "native-base";
import careStore from "../../../Store/CareStore";
import { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import guardStore from "../../../Store/GuardStore";

const UpdateCareProfile = ({ route, navigation }) => {
  const [updateCareTaker, setupdateCareTaker] = React.useState(trip);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      let localUri = result.uri;
      let filename = localUri.split("/").pop();

      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      setupdateCareTaker({
        ...updateCareTaker,
        image: { uri: localUri, name: filename, type },
      });
    }
  };

  const onSubmit = () => {
    guardStore.editProfile(updateCareTaker, navigation);
  };
  return (
    <VStack width="90%" mx="3">
      <FormControl>
        <FormControl.Label _text={{ bold: true }}>userName</FormControl.Label>
        <Input
          style={styles.userName}
          onChangeText={(value) =>
            setupdateCareTaker({
              ...caretaker,
              profile: { ...caretaker.profile, firstName: value },
            })
          }
          placeholder="first name"
        />
        <FormControl.Label _text={{ bold: true }}>lastName</FormControl.Label>
        <Input
          style={styles.userName}
          onChangeText={(value) =>
            setupdateCareTaker({
              ...caretaker,
              profile: { ...caretaker.profile, lastName: value },
            })
          }
          placeholder="last name"
        />
        <FormControl.Label _text={{ bold: true }}>userName</FormControl.Label>
        <Input
          style={styles.userName}
          onChangeText={(value) =>
            setupdateCareTaker({
              ...caretaker,
              profile: { ...caretaker.profile, firstName: value },
            })
          }
          placeholder="first name"
        />
        <FormControl.Label _text={{ bold: true }}>userName</FormControl.Label>
        <Input
          style={styles.userName}
          onChangeText={(value) =>
            setupdateCareTaker({
              ...caretaker,
              profile: { ...caretaker.profile, numberOfKids: value },
            })
          }
          placeholder="numberOfKids"
        />
        <FormControl.Label _text={{ bold: true }}>bio</FormControl.Label>
        <Input
          style={styles.userName}
          onChangeText={(value) =>
            setupdateCareTaker({
              ...caretaker,
              profile: { ...caretaker.profile, bio: value },
            })
          }
          placeholder="bio"
        />
      </FormControl>

      <Button onPress={onSubmit} mt="5" colorScheme="cyan">
        Submit
      </Button>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
      </View>
    </VStack>
  );
};

export default UpdateCareProfile;

const styles = StyleSheet.create({});

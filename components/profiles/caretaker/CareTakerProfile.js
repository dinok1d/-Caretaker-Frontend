import React, { useState } from "react";
import { observer } from "mobx-react";

import {
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
  Text,
  Image,
} from "react-native";
import { Button, Input } from "native-base";
import careStore from "../../../Store/CareStore";
import careTakerStore from "../../../Store/CareTakerStore";
import { useEffect } from "react";
import TimePicker from "../../timePicker/TimePicker";
import ImagePickerCaretaker from "../../imagePicker/ImagePickerCaretaker";
const CareTakerProfileList = ({ navigation, route }) => {
  const [caretakerProfile, setCaretakerProfile] = useState(
    careStore.careTakerProfile || {
      firstName: "",
      lastName: "",
      image: "",
      numberOfKids: "",
      bio: "",
    }
  );
  console.log(caretakerProfile);
  // i want to update profile using the browser
  useEffect(async () => {
    careStore.fetchProfile(careTakerStore.caretaker._id);
  }, []);

  const updateProfile = () => {
    careStore.editProfile(caretakerProfile, navigation);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjO7Lo0Q9eCXYhlXQGfvEzL1OM7muSI3EQ_A&usqp=CAU",
        }}
        alt="image"
      />

      <View>
        <Input
          style={styles.userName}
          onChangeText={(value) =>
            setCaretakerProfile({
              ...caretakerProfile,
              firstName: value,
            })
          }
          value={caretakerProfile.firstName}
          placeholder="first name"
        />

        <Input
          style={styles.userName}
          onChangeText={(value) =>
            setCaretakerProfile({
              ...caretakerProfile,
              lastName: value,
            })
          }
          value={caretakerProfile.lastName}
          placeholder="last name"
        />

        <Input
          style={styles.userName}
          onChangeText={(value) =>
            setCaretakerProfile({ ...caretakerProfile, bio: value })
          }
          value={caretakerProfile.bio}
          placeholder="bio"
        />
        <Input
          style={styles.userName}
          onChangeText={(value) =>
            setCaretakerProfile({
              ...caretakerProfile,
              qualification: value,
            })
          }
          value={caretakerProfile.qualification}
          placeholder="qualification"
        />

        <Input
          style={styles.input}
          onChangeText={(value) =>
            setCaretakerProfile({
              ...caretakerProfile,
              pastExp: value,
            })
          }
          value={caretakerProfile.pastExp}
          placeholder="pastExp"
        />
        <ImagePickerCaretaker
          setCaretakerProfile={setCaretakerProfile}
          caretaker={caretakerProfile}
        />
        <Button
          marginTop="10"
          marginBottom="10"
          onPress={() => careTakerStore.logout()}
        >
          logout
        </Button>

        <Button marginTop="10" marginBottom="10" onPress={updateProfile}>
          Done
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default observer(CareTakerProfileList);

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginBottom: 10,
  },
  userBtn: {
    borderColor: "#2e64e5",
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: "#2e64e5",
  },
  userInfoWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: "center",
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
});

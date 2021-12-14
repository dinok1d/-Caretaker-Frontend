import React, { useState } from "react";
import { observer } from "mobx-react";
import { Card, Button } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ScrollView } from "react-native";
import { Input } from "native-base";
import Styles from "../../../Styles";
import careStore from "../../../Store/CareStore";
import careTakerStore from "../../../Store/CareTakerStore";

import ImagePickerCaretaker from "../../imagePicker/ImagePickerCaretaker";

const CareTakerProfileList = ({ navigation, route }) => {
  const [caretakerProfile, setCaretakerProfile] = useState(
    careTakerStore.careTakerProfile?.profile || {
      firstName: "",
      lastName: "",
      image: "",
      numberOfKids: "",
      bio: "",
      specialty: "",
    }
  );

  const updateProfile = () => {
    careStore.editProfile(caretakerProfile, navigation);
  };

  return (
    <ScrollView>
      <LinearGradient
        colors={["#C0D6F9", "#B07DF0", "#C0D6F9"]}
        style={styles.background}
      />
      <Card containerStyle={Styles.container} wrapperStyle={Styles.wrapper}>
        <Card.Title
          style={{
            fontSize: 18,
          }}
        >
          Update Profile
        </Card.Title>

        <Card.Divider />

        <Card.Image
          source={
            caretakerProfile.image == ""
              ? require("../../../assets/defaultperson.png")
              : `${caretakerProfile.image}`.startsWith("http")
              ? { uri: caretakerProfile.image }
              : caretakerProfile.image
          }
          style={{
            height: 200,
            width: 300,
            margin: 10,
          }}
        ></Card.Image>

        <Input
          autoCapitalize="none"
          style={styles.userName}
          onChangeText={(value) =>
            setCaretakerProfile({
              ...caretakerProfile,
              firstName: value,
            })
          }
          value={caretakerProfile.firstName}
          placeholder="First Name"
        />

        <Input
          autoCapitalize="none"
          style={styles.userName}
          onChangeText={(value) =>
            setCaretakerProfile({
              ...caretakerProfile,
              lastName: value,
            })
          }
          value={caretakerProfile.lastName}
          placeholder="Last Name"
        />

        <Input
          autoCapitalize="none"
          style={styles.userName}
          onChangeText={(value) =>
            setCaretakerProfile({
              ...caretakerProfile,
              qualification: value,
            })
          }
          value={caretakerProfile.qualification}
          placeholder="Qualification:"
        />

        <Input
          autoCapitalize="none"
          style={styles.userName}
          onChangeText={(value) =>
            setCaretakerProfile({
              ...caretakerProfile,
              pastExp: value,
            })
          }
          value={caretakerProfile.pastExp}
          placeholder="Experience:"
        />

        <Input
          autoCapitalize="none"
          style={styles.userName}
          onChangeText={(value) =>
            setCaretakerProfile({ ...caretakerProfile, bio: value })
          }
          value={caretakerProfile.bio}
          placeholder="Biography"
        />
        <Input
          autoCapitalize="none"
          style={styles.userName}
          onChangeText={(value) =>
            setCaretakerProfile({ ...caretakerProfile, specialty: value })
          }
          value={caretakerProfile.specialty}
          placeholder="Specialty: e.g. nany, maid, etc"
        />

        <ImagePickerCaretaker
          setCaretakerProfile={setCaretakerProfile}
          caretakerProfile={caretakerProfile}
        />
        <Button
          buttonStyle={{
            borderRadius: Platform.OS === "ios" ? 20 : 20,
            marginTop: 10,
            backgroundColor: "#FA2F60",
          }}
          title="Update"
          onPress={updateProfile}
        />
      </Card>
    </ScrollView>
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
    fontSize: 16,
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
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});

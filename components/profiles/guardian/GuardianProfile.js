import React, { useState, useEffect } from "react";
import guardianStore from "../../../Store/GuardianStore";
import guardStore from "../../../Store/GuardStore";
import { observer } from "mobx-react";
import { Input } from "native-base";
import { Card, Button } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ScrollView } from "react-native";
import Styles from "../../../Styles";

const GuardianProfile = ({ navigation }) => {
  const [guardian, setGuardian] = useState({
    profile: {
      firstName: "",
      lastName: "",
      image: require("../../../assets/defaultperson.png"),
      bio: "",
      numberOfKids: "",
    },
  });

  // i want to update profile using the browser
  useEffect(async () => {
    guardStore.fetchGuardianProfile(guardianStore.guardian._id);
  }, []);

  const onSubmit = () => {
    guardStore.editGuardianProfile(guardian, navigation);
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
          source={require("../../../assets/defaultperson.png")}
          style={{
            height: 200,
            width: 300,
            margin: 10,
          }}
        ></Card.Image>

        <Input
          style={styles.userName}
          onChangeText={(value) =>
            setGuardian({
              ...guardian,
              profile: { ...guardian.profile, firstName: value },
            })
          }
          placeholder="First Name"
        />

        <Input
          style={styles.userName}
          onChangeText={(value) =>
            setGuardian({
              ...guardian,
              profile: { ...guardian.profile, lastName: value },
            })
          }
          placeholder="Last Name"
        />

        <Input
          style={styles.userName}
          onChangeText={(value) =>
            setGuardian({
              ...guardian,
              profile: { ...guardian.profile, bio: value },
            })
          }
          placeholder="Biography"
        />
        <Input
          style={styles.userName}
          onChangeText={(value) =>
            setGuardian({
              ...guardian,
              profile: { ...guardian.profile, numberOfKids: value },
            })
          }
          placeholder="How Many Kids Do You Have?"
        />
        {/* <ImagePickerCaretaker
          setCaretakerProfile={setCaretakerProfile}
          caretaker={caretakerProfile}
        /> */}
        <Button
          buttonStyle={{
            borderRadius: Platform.OS === "ios" ? 20 : 20,
            marginTop: 10,
            backgroundColor: "#FA2F60",
          }}
          title="Update"
        />
      </Card>
    </ScrollView>
  );
};

export default observer(GuardianProfile);

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

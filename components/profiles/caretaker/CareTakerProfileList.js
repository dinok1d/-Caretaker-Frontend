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
import { baseURL } from "../../../Store/instance";
import { Button, Input } from "native-base";
import careStore from "../../../Store/CareStore";
import careTakerStore from "../../../Store/CareTakerStore";
import { useEffect } from "react";

const CareTakerProfileList = ({ navigation, route }) => {
  const [caretaker, setCaretaker] = useState({
    profile: {
      firstName: "",
      lastName: "",
      image: require("../../../assets/defaultperson.png"),
      bio: "",
      qualification: "",
      pastExp: "",
    },
  });

  // i want to update profile using the browser
  useEffect(async () => {
    careStore.fetchProfile(careTakerStore.caretaker._id);
  }, []);

  const onSubmit = () => {
    careStore.editProfile(caretaker, navigation);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* <Image
        style={styles.userImg}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjO7Lo0Q9eCXYhlXQGfvEzL1OM7muSI3EQ_A&usqp=CAU",
        }}
        alt="image"
      /> */}
      <View>
        <Input
          style={styles.userName}
          onChangeText={(value) =>
            setCaretaker({
              ...caretaker,
              profile: { ...caretaker.profile, firstName: value },
            })
          }
          placeholder="first name"
        />

        <Input
          style={styles.userName}
          onChangeText={(value) =>
            setCaretaker({
              ...caretaker,
              profile: { ...caretaker.profile, lastName: value },
            })
          }
          placeholder="last name"
        />

        <Input
          style={styles.userName}
          onChangeText={(value) =>
            setCaretaker({
              ...caretaker,
              profile: { ...caretaker.profile, bio: value },
            })
          }
          placeholder="bio"
        />
        <Input
          style={styles.userName}
          onChangeText={(value) =>
            setCaretaker({
              ...caretaker,
              profile: { ...caretaker.profile, qualification: value },
            })
          }
          placeholder="qualification"
        />

        <Input
          style={styles.input}
          onChangeText={(value) =>
            setCaretaker({
              ...caretaker,
              profile: { ...caretaker.profile, pastExp: value },
            })
          }
          placeholder="pastExp"
        />
        {/* <ImagePickUpdate
          setupdateCareTaker={setupdateCareTaker}
          updateCareTaker={updateCareTaker}
        /> */}
        {/* <Image
          source={{
            uri: baseURL + care,
          }}
          style={{ width: 100, height: 100 }}
        /> */}

        <Button
          marginTop="10"
          marginBottom="10"
          onPress={() => careTakerStore.logout()}
        >
          logout
        </Button>
        {/* <Button onPress={onSubmit}> edit profile</Button> */}
        <Button marginTop="10" marginBottom="10" onPress={onSubmit}>
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

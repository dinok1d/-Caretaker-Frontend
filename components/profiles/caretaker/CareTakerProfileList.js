import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
  Text,
  Image,
} from "react-native";
import careTakerStore from "../../../Store/CareTakerStore";
import { Button } from "native-base";

const CareTakerProfileList = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  const [caretaker, setCaretaker] = React.useState({
    username: "Deema",
    email: "Deema@gmail.com",
    FirstName: "Deema",
    LastName: "Burhama",
    // Image: "",
    qualification: "Engineer",
    PastExpo: "Engineer",
    Bio: "wife - mother - engineer",
    // Status: "",
  });
  const onSubmit = () => {
    careTakerStore.editProfile(caretaker, navigation);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Image
        style={styles.userImg}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjO7Lo0Q9eCXYhlXQGfvEzL1OM7muSI3EQ_A&usqp=CAU",
        }}
        alt="image"
      />
      <View>
        <TextInput
          style={styles.userName}
          onChangeText={(value) =>
            setCaretaker({ ...caretaker, FirstName: value })
          }
          value={text}
          placeholder="first name"
        />

        <TextInput
          style={styles.userName}
          onChangeText={(value) =>
            setCaretaker({ ...caretaker, LastName: value })
          }
          value={text}
          placeholder="last name"
        />

        <TextInput
          style={styles.userName}
          onChangeText={(value) => setCaretaker({ ...caretaker, bio: value })}
          value={text}
          placeholder="bio"
        />
        <TextInput
          style={styles.userName}
          onChangeText={(value) =>
            setCaretaker({ ...caretaker, qualification: value })
          }
          value={text}
          placeholder="qualification"
        />

        <TextInput
          style={styles.input}
          onChangeText={(value) =>
            setCaretaker({ ...caretaker, PastExpo: value })
          }
          value={text}
          placeholder="pastExp"
        />

        {/* <View style={styles.userInfoWrapper}>
            <View style={styles.userInfoItem}></View>

            <Text style={styles.userInfoTitle}>My Title</Text>
            <Text style={styles.userInfoSubTitle}>Engineer</Text>
            <Text style={styles.userInfoTitle}>My hobbies</Text>
            <Text style={styles.userInfoSubTitle}>Writing</Text>
          </View> */}
        <Button
          marginTop="10"
          marginBottom="10"
          onPress={() => careTakerStore.logout()}
        >
          logout
        </Button>
        <Button onPress={onSubmit}> edit profile</Button>
        <Button marginTop="10" marginBottom="10" onPress={onSubmit}>
          Done
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default CareTakerProfileList;

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

// const checkDefault = () => {
//   if (careTakerStore.caretaker) {
//     return (
//       <Button marginRight="2" onPress={() => userAuthStore.logout()}>
//         Log Out
//       </Button>
//     );
//   } else {
//     return (
//       <Button marginRight="3" onPress={() => navigation.navigate("Signin")}>
//         Signin/up
//       </Button>
//     );
//   }
// };
// return <View>{checkUser()}</View>;

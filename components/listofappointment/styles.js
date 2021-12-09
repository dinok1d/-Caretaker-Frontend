import { Center } from "native-base";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  background: { height: "100%", width: "100%", backgroundColor: "#C0D6F9" },
  Image: {
    width: "75%",
    height: "40%",
    marginTop: "5%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: Platform.OS === "ios" ? 5 : 20,
  },

  profilePic: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Platform.OS === "ios" ? 50 : 20,
    backgroundColor: "grey",
    width: 100,
    height: 100,
    marginTop: "5%",
    marginBottom: "5%",
    marginLeft: "5%",
    marginRight: "5%",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "7%",
  },
  buttonSpace: {
    marginLeft: "5%",
  },
});

export default styles;

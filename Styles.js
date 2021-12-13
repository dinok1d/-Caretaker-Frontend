import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
  container: {
    borderColor: "pink",
    borderRadius: 20,

    shadowColor: "#000",

    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  wrapper: {
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Styles;

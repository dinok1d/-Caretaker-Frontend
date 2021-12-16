import { runInAction, makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import { instance } from "./instance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import careStore from "./CareStore";
import { baseURL } from "../Store/instance";
import { Spinner } from "native-base";
class CareTakerStore {
  caretaker = null;

  careTakerProfile = null;
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }
  signup = async (userData, navigation) => {
    try {
      const res = await instance.post("/caretaker/Signup", userData);
      runInAction(() => {
        this.setUser(res.data.token);
      });

      navigation.navigate("CareTakerProfile");
    } catch (error) {
      console.log(error);
    }
  };
  signin = async (user, navigation, toast) => {
    try {
      const res = await instance.post("/caretaker/Signin", user);

      await this.setUser(res.data.token);

      const foundProfile = careStore.caretakers.find(
        (caretaker) => caretaker._id === careTakerStore.caretaker._id
      );

      foundProfile.profile.image = baseURL + foundProfile.profile.image;
      this.careTakerProfile = foundProfile;
      // navigation.navigate("Drawer", { screen: "AppointmentList" });

      this.isLoading = false;

      navigation.navigate("AppointmentList");
    } catch (error) {
      console.log(error);
      toast.show({
        status: "error",
        title: "Invalid Login",
        description: "Username/Password is incorrect",
      });
    }
  };
  setUser = async (token) => {
    try {
      await AsyncStorage.setItem("CaretakerToken", token);

      this.caretaker = decode(token);

      if (careStore.isloadingWhole) return <Spinner />;

      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    } catch (error) {}
  };
  logout = async (navigation, toast) => {
    try {
      delete instance.defaults.headers.common.Authorization;
      await AsyncStorage.removeItem("CaretakerToken");

      this.caretaker = null;

      navigation.navigate("CareTakerSignin");
      toast.show({
        status: "success",
        title: "Logged out",
        description: "Successfully logged out",
      });
    } catch (error) {
      console.log(error);
    }
  };
  checkForToken = async () => {
    try {
      const token = await AsyncStorage.getItem("CaretakerToken");
      if (token) {
        const currentTime = Date.now();
        let tempUser = decode(token);
        if (tempUser.exp >= currentTime) {
          this.setUser(token);
        } else {
          this.logout();
        }
      }
    } catch (error) {}
  };
}
const careTakerStore = new CareTakerStore();

// careTakerStore.checkForToken();
export default careTakerStore;
// we need an loading for the null

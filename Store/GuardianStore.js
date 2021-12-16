import { runInAction, makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import { instance } from "./instance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import guardStore from "./GuardStore";
import { baseURL } from "../Store/instance";

class GuardianStore {
  guardian = null;
  guardianProfile = null;
  isLoading = true;
  constructor() {
    makeAutoObservable(this);
  }
  signup = async (userData, navigation) => {
    try {
      const res = await instance.post("/guardian/Signup", userData);
      runInAction(() => {
        this.setUser(res.data.token);
      });

      navigation.navigate("GuardianProfile");
    } catch (error) {
      console.log(error);
    }
  };
  signin = async (user, navigation, toast) => {
    try {
      const res = await instance.post("/guardian/Signin", user);

      await this.setUser(res.data.token);

      const foundProfile = guardStore.guardians.find(
        (guardian) => guardian._id === this.guardian._id
      );

      foundProfile.profile.image = baseURL + foundProfile.profile.image;
      this.guardianProfile = foundProfile;
      // this.isLoading = false;
      navigation.navigate("CaretakerList");
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
      await AsyncStorage.setItem("myToken", token);

      this.guardian = decode(token);
      if (guardStore.isLoadingWhole) return <Spinner />;
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    } catch (error) {}
  };

  logout = async (navigation, toast) => {
    try {
      delete instance.defaults.headers.common.Authorization;
      await AsyncStorage.removeItem("myToken");

      this.guardian = null;

      navigation.replace("CareTakerSignin");
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
      const token = await AsyncStorage.getItem("myToken");
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
const guardianStore = new GuardianStore();
// guardianStore.checkForToken();
export default guardianStore;

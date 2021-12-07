import { runInAction, makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import { instance } from "./instance";
import AsyncStorage from "@react-native-async-storage/async-storage";
class CareTakerStore {
  caretaker = null;

  constructor() {
    makeAutoObservable(this);
  }
  signup = async (userData, navigation, toast) => {
    try {
      const res = await instance.post("/caretaker/Signup", userData);
      runInAction(() => {
        this.setUser(res.data.token);
      });

      navigation.navigate("AppointmentList");
    } catch (error) {
      console.log(error);
      toast.show({
        status: "error",
        title: "Invalid Login",
        description: "You are not a CareTaker",
      });
    }
  };
  signin = async (user, navigation) => {
    try {
      const res = await instance.post("/caretaker/Signin", user);
      runInAction(async () => {
        await this.setUser(res.data.token);
      });
      console.log(this.caretaker);
      navigation.navigate("AppointmentList");
    } catch (error) {
      console.log(error);
    }
  };
  setUser = async (token) => {
    try {
      await AsyncStorage.setItem("myToken", token);
      runInAction(() => {
        this.caretaker = decode(token);
      });

      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    } catch (error) {}
  };
  logout = async () => {
    try {
      delete instance.defaults.headers.common.Authorization;
      await AsyncStorage.removeItem("myToken");
      runInAction(() => {
        this.caretaker = null;
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

  // editProfile = async (updatedProfile, navigation) => {
  //   try {
  //     const foundProfile = this.caretaker.profile

  //     const formData = new FormData();
  //     for (const key in updatedProfile) {
  //       formData.append(key, updatedProfile[key]);
  //     }

  //     const res = await instance.put(`/profile/`, formData);
  //     for (const key in foundProfile)
  //     foundProfile[key] = res.data[key];
  //     this.userProfile = res.data;
  //     navigation.navigate("Profile", { profile: this.userProfile });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // }
}

const careTakerStore = new CareTakerStore();
careTakerStore.checkForToken();
export default careTakerStore;

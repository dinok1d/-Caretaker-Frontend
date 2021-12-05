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
      const res = await instance.post("/signup", userData);
      runInAction(() => {
        this.setUser(res.data.token);
      });

      //   navigation.replace("ListOfAppointments");
    } catch (error) {
      console.log(error);
      toast.show({
        status: "error",
        title: "Invalid Login",
        description: "You are not a CareTaker",
      });
    }

    signin = async (user, navigation) => {
      try {
        const res = await instance.post("/signin", user);
        runInAction(() => {
          this.setUser(res.data.token);
        });

        //   navigation.goBack();
      } catch (error) {
        console.log(error);
      }
    };
    setUser = async (token) => {
      try {
        await AsyncStorage.setItem("myToken", token);
        runInAction(() => {
          this.user = decode(token);
        });

        instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      } catch (error) {}
    };
    logout = async () => {
      try {
        delete instance.defaults.headers.common.Authorization;
        await AsyncStorage.removeItem("myToken");
        runInAction(() => {
          this.user = null;
        });
      } catch (error) {
        console.log(error);
      }
    };
    checkForToken = async () => {
      try {
        const token = await AsyncStorage.getItem("myToken");
        if (token) {
          const caretaker = decode(token);
          const expiration = caretaker.expiration * 1000;
          if (expiration >= Date.now()) {
            this.setUser(token);
          } else {
            this.logout();
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
  };
}

const careTakerStore = new CareTakerStore();
careTakerStore.checkForToken();
export default careTakerStore;

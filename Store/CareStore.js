import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CareStore {
  careTakerProfile = null;
  caretakers = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchCaretakers = async () => {
    try {
      const res = await instance.get("/caretaker");
      this.caretakers = res.data;
      this.isLoading = false;
    } catch (error) {
      next(error);
    }
  };

  fetchProfile = (caretakerId) => {
    const foundProfile = this.caretakers.find(
      (caretaker) => caretaker._id === caretakerId
    );

    // console.log("this is foundProfile is Store", foundProfile);
    this.careTakerProfile = foundProfile;
    return foundProfile;
  };

  editProfile = async (updatedProfile, navigation) => {
    try {
      const formData = new FormData();
      for (const key in updatedProfile) {
        formData.append(key, updatedProfile[key]);
      }

      const res = await instance.put(`/caretaker/profile/`, formData);
      this.careTakerProfile = res.data;
      navigation.navigate("CareTakerProfileList");
    } catch (error) {
      console.error(error);
    }
  };
}

const careStore = new CareStore();
careStore.fetchCaretakers();
export default careStore;

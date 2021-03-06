import { makeAutoObservable } from "mobx";
import careTakerStore from "./CareTakerStore";
import instance from "./instance";

class CareStore {
  careTakerProfile = null;
  caretakers = [];
  isLoading = true;
  isloadingWhole = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchCaretakers = async () => {
    try {
      const res = await instance.get("/caretaker");
      this.caretakers = res.data;
      this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };

  fetchCaretakerProfile = (caretakerId) => {
    const foundProfile = this.caretakers.find(
      (caretaker) => caretaker._id === caretakerId
    );
    this.careTakerProfile = foundProfile;
    return foundProfile;
  };

  editProfile = async (updatedProfile, navigation) => {
    try {
      const formData = new FormData();
      for (const key in updatedProfile) {
        formData.append(key, updatedProfile[key]);
      }

      const res = await instance.put("/caretaker/profile/", formData);
      this.careTakerProfile = res.data;
      navigation.navigate("AppointmentList");
    } catch (error) {
      console.error(error);
    }
  };
}

const careStore = new CareStore();
careStore.fetchCaretakers();
careStore.isloadingWhole = false;
export default careStore;

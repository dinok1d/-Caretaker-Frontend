import { makeAutoObservable } from "mobx";
import instance from "./instance";

class GuardStore {
  careTakerProfile = null;
  guardians = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchGuards = async () => {
    try {
      const res = await instance.get("/guardian");
      this.guardians = res.data;
      this.isLoading = false;
    } catch (error) {
      next(error);
    }
  };

  fetchProfile = (guardianId) => {
    const foundProfile = this.guardians.find(
      (guardian) => guardian._id === guardianId
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
      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
    }
  };
}

const careStore = new CareStore();
careStore.fetchCaretakers();
export default careStore;

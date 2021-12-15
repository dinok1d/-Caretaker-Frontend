import { makeAutoObservable } from "mobx";
import instance from "./instance";

class GuardStore {
  guardianProfile = null;
  guardians = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }
  fetchGuardian = async () => {
    try {
      const res = await instance.get("/guardian");
      this.guardians = res.data;
      this.isLoading = false;
      console.log(guardians);
    } catch (error) {
      next(error);
    }
  };

  fetchGuardianProfile = (guardianId) => {
    const foundProfile = this.guardians.find(
      (guardian) => guardian._id === guardianId
    );
    this.guardianProfile = foundProfile;
    return foundProfile;
  };

  editGuardianProfile = async (updatedProfile, navigation) => {
    try {
      const formData = new FormData();
      for (const key in updatedProfile) {
        formData.append(key, updatedProfile[key]);
      }

      const res = await instance.put("/guardian/profile/", formData);
      this.guardianProfile = res.data;
      navigation.navigate("CaretakerList");
    } catch (error) {
      console.error(error);
    }
  };
}

const guardStore = new GuardStore();
guardStore.fetchGuardian();
export default guardStore;

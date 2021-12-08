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
}

const careStore = new CareStore();
careStore.fetchCaretakers();
export default careStore;

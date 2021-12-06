import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CareStore {
  caretaker = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchCaretakers = async () => {
    try {
      const res = await instance.get("/caretaker");
      this.caretaker = res.data;
      this.isLoading = false;
    } catch (error) {
      next(error);
    }
  };
}

const careStore = new CareStore();
careStore.fetchCaretakers();
export default careStore;

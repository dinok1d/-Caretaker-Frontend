import { makeAutoObservable } from "mobx";
import instance from "./instance";

class AppointStore {
  appointment = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchAppointment = async () => {
    try {
      const res = await instance.get("/appointment");
      this.appointment = res.data;
      this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };
}

const appointStore = new AppointStore();
appointStore.fetchAppointment();
export default appointStore;

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

  bookAppointment = async (bookingDetails) => {
    try {
      console.log(bookingDetails);
      await instance.post("/appointment", bookingDetails);
    } catch (error) {
      console.log(error);
    }
  };

  appointmentDelete = async (appointmentId) => {
    try {
      await instance.delete(`/appointment/${appointmentId}`);
      this.appointment = this.appointment.filter(
        (appointment) => appointment._id !== appointmentId
      );
    } catch (error) {
      console.log(error);
    }
  };

  updateAppointment = async (appointmentId, status, navigation, toast) => {
    try {
      const appointment = this.appointment.find(
        (appointment) => appointment._id === appointmentId
      );
      // console.log(status);
      const res = await instance.put(`/appointment/${appointmentId}`, {
        status: status,
      });
      appointment.status = status;

      toast.show({
        title: "Appointment Updated",
        status: "success",
        placement: "top",
      });
      navigation.navigate("AppointmentList");
    } catch (error) {
      console.log(error);
    }
  };
  get numberOfAppointments() {
    let total = 0;
    this.appointment.forEach(
      (appointment) => (total = total += appointment.quantity)
    );

    return total;
  }
}

const appointStore = new AppointStore();
appointStore.fetchAppointment();
export default appointStore;

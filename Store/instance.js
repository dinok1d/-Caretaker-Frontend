import axios from "axios";

// deema's IP
// export const baseURL = "http://192.168.8.111:8000";

// abdullah's IP
// export const baseURL = "http://192.168.8.130:8000";

// Zainab's IP
export const baseURL = "http://192.168.1.55:8000";

// Sayed's IP

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});
export default instance;

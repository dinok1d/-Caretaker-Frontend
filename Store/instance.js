import axios from "axios";

// deema's IP
export const baseURL = "http://192.168.8.111:8000";

// abdullah's IP
// export const baseURL = "http://192.168.8.130:8000";

// Zainab's IP

// Sayed's IP

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});
export default instance;

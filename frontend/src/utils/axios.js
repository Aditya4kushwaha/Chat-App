import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://chat-app-99kn.onrender.com/",
  withCredentials: true,
});

export default axiosInstance;

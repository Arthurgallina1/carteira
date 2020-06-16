import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.178.147:5000",
});

export default api;

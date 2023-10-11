import axios from "axios";

const api = axios.create({
  baseURL: "http://www.safein.care:8080",
});

export default api;

import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:5001/"
});

instance.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("authed");

export default instance;
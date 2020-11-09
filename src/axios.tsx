import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL_BACKEND
});

instance.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("authed");

export default instance;
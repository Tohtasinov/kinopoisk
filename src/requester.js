import axios from "axios";

export const API_KEY = `38ad7ca3-0c03-463e-ad68-61104bbb3a50`;

const API = axios.create({
  baseURL: "https://kinopoiskapiunofficial.tech/",
});

API.defaults.headers["X-API-KEY"] = API_KEY;

export default API;

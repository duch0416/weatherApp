import axios from "axios";

const baseURL = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api";

export const api = axios.create({
  baseURL,
  timeout: 30 * 1000,
});

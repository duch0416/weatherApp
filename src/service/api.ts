import axios from "axios";

const baseURL = "https://www.metaweather.com/api/";

export const api = axios.create({
  baseURL,
  timeout: 30 * 1000,
});

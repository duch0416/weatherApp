import axios from "axios";

const baseURL = "https://www.metaweather.com/api/";

export const apiService = axios.create({
  baseURL,
  timeout: 30 * 1000,
});

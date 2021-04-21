import axios from "axios";

const baseURL = "https://www.metaweather.com/api";

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
 },
  timeout: 30 * 1000,
});

import axios from "axios";

export const API_BASE_URL = "http://localhost:8081";

export const getAxiosInstance = () => {
  const jwt = localStorage.getItem("token");
  return axios.create({
    baseURL: API_BASE_URL,
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    },
  });
}
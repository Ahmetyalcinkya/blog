import axios from "axios";

export const AxiosWAuth = () => {
  const token = localStorage.getItem("Blog-token");
  return axios.create({
    baseURL: "http://localhost:9000/",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
};

export const renewAPI = (token) => {
  token && localStorage.setItem("Blog-token", token);
  AxiosWAuth();
};

renewAPI(localStorage.getItem("Blog-token"));

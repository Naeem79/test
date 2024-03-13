import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:3001",
});

instance.interceptors.request.use((config) => {
  config.headers["Authorization"] = localStorage.getItem("token") || "";
  return config;
});

const post = async (url, data, headers) => {
  try {
    const response = await instance.post(url, data, { headers });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const Api = {
  post,
};

export default Api;

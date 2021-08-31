import axios from "axios";

const baseURL = "https://61252b8e3c91fb0017e729a7.mockapi.io/api/v1";

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;

import { useTheme } from "@emotion/react";
import axiousClient from "./axiouClient";

const author = {
  register: async (body) => {
    const url = `https://movie-web-backend-yui1.onrender.com/api/v1/users/register`;
    return axiousClient.post(url, body);
  },
  login: async (body) => {
    const url = `https://movie-web-backend-yui1.onrender.com/api/v1/users/login`;
    return axiousClient.post(url, body, { withCredentials: true });
  },
  logout: async () => {
    const url =
      "https://movie-web-backend-yui1.onrender.com/api/v1/users/logout";
    return axiousClient.get(url);
  },
  loginByGoogle: async () => {
    const url = `/api/v1/auth/google`;

    return axiousClient.get(url);
  },
};

export default author;

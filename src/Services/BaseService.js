import axios from 'axios';
import Cookies from "js-cookie";

const unauthorizedCode = [401];

// export const main_URL = "https://uicommercial.com";
export const main_URL = "https://beta.uicommercial.com";

export const main_URL_Base = "http://localhost:3000/api";
// export const main_URL_Base = "http://uicommercial.com:3002/api";
// export const main_URL_Base = "https://uicommercial.com/api";
// export const main_URL_Base = "https://beta.uicommercial.com/api";

export const engine_URL = "http://localhost:4115";

export const engineDownload_URL = "https://github.com/utsteck/Engine/releases/download/1.0.17/UICengine-Setup-1.0.17.exe";

const BaseService = axios.create({
  timeout: 60000,
  baseURL: main_URL_Base,
  headers: { "Content-Type": "application/json" },
});

BaseService.interceptors.request.use(
  (config) => {
    if (config.omitCookies) {
      config.headers.Cookie = "";
    }

    let token = Cookies.get("auth_token");
    if (main_URL_Base === "https://uicommercial.com/api")
      token = Cookies.get("auth_token");
    else {
      token = Cookies.get("auth_token_test");
    }
    // console.log(token)
    const entToken = Cookies.get("ent_admin_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (entToken) {
      config.headers.ent_t = `Bearer ${entToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

BaseService.interceptors.response.use(
  (response) => {
    if (response.status === 200) response.ok = true;

    return response;
  },
  (error) => {
    const { response } = error;

    if (response && unauthorizedCode.includes(response.status)) {
      // console.log(error.message);
    }

    return response;
  }
);

export default BaseService;

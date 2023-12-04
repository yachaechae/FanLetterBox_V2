import axios from "axios";
import { toast } from "react-toastify";
import store from "../redux/store";
import { logOut } from "redux/slice/auth";

const token = JSON.parse(localStorage.getItem("user"));

export const authAxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_AUTH_BASE_URL,
});

authAxiosInstance.interceptors.response.use(
    (res) => {
        return res;
    },
    (err) => {
        toast.error(err.response.data.message);
        return Promise.reject(err);
    }
);

export const serverAxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_DB_SERVER_URL,
});

serverAxiosInstance.interceptors.request.use(
    async (config) => {
        try {
            const response = await authAxiosInstance.get("/user", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token.accessToken}`,
                },
            });
            return response.data;
            // 유효한 토큰이면
            // response.data <- 유저 데이터가 다 있다.
            // login 시키는 식으로 데이터를 어따가 넣어주면 된다.
        } catch (err) {
            if (err.response?.status === 401) {
                store.dispatch(logOut());
            }
        }
        return config;
    },
    (err) => {
        console.log(err);
    }
);

serverAxiosInstance.interceptors.response.use(
    (res) => {
        return res;
    },
    (err) => {
        toast.error(err);
        return Promise.reject(err);
    }
);

import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_AUTH_BASE_URL,
});

axiosInstance.interceptors.response.use(
    (res) => {
        return res;
    },
    (err) => {
        toast.error(err.response.data.message);
        return Promise.reject(err);
    }
);

export default axiosInstance;

import axios from "axios";
import type { AxiosError } from "axios";

import AxiosRequestInterceptorConfigCallback from "./AxiosRequestInterceptorConfigCallback";
import AxiosRequestInterceptorErrorCallback from "./AxiosRequestInterceptorErrorCallback";

const AxiosBase = axios.create({
    timeout:5000,
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

AxiosBase.interceptors.request.use(
    (config) => {
        return AxiosRequestInterceptorConfigCallback(config)
    },
    (error) => {
        return Promise.reject(error)
    }
)

AxiosBase.interceptors.response.use(
    (response) => response,
    (error:AxiosError) => {
        AxiosRequestInterceptorErrorCallback(error)
        return Promise.reject(error)
    },
)

export default AxiosBase;

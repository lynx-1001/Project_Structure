import type { InternalAxiosRequestConfig } from "axios";
 const AxiosRequestInterceptorConfigCallback = (config:InternalAxiosRequestConfig) => {
    return config;
}
export default AxiosRequestInterceptorConfigCallback;
import type { AxiosError } from "axios";
const AxiosRequestInterceptorErrorCallback = (error:AxiosError) => {
    return error
}

export default AxiosRequestInterceptorErrorCallback;
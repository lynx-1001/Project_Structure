import AxiosBase from "./axios/AxiosBase";
import type { AxiosRequestConfig, AxiosResponse,AxiosError } from "axios";


const ApiService = {
    fetchDataWithAxios<Response = unknown,Request = Record<string,unknown>> (
        param: AxiosRequestConfig<Request>
    ) {
        return new Promise<Response>((resolve,reject) => {
            AxiosBase(param)
            .then((response:AxiosResponse<Response>) => {
                resolve(response.data);
            })
            .catch((error:AxiosError) => {
                reject(error)
            })
        })
    }
};
/**
 * ApiService is responsible for handling all API requests to the backend server.
 * It provides methods to perform CRUD operations and other HTTP requests.
 *
 * @module ApiService
 */
export default ApiService;
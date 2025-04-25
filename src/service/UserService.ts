import { api_path } from "@/constants/api_path";
import ApiService from "./ApiService";

const UserService = {
    //Get All Users
  async getAllUsers<T>(params:Record<string, unknown>) {
    return ApiService.fetchDataWithAxios<T>({
      url: api_path.user.getAll(),
      method: "GET",
      params,
    });
  },
    //Get User By ID
  async getByIdUser<T>(id: number) {
    return ApiService.fetchDataWithAxios<T>({
      url: api_path.user.getById(id),
      method: "GET",
    });
  },
   //Update User
  async updateUser<T, U extends Record<string, unknown>>(id: number, data: U) {
    return ApiService.fetchDataWithAxios<T>({
      url: api_path.user.update(id),
      method: "PATCH",
      data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
   //Create User
  async createUsers<T, U extends Record<string, unknown>>(data: U) {
    return ApiService.fetchDataWithAxios<T>({
      url: api_path.user.create(),
      method: "POST",
      data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
   //Delete User
  async deleteUser<T>(id: number) {
    return ApiService.fetchDataWithAxios({
      url: api_path.user.delete(id),
      method: "DELETE",
    });
  },
};

export default UserService;

import { axiosClient } from "./config/axiosConfig";

export const usersApi = {
  createusers: async function (body: any) {
    return await axiosClient.post(
      "users/create",
      body,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
  update: async function (userId: any, body: any) {
    return await axiosClient.put(
      `brands/update/${userId}`,
      body,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
  getAllusers: async function () {
    
    return await axiosClient.get(
      "users/getAll/",
    );
  },
  getusers: async function (userId: any) {
    return await axiosClient.get(
      `users/getBrand/${userId}`,
    );
  },
  deleteusers: async function (userId: any) {
    return await axiosClient.delete(
      `brands/delete/${userId}`,
    );
  },
  getusersForProduct: async function () {
    return await axiosClient.get(
      "brands/dropdown/brandsList",
    );
  },
};

import { axiosClient } from "./config/axiosConfig";

export const brandApi = {
  createusers: async function (body: any) {
    return await axiosClient.post(
      "brands/",
      body,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
  updateusers: async function (userId: any, body: any) {
    return await axiosClient.put(
      `brands/update/${brandId}`,
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
      "brands/getAll/",
    );
  },
  getusers: async function (userId: any) {
    return await axiosClient.get(
      `brands/getBrand/${brandId}`,
    );
  },
  deleteusers: async function (userId: any) {
    return await axiosClient.delete(
      `brands/delete/${brandId}`,
    );
  },
  getusersForProduct: async function () {
    return await axiosClient.get(
      "brands/dropdown/brandsList",
    );
  },
};

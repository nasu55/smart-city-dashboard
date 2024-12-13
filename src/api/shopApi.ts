import { axiosClient } from "./config/axiosConfig";

export const shopApi = {
  createshop: async function (body: any) {
    return await axiosClient.post(
      "shops/create",
      body,
      // {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // },
    );
  },
  updateshop: async function (brandId: any, body: any) {
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
  getAllshop: async function () {
    
    return await axiosClient.get(
      "brands/getAll/",
    );
  },
  getshop: async function (brandId: any) {
    return await axiosClient.get(
      `brands/getBrand/${brandId}`,
    );
  },
  deleteshop: async function (brandId: any) {
    return await axiosClient.delete(
      `brands/delete/${brandId}`,
    );
  },
  getBrandsForshop: async function () {
    return await axiosClient.get(
      "brands/dropdown/brandsList",
    );
  },
};

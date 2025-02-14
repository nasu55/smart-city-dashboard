import { axiosClient } from "./config/axiosConfig";

export const shopApi = {
  createshop: async function (body: any) {
    return await axiosClient.post(
      "shops/create",
      body,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
  updateshop: async function (shopId: any, body: any) {
    return await axiosClient.put(
      `shops/update/${shopId}`,
      body,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
  featuredShop: async function (shopId: any) {
    return await axiosClient.put(
      `shops/featured/${shopId}`
    );
  },
  getAllshop: async function () {
    
    return await axiosClient.get(
      "shops/all/",
    );
  },
  getAllUsers: async function () {
    
    return await axiosClient.get(
      "user",
    );
  },
  getRegisteredshop: async function () {
    
    return await axiosClient.get(
      "shops/registered/",
    );
  },
  getshop: async function (shopId: any) {
    return await axiosClient.get(
      `shops/view/${shopId}`,
    );
  },
  deleteshop: async function (brandId: any) {
    return await axiosClient.delete(
      `shops/delete/${brandId}`,
    );
  },
  approveshop: async function (brandId: any) {
    return await axiosClient.delete(
      `shops/approve/${brandId}`,
    );
  },
  rejectshop: async function (brandId: any) {
    return await axiosClient.delete(
      `shops/reject/${brandId}`,
    );
  },
  shopLogin: async function (body:any) {
    
    return await axiosClient.post(
      "shops/login/",body
    );
  },
};

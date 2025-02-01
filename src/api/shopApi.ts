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
  shopLogin: async function (body:any) {
    
    return await axiosClient.post(
      "shops/login/",body
    );
  },
};

import { axiosClient } from "./config/axiosConfig";

export const productApi = {
  createproduct: async function (body: any) {
    return await axiosClient.post(
      "products/create",
      body,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
  updateProduct: async function (productId: any, body: any) {
    return await axiosClient.put(
      `products/update/${productId}`,
      body,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
  getAllProduct: async function () {
    
    return await axiosClient.get(
      "products/all/",
    );
  },
  getProduct: async function (productId: any) {
    return await axiosClient.get(
      `products/view/${productId}`,
    );
  },
  deleteProduct: async function (productId: any) {
    return await axiosClient.delete(
      `products/delete/${productId}`,
    );
  },
};

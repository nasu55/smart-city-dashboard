import { axiosClient } from "./config/axiosConfig";

export const bannerApi = {
  createBanner: async function (body: any) {
    return await axiosClient.post(
      "banners/create",
      body,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
  updateBanner: async function (bannerId: any, body: any) {
    return await axiosClient.put(
      `banners/update/${bannerId}`,
      body,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
  getAllBanners: async function () {
    return await axiosClient.get(
      "banners/all",
    );
  },
  getBanner: async function (bannerId: any) {
    return await axiosClient.get(
      `banners/view/${bannerId}`,
    );
  },
  deleteBanner: async function (bannerId: any) {
    return await axiosClient.delete(
      `banners/delete/${bannerId}`,
      
    );
  },
};
import { axiosClient } from "./config/axiosConfig";

export const subCategoryApi = {  
  createSubCategory: async function (body: any) {
    return await axiosClient.post(
      "subCategories/",
      body,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
  updateSubCategory: async function (subCategoryId: any, body: any) {
    return await axiosClient.put(
      `subCategories/update/${subCategoryId}`,
      body,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
  getAllSubCategories: async function () {
    return await axiosClient.get(
      "subCategories/getAll/",
    );
  },
  getSubCategory: async function (subCategoryId: any) {
    return await axiosClient.get(
      `subCategories/getSubCategory/${subCategoryId}`,
    );
  },
  deleteSubCategory: async function (subCategoryId: any) {
    return await axiosClient.delete(
      `subCategories/delete/${subCategoryId}`,
    );
  },
  getSubCategoriesForProduct: async function () {
    return await axiosClient.get(
      "subCategories/dropdown/subCategories",
    );
  },
  featuredSubCategory: async function (subCategoryId: any) {
    return await axiosClient.put(
      `subCategories/featured/${subCategoryId}`,
    );
  },
};

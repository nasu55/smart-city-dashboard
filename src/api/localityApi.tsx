import { axiosClient } from "./config/axiosConfig";

export const localityApi = {  
  createLocality: async function (body: any) {
    return await axiosClient.post(
      "localities/",
      body,
    
    );
  },
  updateLocality: async function (localityId: any, body: any) {
    return await axiosClient.put(
      `localities/update/${localityId}`,
      body
    );
  },
  getAllLocality: async function () {
    return await axiosClient.get(
      "localities/all/",
    );
  },
  getLocality: async function (localityId: any) {
    return await axiosClient.get(
      `localities/getLocality/${localityId}`,
    );
  },
  deleteLocality: async function (localityId: any) {
    return await axiosClient.delete(
      `localities/delete/${localityId}`,
    );
  },
//   getCategoriesForProduct: async function () {
//     return await axiosClient.get(
//       "categories/dropdown/categories",
//     );
//   },
};

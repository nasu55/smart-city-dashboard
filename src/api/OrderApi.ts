import { axiosClient } from "./config/axiosConfig";

export const localityApi = {  


  getAllLocality: async function () {
    return await axiosClient.get(
      "order",
    );
  },
  getLocality: async function (localityId: any) {
    return await axiosClient.get(
      `localities/getLocality/${localityId}`,
    );
  },

};

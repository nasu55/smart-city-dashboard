import axios from "axios";

export const adminApi = {
  adminLogin: async function (body: any) {
    return await axios.post(
      "http://localhost:3010/api/dashboard/tables/login",
      body,
    );
  },
  PasswordUpdate: async function (body: any) {
    return await axios.post(
      "http://localhost:3010/api/dashboard/tables/updatePassword",
      body,
    );
  },
};

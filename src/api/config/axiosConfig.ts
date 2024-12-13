import axios from "axios";

let headers = {};

if (typeof window !== "undefined") {
  headers = {
    Authorization: "bearer " + window.localStorage.getItem("accessToken"),
  };
}

export const axiosClient = axios.create(
    {
        baseURL:'http://localhost:5000/api/dashboard/',
        headers:headers
    }
)
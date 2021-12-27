import axiosClient from "../axiosClient";

const productApi = {
  getAll: (params) => {
    const url = "/home/banners";
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `/home/banners/${id}`;
    return axiosClient.get(url);
  },
};

export default productApi;

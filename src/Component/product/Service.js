import axios from "axios";
const apiAddress = "http://localhost:5000/product/";
export const ProductService = {
  getProducts: (q = "") => {
    return axios.get(apiAddress + q);
    //  return axios.get("https://someetest2021.somee.com/product/");
  },
  getProuductById: (id) => {
    return axios.get(apiAddress + id);
  },

  addComment: (productId, comment) =>
    axios.post(apiAddress + productId + "/comments", comment),
  getComments: (productId) => axios.get(apiAddress + productId + "/comments"),
};

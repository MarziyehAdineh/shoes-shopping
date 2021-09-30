import axios from "axios";

export const ProductService = {
  getProduct: () => {
   // return axios.get("http://localhost:5000/product/");
   return axios.get("https://someetest2021.somee.com/product/");
  },
  getProuductById: (id) => {
    return axios.get("http://localhost:5000/product/" + id);
  },
};

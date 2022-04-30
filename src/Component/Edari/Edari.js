import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EdariStyle from "./EdariStyle";
import { useEffect } from "react";
import {ProductService} from "../product/Service";
import { Navbar } from "../Navbar";

export default function Edari() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await ProductService.getProductsWithEdari(); //.then((response) =>
    setProducts(response.data);
    // );
  };
  return (
    <>
    {/* <Navbar/> */}
      {products.map((item, i) => (
        <div key={i}>
          <EdariStyle product={item} />
        </div>
      ))}
    </>
  );
}

import React, {useState } from "react";
import StyleServickhab from "./styleservicekhab";
import "bootstrap/dist/css/bootstrap.min.css";

import { ProductService } from "../product/Service"
import { useEffect } from "react";

export default function Servicekhab() {
  const [ serviskhab, setserviskhab] = useState([]);
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const data = {
    // Products: [],
    serviskhab:[]
  };
  const fetchData = async () => {
    let response = await ProductService.getProductsWithserviskhab(); //.then((response) =>
    setserviskhab(response.data);
    // );
  };
  return (
    <>
    
      {serviskhab.map((item,i) => (
        <div key={i}>
          <StyleServickhab Service={item} />
        </div>
      ))}
    </>
  );
}

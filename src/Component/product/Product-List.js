import React from "react";
import { Product } from "./Product";
 export function Productlist (props){
    return(
        <div className="row">
            {props.Product.map((item)=>(
                <div className="col-4" key={item.id}>
                    <Product  data={item}/>
                </div>
             ) )}
        </div>
    );
}
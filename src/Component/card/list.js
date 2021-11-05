import React, { useState } from "react";
import { Fragment } from "react";
import { combineReducers } from "redux";
import {
  Product,
  Productlist,
  ProductService,
  removeFromCart,
  removeincart,
} from "../product";
import { cartstore } from "../product";
import { addToCart } from "../product";
import { ADD_TO_CART } from "../product";
import { cartReducer } from "../product/redux/reducer";
import { Action } from "redux";

function compare( a, b ) {
  if ( a.id < b.id ){
    return -1;
  }
  if ( a.id > b.id ){
    return 1;
  }
  return 0;
}

export function Cart({ product }) {
  if (!product || !product.length) {
    return (
      <div style={{ margin: 200, fontSize: 40 }} className="text-center">
        !سبد خرید شما خالی است
      </div>
    );
  }

  const removeHandler = (Product) => {
    cartstore.dispatch(removeFromCart(Product));
  };

  const addHandler = (Product) => {
    cartstore.dispatch(addToCart(Product));
  };
  const removecardHandler =(products)=>{
    cartstore.dispatch(removeincart(products))
  }

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">تصویر</th>
            <th scope="col">عنوان</th>
            <th scope="col">قیمت</th>
            <th scope="col">تعداد</th>
            <th scope="col">جمع کل</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {product.sort(compare).map((product, index) => (
            <tr style={index%2==0?{backgroundColor:"white"}:{backgroundColor:"white"}} key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <img width="50" src={product.pic} />
              </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td> <button width="20px" style={{margin:"0px",width:"20px",height:"20"}} onClick={() => addHandler(product)}>+</button>
            {product.quantity}
              <button  style={{margin:"0px",width:"20px",height:"20"}} onClick={() => removecardHandler(product)}>-</button>
              </td>
              <td>{product.price * product.quantity}</td>
              {/* <td> {product.size}</td> */}

              <td>
                <button
                  onClick={() => removeHandler(product)}
                  class="btn btn-danger"
                >
                  حذف
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

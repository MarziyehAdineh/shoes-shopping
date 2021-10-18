import React, { useState } from 'react'
import { Fragment } from 'react'
import { combineReducers } from 'redux'
import { Product, Productlist, ProductService, removeFromCart ,addToCart} from '../product'
import { cartstore } from '../product'
import { ADD_TO_CART } from '../product'
import { cartReducer } from '../product/redux/reducer'

export function Cart({product}){

if(!product ||!product.length){
  return<div style={{margin:200,fontSize:40}}className="text-center">!سبد خرید شما خالی است</div>
}

const removeHandler=(Product)=>{
cartstore.dispatch(removeFromCart(Product))
}

const addHandler=(Product)=> {
  cartstore.dispatch(addToCart(Product));
}


  
    return(
        <div>

    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">تصویر</th>
        <th scope="col">عنوان</th>
        <th scope="col">قیمت</th>
        <th scope="col">تعداد</th>
        {/* <th scope="col">جمع کل</th> */}
        <th scope="col"></th>
        {/* <th scope="col">سایز</th> */}

      </tr>
    </thead>ّ
    <tbody>
      {product.map((product,index)=><tr key={index}>
        <th scope="row">{index+1}</th>
        <td><img width="50" src={product.pic}/></td>
        <td>{product.title}</td>
        <td>{product.price }</td>
        <td>{product.quantity}</td>
        <td>{product.price * product.quantity}</td>
        {/* <td> {product.size}</td> */}
        

        <td><button onClick={()=>removeHandler(product)} class="btn btn-danger">حذف</button></td>
        
      </tr>)}
    </tbody>
  </table>
  <button onClick={()=>addHandler(product)}>+</button>
  {/* <button onClick={()=>Remove(product)}>-</button> */}

  </div>
    )
}

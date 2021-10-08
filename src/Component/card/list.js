import React from 'react'
import { combineReducers } from 'redux'
import { Product, Productlist, ProductService, removeFromCart } from '../product'
import { cartstore } from '../product'
export function Cart({product}){
if(!product ||!product.length){
  return<div style={{margin:200,fontSize:40}}className="text-center">!سبد خرید شما خالی است</div>
}
const removeHandler=(Product)=>{
cartstore.dispatch(removeFromCart(Product))
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

      </tr>
    </thead>ّ
    <tbody>
      {product.map((product,index)=><tr key={index}>
        <th scope="row">{index+1}</th>
        <td><img width="50" src={product.pic}/></td>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
        <td><button onClick={()=>removeHandler(product)} class="btn btn-danger">حذف</button></td>
      </tr>)}
   
    </tbody>
  </table>
  </div>
    )
}

import React from 'react'

export function Cart({product}){

    return(
        <div>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">تصویر</th>
        <th scope="col">عنوان</th>
        <th scope="col">قیمت</th>
        <th scope="col">quantity</th>

      </tr>
    </thead>ّ
    <tbody>
      {product.map((product,index)=><tr key={index}>
        <th scope="row">{index+1}</th>
        <td><img width="50" src={product.pic}/></td>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
        <td><button class="btn btn-danger">حذف</button></td>
      </tr>)}
   
    </tbody>
  </table>
  </div>
    )
}

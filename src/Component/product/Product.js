import React from 'react'
import {Link} from "react-router-dom";
import StarRating from '../../pages/Star';
export const Product = ({data}) => {
    return (
        <div id="product" className="card mt-5" style={{borderRadius:"10PX" ,width:"260px",  height:"390px"}}>
            <div className="container">
            <img src={data.pic} className="card-img-top" style={{borderRadius:"4%", height:"195px"}}/>
              <br/>
            <h1 className="card-title" style={{fontSize:"18px",fontWeight:"bold" ,fontFamily:"sans-serif"}}>{data.title}</h1>
            <br/><br/><br/>
           <div style={{display:"flex", textIndent: "3px"}}>
           <p style={{fontSize:"14px"}}>تومان</p>  <p style={{fontSize:"15px",fontWeight:"bold",textShadow:"unset"}}>{data.price}</p>
            <Link  to={"/Detail/"+data.id} className="btn btn-primary"><span style={{width:"40px",height:"20px",fontSize:"12px"}}>توضیحات بیشتر </span></Link>
            </div>
            </div>
        </div>
        
    )
}
 
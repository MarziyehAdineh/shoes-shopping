import React from 'react'
import {Link} from "react-router-dom";
export const Product = ({data}) => {
    return (
        <div className="card mt-5" style={{  backgroundColor:"white",borderRadius:"10PX" ,width:"300px",  height:"400px"}}>
            <div className="container">
            <img src={data.pic} className="card-img-top" style={{borderRadius:"4%", height:"200px"}}/>
            <h5 className="card-title" style={{fontSize:"8" ,fontFamily:"sans-serif"}}>{data.title}</h5>
            <br/>
            <p style={{color:"green",fontSize:"10 sans-serif"}}>{data.price}</p>
            <br/>
            <Link  to="/Detail" className="btn btn-primary">توضیحات بیشتر </Link>
            </div>
        </div>
        
    )
}
 
import React from "react";

export const ProductRespansive= ({ data }) => {
  return (
      <div data-bs-spy="scroll" className="scrollspy-example">
      <div className="card mb-3">
        <img src={data.pic} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 style={{direction:"rtl"}} className="card-title">{data.title}</h5>
          <p className="card-text">
         
          </p>
          <p className="card-text">
        <div style={{direction:"rtl"}}>
            <small className="text-muted">{data.price.toLocaleString()}
            </small>
          <span >تومان</span>
            </div>
          </p>
        </div>
      </div>
    
    </div>
  );
}

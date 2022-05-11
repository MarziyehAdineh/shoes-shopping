import React from "react";
import { Link } from "react-router-dom";
import { Loading } from "../../pages";
// import StarRating from "../../pages/Star";

export const Product = ({ data }) => {
  return (
    <div>
      <div>
      <div className="hidden lg:block md:block sm:block xl:block xxl:block">
        <Link
          to={"/Detail/" + data.id}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div id="product" style={{ display: "flex", borderRadius: "10px" }}>
            <div
              style={{
                display: "flex",
                margin: "6px",
                width: "500px",
                height: "200px",
              }}
            >
              <img
                alt={data.title}
                id="imgpro"
                src={data.pic}
                height="100%"
                style={{ width: "100%" }}
              ></img>
            </div>
          </div>
        </Link>
        {/* //////////////////////////respansive////////// */}
      </div>
      </div>
     
    </div>
  );
};

import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Swiper styles
//import "swiper/css";
//import "swiper/css/pagination"
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import "./styles.css";
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
import MySlide from "./MySlide";
import { ProductService } from "..";
import { useEffect } from "react";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function MyApp() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const data = {
    Products: [  
    ],
  };
  const fetchData = async () => {
    let response = await ProductService.getProductsWithOff(); //.then((response) =>
    setProducts(response.data);
    // );
  };
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={350}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 8,
          },
        }}
        className="mySwiper"
      >
        {/* {[1,2,3,5,6,7,8,9,10].map((a)=><SwiperSlide><MySlide index={a} /></SwiperSlide>)} */}
        {/* {data.Products.map((item) => ( */}
        {products.map((item,i) => (
          <SwiperSlide key={i}>
            <MySlide product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

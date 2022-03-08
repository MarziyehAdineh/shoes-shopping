import React, {useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Autoplay, Navigation } from "swiper";
import "./styles.css";
import "./styles.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Pagination } from "swiper";
import NewColectionstyle from "./NewColectionstyle";
import { ProductService } from "..";
import { useEffect } from "react";

SwiperCore.use([ Autoplay]);

export default function NewColection() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const data = {
    Products: [],
  };
  const fetchData = async () => {
    let response = await ProductService.getProductsWithNewColection(); //.then((response) =>
    setProducts(response.data);
    // );
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* {[1,2,3,5,6,7,8,9,10].map((a)=><SwiperSlide><MySlide index={a} /></SwiperSlide>)} */}
        {/* {data.Products.map((item) => ( */}
        {products.map((item, i) => (
          <SwiperSlide key={i}>
            <NewColectionstyle product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

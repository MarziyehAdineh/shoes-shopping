import React, { useRef, useState } from "react";
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
// install Swiper modules
SwiperCore.use([Pagination]);

export default function MyApp() {
  const data = {
    Products: [
      
    {
      id:17 ,
      pic: "data:image/jpeg;base64,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",
      title: " 3445-8کفش اسپرت مردانه سعیدی مدل parvan ",
      price: 123000,
      priceOff: 160000,
    },
    {
      id: 18,
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjQCny1mubK8jrpB-vhurxNZwAoSr4Zcv5-A&usqp=CAU",
      title: " 3445-8کفش  زنانه مدل سعیدی مدل parvan",
      price: 140000,
      priceOff: 160000,
    },
    {
      id: 19,
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBzyAMWVlfHWYiJVMgftGkrdEue2IETxK0Rw&usqp=CAU",
      title: " 3445-8کفش اسپرت مردانه سعیدی مدل parvan",
      price: 100000,
      priceOff: 170000,
    },
    {
      id: 20,
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN0vnhgMZrkiLhZ5SYEwIfWdOhnVuOoImjOA&usqp=CAU",
      title: " 3445-8کفش اسپرت مردانه سعیدی مدل parvan",
      price: 160000,
      priceOff: 200000,
    },
    {
      id: 21,
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqIpLopnBjF9raIHmnVwDbEq1MGb_Rs5EmA&usqp=CAU",
      title: " 3445-8کفش اسپرت مردانه سعیدی مدل parvan",
      price: 140000,
      priceOff: 190000,
    },
    {
      id: 22,
      pic: "data:image/jpeg;base64,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",
      title: " 3445-8کفش اسپرت مردانه سعیدی مدل parvan",
      price: 120000,
      priceOff: 180000,
    },
    {
      id: 23,
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtXbNG6QDTkk-yRykgooaYtHfCLcpXd9x08g&usqp=CAU",
      title: " 3445-8کفش اسپرت مردانه سعیدی مدل parvan",
      price: 220000,
      priceOff: 280000,
    },
    {
      id: 24,
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0BIWGHdh14vq8qGuQurKv9XAq3t3JIpg0HA&usqp=CAU",
      title: " 3445-8کفش اسپرت مردانه سعیدی مدل parvan",
      price: 120000,
      priceOff: 180000,
    },
  ]}

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
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
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {/* {[1,2,3,5,6,7,8,9,10].map((a)=><SwiperSlide><MySlide index={a} /></SwiperSlide>)} */}
        {data.Products.map((item) => (
          <SwiperSlide >
            <MySlide  product={item}
             
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
// {props.Products.map((item) => (
//   <div className="col-3" key={item.id}>
//     <Product data={item} />
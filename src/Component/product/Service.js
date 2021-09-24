const data=
{product: [
    {
    id: 1,
    title: "کفش مخصوص پیاده روی مردانه کد 700544",
    price: "140000تومان",
    pic: "https://m.media-amazon.com/images/I/71StEHAlKIL._AC_UY535_.jpg",
    desc: "کفی: قابلیت ارتجاعی نحوه بسته شدن کفش: بندی ویژگی‌های زیره: کاهش فشار وارده ویژگی‌های تخصصی کفش: قابلیت گردش هو",
  },
  {
    id: 2,
    title: "کفش پیاده روی مردانه سعیدی مدل parvan ",
    price: "180000تومان",
    pic: "https://m.media-amazon.com/images/I/71OSVxOrixL._AC_UX500_.jpg",
    desc: "    کفی: طبی، قابل تعویض نحوه بسته شدن کفش: بندی ویژگی‌های زیره: آج دار، کاهش فشار وارده ویژگی‌های تخصصی کفش: مقاوم در برابر سایش، کاهش فشارهای وارده ",
  },
  {
    id: 3,
    title: " کفش کوهنوردی مردانه هامتو مدل 3-290015",
    price: "2040000تومان",

    pic: "	https://m.media-amazon.com/images/I/71faiVVGe3L._AC_UX500_.jpg",
    desc: " کفی: قابلیت ارتجاعی، طبی نحوه بسته شدن کفش: بندی ویژگی‌های زیره: مقاوم در برابر سایش، آج دار ویژگی‌های تخصصی کفش: مقاوم در برابر سایش ",
  },
]}

export const ProductService={
getProduct:()=>{
return data.product.slice();
},
getProuductById:id=>{
return data.product.find(item=>item.id.toString()==id.toString())
}

};
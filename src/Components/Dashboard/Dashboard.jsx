import React, { useState } from "react";
import "./Dashboard.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { baseUrl } from "../../Helper";
import axios from "axios";
// // Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Keyboard } from "swiper";

const Dashboard = () => {
  useEffect(() => {
    getData();
  }, []);
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .post(`${baseUrl}/api/v1/header/list`, {
        where: {
          isActive: true,
        },
        pagination: {
          sortBy: "createdAt",
          descending: false,
          rowsPerPage: 12,
          page: 1,
        },
      })
      .then((res) => {
        console.log(res.data.data.list);
        setData(res?.data.data.list);
      })
      .catch();
  };

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        keyboard={{
          enabled: true,
        }}
        modules={[Keyboard, Autoplay]}
        className="mySwiper mb-4"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {data.map((item, f) => {
          return (
            <SwiperSlide>
              <div className="wrapper" key={f}>
                <img src={`${item.Img}`} width="100%" height="100%" alt="" />
                <div className="myLayer">
                  <h5>Limited</h5>
                  <h1>Winter Offer 2022 Collection</h1>
                  <button type="button" className="btn btn-dark">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Dashboard;
// {/* <div class="slider-area">
// <div class="slider-active owl-carousel nav-style-1 owl-dot-none">
//     <div class="single-slider slider-height-1 bg-purple">
//         <div class="container">
//             <div class="row">
//                 <div class="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
//                     <div class="slider-content slider-animated-1">
//                         <h3 class="animated">Smart Products</h3>
//                         <h1 class="animated">Summer Offer <br/>2020 Collection</h1>
//                         <div class="slider-btn btn-hover">
//                             <a class="animated" href="shop.html">SHOP NOW</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
//                     <div class="slider-single-img slider-animated-1">
//                         <img class="animated" src="assets/img/slider/single-slide-1.png" alt=""/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div class="single-slider slider-height-1 bg-purple">
//         <div class="container">
//             <div class="row">
//                 <div class="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
//                     <div class="slider-content slider-animated-1">
//                         <h3 class="animated">Smart Products</h3>
//                         <h1 class="animated">Summer Offer <br/>2020 Collection</h1>
//                         <div class="slider-btn btn-hover">
//                             <a class="animated" href="shop.html">SHOP NOW</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
//                     <div class="slider-single-img slider-animated-1">
//                         <img class="animated" src="assets/img/slider/single-slide-hm1-2.png" alt=""/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// </div> */}
// {/* <SwiperSlide>
// <div className="bg">
//   <div className="text">
//     <h5>Limited</h5>
//     <h1>Winter Offer 2022 Collection</h1>
//     <button type="button" className="btn btn-dark">
//       Shop Now
//     </button>
//   </div>
//   <img
//     src="../../../img/single-slide-hm1-2.png"
//     width="50%"
//     height="50%"
//     alt=""
//   />
// </div>
// </SwiperSlide>
// <SwiperSlide>
// <div className="bg">
//   <div className="text">
//     <h5>Limited</h5>
//     <h1>Winter Offer 2022 Collection</h1>
//     <button type="button" className="btn btn-dark">
//       Shop Now
//     </button>
//   </div>
//   <img
//     src="../../../img/single-slide-hm1-2.png"
//     width="50%"
//     height="50%"
//     alt=""
//   />
// </div>
// </SwiperSlide>
// <SwiperSlide>
// <div className="bg">
//   <div className="text">
//     <h5>Limited</h5>
//     <h1>Winter Offer 2022 Collection</h1>
//     <button type="button" className="btn btn-dark">
//       Shop Now
//     </button>
//   </div>
//   <img
//     src="../../../img/single-slide-hm1-2.png"
//     width="50%"
//     height="50%"
//     alt=""
//   />
// </div>
// </SwiperSlide> */}

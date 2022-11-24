import React, { useState } from "react";
import "./Products.css";
import axios from "axios";
import Data from "./Data.json";
import { useEffect } from "react";
import { baseUrl } from "../../Helper";
const Cart = () => {
  useEffect(() => {
    getData();
  }, []);
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .post(`${baseUrl}/api/v1/product/list`, {
        where: {
          isActive: true,
        },
        pagination: {
          sortBy: "createdAt",
          descending: false,
          rowsPerPage: 20,
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
      <div className="product-area pb-60">
        <div className="container">
          <div className="section-title text-center">
            <h2>DAILY DEALS!</h2>
          </div>
          <div className="product-tab-list nav pt-30 pb-55 text-center">
            <a href="#product-1" data-bs-toggle="tab">
              <h4>Women's Collection </h4>
            </a>
            <a className="active" href="#product-2" data-bs-toggle="tab">
              <h4>Basic Needs</h4>
            </a>
            <a href="#product-3" data-bs-toggle="tab">
              <h4>Men's Collection</h4>
            </a>
          </div>
          <div className="tab-content jump">
            <div className="tab-pane" id="product-1">
              <div className="row">
                {data?.map((item, a) => {
                  return (
                    <div
                      className="col-xl-3 col-md-6 col-lg-4 col-sm-6"
                      key={a}
                    >
                      <div className="product-wrap mb-25">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img
                              className="default-img"
                              src={`${baseUrl}/${item.img}`}
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src={`${baseUrl}/${item.img}`}
                              alt=""
                            />
                          </a>
                          <span className="pink">{item.specification}</span>
                          <div className="product-action">
                            <div className="pro-same-action pro-wishlist">
                              <a title="Wishlist" href="wishlist.html">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-heart"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                              </a>
                            </div>
                            <div className="pro-same-action pro-cart">
                              <a title="Add To Cart" href=" ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-cart"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>{" "}
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="product-content text-center">
                          <h3>
                            <a href="product-details.html">{item.name}</a>
                          </h3>
                          <div className="product-price">
                            <span>₹{item.price}</span>
                            <span className="old">₹ {item.discountPrice}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* ----------------------------------------------------------------------- */}
             <div className="tab-pane active" id="product-2">
              <div className="row">
                {data?.map((item, b) => {
                  return (
                    <div
                      className="col-xl-3 col-md-6 col-lg-4 col-sm-6"
                      key={b}
                    >
                      <div className="product-wrap mb-25">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img
                              className="default-img"
                              src={`${baseUrl}/${item.img}`}
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src={`${baseUrl}/${item.img}`}
                              alt=""
                            />
                          </a>
                          <span className="pink">{item.specification}</span>
                          <div className="product-action">
                            <div className="pro-same-action pro-wishlist">
                              <a title="Wishlist" href="wishlist.html">
                                <i className="pe-7s-like"></i>
                              </a>
                            </div>
                            <div className="pro-same-action pro-cart">
                              <a title="Add To Cart" href=" ">
                                <i className="pe-7s-cart"></i> Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="product-content text-center">
                          <h3>
                            <a href="product-details.html">{item.name}</a>
                          </h3>
                          <div className="product-price">
                            <span>${item.price}</span>
                            <span className="old">${item.discountPrice}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div> 
            {/* ----------------------------------------------------------------------- */}
            <div className="tab-pane" id="product-3">
              <div className="row">
                {Data.Cart.map((item, c) => (
                  <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6" key={c}>
                    <div className="product-wrap mb-25">
                      <div className="product-img">
                        <a href="product-details.html">
                          <img
                            className="default-img"
                            src={item.imgOne}
                            alt=""
                          />
                          <img className="hover-img" src={item.imgTwo} alt="" />
                        </a>
                        <span className="pink">-10%</span>
                        <div className="product-action">
                          <div className="pro-same-action pro-wishlist">
                            <a title="Wishlist" href="wishlist.html">
                              <i className="pe-7s-like"></i>
                            </a>
                          </div>
                          <div className="pro-same-action pro-cart">
                            <a title="Add To Cart" href=" ">
                              <i className="pe-7s-cart"></i> Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-content text-center">
                        <h3>
                          <a href="product-details.html">{item.title}</a>
                        </h3>
                        <div className="product-price">
                          <span>$ 60.00</span>
                          <span className="old">$ 60.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
//  {/* ----------------------------------------------------------------------- */}
//                 {/* <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
//                   <div className="product-wrap mb-25">
//                     <div class="product-img">
//                       <a href="product-details.html">
//                         <img class="default-img" src={"img/pro-7.jpg"} alt="" />
//                         <img class="hover-img" src={"img/pro-4-1.jpg"} alt="" />
//                       </a>
//                       <span class="purple">New</span>
//                       <div class="product-action">
//                         <div class="pro-same-action pro-wishlist">
//                           <a title="Wishlist" href="wishlist.html">
//                             <i class="pe-7s-like"></i>
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-cart">
//                           <a title="Add To Cart" href=" ">
//                             <i class="pe-7s-cart"></i> Add to cart
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-quickview">
//                           <a
//                             title="Quick View"
//                             href=" "
//                             data-bs-toggle="modal"
//                             data-bs-target="#exampleModal"
//                           >
//                             <i class="pe-7s-look"></i>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="product-content text-center">
//                       <h3>
//                         <a href="product-details.html">Trench Winter Coat</a>
//                       </h3>
//                       <div class="product-rating">
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o"></i>
//                         <i class="fa fa-star-o"></i>
//                       </div>
//                       <div class="product-price">
//                         <span>$ 60.00</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div> */}
//                 {/* ------------------------------------------------------------------------------- */}
//                 {/* <div class="col-xl-3 col-md-6 col-lg-4 col-sm-6">
//                   <div class="product-wrap mb-25">
//                     <div class="product-img">
//                       <a href="product-details.html">
//                         <img class="default-img" src={"img/pro-6.jpg"} alt="" />
//                         <img class="hover-img" src={"img/pro-6-1.jpg"} alt="" />
//                       </a>
//                       <span class="pink">-10%</span>
//                       <div class="product-action">
//                         <div class="pro-same-action pro-wishlist">
//                           <a title="Wishlist" href="wishlist.html">
//                             <i class="pe-7s-like"></i>
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-cart">
//                           <a title="Add To Cart" href=" ">
//                             <i class="pe-7s-cart"></i> Add to cart
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-quickview">
//                           <a
//                             title="Quick View"
//                             href=" "
//                             data-bs-toggle="modal"
//                             data-bs-target="#exampleModal"
//                           >
//                             <i class="pe-7s-look"></i>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="product-content text-center">
//                       <h3>
//                         <a href="product-details.html">Winter Overcoat</a>
//                       </h3>
//                       <div class="product-rating">
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o"></i>
//                         <i class="fa fa-star-o"></i>
//                       </div>
//                       <div class="product-price">
//                         <span>$ 60.00</span>
//                         <span class="old">$ 60.00</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div> */}
//                 {/* ----------------------------------------------------------------------- */}

//                 {/* <div class="col-xl-3 col-md-6 col-lg-4 col-sm-6">
//                   <div class="product-wrap mb-25">
//                     <div class="product-img">
//                       <a href="product-details.html">
//                         <img class="default-img" src={"img/pro-5.jpg"} alt="" />
//                         <img class="hover-img" src={"img/pro-5-1.jpg"} alt="" />
//                       </a>
//                       <span class="purple">New</span>
//                       <div class="product-action">
//                         <div class="pro-same-action pro-wishlist">
//                           <a title="Wishlist" href="wishlist.html">
//                             <i class="pe-7s-like"></i>
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-cart">
//                           <a title="Add To Cart" href=" ">
//                             <i class="pe-7s-cart"></i> Add to cart
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-quickview">
//                           <a
//                             title="Quick View"
//                             href=" "
//                             data-bs-toggle="modal"
//                             data-bs-target="#exampleModal"
//                           >
//                             <i class="pe-7s-look"></i>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="product-content text-center">
//                       <h3>
//                         <a href="product-details.html">Nice Black Dress</a>
//                       </h3>
//                       <div class="product-rating">
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o"></i>
//                         <i class="fa fa-star-o"></i>
//                       </div>
//                       <div class="product-price">
//                         <span>$ 60.00</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div> */}
//                 {/* ----------------------------------------------------------------------- */}

//                 {/* <div class="col-xl-3 col-md-6 col-lg-4 col-sm-6">
//                   <div class="product-wrap mb-25">
//                     <div class="product-img">
//                       <a href="product-details.html">
//                         <img class="default-img" src={"img/pro-4.jpg"} alt="" />
//                         <img class="hover-img" src={"img/pro-4-1.jpg"} alt="" />
//                       </a>
//                       <span class="pink">-10%</span>
//                       <div class="product-action">
//                         <div class="pro-same-action pro-wishlist">
//                           <a title="Wishlist" href="wishlist.html">
//                             <i class="pe-7s-like"></i>
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-cart">
//                           <a title="Add To Cart" href=" ">
//                             <i class="pe-7s-cart"></i> Add to cart
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-quickview">
//                           <a
//                             title="Quick View"
//                             href=" "
//                             data-bs-toggle="modal"
//                             data-bs-target="#exampleModal"
//                           >
//                             <i class="pe-7s-look"></i>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="product-content text-center">
//                       <h3>
//                         <a href="product-details.html">Trench Winter Coat</a>
//                       </h3>
//                       <div class="product-rating">
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o"></i>
//                         <i class="fa fa-star-o"></i>
//                       </div>
//                       <div class="product-price">
//                         <span>$ 60.00</span>
//                         <span class="old">$ 60.00</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div> */}
//                 {/* ----------------------------------------------------------------------- */}

//                 {/* <div class="col-xl-3 col-md-6 col-lg-4 col-sm-6">
//                   <div class="product-wrap mb-25">
//                     <div class="product-img">
//                       <a href="product-details.html">
//                         <img class="default-img" src={"img/pro-3.jpg"} alt="" />
//                         <img class="hover-img" src={"img/pro-3-1.jpg"} alt="" />
//                       </a>
//                       <span class="purple">New</span>
//                       <div class="product-action">
//                         <div class="pro-same-action pro-wishlist">
//                           <a title="Wishlist" href="wishlist.html">
//                             <i class="pe-7s-like"></i>
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-cart">
//                           <a title="Add To Cart" href=" ">
//                             <i class="pe-7s-cart"></i> Add to cart
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-quickview">
//                           <a
//                             title="Quick View"
//                             href=" "
//                             data-bs-toggle="modal"
//                             data-bs-target="#exampleModal"
//                           >
//                             <i class="pe-7s-look"></i>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="product-content text-center">
//                       <h3>
//                         <a href="product-details.html">Winter Zipper </a>
//                       </h3>
//                       <div class="product-rating">
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o"></i>
//                         <i class="fa fa-star-o"></i>
//                       </div>
//                       <div class="product-price">
//                         <span>$ 60.00</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div> */}
//                 {/* ----------------------------------------------------------------------- */}
// {/*
//                 <div class="col-xl-3 col-md-6 col-lg-4 col-sm-6">
//                   <div class="product-wrap mb-25">
//                     <div class="product-img">
//                       <a href="product-details.html">
//                         <img class="default-img" src={"img/pro-2.jpg"} alt="" />
//                         <img class="hover-img" src={"img/pro-2-1.jpg"} alt="" />
//                       </a>
//                       <span class="pink">-10%</span>
//                       <div class="product-action">
//                         <div class="pro-same-action pro-wishlist">
//                           <a title="Wishlist" href="wishlist.html">
//                             <i class="pe-7s-like"></i>
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-cart">
//                           <a title="Add To Cart" href=" ">
//                             <i class="pe-7s-cart"></i> Add to cart
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-quickview">
//                           <a
//                             title="Quick View"
//                             href=" "
//                             data-bs-toggle="modal"
//                             data-bs-target="#exampleModal"
//                           >
//                             <i class="pe-7s-look"></i>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="product-content text-center">
//                       <h3>
//                         <a href="product-details.html">Trench Winter Coat</a>
//                       </h3>
//                       <div class="product-rating">
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o"></i>
//                         <i class="fa fa-star-o"></i>
//                       </div>
//                       <div class="product-price">
//                         <span>$ 60.00</span>
//                         <span class="old">$ 60.00</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div> */}
//                 {/* ----------------------------------------------------------------------- */}

//                 {/* <div class="col-xl-3 col-md-6 col-lg-4 col-sm-6">
//                   <div class="product-wrap mb-25">
//                     <div class="product-img">
//                       <a href="product-details.html">
//                         <img class="default-img" src={"img/pro-1.jpg"} alt="" />
//                         <img class="hover-img" src={"img/pro-1-1.jpg"} alt="" />
//                       </a>
//                       <span class="purple">New</span>
//                       <div class="product-action">
//                         <div class="pro-same-action pro-wishlist">
//                           <a title="Wishlist" href="wishlist.html">
//                             <i class="pe-7s-like"></i>
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-cart">
//                           <a title="Add To Cart" href=" ">
//                             <i class="pe-7s-cart"></i> Add to cart
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-quickview">
//                           <a
//                             title="Quick View"
//                             href=" "
//                             data-bs-toggle="modal"
//                             data-bs-target="#exampleModal"
//                           >
//                             <i class="pe-7s-look"></i>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="product-content text-center">
//                       <h3>
//                         <a href="product-details.html">Winter Zipper </a>
//                       </h3>
//                       <div class="product-rating">
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o"></i>
//                         <i class="fa fa-star-o"></i>
//                       </div>
//                       <div class="product-price">
//                         <span>$ 60.00</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div> */}
//                {/* ----------------------------------------------------------------------- */}

//                 {/* <div class="col-xl-3 col-md-6 col-lg-4 col-sm-6">
//                   <div class="product-wrap mb-25">
//                     <div class="product-img">
//                       <a href="product-details.html">
//                         <img class="default-img" src={"img/pro-2.jpg"} alt="" />
//                         <img class="hover-img" src={"img/pro-2-1.jpg"} alt="" />
//                       </a>
//                       <span class="purple">New</span>
//                       <div class="product-action">
//                         <div class="pro-same-action pro-wishlist">
//                           <a title="Wishlist" href="wishlist.html">
//                             <i class="pe-7s-like"></i>
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-cart">
//                           <a title="Add To Cart" href=" ">
//                             <i class="pe-7s-cart"></i> Add to cart
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-quickview">
//                           <a
//                             title="Quick View"
//                             href=" "
//                             data-bs-toggle="modal"
//                             data-bs-target="#exampleModal"
//                           >
//                             <i class="pe-7s-look"></i>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="product-content text-center">
//                       <h3>
//                         <a href="product-details.html">Trench Winter Coat</a>
//                       </h3>
//                       <div class="product-rating">
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o"></i>
//                         <i class="fa fa-star-o"></i>
//                       </div>
//                       <div class="product-price">
//                         <span>$ 60.00</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div> */}
//                 {/* ----------------------------------------------------------------------- */}

//                 {/* <div class="col-xl-3 col-md-6 col-lg-4 col-sm-6">
//                   <div class="product-wrap mb-25">
//                     <div class="product-img">
//                       <a href="product-details.html">
//                         <img class="default-img" src={"img/pro-3.jpg"} alt="" />
//                         <img class="hover-img" src={"img/pro-3-1.jpg"} alt="" />
//                       </a>
//                       <span class="pink">-10%</span>
//                       <div class="product-action">
//                         <div class="pro-same-action pro-wishlist">
//                           <a title="Wishlist" href="wishlist.html">
//                             <i class="pe-7s-like"></i>
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-cart">
//                           <a title="Add To Cart" href=" ">
//                             <i class="pe-7s-cart"></i> Add to cart
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-quickview">
//                           <a
//                             title="Quick View"
//                             href=" "
//                             data-bs-toggle="modal"
//                             data-bs-target="#exampleModal"
//                           >
//                             <i class="pe-7s-look"></i>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="product-content text-center">
//                       <h3>
//                         <a href="product-details.html">Winter Zipper </a>
//                       </h3>
//                       <div class="product-rating">
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o"></i>
//                         <i class="fa fa-star-o"></i>
//                       </div>
//                       <div class="product-price">
//                         <span>$ 60.00</span>
//                         <span class="old">$ 60.00</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* ----------------------------------------------------------------------- */}
// {/*
//                 <div class="col-xl-3 col-md-6 col-lg-4 col-sm-6">
//                   <div class="product-wrap mb-25">
//                     <div class="product-img">
//                       <a href="product-details.html">
//                         <img class="default-img" src={"img/pro-4.jpg"} alt="" />
//                         <img class="hover-img" src={"img/pro-4-1.jpg"} alt="" />
//                       </a>
//                       <span class="purple">New</span>
//                       <div class="product-action">
//                         <div class="pro-same-action pro-wishlist">
//                           <a title="Wishlist" href="wishlist.html">
//                             <i class="pe-7s-like"></i>
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-cart">
//                           <a title="Add To Cart" href=" ">
//                             <i class="pe-7s-cart"></i> Add to cart
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-quickview">
//                           <a
//                             title="Quick View"
//                             href=" "
//                             data-bs-toggle="modal"
//                             data-bs-target="#exampleModal"
//                           >
//                             <i class="pe-7s-look"></i>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="product-content text-center">
//                       <h3>
//                         <a href="product-details.html">Trench Winter Coat</a>
//                       </h3>
//                       <div class="product-rating">
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o"></i>
//                         <i class="fa fa-star-o"></i>
//                       </div>
//                       <div class="product-price">
//                         <span>$ 60.00</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* ----------------------------------------------------------------------- */}
// {/*
//                 <div class="col-xl-3 col-md-6 col-lg-4 col-sm-6">
//                   <div class="product-wrap mb-25">
//                     <div class="product-img">
//                       <a href="product-details.html">
//                         <img class="default-img" src={"img/pro-5.jpg"} alt="" />
//                         <img class="hover-img" src={"img/pro-5-1.jpg"} alt="" />
//                       </a>
//                       <span class="pink">-10%</span>
//                       <div class="product-action">
//                         <div class="pro-same-action pro-wishlist">
//                           <a title="Wishlist" href="wishlist.html">
//                             <i class="pe-7s-like"></i>
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-cart">
//                           <a title="Add To Cart" href=" ">
//                             <i class="pe-7s-cart"></i> Add to cart
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-quickview">
//                           <a
//                             title="Quick View"
//                             href=" "
//                             data-bs-toggle="modal"
//                             data-bs-target="#exampleModal"
//                           >
//                             <i class="pe-7s-look"></i>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="product-content text-center">
//                       <h3>
//                         <a href="product-details.html">Nice Black Dress</a>
//                       </h3>
//                       <div class="product-rating">
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o"></i>
//                         <i class="fa fa-star-o"></i>
//                       </div>
//                       <div class="product-price">
//                         <span>$ 60.00</span>
//                         <span class="old">$ 60.00</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>  */}
//                 {/* ----------------------------------------------------------------------- */}
// {/*
//                 <div class="col-xl-3 col-md-6 col-lg-4 col-sm-6">
//                   <div class="product-wrap mb-25">
//                     <div class="product-img">
//                       <a href="product-details.html">
//                         <img class="default-img" src={"img/pro-6.jpg"} alt="" />
//                         <img class="hover-img" src={"img/pro-6-1.jpg"} alt="" />
//                       </a>
//                       <span class="purple">New</span>
//                       <div class="product-action">
//                         <div class="pro-same-action pro-wishlist">
//                           <a title="Wishlist" href="wishlist.html">
//                             <i class="pe-7s-like"></i>
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-cart">
//                           <a title="Add To Cart" href=" ">
//                             <i class="pe-7s-cart"></i> Add to cart
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-quickview">
//                           <a
//                             title="Quick View"
//                             href=" "
//                             data-bs-toggle="modal"
//                             data-bs-target="#exampleModal"
//                           >
//                             <i class="pe-7s-look"></i>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="product-content text-center">
//                       <h3>
//                         <a href="product-details.html">Winter Overcoat</a>
//                       </h3>
//                       <div class="product-rating">
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o"></i>
//                         <i class="fa fa-star-o"></i>
//                       </div>
//                       <div class="product-price">
//                         <span>$ 60.00</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>  */}
//                 {/* ----------------------------------------------------------------------- */}

//                 {/* <div class="col-xl-3 col-md-6 col-lg-4 col-sm-6">
//                   <div class="product-wrap mb-25">
//                     <div class="product-img">
//                       <a href="product-details.html">
//                         <img class="default-img" src={"img/pro-7.jpg"} alt="" />
//                         <img class="hover-img" src={"img/pro-4-1.jpg"} alt="" />
//                       </a>
//                       <span class="pink">-10%</span>
//                       <div class="product-action">
//                         <div class="pro-same-action pro-wishlist">
//                           <a title="Wishlist" href="wishlist.html">
//                             <i class="pe-7s-like"></i>
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-cart">
//                           <a title="Add To Cart" href=" ">
//                             <i class="pe-7s-cart"></i> Add to cart
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-quickview">
//                           <a
//                             title="Quick View"
//                             href=" "
//                             data-bs-toggle="modal"
//                             data-bs-target="#exampleModal"
//                           >
//                             <i class="pe-7s-look"></i>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="product-content text-center">
//                       <h3>
//                         <a href="product-details.html">Trench Winter Coat</a>
//                       </h3>
//                       <div class="product-rating">
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o"></i>
//                         <i class="fa fa-star-o"></i>
//                       </div>
//                       <div class="product-price">
//                         <span>$ 60.00</span>
//                         <span class="old">$ 60.00</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div> */}
//                 {/* ----------------------------------------------------------------------- */}

//                 {/* <div class="col-xl-3 col-md-6 col-lg-4 col-sm-6">
//                   <div class="product-wrap mb-25">
//                     <div class="product-img">
//                       <a href="product-details.html">
//                         <img class="default-img" src={"img/pro-8.jpg"} alt="" />
//                         <img class="hover-img" src={"img/pro-6.jpg"} alt="" />
//                       </a>
//                       <span class="purple">New</span>
//                       <div class="product-action">
//                         <div class="pro-same-action pro-wishlist">
//                           <a title="Wishlist" href="wishlist.html">
//                             <i class="pe-7s-like"></i>
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-cart">
//                           <a title="Add To Cart" href=" ">
//                             <i class="pe-7s-cart"></i> Add to cart
//                           </a>
//                         </div>
//                         <div class="pro-same-action pro-quickview">
//                           <a
//                             title="Quick View"
//                             href=" "
//                             data-bs-toggle="modal"
//                             data-bs-target="#exampleModal"
//                           >
//                             <i class="pe-7s-look"></i>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="product-content text-center">
//                       <h3>
//                         <a href="product-details.html">Crew Ventile Coat</a>
//                       </h3>
//                       <div class="product-rating">
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o yellow"></i>
//                         <i class="fa fa-star-o"></i>
//                         <i class="fa fa-star-o"></i>
//                       </div>
//                       <div class="product-price">
//                         <span>$ 60.00</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div> */}
//                 {/* ----------------------------------------------------------------------- */}

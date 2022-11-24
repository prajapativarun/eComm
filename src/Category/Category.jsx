import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Category.css";
import { baseUrl } from "../Helper";
const Category = () => {
  useEffect(() => {
    getData();
  }, []);
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .post(`${baseUrl}/api/v1/category/list`, {
        where: {
          isActive: true,
        },
        pagination: {
          sortBy: "createdAt",
          descending: true,
          rowsPerPage: 1000,
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
      <div class="banner-area pb-90 pt-120">
        <div class="container">
          <h1 className="section-title text-center">Shop by Categories</h1>
          <div class="row">
            {data.map((item, d) => {
              return (
                <div class="col-lg-3 col-md-3" key={d}>
                  <div class="single-banner banner-red-color mb-30">
                    <a href="product-details.html">
                      <img src={`${baseUrl}/${item.categoryImg}`} alt="" />
                    </a>
                    <div class="banner-content">
                      <h3>{item.categoryName}</h3>
                      <h4>
                        Starting at <span>$99.00</span>
                      </h4>
                      <a href="product-details.html">
                        <i class="fa fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

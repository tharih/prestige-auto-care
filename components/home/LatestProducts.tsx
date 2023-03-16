import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import stylesIndex from "./SliderComponent.module.css";
import Link from "next/link";

type Props = {
  settings_003: object;
  settings_005: object;
};

const LatestProducts = ({ settings_003, settings_005 }: Props) => {
  return (
    <>
      <section
        className={stylesIndex.pcspace}
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Latest Products</span>
            <h2 className="sec-title">Browse Our Products</h2>
          </div>
          <div className="row as-carousel">
            <Slider {...settings_003} className="row as-carousel">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_1.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
                        <i className="fa fa-cart-plus" />
                      </a>{" "}
                      <a href="wishlist.html" className="icon-btn">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <span className="category">Wheel</span>
                  </div>
                  <div className="product-content">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
                        customer rating
                      </span>
                    </div>
                    <h3 className="product-title">
                      <Link href="shop-details.html">Car Engine Plug</Link>
                    </h3>
                    <span className="price">
                      $180.85<del>$350.99</del>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_2.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
                        <i className="fa fa-cart-plus" />
                      </a>{" "}
                      <a href="wishlist.html" className="icon-btn">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <span className="category">Filter</span>
                  </div>
                  <div className="product-content">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
                        customer rating
                      </span>
                    </div>
                    <h3 className="product-title">
                      <Link href="shop-details.html">Car Air Filter</Link>
                    </h3>
                    <span className="price">$190.85</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_3.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
                        <i className="fa fa-cart-plus" />
                      </a>{" "}
                      <a href="wishlist.html" className="icon-btn">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <span className="category">Plug</span>
                  </div>
                  <div className="product-content">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
                        customer rating
                      </span>
                    </div>
                    <h3 className="product-title">
                      <Link href="shop-details.html">CSK Red Wheel</Link>
                    </h3>
                    <span className="price">$160.85</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_4.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
                        <i className="fa fa-cart-plus" />
                      </a>{" "}
                      <a href="wishlist.html" className="icon-btn">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <span className="category">Light</span>
                  </div>
                  <div className="product-content">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
                        customer rating
                      </span>
                    </div>
                    <h3 className="product-title">
                      <Link href="shop-details.html">Cools Led Light</Link>
                    </h3>
                    <span className="price">$170.85</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_5.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
                        <i className="fa fa-cart-plus" />
                      </a>{" "}
                      <a href="wishlist.html" className="icon-btn">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <span className="category">Liver</span>
                  </div>
                  <div className="product-content">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
                        customer rating
                      </span>
                    </div>
                    <h3 className="product-title">
                      <Link href="shop-details.html">Allion Brake Pad</Link>
                    </h3>
                    <span className="price">$120.85</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_6.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
                        <i className="fa fa-cart-plus" />
                      </a>{" "}
                      <a href="wishlist.html" className="icon-btn">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <span className="category">Break</span>
                  </div>
                  <div className="product-content">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
                        customer rating
                      </span>
                    </div>
                    <h3 className="product-title">
                      <Link href="shop-details.html">Car USB Ports</Link>
                    </h3>
                    <span className="price">$100.85</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_7.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
                        <i className="fa fa-cart-plus" />
                      </a>{" "}
                      <a href="wishlist.html" className="icon-btn">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <span className="category">Wheel</span>
                  </div>
                  <div className="product-content">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
                        customer rating
                      </span>
                    </div>
                    <h3 className="product-title">
                      <Link href="shop-details.html">Car Engine Solt</Link>
                    </h3>
                    <span className="price">$120.85</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_8.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
                        <i className="fa fa-cart-plus" />
                      </a>{" "}
                      <a href="wishlist.html" className="icon-btn">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <span className="category">Filter</span>
                  </div>
                  <div className="product-content">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
                        customer rating
                      </span>
                    </div>
                    <h3 className="product-title">
                      <Link href="shop-details.html">Car Oil Filter</Link>
                    </h3>
                    <span className="price">$100.85</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_9.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
                        <i className="fa fa-cart-plus" />
                      </a>{" "}
                      <a href="wishlist.html" className="icon-btn">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <span className="category">Plug</span>
                  </div>
                  <div className="product-content">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
                        customer rating
                      </span>
                    </div>
                    <h3 className="product-title">
                      <Link href="shop-details.html">BMW Brake Liver</Link>
                    </h3>
                    <span className="price">$120.85</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_10.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
                        <i className="fa fa-cart-plus" />
                      </a>{" "}
                      <a href="wishlist.html" className="icon-btn">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <span className="category">Light</span>
                  </div>
                  <div className="product-content">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
                        customer rating
                      </span>
                    </div>
                    <h3 className="product-title">
                      <Link href="shop-details.html">Special Hydraulic</Link>
                    </h3>
                    <span className="price">$100.85</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_11.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
                        <i className="fa fa-cart-plus" />
                      </a>{" "}
                      <a href="wishlist.html" className="icon-btn">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <span className="category">Liver</span>
                  </div>
                  <div className="product-content">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
                        customer rating
                      </span>
                    </div>
                    <h3 className="product-title">
                      <Link href="shop-details.html">Audi Wheel Combo</Link>
                    </h3>
                    <span className="price">$120.85</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_12.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
                        <i className="fa fa-cart-plus" />
                      </a>{" "}
                      <a href="wishlist.html" className="icon-btn">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <span className="category">Break</span>
                  </div>
                  <div className="product-content">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
                        customer rating
                      </span>
                    </div>
                    <h3 className="product-title">
                      <Link href="shop-details.html">Fast Aloy Wheel</Link>
                    </h3>
                    <span className="price">$100.85</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section
        className={stylesIndex.mobilespace}
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Popular Products</span>
            <h2 className="sec-title">Browse Our Products</h2>
          </div>
          <div
            className="row as-carousel"
            data-slide-show={4}
            data-lg-slide-show={3}
            data-md-slide-show={2}
            data-sm-slide-show={2}
            data-xs-slide-show={1}
            data-arrows="true"
          >
            <Slider {...settings_005} className="row as-carousel">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_1.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
                        <i className="fa fa-cart-plus" />
                      </a>{" "}
                      <a href="wishlist.html" className="icon-btn">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <span className="category">Wheel</span>
                  </div>
                  <div className="product-content">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
                        customer rating
                      </span>
                    </div>
                    <h3 className="product-title">
                      <Link href="shop-details.html">Car Engine Plug</Link>
                    </h3>
                    <span className="price">
                      $180.85<del>$350.99</del>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_2.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
                        <i className="fa fa-cart-plus" />
                      </a>{" "}
                      <a href="wishlist.html" className="icon-btn">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <span className="category">Filter</span>
                  </div>
                  <div className="product-content">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
                        customer rating
                      </span>
                    </div>
                    <h3 className="product-title">
                      <Link href="shop-details.html">Car Air Filter</Link>
                    </h3>
                    <span className="price">$190.85</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_3.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
                        <i className="fa fa-cart-plus" />
                      </a>{" "}
                      <a href="wishlist.html" className="icon-btn">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <span className="category">Plug</span>
                  </div>
                  <div className="product-content">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
                        customer rating
                      </span>
                    </div>
                    <h3 className="product-title">
                      <Link href="shop-details.html">CSK Red Wheel</Link>
                    </h3>
                    <span className="price">$160.85</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_4.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
                        <i className="fa fa-cart-plus" />
                      </a>{" "}
                      <a href="wishlist.html" className="icon-btn">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <span className="category">Light</span>
                  </div>
                  <div className="product-content">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
                        customer rating
                      </span>
                    </div>
                    <h3 className="product-title">
                      <Link href="shop-details.html">Cools Led Light</Link>
                    </h3>
                    <span className="price">$170.85</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_5.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
                        <i className="fa fa-cart-plus" />
                      </a>{" "}
                      <a href="wishlist.html" className="icon-btn">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <span className="category">Liver</span>
                  </div>
                  <div className="product-content">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
                        customer rating
                      </span>
                    </div>
                    <h3 className="product-title">
                      <Link href="shop-details.html">Allion Brake Pad</Link>
                    </h3>
                    <span className="price">$120.85</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_6.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
                        <i className="fa fa-cart-plus" />
                      </a>{" "}
                      <a href="wishlist.html" className="icon-btn">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <span className="category">Break</span>
                  </div>
                  <div className="product-content">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
                        customer rating
                      </span>
                    </div>
                    <h3 className="product-title">
                      <Link href="shop-details.html">Car USB Ports</Link>
                    </h3>
                    <span className="price">$100.85</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_7.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
                        <i className="fa fa-cart-plus" />
                      </a>{" "}
                      <a href="wishlist.html" className="icon-btn">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <span className="category">Wheel</span>
                  </div>
                  <div className="product-content">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
                        customer rating
                      </span>
                    </div>
                    <h3 className="product-title">
                      <Link href="shop-details.html">Car Engine Solt</Link>
                    </h3>
                    <span className="price">$120.85</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_8.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
                        <i className="fa fa-cart-plus" />
                      </a>{" "}
                      <a href="wishlist.html" className="icon-btn">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <span className="category">Filter</span>
                  </div>
                  <div className="product-content">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
                        customer rating
                      </span>
                    </div>
                    <h3 className="product-title">
                      <Link href="shop-details.html">Car Oil Filter</Link>
                    </h3>
                    <span className="price">$100.85</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_9.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
                        <i className="fa fa-cart-plus" />
                      </a>{" "}
                      <a href="wishlist.html" className="icon-btn">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <span className="category">Plug</span>
                  </div>
                  <div className="product-content">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
                        customer rating
                      </span>
                    </div>
                    <h3 className="product-title">
                      <Link href="shop-details.html">BMW Brake Liver</Link>
                    </h3>
                    <span className="price">$120.85</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_10.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
                        <i className="fa fa-cart-plus" />
                      </a>{" "}
                      <a href="wishlist.html" className="icon-btn">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <span className="category">Light</span>
                  </div>
                  <div className="product-content">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
                        customer rating
                      </span>
                    </div>
                    <h3 className="product-title">
                      <Link href="shop-details.html">Special Hydraulic</Link>
                    </h3>
                    <span className="price">$100.85</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_11.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
                        <i className="fa fa-cart-plus" />
                      </a>{" "}
                      <a href="wishlist.html" className="icon-btn">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <span className="category">Liver</span>
                  </div>
                  <div className="product-content">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
                        customer rating
                      </span>
                    </div>
                    <h3 className="product-title">
                      <Link href="shop-details.html">Audi Wheel Combo</Link>
                    </h3>
                    <span className="price">$120.85</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_12.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
                        <i className="fa fa-cart-plus" />
                      </a>{" "}
                      <a href="wishlist.html" className="icon-btn">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <span className="category">Break</span>
                  </div>
                  <div className="product-content">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
                        customer rating
                      </span>
                    </div>
                    <h3 className="product-title">
                      <Link href="shop-details.html">Fast Aloy Wheel</Link>
                    </h3>
                    <span className="price">$100.85</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestProducts;

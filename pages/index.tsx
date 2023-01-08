import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import stylesIndex from "./index.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { url } from "inspector";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";
import Link from "next/link";
// import "jquery-ui-dist/jquery-ui";
// import  $ from 'jquery';

type Props = {};
const inter = Inter({ subsets: ["latin"] });

export default function Home({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Get Your Amazing"],
    delaySpeed: 2000,
    loop: true,
  });

  const [CarSolution, count1] = useTypewriter({
    words: ["Car Solution"],
    delaySpeed: 2000,
    loop: false,
  });
  // carousal settings Start
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  const settings_001 = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 5000,
    arrows: false,
    swipeToSlide: true,
    centerPadding: "60px",
    autoPlay: true,
  };
  const settings_003 = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    arrows: false,
  };
  const settings_004 = {
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
  };
  const settings_005 = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
  };
  // carousal settings End
  return (
    <>
      <div id="QuickView" className="white-popup mfp-hide">
        <div className="container bg-white">
          <div className="row gx-60">
            <div className="col-lg-6">
              <div className="product-big-img">
                <div className="img">
                  <img
                    src="assets/img/product/product_details_1_1.jpg"
                    alt="Product Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="product-about">
                <p className="price">
                  $180.85<del>$350.99</del>
                </p>
                <h2 className="product-title">Aero Rear Diffuser</h2>
                <div className="product-rating">
                  <div
                    className="star-rating"
                    role="img"
                    aria-label="Rated 5.00 out of 5"
                  >
                    <span style={{ width: "100%" }}>
                      Rated <strong className="rating">5.00</strong> out of 5
                      based on
                      <span className="rating">1</span> customer rating
                    </span>
                  </div>
                  <Link
                    href="shop-details.html"
                    className="woocommerce-review-link"
                  >
                    (<span className="count">3</span>
                    customer reviews)
                  </Link>
                </div>
                <p className="text">
                  Syndicate customized growth strategies prospective human
                  capital leverage other's optimal e-markets without transparent
                  catalysts for change.
                </p>
                <div className="checklist style3">
                  <ul>
                    <li>Lifetime structural, one year face finish warranty</li>
                    <li>Mapped from “Center Caps” under ” tment” tab</li>
                    <li>Fully copatible with OEM equimpent</li>
                  </ul>
                </div>
                <div className="actions">
                  <div className="quantity">
                    <input
                      type="number"
                      className="qty-input"
                      step={1}
                      min={1}
                      max={100}
                      name="quantity"
                      defaultValue={1}
                      title="Qty"
                    />{" "}
                    <button className="quantity-plus qty-btn">
                      <i className="fa fa-chevron-up" />
                    </button>{" "}
                    <button className="quantity-minus qty-btn">
                      <i className="fa fa-chevron-down" />
                    </button>
                  </div>
                  <button className="as-btn">Add to Cart</button>
                </div>
                <div className="product_meta">
                  <span className="sku_wrapper">
                    SKU: <span className="sku">wheel-fits-chevy-camaro</span>
                  </span>{" "}
                  <span className="posted_in">
                    Category:
                    <Link href="shop.html" rel="tag">
                      Tires &amp; Wheels
                    </Link>
                  </span>{" "}
                  <span>
                    Tags: <Link href="shop.html">automotive parts</Link>
                    <Link href="shop.html">wheels</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button title="Close (Esc)" type="button" className="mfp-close">
            ×
          </button>
        </div>
      </div>

      <div
        className="as-hero-wrapper hero-slider-3 as-carousel number-dots"
        style={{ maxHeight: "80vh" }}
      >
        <Slider {...settings}>
          <div className={stylesIndex.imageBG_01}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <motion.div
                    initial={{
                      opacity: 0,
                      translateY: -300,
                    }}
                    whileInView={{
                      opacity: 1,
                      translateY: 0,
                    }}
                    transition={{
                      duration: 1,
                    }}
                    className={stylesIndex.bannerContent}
                    // style={{ marginTop: "-620px" }}
                  >
                    <span
                      className={stylesIndex.heroSubtitle}
                      data-ani="slideindown"
                      data-ani-delay="0.2s"
                    >
                      Non Stop Car Servicing Center
                    </span>
                    <h1
                      className={stylesIndex.heroTitle}
                      data-ani="slideindown"
                      data-ani-delay="0.3s"
                    >
                      {text}
                    </h1>
                    <h1
                      className={stylesIndex.heroTitle}
                      data-ani="slideindown"
                      data-ani-delay="0.4s"
                    >
                      {CarSolution}
                    </h1>
                    <p
                      className="hero-text"
                      data-ani="slideindown"
                      data-ani-delay="0.5s"
                      style={{ marginBottom: "50px" }}
                    >
                      Take payments online with a scalable platform that grows
                      with your perfect business.
                    </p>
                    <motion.a
                      initial={{
                        opacity: 0,
                        translateY: 300,
                      }}
                      whileInView={{
                        opacity: 1,
                        translateY: -20,
                      }}
                      transition={{
                        duration: 1,
                      }}
                      href="Contact"
                      className="as-btn style3"
                      data-ani="slideindown"
                      data-ani-delay="0.6s"
                    >
                      Get A Quote
                    </motion.a>
                    <img
                      className="banner-arrow"
                      data-animation="fadeInRight"
                      data-delay=".9s"
                      src="/assets/images/banner-arrow.png"
                      alt=""
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div className={stylesIndex.imageBG_02}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                    }}
                    className={stylesIndex.bannerContent}
                  >
                    <span
                      className={stylesIndex.heroSubtitle}
                      data-ani="slideindown"
                      data-ani-delay="0.2s"
                    >
                      Non Stop Car Servicing Center
                    </span>
                    <h1
                      className={stylesIndex.heroTitle}
                      data-ani="slideindown"
                      data-ani-delay="0.3s"
                    >
                      Get Your Amazing 02
                    </h1>
                    <h1
                      className={stylesIndex.heroTitle}
                      data-ani="slideindown"
                      data-ani-delay="0.4s"
                    >
                      Car Solution
                    </h1>
                    <p
                      className="hero-text"
                      data-ani="slideindown"
                      data-ani-delay="0.5s"
                      style={{ marginBottom: "50px" }}
                    >
                      Take payments online with a scalable platform that grows
                      with your perfect business.
                    </p>
                    <Link
                      href="Contact"
                      className="as-btn style3"
                      data-ani="slideindown"
                      data-ani-delay="0.6s"
                    >
                      Get A Quote
                    </Link>
                    <img
                      className="banner-arrow"
                      data-animation="fadeInRight"
                      data-delay=".9s"
                      src="/assets/images/banner-arrow.png"
                      alt=""
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div className={stylesIndex.imageBG_03}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 ">
                  <motion.div
                    initial={{
                      opacity: 0,
                      translateY: -300,
                    }}
                    whileInView={{
                      opacity: 1,
                      translateY: 0,
                    }}
                    transition={{
                      duration: 1,
                    }}
                    className={stylesIndex.bannerContent}
                    // style={{ marginTop: "-620px" }}
                  >
                    <span
                      className={stylesIndex.heroSubtitle}
                      data-ani="slideindown"
                      data-ani-delay="0.2s"
                    >
                      Non Stop Car Servicing Center
                    </span>
                    <h1
                      className={stylesIndex.heroTitle}
                      data-ani="slideindown"
                      data-ani-delay="0.3s"
                    >
                      Get Your Amazing 03
                    </h1>
                    <h1
                      className={stylesIndex.heroTitle}
                      data-ani="slideindown"
                      data-ani-delay="0.4s"
                    >
                      Car Solution
                    </h1>
                    <p
                      className={stylesIndex.heroText}
                      data-ani="slideindown"
                      data-ani-delay="0.5s"
                      style={{ marginBottom: "50px" }}
                    >
                      Take payments online with a scalable platform that grows
                      with your perfect business.
                    </p>
                    <motion.a
                      initial={{
                        opacity: 0,
                        translateY: 300,
                      }}
                      whileInView={{
                        opacity: 1,
                        translateY: -20,
                      }}
                      transition={{
                        duration: 1,
                      }}
                      href="Contact"
                      className="as-btn style3"
                      data-ani="slideindown"
                      data-ani-delay="0.6s"
                    >
                      Get A Quote
                    </motion.a>
                    <img
                      className="banner-arrow"
                      data-animation="fadeInRight"
                      data-delay=".9s"
                      src="/assets/images/banner-arrow.png"
                      alt=""
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div
        data-slide-show={1}
        data-md-slide-show={1}
        data-fade="true"
        data-dots="true"
        data-xl-dots="true"
        data-ml-dots="true"
        data-lg-dots="true"
      ></div>

      <section
        className="space"
        style={{ backgroundColor: "white", marginTop: "25px" }}
      >
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Our Best Service</span>
            <h2 className="sec-title">Quality Servicing Opportunity</h2>
          </div>
          <div
            className="row as-carousel"
            data-slide-show={3}
            data-md-slide-show={2}
            data-arrows="true"
          >
            {/* <Slider {...settings_001} > */}

            <div className="col-md-6 col-lg-4">
              <div className="service-block">
                <div className="service-block_img">
                  <img
                    src="assets/img/service/service_4_1.jpg"
                    alt="service image"
                  />
                </div>
                <div
                  className="service-block_content"
                  data-bg-src="assets/img/bg/pattern_bg_7.png"
                  style={{
                    backgroundImage: `url('assets/img/bg/pattern_bg_7.png')`,
                  }}
                >
                  <span className="service-block_number">Service 01</span>
                  <h3 className="service-block_title">
                    <Link href="Servicedetails">Parts</Link>
                  </h3>
                  <Link href="Servicedetails" className="as-btn">
                    View Service
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-block">
                <div className="service-block_img">
                  <img
                    src="assets/img/service/service_4_2.jpg"
                    alt="service image"
                  />
                </div>
                <div
                  className="service-block_content"
                  data-bg-src="assets/img/bg/pattern_bg_7.png"
                  style={{
                    backgroundImage: `url('assets/img/bg/pattern_bg_7.png')`,
                  }}
                >
                  <span className="service-block_number">Service 02</span>
                  <h3 className="service-block_title">
                    <Link href="Servicedetails">Panel & Paint</Link>
                  </h3>
                  <Link href="Servicedetails" className="as-btn">
                    View Service
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-block">
                <div className="service-block_img">
                  <img
                    src="assets/img/service/service_4_3.jpg"
                    alt="service image"
                  />
                </div>
                <div
                  className="service-block_content"
                  data-bg-src="assets/img/bg/pattern_bg_7.png"
                  style={{
                    backgroundImage: `url('assets/img/bg/pattern_bg_7.png')`,
                  }}
                >
                  <span className="service-block_number">Service 03</span>
                  <h3 className="service-block_title">
                    <Link href="Servicedetails">Mechanical</Link>
                  </h3>
                  <Link href="Servicedetails" className="as-btn">
                    View Service
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6 col-lg-4">
            <div className="service-block">
              <div className="service-block_img">
                <img
                  src="assets/img/service/service_4_4.jpg"
                  alt="service image"
                />
              </div>
              <div
                className="service-block_content"
                data-bg-src="assets/img/bg/pattern_bg_7.png"
              >
                <span className="service-block_number">Service 04</span>
                <h3 className="service-block_title">
                  <Link href="Servicedetails">Engine Cleaning</Link>
                </h3>
                <Link href="Servicedetails" className="as-btn">
                  View Service
                </Link>
              </div>
            </div>
          </div> */}
            {/* </Slider> */}
          </div>
        </div>
      </section>
      <section
        className="space"
        data-overlay="title"
        data-opacity={7}
        style={{ backgroundImage: `url('assets/img/bg/cta_bg_1.jpg')` }}
        //  style={{backgroundImage:url("assets/img/bg/cta_bg_1.jpg")}}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 mb-5 mb-lg-0">
              <div className="title-area mb-0 text-lg-start text-center">
                <span className="sub-title text-white">Get Our Service</span>
                <h2 className="sec-title text-white">
                  Get Premium Auto Car Service Feel Free To Contact Us.
                </h2>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="btn-group justify-content-lg-end justify-content-center">
                <Link href="Services" className="as-btn style3">
                  Get Our Service
                </Link>{" "}
                <Link href="Contact" className="as-btn style-play">
                  <i className="fa-solid fa-play" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="space position-relative overflow-hidden"
        style={{ backgroundColor: "white" }}
      >
        <div className="bg-shape1" />
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-xl-6">
              <div className="img-box-3">
                <div className="img1">
                  <img src="assets/img/normal/about_4_1.jpg" alt="About" />
                </div>
                <div className="img2">
                  <div className="as-experience style3">
                    <h3 className="experience-year">
                      <span className="counter-number">25</span>+
                    </h3>
                    <h4 className="experience-text">Years Of Experience</h4>
                  </div>
                  <img src="assets/img/normal/about_4_2.jpg" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="title-area mb-40">
                <span className="sub-title">About Company</span>
                <h2 className="sec-title">
                  We Are Qualified In Every Car Departments
                </h2>
              </div>
              <div className="nav tab-menu4" role="tablist">
                <button
                  className="as-btn active"
                  id="nav-one-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-one"
                  type="button"
                  role="tab"
                  aria-controls="nav-one"
                  aria-selected="true"
                >
                  About Us
                </button>{" "}
                {/* <button
                  className="as-btn"
                  id="nav-two-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-two"
                  type="button"
                  role="tab"
                  aria-controls="nav-two"
                  aria-selected="false"
                >
                  Our Mission
                </button>{" "} */}
                {/* <button
                  className="as-btn"
                  id="nav-three-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-three"
                  type="button"
                  role="tab"
                  aria-controls="nav-three"
                  aria-selected="false"
                >
                  Our Vision
                </button> */}
              </div>
              <div className="tab-content why-tabcontent" id="why-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-one"
                  role="tabpanel"
                  aria-labelledby="nav-one-tab"
                >
                  <p className="mb-35">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus, sapiente nisi magni rem dolore voluptates vero, neque
                    alias fugit nulla praesentium exercitationem eos totam,
                    consequuntur tenetur quasi esse eveniet sequi?
                  </p>
                  <div className="pt-40">
                    <div className="about-progress">
                      <div className="progress">
                        <div className="progress-bar" style={{ width: "90%" }}>
                          <div className="progress-value">90%</div>
                        </div>
                      </div>
                      <h3 className="about-progress_title">Engine Solution</h3>
                    </div>
                    <div className="about-progress">
                      <div className="progress">
                        <div className="progress-bar" style={{ width: "85%" }}>
                          <div className="progress-value">85%</div>
                        </div>
                      </div>
                      <h3 className="about-progress_title">
                        Engine Diagnostics
                      </h3>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Link href="Contact" className="as-btn">
                      Get A Quote
                    </Link>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-two"
                  role="tabpanel"
                  aria-labelledby="nav-two-tab"
                >
                  <p className="mb-35">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Exercitationem rerum nulla eveniet dolorum beatae quia
                    illum, earum qui? Aperiam est debitis hic, blanditiis unde
                    totam repellendus eaque quos officiis architecto!
                  </p>
                  <div className="pt-40">
                    <div className="about-progress">
                      <div className="progress">
                        <div className="progress-bar" style={{ width: "80%" }}>
                          <div className="progress-value">80%</div>
                        </div>
                      </div>
                      <h3 className="about-progress_title">Solution Any Car</h3>
                    </div>
                    <div className="about-progress">
                      <div className="progress">
                        <div className="progress-bar" style={{ width: "84%" }}>
                          <div className="progress-value">84%</div>
                        </div>
                      </div>
                      <h3 className="about-progress_title">Engine Problems</h3>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Link href="Contact" className="as-btn">
                      Get A Quote
                    </Link>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-three"
                  role="tabpanel"
                  aria-labelledby="nav-three-tab"
                >
                  <p className="mb-35">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, nostrum sit ratione veritatis praesentium
                    recusandae fugiat ab labore quam nemo earum dolore optio
                    sint, ut cum culpa quaerat aut totam.
                  </p>
                  <div className="pt-40">
                    <div className="about-progress">
                      <div className="progress">
                        <div className="progress-bar" style={{ width: "90%" }}>
                          <div className="progress-value">90%</div>
                        </div>
                      </div>
                      <h3 className="about-progress_title">
                        Build Relationship
                      </h3>
                    </div>
                    <div className="about-progress">
                      <div className="progress">
                        <div className="progress-bar" style={{ width: "99%" }}>
                          <div className="progress-value">99%</div>
                        </div>
                      </div>
                      <h3 className="about-progress_title">
                        Customer Satisfaction
                      </h3>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Link href="Contact" className="as-btn">
                      Get A Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-title position-relative overflow-hidden">
        <div className="row">
          <div className="col-xl-6">
            <div className="as-video style1">
              <img src="assets/img/normal/video_2.jpg" alt="Video Image" />{" "}
              <Link
                href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                className="play-btn popup-video"
              >
                <i className="fas fa-play" />
              </Link>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="feature-media-wrap space">
              <div className="title-area text-md-start text-center">
                <span className="sub-title">About Our Company</span>
                <h2 className="sec-title text-white">Why Choose Us?</h2>
              </div>
              <div className="feature-media">
                <div className="feature-media_num">01</div>
                <div className="feature-media_content">
                  <h3 className="feature-media_title">24/7 Work Process</h3>
                  <p className="feature-media_text">
                    Intrinsicly fashion enterprise manuftured products after
                    open source e-service engage transparent channels.
                  </p>
                </div>
              </div>
              <div className="feature-media">
                <div className="feature-media_num">02</div>
                <div className="feature-media_content">
                  <h3 className="feature-media_title">Expert Team Memebers</h3>
                  <p className="feature-media_text">
                    Intrinsicly fashion enterprise manuftured products after
                    open source e-service engage transparent channels.
                  </p>
                </div>
              </div>
              <div className="feature-media">
                <div className="feature-media_num">03</div>
                <div className="feature-media_content">
                  <h3 className="feature-media_title">Quality Time Delivery</h3>
                  <p className="feature-media_text">
                    Intrinsicly fashion enterprise manuftured products after
                    open source e-service engage transparent channels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="body-shape4">
          <img src="assets/img/shape/shape_2.png" alt="shape" />
        </div>
      </div>
      <section className={stylesIndex.pcspace} style={{ backgroundColor: "white" }}>
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
                      <a href="cart.html" className="icon-btn">
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
                      <a href="cart.html" className="icon-btn">
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
                      <a href="cart.html" className="icon-btn">
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
                      <a href="cart.html" className="icon-btn">
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
                      <a href="cart.html" className="icon-btn">
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
                      <a href="cart.html" className="icon-btn">
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
                      <a href="cart.html" className="icon-btn">
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
                      <a href="cart.html" className="icon-btn">
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
                      <a href="cart.html" className="icon-btn">
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
                      <a href="cart.html" className="icon-btn">
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
                      <a href="cart.html" className="icon-btn">
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
                      <a href="cart.html" className="icon-btn">
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


      {/* Mobile view  */}
      <section className={stylesIndex.mobilespace} style={{ backgroundColor: "white" }}>
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
                      <a href="cart.html" className="icon-btn">
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
                      <a href="cart.html" className="icon-btn">
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
                      <a href="cart.html" className="icon-btn">
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
                      <a href="cart.html" className="icon-btn">
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
                      <a href="cart.html" className="icon-btn">
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
                      <a href="cart.html" className="icon-btn">
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
                      <a href="cart.html" className="icon-btn">
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
                      <a href="cart.html" className="icon-btn">
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
                      <a href="cart.html" className="icon-btn">
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
                      <a href="cart.html" className="icon-btn">
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
                      <a href="cart.html" className="icon-btn">
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
                      <a href="cart.html" className="icon-btn">
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


      <section className="" style={{ backgroundColor: "white" }}>
        <div className="as-container3 space bg-title position-relative">
          <div className="container">
            <div className="row justify-content-lg-between justify-content-center align-items-center">
              <div className="col-lg-6">
                <div className="title-area text-center text-lg-start">
                  <span className="sub-title">Our Price Plan</span>
                  <h2 className="sec-title text-white">Services Cost</h2>
                </div>
              </div>
              <div className="col-auto">
                <div className="sec-btn">
                  <Link href="Price" className="as-btn style2">
                    See All Plans
                  </Link>
                </div>
              </div>
            </div>
            <div className="row gy-4">
              <div className="col-xl-8">
                <div className="price-box-wrap">
                  <div className="price-box">
                    <div className="price-box_img">
                      <img
                        src="assets/img/price/price_1_1.jpg"
                        alt="price image"
                      />
                    </div>
                    <div className="price-box_content">
                      <div className="price-box_header">
                        <h3 className="price-box_title">Panel & Paint</h3>
                        <h4 className="price-box_price">$599.00</h4>
                      </div>
                      <div className="price-box_list">
                        <ul>
                          <li style={{ color: "black" }}>
                            Rims &amp; Tire Change
                          </li>
                          <li style={{ color: "black" }}>
                            Rims &amp; Tire Change
                          </li>
                          <li style={{ color: "black" }}>
                            Rims &amp; Tire Change
                          </li>
                          <li style={{ color: "black" }}>
                            Rims &amp; Tire Change
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="price-box">
                    <div className="price-box_img">
                      <img
                        src="assets/img/price/price_1_2.jpg"
                        alt="price image"
                      />
                    </div>
                    <div className="price-box_content">
                      <div className="price-box_header">
                        <h3 className="price-box_title">Mechanical</h3>
                        <h4 className="price-box_price">$399.00</h4>
                      </div>
                      <div className="price-box_list">
                        <ul>
                          <li style={{ color: "black" }}>
                            Rims &amp; Tire Change
                          </li>
                          <li style={{ color: "black" }}>
                            Rims &amp; Tire Change
                          </li>
                          <li style={{ color: "black" }}>
                            Rims &amp; Tire Change
                          </li>
                          <li style={{ color: "black" }}>
                            Rims &amp; Tire Change
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <div className="price-box">
                  <div className="price-box_img">
                    <img src="assets/img/price/price_1_3.jpg" alt="price image" />
                  </div>
                  <div className="price-box_content">
                    <div className="price-box_header">
                      <h3 className="price-box_title">Wheel Servicing</h3>
                      <h4 className="price-box_price">$299.00</h4>
                    </div>
                    <div className="price-box_list">
                      <ul>
                        <li>Rims &amp; Tire Change</li>
                        <li>Rims &amp; Tire Change</li>
                        <li>Rims &amp; Tire Change</li>
                        <li>Rims &amp; Tire Change</li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                </div>
              </div>
              <div className="col-xl-4">
                <div className="">
                  <div className="price-card style2">
                    <div className="price-card_header">
                      <h3 className="price-card_title">Premium Package</h3>
                      <p className="price-card_subtitle">
                        Pricing plan for startup company
                      </p>
                    </div>
                    <div className="price-card_price">
                      <span className="price">
                        $599.00<span className="package-duration">/yearly</span>{" "}
                      </span>
                      <i className="fal fa-truck-pickup" />
                    </div>
                    <div className="price-card_content">
                      {/* <div className="checklist">
                      <ul>
                        <li>Rims &amp; Tire Change</li>
                        <li>Interior Cleaning</li>
                        <li>Wipe all Surfaces</li>
                        <li>Leather Clean &amp; Dry</li>
                        <li>Light Carpet Clean</li>
                      </ul>
                    </div> */}
                      <Link href="Price" className="as-btn">
                        Purchase Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="body-shape7">
            <img src="assets/img/shape/tier_shape_2.png" alt="shape" />
          </div>
        </div>
      </section>

      <section className="space" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">OUR WORK PROCESS</span>
            <h2 className="sec-title">How We Works</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 process-box-wrap">
              <div className="process-box">
                <div className="process-box_icon">
                  <img
                    src="assets/img/icon/process_1_1.svg"
                    alt="service image"
                  />
                </div>
                <h3 className="process-box_title">Identify Issues</h3>
                <p className="process-box_text">
                  Extensible for web iterate process before meta services impact
                  with olisticly enable client.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 process-box-wrap">
              <div className="process-box">
                <div className="process-box_icon">
                  <img
                    src="assets/img/icon/process_1_2.svg"
                    alt="service image"
                  />
                </div>
                <h3 className="process-box_title">Prepare Solution</h3>
                <p className="process-box_text">
                  Vulnerable for web iterate process before meta services impact
                  with olisticly enable geting.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 process-box-wrap">
              <div className="process-box">
                <div className="process-box_icon">
                  <img
                    src="assets/img/icon/process_1_3.svg"
                    alt="service image"
                  />
                </div>
                <h3 className="process-box_title">Working On This</h3>
                <p className="process-box_text">
                  Of setting for web iterate process before meta services impact
                  with olisticly enable power.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 process-box-wrap">
              <div className="process-box">
                <div className="process-box_icon">
                  <img
                    src="assets/img/icon/process_1_4.svg"
                    alt="service image"
                  />
                </div>
                <h3 className="process-box_title">Deliver On Hand</h3>
                <p className="process-box_text">
                  Getting on for web iterate process before meta services impact
                  with olisticly enable silent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="position-relative bg-smoke space-top space-extra-bottom">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Our Happy Customers</span>
            <h2 className="sec-title">What Customer Says</h2>
          </div>
          <div
          // className="row as-carousel"
          // data-slide-show={2}
          // data-md-slide-show={1}
          // data-dots="true"
          // data-xl-dots="true"
          // data-ml-dots="true"
          // data-lg-dots="true"
          // data-md-dots="true"
          // data-sm-dots="true"
          // data-xs-dots="true"
          >
            <Slider
              {...settings_004}
              className="row as-carousel"
              data-slide-show={2}
              data-md-slide-show={1}
              data-dots="true"
              data-xl-dots="true"
              data-ml-dots="true"
              data-lg-dots="true"
              data-md-dots="true"
              data-sm-dots="true"
              data-xs-dots="true"
            >
              <div className="col-md-6 col-lg-4">
                <div className="testi-grid">
                  <div className="testi-grid_profile">
                    <div className="testi-grid_img">
                      <img
                        src="assets/img/testimonial/testi_3_1.jpg"
                        alt="Avater"
                      />
                      <div className="testi-grid_icon">
                        <i className="fas fa-quote-right" />
                      </div>
                    </div>
                    <div className="testi-grid_info">
                      <h3 className="testi-grid_name">Ricardo Yosef</h3>
                      <span className="testi-grid_desig">
                        CEO &amp; Founder at Automive
                      </span>
                    </div>
                  </div>
                  <p className="testi-grid_text">
                    “Parallel task user friendly convergence through supply are
                    chains. Dynamically simplify reliable meta service visionary
                    sources. unleash tactical thinking via granular intellectual
                    capital architect dynamic information value”
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="testi-grid">
                  <div className="testi-grid_profile">
                    <div className="testi-grid_img">
                      <img
                        src="assets/img/testimonial/testi_3_2.jpg"
                        alt="Avater"
                      />
                      <div className="testi-grid_icon">
                        <i className="fas fa-quote-right" />
                      </div>
                    </div>
                    <div className="testi-grid_info">
                      <h3 className="testi-grid_name">Santino Pedro</h3>
                      <span className="testi-grid_desig">
                        Managing Director at Carco
                      </span>
                    </div>
                  </div>
                  <p className="testi-grid_text">
                    “Parallel task user friendly convergence through supply are
                    chains. Dynamically simplify reliable meta service visionary
                    sources. unleash tactical thinking via granular intellectual
                    capital architect dynamic information value”
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="testi-grid">
                  <div className="testi-grid_profile">
                    <div className="testi-grid_img">
                      <img
                        src="assets/img/testimonial/testi_3_3.jpg"
                        alt="Avater"
                      />
                      <div className="testi-grid_icon">
                        <i className="fas fa-quote-right" />
                      </div>
                    </div>
                    <div className="testi-grid_info">
                      <h3 className="testi-grid_name">David Marlo</h3>
                      <span className="testi-grid_desig">
                        Project Manager at Cargo
                      </span>
                    </div>
                  </div>
                  <p className="testi-grid_text">
                    “Parallel task user friendly convergence through supply are
                    chains. Dynamically simplify reliable meta service visionary
                    sources. unleash tactical thinking via granular intellectual
                    capital architect dynamic information value”
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="body-shape1">
          <img src="assets/img/shape/road_shape_1.png" alt="shape" />
        </div>
      </section> */}
      
      {/* <section className="space blog-sec" style={{backgroundColor:"white"}}>
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">News &amp; Updates</span>
          <h2 className="sec-title">Latest Blog Posts</h2>
        </div>
        <div
          className="row slider-shadow as-carousel"
          data-slide-show={3}
          data-lg-slide-show={2}
          data-md-slide-show={2}
          data-sm-slide-show={1}
          data-arrows="true"
          data-xl-arrows="true"
          data-ml-arrows="true"
        >
          <Slider {...settings_005} className="row slider-shadow as-carousel">

          <div className="col-md-6 col-xl-4">
            <div className="blog-grid">
              <div className="blog-content">
                <div className="blog-meta">
                  <Link href="blog.html">
                    <i className="fas fa-calendar-alt" />
                    March 15, 2022
                  </Link>{" "}
                  <Link href="blog.html">
                    <i className="fas fa-tags" />
                    Test Drive
                  </Link>
                </div>
                <h3 className="blog-title">
                  <Link href="blog-details.html">
                    How to Make the Most of Your Test Drive
                  </Link>
                </h3>
              </div>
              <div className="blog-img">
                <img src="assets/img/blog/blog_3_1.jpg" alt="blog image" />
              </div>
              <Link href="blog-details.html" className="blog-btn">
                Read Details
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="blog-grid">
              <div className="blog-content">
                <div className="blog-meta">
                  <Link href="blog.html">
                    <i className="fas fa-calendar-alt" />
                    March 16, 2022
                  </Link>{" "}
                  <Link href="blog.html">
                    <i className="fas fa-tags" />
                    Oil Change
                  </Link>
                </div>
                <h3 className="blog-title">
                  <Link href="blog-details.html">
                    How to Jump Start Your Car Maintenance?
                  </Link>
                </h3>
              </div>
              <div className="blog-img">
                <img src="assets/img/blog/blog_3_2.jpg" alt="blog image" />
              </div>
              <Link href="blog-details.html" className="blog-btn">
                Read Details
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="blog-grid">
              <div className="blog-content">
                <div className="blog-meta">
                  <Link href="blog.html">
                    <i className="fas fa-calendar-alt" />
                    March 17, 2022
                  </Link>{" "}
                  <Link href="blog.html">
                    <i className="fas fa-tags" />
                    Car Drive
                  </Link>
                </div>
                <h3 className="blog-title">
                  <Link href="blog-details.html">
                    How to Decorate Your Car for Halloween
                  </Link>
                </h3>
              </div>
              <div className="blog-img">
                <img src="assets/img/blog/blog_3_3.jpg" alt="blog image" />
              </div>
              <Link href="blog-details.html" className="blog-btn">
                Read Details
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="blog-grid">
              <div className="blog-content">
                <div className="blog-meta">
                  <Link href="blog.html">
                    <i className="fas fa-calendar-alt" />
                    March 18, 2022
                  </Link>{" "}
                  <Link href="blog.html">
                    <i className="fas fa-tags" />
                    Oil Change
                  </Link>
                </div>
                <h3 className="blog-title">
                  <Link href="blog-details.html">
                    How to Jump Start Your Car Maintenance?
                  </Link>
                </h3>
              </div>
              <div className="blog-img">
                <img src="assets/img/blog/blog_3_4.jpg" alt="blog image" />
              </div>
              <Link href="blog-details.html" className="blog-btn">
                Read Details
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          </Slider>
        </div>
      </div>
    </section> */}
    </>
  );
}

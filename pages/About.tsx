"use client";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { AiOutlineClose } from "react-icons/ai";
import Slider from "react-slick";
import { client, urlFor } from "../client";
import GetPremiumParts from "../components/about/GetPremiumParts";
import WhyChooseUs from "../components/about/WhyChooseUs";
import Layout from "../components/Layout";
import { fetchAbout } from "../utils/fetchAbout";
import { AboutType } from "../utils/type";
import stylesIndex from "./index.module.css";

type Props = {
  about: AboutType[];
};

export default function About({ about }: Props) {
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const settings_002 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    speed: 3000,
    arrows: false,
    swipeToSlide: true,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 3000,
    rows: 1,
    slidesPerRow: 1,
  };
  const handleShowVideoPlayer = () => {
    setShowVideoPlayer(true);
  };
  const handleCloseVideoPlayer = () => {
    setShowVideoPlayer(false);
  };
  return (
    <Layout>
      <Helmet>
                        
        <meta charSet="utf-8" />
                        <title>Home</title>
        <meta
          name="description"
          content="Get your amazing Car Solutions Prestige Auto care"
        />
                                     
      </Helmet>
      <div
        className="breadcumb-wrapper"
        data-bg-src=""
        style={{ backgroundImage: `url('assets/img/bg/cta_bg_1.jpg')` }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">About Us</h1>
            <div className="breadcumb-menu-wrap">
              <ul className="breadcumb-menu">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="space" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-xl-6 mb-35 mb-xl-0">
              <div className="img-box-2">
                <div className="img1">
                  <img src={urlFor(about[0].image_01).url()} alt="About" />
                </div>
                <div className="img2">
                  <img src={urlFor(about[0].image_02).url()} alt="About" />
                </div>
                <div className="img3">
                  <img src={urlFor(about[0].image_03).url()} alt="About" />
                </div>
                <div
                  className="as-experience style2"
                  data-bg-src="assets/img/normal/year_bg_2.png"
                >
                  <h3 className="experience-year">
                    <span className="counter-number">
                      {about[0].experienceYears}
                    </span>
                  </h3>
                  <h4 className="experience-text">YEARS OF EXPERIENCE</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="title-area mb-40 text-md-start text-center">
                <span className="sub-title">About Our Company</span>
                <h2 className="sec-title">
                  Make your car feel like a brand new one
                </h2>
              </div>
              <p className="text-md-start text-center mt-n2 mb-30">
                {about[0].description}
              </p>
              <div className="checklist style2 about-checklist">
                <ul>
                  {about[0].options.map((data: any, index: any) => (
                    <li key={index}>{data}</li>
                  ))}
                </ul>
              </div>
              {/* <div className="about-author-wrap">
                <div className="about-author">
                  <div className="about-author_avater">
                    <img
                      src="assets/img/normal/about_avater.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="about-author_info">
                    <h3 className="about-author_name">Daniel H. Smith</h3>
                    <span className="about-author_desig">
                      Founder &amp; Ceo
                    </span>
                  </div>
                </div>
                <Link href="about.html" className="as-btn">
                  Get More Info
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <section
        style={{ backgroundColor: "white" }}
        className=""
        data-pos-space=".circle-bg"
        data-sec-space="margin-bottom"
        data-margin-bottom="225px"
      ></section>
      <div className="circle-bg space-bottom bg-smoke" />
      <WhyChooseUs about={about} />
      <section className="space" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">News &amp; Updates</span>
            <h2 className="sec-title">Latest Blog Posts</h2>
          </div>
          <div className="blog-box-wrap">
            <div className="blog-box">
              <div className="blog-img">
                <img src="assets/img/blog/blog_1_1.jpg" alt="blog image" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Link href="blog.html">
                    <i className="fas fa-calendar-alt" />
                    March 15, 2022
                  </Link>
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
                <Link href="blog-details.html" className="link-btn">
                  Read More
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="blog-box">
              <div className="blog-img">
                <img src="assets/img/blog/blog_1_2.jpg" alt="blog image" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Link href="blog.html">
                    <i className="fas fa-calendar-alt" />
                    March 16, 2022
                  </Link>
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
                <p className="blog-text">
                  Centric aplications productize before front end vortals
                  visualize.
                </p>
                <Link href="blog-details.html" className="link-btn">
                  Read More
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="blog-box">
              <div className="blog-img">
                <img src="assets/img/blog/blog_1_3.jpg" alt="blog image" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Link href="blog.html">
                    <i className="fas fa-calendar-alt" />
                    March 17, 2022
                  </Link>
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
                <Link href="blog-details.html" className="link-btn">
                  Read More
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GetPremiumParts />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const about: AboutType[] = await fetchAbout();

  return {
    props: {
      about,
    },
    revalidate: 10,
  };
};

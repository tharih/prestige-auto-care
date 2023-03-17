"use client";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AiOutlineClose } from "react-icons/ai";
import Slider from "react-slick";
import { client, urlFor } from "../client";
import GetPremiumParts from "../components/about/GetPremiumParts";
import WhyChooseUs from "../components/about/WhyChooseUs";
import Layout from "../components/Layout";
import { fetchAbout } from "../utils/fetchAbout";
import { fetchBanner } from "../utils/fetchBanner";
import { AboutType, BannerType } from "../utils/type";
import stylesIndex from "./index.module.css";

type Props = {
  about: AboutType[];
  banner: BannerType[];
};

export default function About() {

  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [about, setAbout] = useState<any>(null)
  const [banner, setBanner] = useState<any>(null)
  const [loading, setLoading] = useState(false);

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

  const getAbout = async () => {
    const aboutPage = await fetchAbout();
    setAbout(aboutPage)
    console.log(aboutPage);
  }

  const getPremiumParts = async () => {
    const banner = await fetchBanner();
    setBanner(banner)
    console.log(banner);
    
  }

  useEffect(() => {
    setLoading(true);

    getAbout();
    getPremiumParts();


    setLoading(false);
    return () => {

      getAbout();
      getPremiumParts();



    };
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <Layout>

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
                {about && (
          <div className="row flex-row-reverse">
            <div className="col-xl-6 mb-35 mb-xl-0">
              <div className="img-box-2">
                  <>
                    <div className="img1">
                      <img src={urlFor(about[0].image_01).url()} alt="About" />
                    </div>
                    <div className="img2">
                      <img src={urlFor(about[0].image_02).url()} alt="About" />
                    </div>
                    <div className="img3">
                      <img src={urlFor(about[0].image_03).url()} alt="About" />
                    </div>
                  </>
               
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
                  {about[0]?.title}
                </h2>
              </div>
              <p className="text-md-start text-center mt-n2 mb-30">
                {about[0]?.description}
              </p>
              <div className="checklist style2 about-checklist">
                <ul>
                  {about[0]?.options.map((data: any, index: any) => (
                    <li key={index}>{data}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
           )}
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
     {about && (

          <WhyChooseUs about={about} />
     )}

     {banner && (

          <GetPremiumParts banner={banner} />
     )}
        
    </Layout>
  );
}


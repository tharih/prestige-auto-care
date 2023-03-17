import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AiOutlineClose } from "react-icons/ai";
import Slider from "react-slick";
import { urlFor } from "../client";
import { fetchAbout } from "../utils/fetchAbout";
import { fetchBanner } from "../utils/fetchBanner";
import { AboutType } from "../utils/type";
import stylesIndex from "./index.module.css";

export default function About() {
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [about, setAbout] = useState<any>(null);
  const [data, setData] = useState<any>(null);
  const [bannerData, setBannerData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
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

  const getAbout = async () => {
    const about = await fetchAbout();
    setAbout(about[0]);
  };

  const getBanner = async () => {
    const banner = await fetchBanner();
    setBannerData(banner[0]);
  };
  useEffect(() => {
    setLoading(true);

    getAbout();
    getBanner();
    setLoading(false);
    return () => {
      getAbout();
      getBanner();
    };
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
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
                {about && (
                  <>
                    <div className="img1">
                      <img src={urlFor(about.image_01).url()} alt="About" />
                    </div>
                    <div className="img2">
                      <img src={urlFor(about.image_02).url()} alt="About" />
                    </div>
                    <div className="img3">
                      <img src={urlFor(about.image_03).url()} alt="About" />
                    </div>
                  </>
                )}

                <div
                  className="as-experience style2"
                  data-bg-src="assets/img/normal/year_bg_2.png"
                >
                  <h3 className="experience-year">
                    <span className="counter-number">
                      {" "}
                      {about?.experienceYears}
                    </span>
                  </h3>
                  <h4 className="experience-text">YEARS OF EXPERIENCE</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="title-area mb-40 text-md-start text-center">
                <span className="sub-title">About Our Company</span>
                <h2 className="sec-title">{about?.title}</h2>
              </div>
              <p className="text-md-start text-center mt-n2 mb-30">
                {about?.description}
              </p>
              <div className="checklist style2 about-checklist">
                <ul>
                  <li>Professional Car Services</li>
                  <li>24/7 Services Avilable</li>
                  <li>Unlimited Free Checkup</li>
                  <li>Great Skilled Technician</li>
                  <li>Professional Car Services</li>
                  <li>24/7 Services Avilable</li>
                  <li>Unlimited Free Checkup</li>
                  <li>Great Skilled Technician</li>
                </ul>
              </div>
              <div className="about-author-wrap">
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
              </div>
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
      <div className="bg-title position-relative overflow-hidden">
        <div className="row">
          <div className="col-xl-6">
            <div className="as-video style1">
              {showVideoPlayer && (
                <div
                  className={`${stylesIndex.videoPlayerBG} ${
                    showVideoPlayer ? stylesIndex.videPlayerShow : ""
                  }`}
                >
                  <div className={stylesIndex.CloseIcon}>
                    <AiOutlineClose onClick={handleCloseVideoPlayer} />
                  </div>
                  <div className={stylesIndex.videoPlayer}>
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/vlDOjTaaEdA"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      frameBorder="0"
                    ></iframe>
                  </div>
                </div>
              )}
              <img src="assets/img/prestige/1.jpg" alt="Video Image" />
              <div
                className="play-btn popup-video"
                onClick={handleShowVideoPlayer}
              >
                <i className="fas fa-play" />
              </div>
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

      <section
        className="space"
        data-overlay="title"
        data-opacity={7}
        // data-bg-src="assets/img/bg/cta_bg_1.jpg"
        style={{ backgroundImage: `url('assets/img/bg/cta_bg_1.jpg')` }}
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
                <Link href="service.html" className="as-btn style3">
                  Get Our Service
                </Link>{" "}
                <Link href="contact.html" className="as-btn style2">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

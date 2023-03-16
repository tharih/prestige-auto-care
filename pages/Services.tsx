import Link from "next/link";
import React from "react";
import { Helmet } from "react-helmet";

type Props = {};

export default function Services({}: Props) {
  return (
    <>
     <Helmet>
                        
        <meta charSet="utf-8" />
                        <title>Home</title>
        <meta name="description" content="Get your amazing Car Solutions Prestige Auto care" />
                        
                    
      </Helmet>
      <div
        className="breadcumb-wrapper"
        data-bg-src="assets/img/breadcumb/breadcumb-bg.jpg"
        style={{
          backgroundImage: `url('assets/img/breadcumb/breadcumb-bg.jpg')`,
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Our Services</h1>
            <div className="breadcumb-menu-wrap">
              <ul className="breadcumb-menu">
                <li>
                  <Link href="index.html">Home</Link>
                </li>
                <li>Our Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-smoke space">
        <div className="container">
          <div className="row gy-30">
            <div className="col-md-6 col-lg-4">
              <div className="service-grid">
                <div className="service-grid_img">
                  <img
                    src="assets/img/prestige/24.jpg"
                    alt="service image"
                  />
                </div>
                <div className="service-grid_content">
                  <h3 className="service-grid_title">
                    <Link href="Servicedetails">Parts</Link>
                  </h3>
                  <p className="service-grid_text">
                    Unique core competen resource sucking methods of empowerment
                    disciplinary deliverables after cost effective
                  </p>
                  <Link href="Servicedetails" className="as-btn">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-grid">
                <div className="service-grid_img">
                  <img
                    src="assets/img/prestige/20.jpg"
                    alt="service image"
                  />
                </div>
                <div className="service-grid_content">
                  <h3 className="service-grid_title">
                    <Link href="service-details.html">Panel & Paint</Link>
                  </h3>
                  <p className="service-grid_text">
                    Unique core competen resource sucking methods of empowerment
                    disciplinary deliverables after cost effective
                  </p>
                  <Link href="service-details.html" className="as-btn">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-grid">
                <div className="service-grid_img">
                  <img
                    src="assets/img/prestige/6.jpg"
                    alt="service image"
                  />
                </div>
                <div className="service-grid_content">
                  <h3 className="service-grid_title">
                    <Link href="service-details.html">Mechanical</Link>
                  </h3>
                  <p className="service-grid_text">
                    Unique core competen resource sucking methods of empowerment
                    disciplinary deliverables after cost effective
                  </p>
                  <Link href="service-details.html" className="as-btn">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="space-top"
        data-bg-src="assets/img/bg/service_bg_1.jpg"
        style={{ backgroundImage: `url('assets/img/bg/service_bg_1.jpg')` }}
      >
        <div className="container">
          <div
            className="quality-card"
            data-pos-space=".blog-sec"
            data-sec-space="margin-bottom"
            data-margin-bottom="155px"
          >
            <div className="title-area mb-40 text-center text-lg-start">
              <span className="sub-title">Top News Updates</span>
              <h2 className="sec-title">We Provide Best Service And Repair</h2>
            </div>
            <div className="quality-feature-wrap">
              <div className="quality-feature">
                <div className="quality-feature_icon">
                  <img src="assets/img/icon/quality-feature_1.svg" alt="icon" />
                </div>
                <h3 className="quality-feature_title">Quality Services</h3>
                <p className="quality-feature_text">
                  Purpose quality vectors with highly efficient incubate
                </p>
              </div>
              <div className="quality-feature">
                <div className="quality-feature_icon">
                  <img src="assets/img/icon/quality-feature_2.svg" alt="icon" />
                </div>
                <h3 className="quality-feature_title">Fast Delivery</h3>
                <p className="quality-feature_text">
                  Purpose quality vectors with highly efficient incubate
                </p>
              </div>
            </div>
            <div className="skill-feature">
              <h3 className="skill-feature_title">Product Design</h3>
              <div className="progress">
                <div className="progress-bar" style={{ width: "70%" }}>
                  <div className="progress-value">70%</div>
                </div>
              </div>
            </div>
            <div className="skill-feature">
              <h3 className="skill-feature_title">Car Mechanic Service</h3>
              <div className="progress">
                <div className="progress-bar" style={{ width: "93%" }}>
                  <div className="progress-value">93%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

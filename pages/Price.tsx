import Link from "next/link";
import React from "react";
import { Helmet } from "react-helmet";

type Props = {};

const Price = (props: Props) => {
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
            <h1 className="breadcumb-title">Price Plans</h1>
            <div className="breadcumb-menu-wrap">
              <ul className="breadcumb-menu">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>Price Plans</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white space">
        <div className="container">
          <div className="row gy-30 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="price-card">
                <div className="price-card_header">
                  <h3 className="price-card_title">Starting Package</h3>
                  <p className="price-card_subtitle">
                    Pricing plan for startup company
                  </p>
                </div>
                <div className="price-card_price">
                  <span className="price">
                    $199.00<span className="package-duration">/yearly</span>{" "}
                  </span>
                  <i className="fal fa-truck-pickup" />
                </div>
                <div className="price-card_content">
                  <div className="checklist">
                    <ul>
                      <li>Rims &amp; Tire Change</li>
                      <li>Interior Cleaning</li>
                      <li>Wipe all Surfaces</li>
                      <li>Leather Clean &amp; Dry</li>
                      <li>Light Carpet Clean</li>
                    </ul>
                  </div>
                  <Link href="pricing.html" className="as-btn">
                    Purchase Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="price-card">
                <div className="price-card_header">
                  <h3 className="price-card_title">Bronze Package</h3>
                  <p className="price-card_subtitle">
                    Pricing plan for startup company
                  </p>
                </div>
                <div className="price-card_price">
                  <span className="price">
                    $399.00<span className="package-duration">/yearly</span>{" "}
                  </span>
                  <i className="fal fa-truck-pickup" />
                </div>
                <div className="price-card_content">
                  <div className="checklist">
                    <ul>
                      <li>Rims &amp; Tire Change</li>
                      <li>Interior Cleaning</li>
                      <li>Wipe all Surfaces</li>
                      <li>Leather Clean &amp; Dry</li>
                      <li>Light Carpet Clean</li>
                    </ul>
                  </div>
                  <Link href="pricing.html" className="as-btn">
                    Purchase Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="price-card">
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
                  <div className="checklist">
                    <ul>
                      <li>Rims &amp; Tire Change</li>
                      <li>Interior Cleaning</li>
                      <li>Wipe all Surfaces</li>
                      <li>Leather Clean &amp; Dry</li>
                      <li>Light Carpet Clean</li>
                    </ul>
                  </div>
                  <Link href="pricing.html" className="as-btn">
                    Purchase Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="space"
        data-overlay="title"
        data-opacity={7}
        data-bg-src="assets/img/bg/cta_bg_1.jpg"
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
                <Link href="Services" className="as-btn style3">
                  Get Our Service
                </Link>{" "}
                <Link href="Contact" className="as-btn style2">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Price;

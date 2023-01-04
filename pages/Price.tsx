import React from 'react'

type Props = {}

const Price = (props: Props) => {
  return (
    <>
  <div
    className="breadcumb-wrapper"
    data-bg-src="assets/img/breadcumb/breadcumb-bg.jpg"
    style={{ backgroundImage: `url('assets/img/breadcumb/breadcumb-bg.jpg')` }}

  >
    <div className="container z-index-common">
      <div className="breadcumb-content">
        <h1 className="breadcumb-title">Price Plans</h1>
        <div className="breadcumb-menu-wrap">
          <ul className="breadcumb-menu">
            <li>
              <a href="index.html">Home</a>
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
              <a href="pricing.html" className="as-btn">
                Purchase Now
              </a>
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
              <a href="pricing.html" className="as-btn">
                Purchase Now
              </a>
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
              <a href="pricing.html" className="as-btn">
                Purchase Now
              </a>
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
            <a href="Services" className="as-btn style3">
              Get Our Service
            </a>{" "}
            <a href="Contact" className="as-btn style2">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <section className="space">
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
              <a href="blog.html">
                <i className="fas fa-calendar-alt" />
                March 15, 2022
              </a>
              <a href="blog.html">
                <i className="fas fa-tags" />
                Test Drive
              </a>
            </div>
            <h3 className="blog-title">
              <a href="blog-details.html">
                How to Make the Most of Your Test Drive
              </a>
            </h3>
            <a href="blog-details.html" className="link-btn">
              Read More
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="assets/img/blog/blog_1_2.jpg" alt="blog image" />
          </div>
          <div className="blog-content">
            <div className="blog-meta">
              <a href="blog.html">
                <i className="fas fa-calendar-alt" />
                March 16, 2022
              </a>
              <a href="blog.html">
                <i className="fas fa-tags" />
                Oil Change
              </a>
            </div>
            <h3 className="blog-title">
              <a href="blog-details.html">
                How to Jump Start Your Car Maintenance?
              </a>
            </h3>
            <p className="blog-text">
              Centric aplications productize before front end vortals visualize.
            </p>
            <a href="blog-details.html" className="link-btn">
              Read More
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="assets/img/blog/blog_1_3.jpg" alt="blog image" />
          </div>
          <div className="blog-content">
            <div className="blog-meta">
              <a href="blog.html">
                <i className="fas fa-calendar-alt" />
                March 17, 2022
              </a>
              <a href="blog.html">
                <i className="fas fa-tags" />
                Car Drive
              </a>
            </div>
            <h3 className="blog-title">
              <a href="blog-details.html">
                How to Decorate Your Car for Halloween
              </a>
            </h3>
            <a href="blog-details.html" className="link-btn">
              Read More
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section> */}
</>

  )
}

export default Price
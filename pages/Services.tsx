import React from 'react'

type Props = {}

export default function Services({}: Props) {
  return (
    <>
    <div
      className="breadcumb-wrapper"
      data-bg-src="assets/img/breadcumb/breadcumb-bg.jpg"
      style={{backgroundImage: `url('assets/img/breadcumb/breadcumb-bg.jpg')`}}
    >
      <div className="container z-index-common">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">Our Services</h1>
          <div className="breadcumb-menu-wrap">
            <ul className="breadcumb-menu">
              <li>
                <a href="index.html">Home</a>
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
                  src="assets/img/service/service_3_1.jpg"
                  alt="service image"
                />
              </div>
              <div className="service-grid_content">
                <h3 className="service-grid_title">
                  <a href="Servicedetails">Parts</a>
                </h3>
                <p className="service-grid_text">
                  Unique core competen resource sucking methods of empowerment
                  disciplinary deliverables after cost effective
                </p>
                <a href="Servicedetails" className="as-btn">
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-grid">
              <div className="service-grid_img">
                <img
                  src="assets/img/service/service_3_2.jpg"
                  alt="service image"
                />
              </div>
              <div className="service-grid_content">
                <h3 className="service-grid_title">
                  <a href="service-details.html">Panel & Paint</a>
                </h3>
                <p className="service-grid_text">
                  Unique core competen resource sucking methods of empowerment
                  disciplinary deliverables after cost effective
                </p>
                <a href="service-details.html" className="as-btn">
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-grid">
              <div className="service-grid_img">
                <img
                  src="assets/img/service/service_3_3.jpg"
                  alt="service image"
                />
              </div>
              <div className="service-grid_content">
                <h3 className="service-grid_title">
                  <a href="service-details.html">Mechanical</a>
                </h3>
                <p className="service-grid_text">
                  Unique core competen resource sucking methods of empowerment
                  disciplinary deliverables after cost effective
                </p>
                <a href="service-details.html" className="as-btn">
                  View Details
                </a>
              </div>
            </div>
          </div>
          {/* <div className="col-md-6 col-lg-4">
            <div className="service-grid">
              <div className="service-grid_img">
                <img
                  src="assets/img/service/service_3_4.jpg"
                  alt="service image"
                />
              </div>
              <div className="service-grid_content">
                <h3 className="service-grid_title">
                  <a href="service-details.html">Car &amp; Engine Clean</a>
                </h3>
                <p className="service-grid_text">
                  Unique core competen resource sucking methods of empowerment
                  disciplinary deliverables after cost effective
                </p>
                <a href="service-details.html" className="as-btn">
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-grid">
              <div className="service-grid_img">
                <img
                  src="assets/img/service/service_3_5.jpg"
                  alt="service image"
                />
              </div>
              <div className="service-grid_content">
                <h3 className="service-grid_title">
                  <a href="service-details.html">Full Car Service</a>
                </h3>
                <p className="service-grid_text">
                  Unique core competen resource sucking methods of empowerment
                  disciplinary deliverables after cost effective
                </p>
                <a href="service-details.html" className="as-btn">
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-grid">
              <div className="service-grid_img">
                <img
                  src="assets/img/service/service_3_6.jpg"
                  alt="service image"
                />
              </div>
              <div className="service-grid_content">
                <h3 className="service-grid_title">
                  <a href="service-details.html">Fresh Oil Input</a>
                </h3>
                <p className="service-grid_text">
                  Unique core competen resource sucking methods of empowerment
                  disciplinary deliverables after cost effective
                </p>
                <a href="service-details.html" className="as-btn">
                  View Details
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
    <section className="space-top" data-bg-src="assets/img/bg/service_bg_1.jpg" style={{backgroundImage: `url('assets/img/bg/service_bg_1.jpg')`}}>
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
    {/* <section className="space bg-smoke blog-sec">
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="title-area text-center text-lg-start">
              <span className="sub-title">News &amp; Updates</span>
              <h2 className="sec-title">Latest Blog Posts</h2>
            </div>
          </div>
          <div className="col-auto">
            <div className="sec-btn">
              <a href="blog.html" className="as-btn style4">
                View All Posts
              </a>
            </div>
          </div>
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
          <div className="col-md-6 col-xl-4">
            <div className="blog-card">
              <div className="blog-img">
                <img src="assets/img/blog/blog_2_1.jpg" alt="blog image" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <a href="blog.html">
                    <i className="fas fa-calendar-alt" />
                    March 15, 2022
                  </a>{" "}
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
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="blog-card">
              <div className="blog-img">
                <img src="assets/img/blog/blog_2_2.jpg" alt="blog image" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <a href="blog.html">
                    <i className="fas fa-calendar-alt" />
                    March 16, 2022
                  </a>{" "}
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
                <a href="blog-details.html" className="link-btn">
                  Read More
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="blog-card">
              <div className="blog-img">
                <img src="assets/img/blog/blog_2_3.jpg" alt="blog image" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <a href="blog.html">
                    <i className="fas fa-calendar-alt" />
                    March 17, 2022
                  </a>{" "}
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
          <div className="col-md-6 col-xl-4">
            <div className="blog-card">
              <div className="blog-img">
                <img src="assets/img/blog/blog_2_4.jpg" alt="blog image" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <a href="blog.html">
                    <i className="fas fa-calendar-alt" />
                    March 18, 2022
                  </a>{" "}
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
                <a href="blog-details.html" className="link-btn">
                  Read More
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
  </>
  
  )
}
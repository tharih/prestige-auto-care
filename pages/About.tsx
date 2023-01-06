import React from 'react'
import Slider from 'react-slick';

type Props = {}

export default function About() {
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
  return (
    <>
  <div
    className="breadcumb-wrapper"
    data-bg-src=""
    style={{ backgroundImage: `url('assets/img/bg/cta_bg_1.jpg')`}}
    
  >
    <div className="container z-index-common">
      <div className="breadcumb-content">
        <h1 className="breadcumb-title">About Us</h1>
        <div className="breadcumb-menu-wrap">
          <ul className="breadcumb-menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="space" style={{backgroundColor:"white"}}>
    <div className="container">
      <div className="row flex-row-reverse">
        <div className="col-xl-6 mb-35 mb-xl-0">
          <div className="img-box-2">
            <div className="img1">
              <img src="assets/img/normal/about_3_1.jpg" alt="About" />
            </div>
            <div className="img2">
              <img src="assets/img/normal/about_3_2.jpg" alt="About" />
            </div>
            <div className="img3">
              <img src="assets/img/normal/about_3_3.jpg" alt="About" />
            </div>
            <div
              className="as-experience style2"
              data-bg-src="assets/img/normal/year_bg_2.png"
            >
              <h3 className="experience-year">
                <span className="counter-number">25</span>
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
            Conveniently impact platforms for business systems. coordinate
            functional are testing procedures before diverse testing procedures.
            Distinctively integrate is worldwide human capital rather than
            market propriately implement covalent channels after progressive
            vortals predominate...
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
                <img src="assets/img/normal/about_avater.jpg" alt="Author" />
              </div>
              <div className="about-author_info">
                <h3 className="about-author_name">Daniel H. Smith</h3>
                <span className="about-author_desig">Founder &amp; Ceo</span>
              </div>
            </div>
            <a href="about.html" className="as-btn">
              Get More Info
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section
  style={{backgroundColor:"white"}}
    className=""
    data-pos-space=".circle-bg"
    data-sec-space="margin-bottom"
    data-margin-bottom="225px"
  >
    {/* <div className="container">
      <div className="row gy-4">
        <div className="col-lg-3 col-sm-6">
          <div
            className="feature-circle"
            data-bg-src="assets/img/bg/pattern_bg_6.png"
          >
            <div className="progressbar">
              <div className="circle" data-percent={85}>
                <div className="circle-num" />
              </div>
              <h3 className="feature-circle_title">Quality Service</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div
            className="feature-circle"
            data-bg-src="assets/img/bg/pattern_bg_6.png"
          >
            <div className="progressbar">
              <div className="circle" data-percent={90}>
                <div className="circle-num" />
              </div>
              <h3 className="feature-circle_title">Skilled Members</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div
            className="feature-circle"
            data-bg-src="assets/img/bg/pattern_bg_6.png"
          >
            <div className="progressbar">
              <div className="circle" data-percent={95}>
                <div className="circle-num" />
              </div>
              <h3 className="feature-circle_title">Happy Customers</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div
            className="feature-circle"
            data-bg-src="assets/img/bg/pattern_bg_6.png"
          >
            <div className="progressbar">
              <div className="circle" data-percent={15}>
                <div className="circle-num" />
              </div>
              <h3 className="feature-circle_title">Project Fails</h3>
            </div>
          </div>
        </div>
      </div>
    </div> */}
  </section>
  <div className="circle-bg space-bottom bg-smoke" />
  <div className="bg-title position-relative overflow-hidden">
    <div className="row">
      <div className="col-xl-6">
        <div className="as-video style1">
          <img src="assets/img/normal/video_2.jpg" alt="Video Image" />{" "}
          <a
            href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
            className="play-btn popup-video"
          >
            <i className="fas fa-play" />
          </a>
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
                Intrinsicly fashion enterprise manuftured products after open
                source e-service engage transparent channels.
              </p>
            </div>
          </div>
          <div className="feature-media">
            <div className="feature-media_num">02</div>
            <div className="feature-media_content">
              <h3 className="feature-media_title">Expert Team Memebers</h3>
              <p className="feature-media_text">
                Intrinsicly fashion enterprise manuftured products after open
                source e-service engage transparent channels.
              </p>
            </div>
          </div>
          <div className="feature-media">
            <div className="feature-media_num">03</div>
            <div className="feature-media_content">
              <h3 className="feature-media_title">Quality Time Delivery</h3>
              <p className="feature-media_text">
                Intrinsicly fashion enterprise manuftured products after open
                source e-service engage transparent channels.
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
  {/* <section className="bg-white space position-relative">
    <div className="container">
      <div className="title-area text-center">
        <span className="sub-title">Expert Technician</span>
        <h2 className="sec-title">Meet Our Experts</h2>
      </div>
      <div
        className="row slider-shadow as-carousel"
        data-slide-show={3}
        data-md-slide-show={2}
        data-arrows="true"
      >
      <Slider {...settings_002} className="row slider-shadow as-carousel">

<div className="col-md-6 col-lg-4">
  <div className="team-box">
    <div className="team-img">
      <img src="assets/img/team/team_1_1.jpg" alt="Team" />
      <div className="team-content">
        <h3 className="team-title">
          <a href="team-details.html">Kevin Martin</a>
        </h3>
        <span className="team-desig">Engine Expert</span>
      </div>
    </div>
    <div
      className="as-social"
      data-bg-src="assets/img/bg/pattern_bg_2.png"
    >
      <a target="_blank" href="https://facebook.com/">
        <i className="fab fa-facebook-f" />
      </a>{" "}
      <a target="_blank" href="https://twitter.com/">
        <i className="fab fa-twitter" />
      </a>{" "}
      <a target="_blank" href="https://instagram.com/">
        <i className="fab fa-instagram" />
      </a>
    </div>
  </div>
</div>
<div className="col-md-6 col-lg-4">
  <div className="team-box">
    <div className="team-img">
      <img src="assets/img/team/team_1_2.jpg" alt="Team" />
      <div className="team-content">
        <h3 className="team-title">
          <a href="team-details.html">Michael Daniel</a>
        </h3>
        <span className="team-desig">Body Expert</span>
      </div>
    </div>
    <div
      className="as-social"
      data-bg-src="assets/img/bg/pattern_bg_2.png"
    >
      <a target="_blank" href="https://facebook.com/">
        <i className="fab fa-facebook-f" />
      </a>{" "}
      <a target="_blank" href="https://twitter.com/">
        <i className="fab fa-twitter" />
      </a>{" "}
      <a target="_blank" href="https://instagram.com/">
        <i className="fab fa-instagram" />
      </a>
    </div>
  </div>
</div>
<div className="col-md-6 col-lg-4">
  <div className="team-box">
    <div className="team-img">
      <img src="assets/img/team/team_1_3.jpg" alt="Team" />
      <div className="team-content">
        <h3 className="team-title">
          <a href="team-details.html">Aiden Samuel</a>
        </h3>
        <span className="team-desig">Engine Expert</span>
      </div>
    </div>
    <div
      className="as-social"
      data-bg-src="assets/img/bg/pattern_bg_2.png"
    >
      <a target="_blank" href="https://facebook.com/">
        <i className="fab fa-facebook-f" />
      </a>{" "}
      <a target="_blank" href="https://twitter.com/">
        <i className="fab fa-twitter" />
      </a>{" "}
      <a target="_blank" href="https://instagram.com/">
        <i className="fab fa-instagram" />
      </a>
    </div>
  </div>
</div>
<div className="col-md-6 col-lg-4">
  <div className="team-box">
    <div className="team-img">
      <img src="assets/img/team/team_1_4.jpg" alt="Team" />
      <div className="team-content">
        <h3 className="team-title">
          <a href="team-details.html">Joseph Carter</a>
        </h3>
        <span className="team-desig">Body Expert</span>
      </div>
    </div>
    <div
      className="as-social"
      data-bg-src="assets/img/bg/pattern_bg_2.png"
    >
      <a target="_blank" href="https://facebook.com/">
        <i className="fab fa-facebook-f" />
      </a>{" "}
      <a target="_blank" href="https://twitter.com/">
        <i className="fab fa-twitter" />
      </a>{" "}
      <a target="_blank" href="https://instagram.com/">
        <i className="fab fa-instagram" />
      </a>
    </div>
  </div>
</div>
<div className="col-md-6 col-lg-4">
  <div className="team-box">
    <div className="team-img">
      <img src="assets/img/team/team_1_5.jpg" alt="Team" />
      <div className="team-content">
        <h3 className="team-title">
          <a href="team-details.html">Joseph Carter</a>
        </h3>
        <span className="team-desig">Engine Expert</span>
      </div>
    </div>
    <div
      className="as-social"
      data-bg-src="assets/img/bg/pattern_bg_2.png"
    >
      <a target="_blank" href="https://facebook.com/">
        <i className="fab fa-facebook-f" />
      </a>{" "}
      <a target="_blank" href="https://twitter.com/">
        <i className="fab fa-twitter" />
      </a>{" "}
      <a target="_blank" href="https://instagram.com/">
        <i className="fab fa-instagram" />
      </a>
    </div>
  </div>
</div>
<div className="col-md-6 col-lg-4">
  <div className="team-box">
    <div className="team-img">
      <img src="assets/img/team/team_1_6.jpg" alt="Team" />
      <div className="team-content">
        <h3 className="team-title">
          <a href="team-details.html">Andrew Adrian</a>
        </h3>
        <span className="team-desig">Body Expert</span>
      </div>
    </div>
    <div
      className="as-social"
      data-bg-src="assets/img/bg/pattern_bg_2.png"
    >
      <a target="_blank" href="https://facebook.com/">
        <i className="fab fa-facebook-f" />
      </a>{" "}
      <a target="_blank" href="https://twitter.com/">
        <i className="fab fa-twitter" />
      </a>{" "}
      <a target="_blank" href="https://instagram.com/">
        <i className="fab fa-instagram" />
      </a>
    </div>
  </div>
</div>
</Slider>
      </div>
    </div>
    <div className="body-shape3">
      <img src="assets/img/shape/shape_3.png" alt="shape" />
    </div>
  </section> */}
 
  <section className="space" style={{backgroundColor:"white"}}>
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
  </section>
  <section
    className="space"
    data-overlay="title"
    data-opacity={7}
    // data-bg-src="assets/img/bg/cta_bg_1.jpg"
    style={{backgroundImage: `url('assets/img/bg/cta_bg_1.jpg')`}}
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
            <a href="service.html" className="as-btn style3">
              Get Our Service
            </a>{" "}
            <a href="contact.html" className="as-btn style2">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <div className="space bg-smoke position-relative overflow-hidden">
    <div className="container">
      <div className="row justify-content-lg-between justify-content-center align-items-center">
        <div className="col-lg-6">
          <div className="title-area text-center text-lg-start">
            <span className="sub-title">Our Special Clients</span>
            <h2 className="sec-title">Business Partners</h2>
          </div>
        </div>
        <div className="col-auto">
          <div className="sec-btn">
            <a href="contact.html" className="as-btn style5">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div
        className="row as-carousel"
        data-slide-show={4}
        data-lg-slide-show={3}
        data-md-slide-show={2}
        data-sm-slide-show={2}
        data-xs-slide-show={1}
      >
        <div className="col-auto brand-img2">
          <img src="assets/img/brand/brand_2_1.png" alt="Brand Logo" />
        </div>
        <div className="col-auto brand-img2">
          <img src="assets/img/brand/brand_2_2.png" alt="Brand Logo" />
        </div>
        <div className="col-auto brand-img2">
          <img src="assets/img/brand/brand_2_3.png" alt="Brand Logo" />
        </div>
        <div className="col-auto brand-img2">
          <img src="assets/img/brand/brand_2_4.png" alt="Brand Logo" />
        </div>
      </div>
    </div>
    <div className="body-shape3">
      <img src="assets/img/shape/road_shape_3.png" alt="shape" />
    </div>
  </div> */}
</>

  )
}


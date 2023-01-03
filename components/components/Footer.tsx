import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
    <footer className="footer-wrapper footer-layout3">
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <h3 className="widget_title">About Company</h3>
                <div className="as-widget-about">
                  <p className="footer-text">
                    Centric aplications productize before front end vortals
                    visualize front end is results and value added
                  </p>
                  <h4 className="footer-info-title">WE ARE AVAILABLE</h4>
                  <p className="footer-text">Mon-Sat: 09.00 am to 6.30 pm</p>
                  <a href="contact.html" className="as-btn style3">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Quick link</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <a href="about.html">About Company</a>
                    </li>
                    <li>
                      <a href="project.html">Work Gallery</a>
                    </li>
                    <li>
                      <a href="service.html">Client Feedback</a>
                    </li>
                    <li>
                      <a href="service.html">Our Services</a>
                    </li>
                    <li>
                      <a href="team.html">Our Team</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <h3 className="widget_title">Recent Posts</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="media-img">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/recent-post-1-2.jpg"
                          alt="Blog Image"
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <div className="recent-post-meta">
                        <a href="blog.html">
                          <i className="fal fa-clock" />
                          15th April, 2022
                        </a>
                      </div>
                      <h4 className="post-title">
                        <a className="text-inherit" href="blog-details.html">
                          Here are things every car have
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-img">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/recent-post-1-3.jpg"
                          alt="Blog Image"
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <div className="recent-post-meta">
                        <a href="blog.html">
                          <i className="fal fa-clock" />
                          15th April, 2022
                        </a>
                      </div>
                      <h4 className="post-title">
                        <a className="text-inherit" href="blog-details.html">
                          How to start car engine slowly
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_newsletter footer-widget">
                <h3 className="widget_title">Newsletter</h3>
                <p className="footer-text">
                  Aplications prodize before front end vortals visualize front end
                </p>
                <form className="newsletter-form">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email Address"
                    // required=""
                  />{" "}
                  <button type="submit" className="as-btn style3">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <p className="copyright-text">
                Copyright <i className="fal fa-copyright" /> 2022{" "}
                <a
                  className="text-white"
                  href="https://themeforest.net/user/angfuz_soft"
                >
                  Angfuzsoft
                </a>
                . All Rights Reserved.
              </p>
            </div>
            <div className="col-auto d-none d-lg-block">
              <div className="as-social">
                <a target="_blank" href="https://facebook.com/">
                  <i className="fab fa-facebook-f" />
                </a>{" "}
                <a target="_blank" href="https://twitter.com/">
                  <i className="fab fa-twitter" />
                </a>{" "}
                <a target="_blank" href="https://instagram.com/">
                  <i className="fab fa-instagram" />
                </a>{" "}
                <a target="_blank" href="https://linkedin.com/">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-shape1">
        <img src="assets/img/shape/footer_shape_1.png" alt="shape" />
      </div>
      <div className="footer-shape2">
        <img src="assets/img/shape/footer_shape_2.png" alt="shape" />
      </div>
    </footer>
    <a href="#" className="scrollToTop scroll-btn">
      <i className="far fa-arrow-up" />
    </a>
  </>
  
  )
}

export default Footer;
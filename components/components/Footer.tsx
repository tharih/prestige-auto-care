import Link from "next/link";
import React from "react";

type Props = {};

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
                    "We're an independent auto body shop located in Rocklea Queensland. We are specialised in any medium to large body repairs with high quality for a reasonable price."
                    </p>
                    <h4 className="footer-info-title">WE ARE AVAILABLE</h4>
                    <p className="footer-text">Mon-Sat: 09.00 am to 6.30 pm</p>
                    {/* <Link href="Contact" className="as-btn style3">
                      Contact Us
                    </Link> */}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Quick link</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link href="About">About Company</Link>
                      </li>
                      <li>
                        <Link href="Gallery">Work Gallery</Link>
                      </li>
                      {/* <li>
                        <Link href="#">Client Feedback</Link>
                      </li> */}
                      <li>
                        <Link href="Services">Our Services</Link>
                      </li>
                      {/* <li>
                        <Link href="#">Our Team</Link>
                      </li> */}
                      <li>
                        <Link href="Contact">Contact Us</Link>
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
                        <Link href="#">
                          <img
                            src="assets/img/blog/recent-post-1-2.jpg"
                            alt="Blog Image"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <div className="recent-post-meta">
                          <Link href="blog.html">
                            <i className="fal fa-clock" />
                            6th January, 2023
                          </Link>
                        </div>
                        <h4 className="post-title">
                          <Link
                            className="text-inherit"
                            href="blog-details.html"
                          >
                            Here are things every car have
                          </Link>
                        </h4>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <Link href="#">
                          <img
                            src="assets/img/blog/recent-post-1-3.jpg"
                            alt="Blog Image"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <div className="recent-post-meta">
                          <Link href="blog.html">
                            <i className="fal fa-clock" />
                            6th January, 2023
                          </Link>
                        </div>
                        <h4 className="post-title">
                          <Link
                            className="text-inherit"
                            href="blog-details.html"
                          >
                            How to start car engine slowly
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_newsletter footer-widget">
                  <h3 className="widget_title">Contat Us</h3>
                  <p className="footer-text">
                  +61 478 033 023
                  </p>
                  <p className="footer-text">
                  prestige@gmail.com
                  </p>
                  <p className="footer-text">
                  Shop 14/115 Dollis St, Rocklea QLD 4106, Australia
                  </p>
                  <div className="newsletter-form">
                    <Link href="https://goo.gl/maps/5BEL8ygWqYBDy6Bq7" className="as-btn style3">
                     Visit Us
                    </Link>
                  </div>
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
                Copyright <i className="fal fa-copyright" /> 2023{" "}
                  <Link
                  style={{marginRight:"5px"}}
                    className="text-white"
                    href="#"
                    >
                    Prestige-Auto-Care 
                  </Link>
                    | Powered by
                  <Link
                    className="text-white"
                    style={{marginLeft:"5px"}}
                    href="#"
                    >
                    Brilhante Group
                  </Link>
                   
                </p>
              </div>
              <div className="col-auto d-none d-lg-block">
                <div className="as-social">
                  <Link href="https://facebook.com/">
                    <i className="fab fa-facebook-f" />
                  </Link>{" "}
                  <Link href="https://twitter.com/">
                    <i className="fab fa-twitter" />
                  </Link>{" "}
                  <Link href="https://instagram.com/">
                    <i className="fab fa-instagram" />
                  </Link>{" "}
                  <Link href="https://linkedin.com/">
                    <i className="fab fa-linkedin-in" />
                  </Link>
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
      <Link href="#" className="scrollToTop scroll-btn">
        <i className="fa fa-arrow-up" />
      </Link>
    </>
  );
};

export default Footer;

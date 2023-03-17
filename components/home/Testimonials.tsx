import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";
import stylesIndex from "./SliderComponent.module.css";
import Link from "next/link";
type Props = {
  settings_004: object;
};

const Testimonials = ({ settings_004 }: Props) => {
  return (
    <section className="position-relative bg-smoke space-top space-extra-bottom">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Our Happy Customers</span>
          <h2 className="sec-title">What Customer Says</h2>
        </div>
        <div>
          <Slider {...settings_004}>
            <div className="col-md-6 col-lg-4">
              <div className="testi-grid">
                <div className="testi-grid_profile">
                  <div className="testi-grid_img">
                    <img
                      src="assets/img/testimonial/testi_3_1.jpg"
                      alt="Avater"
                    />
                    <div className="testi-grid_icon">
                      <i className="fas fa-quote-right" />
                    </div>
                  </div>
                  <div className="testi-grid_info">
                    <h3 className="testi-grid_name">Ricardo Yosef</h3>
                    <span className="testi-grid_desig">
                      CEO &amp; Founder at Automive
                    </span>
                  </div>
                </div>
                <p className="testi-grid_text">
                  “Parallel task user friendly convergence through supply are
                  chains. Dynamically simplify reliable meta service visionary
                  sources. unleash tactical thinking via granular intellectual
                  capital architect dynamic information value”
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="testi-grid">
                <div className="testi-grid_profile">
                  <div className="testi-grid_img">
                    <img
                      src="assets/img/testimonial/testi_3_2.jpg"
                      alt="Avater"
                    />
                    <div className="testi-grid_icon">
                      <i className="fas fa-quote-right" />
                    </div>
                  </div>
                  <div className="testi-grid_info">
                    <h3 className="testi-grid_name">Santino Pedro</h3>
                    <span className="testi-grid_desig">
                      Managing Director at Carco
                    </span>
                  </div>
                </div>
                <p className="testi-grid_text">
                  “Parallel task user friendly convergence through supply are
                  chains. Dynamically simplify reliable meta service visionary
                  sources. unleash tactical thinking via granular intellectual
                  capital architect dynamic information value”
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="testi-grid">
                <div className="testi-grid_profile">
                  <div className="testi-grid_img">
                    <img
                      src="assets/img/testimonial/testi_3_3.jpg"
                      alt="Avater"
                    />
                    <div className="testi-grid_icon">
                      <i className="fas fa-quote-right" />
                    </div>
                  </div>
                  <div className="testi-grid_info">
                    <h3 className="testi-grid_name">David Marlo</h3>
                    <span className="testi-grid_desig">
                      Project Manager at Cargo
                    </span>
                  </div>
                </div>
                <p className="testi-grid_text">
                  “Parallel task user friendly convergence through supply are
                  chains. Dynamically simplify reliable meta service visionary
                  sources. unleash tactical thinking via granular intellectual
                  capital architect dynamic information value”
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="body-shape1">
        <img src="assets/img/shape/road_shape_1.png" alt="shape" />
      </div>
    </section>
  );
};

export default Testimonials;

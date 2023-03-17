import Link from "next/link";
import React from "react";
import { urlFor } from "../../client";
import { fetchAbout } from "../../utils/fetchAbout";
import { AboutType } from "../../utils/type";

type Props = {
  about: AboutType[];
};

export default function AboutCompanyComponent({ about }: Props) {
  return (
    <div
      className="space position-relative overflow-hidden"
      style={{ backgroundColor: "white" }}
    >
      <div className="bg-shape1" />
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-xl-6">
            <div className="img-box-3">
              {about && (

              <div className="img1">
                <img style={{width:"530px", height:"560px"}} src={urlFor(about[0].home_image_01).url()} alt="About" />
              </div>
              )}
              <div className="img2">
                <div className="as-experience style3">
                  <h3 className="experience-year">
                    <span className="counter-number">{about[0].experienceYears}</span>+
                  </h3>
                  <h4 className="experience-text">Years Of Experience</h4>
                </div>
                <img style={{width:"313px", height:"310px"}} src={urlFor(about[0].home_image_02).url()} alt="About" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="title-area mb-40">
              <span className="sub-title">About Company</span>
              <h2 className="sec-title">
              {about[0].home_title}
              </h2>
            </div>
            <div className="nav tab-menu4" role="tablist">
              <button
                className="as-btn active"
                id="nav-one-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-one"
                type="button"
                role="tab"
                aria-controls="nav-one"
                aria-selected="true"
              >
                About Us
              </button>{" "}
            </div>
            <div className="tab-content why-tabcontent" id="why-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-one"
                role="tabpanel"
                aria-labelledby="nav-one-tab"
              >
                <p className="mb-35">
                {about[0].description}
                </p>
                {/* <div className="pt-40">
                  <div className="about-progress">
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "90%" }}>
                        <div className="progress-value">90%</div>
                      </div>
                    </div>
                    <h3 className="about-progress_title">Mechanical</h3>
                  </div>
                  <div className="about-progress">
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "85%" }}>
                        <div className="progress-value">85%</div>
                      </div>
                    </div>
                    <h3 className="about-progress_title">Panel & Paint</h3>
                  </div>
                </div> */}
                <div className="pt-2">
                  <Link href="Appointment" className="as-btn">
                  Get A Quote
                  </Link>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



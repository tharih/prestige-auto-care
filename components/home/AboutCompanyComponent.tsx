import Link from "next/link";
import React from "react";

type Props = {};

const AboutCompanyComponent = (props: Props) => {
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
              <div className="img1">
                <img src="assets/img/prestige/29.jpg" alt="About" />
              </div>
              <div className="img2">
                <div className="as-experience style3">
                  <h3 className="experience-year">
                    <span className="counter-number">25</span>+
                  </h3>
                  <h4 className="experience-text">Years Of Experience</h4>
                </div>
                <img src="assets/img/prestige/7.jpg" alt="About" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="title-area mb-40">
              <span className="sub-title">About Company</span>
              <h2 className="sec-title">
                We Are Qualified In Every Car Departments
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
                  "We're an independent auto body shop located in Rocklea
                  Queensland. We are specialised in any medium to large body
                  repairs with high quality for a reasonable price."
                </p>
                <div className="pt-40">
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
                </div>
                <div className="pt-2">
                  <Link href="Appointment" className="as-btn">
                    Make An Appointment
                  </Link>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-two"
                role="tabpanel"
                aria-labelledby="nav-two-tab"
              >
                <p className="mb-35">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Exercitationem rerum nulla eveniet dolorum beatae quia illum,
                  earum qui? Aperiam est debitis hic, blanditiis unde totam
                  repellendus eaque quos officiis architecto!
                </p>
                <div className="pt-40">
                  <div className="about-progress">
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "80%" }}>
                        <div className="progress-value">80%</div>
                      </div>
                    </div>
                    <h3 className="about-progress_title">Solution Any Car</h3>
                  </div>
                  <div className="about-progress">
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "84%" }}>
                        <div className="progress-value">84%</div>
                      </div>
                    </div>
                    <h3 className="about-progress_title">Engine Problems</h3>
                  </div>
                </div>
                <div className="pt-2">
                  <Link href="Contact" className="as-btn">
                    Get A Quote
                  </Link>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-three"
                role="tabpanel"
                aria-labelledby="nav-three-tab"
              >
                <p className="mb-35">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, nostrum sit ratione veritatis praesentium
                  recusandae fugiat ab labore quam nemo earum dolore optio sint,
                  ut cum culpa quaerat aut totam.
                </p>
                <div className="pt-40">
                  <div className="about-progress">
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "90%" }}>
                        <div className="progress-value">90%</div>
                      </div>
                    </div>
                    <h3 className="about-progress_title">Build Relationship</h3>
                  </div>
                  <div className="about-progress">
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "99%" }}>
                        <div className="progress-value">99%</div>
                      </div>
                    </div>
                    <h3 className="about-progress_title">
                      Customer Satisfaction
                    </h3>
                  </div>
                </div>
                <div className="pt-2">
                  <Link href="Contact" className="as-btn">
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

export default AboutCompanyComponent;

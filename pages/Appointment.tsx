import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

type Props = {};

const Appointment = (props: Props) => {
  return (
    <Layout>
      <Helmet>
                        
        <meta charSet="utf-8" />
                        <title>Home</title>
        <meta
          name="description"
          content="Get your amazing Car Solutions Prestige Auto care"
        />
                                     
      </Helmet>
      <div
        className="breadcumb-wrapper"
        style={{ backgroundImage: `url('assets/img/bg/cta_bg_1.jpg')` }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Appointment</h1>
            <div className="breadcumb-menu-wrap">
              <ul className="breadcumb-menu">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Appointment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="space" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="row gx-0 bg-smoke">
            <div className="col-xl-5">
              <div className="appointment-img2">
                <img
                  src="assets/img/normal/appointment_2.jpg"
                  alt="Appointment"
                />
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
            <div className="col-xl-7 appointment-form-wrap">
              <div className="title-area mb-40 text-xl-start text-center">
                <h2 className="sec-title">Make An Appointment</h2>
              </div>
              <form
                action="https://angfuzsoft.com/html/mechon/demo/mail.php"
                method="POST"
                className="appointment-form ajax-contact"
              >
                <div className="row gx-24">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Enter Your Name"
                    />{" "}
                    <i className="fal fa-user" />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                    />{" "}
                    <i className="fal fa-envelope" />
                  </div>
                  <div className="form-group col-12">
                    <select name="subject" id="subject" className="form-select">
                      <option>Select Subject</option>
                      <option value="Panel & Paint">Panel & Paint</option>
                      <option value="Panel & Paint">Panel & Paint</option>
                      <option value="Panel & Paint">Panel & Paint</option>
                      <option value="Panel & Paint">Panel & Paint</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="date-pick form-control"
                      name="date"
                      id="date-pick"
                      placeholder="Select Date"
                    />{" "}
                    <i className="far fa-calendar" />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="time-pick form-control"
                      name="time"
                      id="time-pick"
                      placeholder="Select Time"
                    />{" "}
                    <i className="fal fa-clock" />
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={3}
                      className="form-control"
                      placeholder="Message"
                      defaultValue={""}
                    />{" "}
                    <i className="fal fa-comment" />
                  </div>
                  <div className="form-btn col-12 mt-10">
                    <button className="as-btn">Make An Appointment</button>
                  </div>
                </div>
                <p className="form-messages mb-0 mt-3" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Appointment;

import Link from "next/link";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";
import Layout from "../components/Layout";
import { sendContact } from "../utils/sendQuote";

type Props = {};

const Contact = (props: Props) => {
  const [data, setData] = useState({
    email: "",
    subject: "",
    message: "",
    name: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async () => {
    let submitQuote = toast.loading("sending message...");

    if (data.email === "" || data.name === "" || data.subject === "") {
      toast.error("Please enter required fields", {
        id: submitQuote,
      });
    } else {
      await sendContact(data)
        .then((res) => {
          if (res.status === 200) {
            toast.success("your message has been sent", {
              id: submitQuote,
            });
            setData({
              email: "",
              subject: "",
              message: "",
              name: "",
            });
          } else if (res.status === 400) {
            toast.error("sent unsuccessful", {
              id: submitQuote,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message, {
            id: submitQuote,
          });
        });
    }
  };

  return (
    <Layout>
      <div
        className="breadcumb-wrapper"
        data-bg-src=""
        style={{
          backgroundImage: `url('assets/img/breadcumb/breadcumb-bg.jpg')`,
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Contact Us</h1>
            <div className="breadcumb-menu-wrap">
              <ul className="breadcumb-menu">
                <li>
                  <Link href="index.html">Home</Link>
                </li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="space" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="nav-one"
              role="tabpanel"
              aria-labelledby="nav-one-tab"
            >
              <div className="row gy-30 justify-content-center">
                <div className="col-md-6 col-lg-4">
                  <div className="contact-box">
                    <div className="contact-box_img">
                      <img
                        src="assets/img/normal/contact_1_1.jpg"
                        alt="service image"
                      />
                    </div>
                    <div className="contact-box_content">
                      <div className="contact-box_icon">
                        <i className="fa fa-headset" />
                      </div>
                      <div className="contact-box_info">
                        <p className="contact-box_text">Call Us 24/7</p>
                        <h5 className="contact-box_link">
                          <Link href="tel:+61478033023">+61 478 033 023</Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="contact-box">
                    <div className="contact-box_img">
                      <img
                        src="assets/img/normal/contact_1_2.jpg"
                        alt="service image"
                      />
                    </div>
                    <div className="contact-box_content">
                      <div className="contact-box_icon">
                        <i className="fa fa-envelope-open-text" />
                      </div>
                      <div className="contact-box_info">
                        <p className="contact-box_text">Make A Quote</p>
                        <h5 className="contact-box_link">
                          <Link href="mailto:prestige@gmail.com">
                            prestige@gmail.com
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="contact-box">
                    <div className="contact-box_img">
                      <img
                        src="assets/img/normal/contact_1_3.jpg"
                        alt="service image"
                      />
                    </div>
                    <div className="contact-box_content">
                      <div className="contact-box_icon">
                        <i className="fa fa-map-location-dot" />
                      </div>
                      <div className="contact-box_info">
                        <p className="contact-box_text">Service Station</p>
                        <h5 className="contact-box_link">
                          Shop 14/115 Dollis St, Rocklea QLD 4106, Australia
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space bg-smoke position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-7 col-sm-9">
              <div className="title-area text-center">
                <span className="sub-title">OUR CONTACT FORM</span>
                <h2 className="sec-title">
                  You can connect with us when need help!
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="contact-form ajax-contact">
                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={data.name}
                      id="name"
                      placeholder="Enter Your Name"
                      onChange={handleChange}
                    />{" "}
                    <i className="fal fa-user" />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      value={data.email}
                      placeholder="Email Address"
                      onChange={handleChange}
                    />{" "}
                    <i className="fal fa-envelope" />
                  </div>
                  <div className="form-group col-12">
                    <input
                      required
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      value={data.subject}
                      placeholder="Subject Address"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={3}
                      value={data.message}
                      className="form-control"
                      placeholder="Message"
                      defaultValue={""}
                      onChange={handleChange}
                    />{" "}
                    <i className="fal fa-comment" />
                  </div>
                  <div className="form-btn col-12 mt-10 text-center">
                    <button onClick={handleSubmit} className="as-btn">
                      Send Message Now
                    </button>
                  </div>
                </div>
                <p className="form-messages mb-0 mt-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="body-shape1">
          <img src="assets/img/shape/road_shape_1.png" alt="shape" />
        </div>
      </section>
      <div className="map-sec">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14148.579925881993!2d153.0226992!3d-27.5580106!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdb146cf544a09675!2sPrestige%20Panel%20%26%20Paint!5e0!3m2!1sen!2slk!4v1672837756952!5m2!1sen!2slk"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </Layout>
  );
};

export default Contact;

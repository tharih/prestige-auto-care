import Link from "next/link";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useRouter } from "next/router";
import styles from "./styles/signup.module.css";

type Props = {};

const SignUp = (props: Props) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const register = async () => {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/register`,
      {
        body: JSON.stringify(formData),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    ).then((res) => res.json());
    console.log(result);
    
  };
  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{ backgroundImage: `url('assets/img/bg/cta_bg_1.jpg')` }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Sign Up</h1>
            <div className="breadcumb-menu-wrap">
              <ul className="breadcumb-menu">
                <li>
                  <a href="index">Home</a>
                </li>
                <li>Sign Up</li>
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
                <h2 className="sec-title">Sign Up</h2>
              </div>
              <div className="appointment-form ajax-contact">
                <div className="row gx-24">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
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
                      placeholder="Email Address"
                      onChange={handleChange}
                    />{" "}
                    <i className="fal fa-envelope" />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="password"
                      className="date-pick form-control"
                      name="password"
                      id="date-pick"
                      placeholder="Password"
                      onChange={handleChange}
                    />{" "}
                    <i className="fa fa-lock" />
                  </div>
                  <Link
                    href="Login"
                    className="text-center"
                    style={{ color: "black" }}
                  >
                    <small>Already have an account? </small>
                    <strong>Login</strong>
                  </Link>{" "}
                  <div className="form-btn col-12 mt-10">
                    <button onClick={register} className="as-btn">
                      Create Your Account
                    </button>
                  </div>
                </div>
                <p className="form-messages mb-0 mt-3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;

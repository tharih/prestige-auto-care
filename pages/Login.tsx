import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { auth, db } from "../firebase";
import { addUser } from "../store/reducers/userReducer";
import { BsGoogle } from "react-icons/bs";
type Props = {};
import { StyledButton } from "./styles/LoginStyle";

const Login = (props: Props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "suvinchandula93@gmail.com",
    password: "suvin1234",
  });

  const login = () => {
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        if (userCredential) {
          const docRef = doc(db, "users", `${userCredential.user.email}`);
          const usersDoc = await getDoc(docRef);
          dispatch(
            addUser({
              email: userCredential.user.email,
              uid: userCredential.user.uid,
              role: usersDoc.data()?.role,
            })
          );
          router.push("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorMessage", errorMessage);
        // ..
      });
  };
  return (
    <>
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
            <h1 className="breadcumb-title">Login</h1>
            <div className="breadcumb-menu-wrap">
              <ul className="breadcumb-menu">
                <li>
                  <a href="index">Home</a>
                </li>
                <li>Login</li>
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
                <h2 className="sec-title">Login</h2>
              </div>
              <div className="appointment-form ajax-contact">
                <div className="row gx-24">
                  {/* <div className="form-group col-md-6">
               <input
                 type="text"
                 className="form-control"
                 name="name"
                 id="name"
                 placeholder="Enter Your Name"
               />{" "}
               <i className="fal fa-user" />
             </div> */}
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
                  <div className="form-group col-md-6">
                    <input
                      type="password"
                      className="date-pick form-control"
                      name="password"
                      id="date-pick"
                      placeholder="Password"
                    />{" "}
                    <i className="fa fa-lock" />
                  </div>
                  <Link
                    href="SignUp"
                    className="text-center"
                    style={{ color: "black" }}
                  >
                    Sign Up
                  </Link>{" "}
                  <div className="form-btn col-12 mt-10">
                    <button onClick={login} className="as-btn">
                      Login
                    </button>
                    <StyledButton>
                      {" "}
                      <BsGoogle /> Login With Google{" "}
                    </StyledButton>
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

export default Login;

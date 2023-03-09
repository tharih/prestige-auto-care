import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/reducers/userReducer";
type Props = {};
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";

const Login = (props: Props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    const loginToast = toast.loading("processing...");
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/login`,
      {
        body: JSON.stringify(formData),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((res) => res.json())
      .catch((err) => console.log(err))
      .finally(() => {
        toast.success("Login successful", {
          id: loginToast,
        });
        router.push("/");
      });

    Cookies.set("user", JSON.stringify(result));
    Cookies.set("isLoggedIn", true);
    dispatch(addUser(result));
  };
  return (
    <>
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
                  <Link href="/">Home</Link>
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
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
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
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                    />{" "}
                    <i className="fa fa-lock" />
                  </div>
                  <Link
                    href="SignUp"
                    className="text-center"
                    style={{ color: "black" }}
                  >
                    Don't have an account? <strong>Sign Up</strong>
                  </Link>{" "}
                  <div className="form-btn col-12 mt-10">
                    <button onClick={login} className="as-btn">
                      Login
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

export default Login;

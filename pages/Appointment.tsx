import { async } from "@firebase/util";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import {
  addToQuote,
  clearQuote,
  selectSecureUrl,
} from "../store/reducers/quoteReducer";
import { fetchAbout } from "../utils/fetchAbout";
import { sendQuote } from "../utils/sendQuote";
import { AboutType } from "../utils/type";

type Props = {
  about: AboutType[];
};

export default function Appointment ({ about}: Props){
  // @ts-ignore
  const dispatch = useDispatch();
  const uploaded_url = useSelector(selectSecureUrl);
  const [data, setData] = useState({});
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleImageChange = async (e: any) => {
    const selectedImages = Array.from(e.target.files);
    dispatch(clearQuote());

    selectedImages.map(async (file: any) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "quotes");

      const data = await fetch(
        "https://api.cloudinary.com/v1_1/dy0suo4t5/image/upload",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((res) => res.json())
        .then((res) => {
          dispatch(
            addToQuote({
              filename: `${res.asset_id}.${res.format}`,
              path: res.secure_url,
            })
          );
        });
    });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    let submitQuote = toast.loading("sending quote...");
    const newFormData = {
      ...data,
      urls: uploaded_url,
    };
    console.log("newFormData:", newFormData);
    await sendQuote(newFormData)
      .then((res) => {
        if (res.status === 200) {
          toast.success("your quote has been sent", {
            id: submitQuote,
          });
          // dispatch(clearQuote());
          // setData({});
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
  };
  return (
    <Layout>
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
                  <a href="/">Home</a>
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
                    <span className="counter-number">{about[0]?.experienceYears}</span>
                  </h3>
                  <h4 className="experience-text">YEARS OF EXPERIENCE</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-7 appointment-form-wrap">
              <div className="title-area mb-40 text-xl-start text-center">
                <h2 className="sec-title">Make An Appointment</h2>
              </div>
              <div className="appointment-form ajax-contact">
                <div className="row gx-24">
                  <div className="form-group col-md-6">
                    <input
                      required
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
                      required
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject Address"
                      onChange={handleChange}
                    />{" "}
                    <i className="fal fa-envelope" />
                  </div>
                  <div className="form-group col-12">
                    <input
                      required
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
                      type="file"
                      className="time-pick form-control"
                      name="file"
                      id="time-pick"
                      multiple
                      accept="image/*"
                      placeholder="Select images"
                      onChange={handleImageChange}
                    />{" "}
                    <i className="fal fa-clock" />
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      required
                      name="message"
                      id="message"
                      cols={30}
                      rows={3}
                      className="form-control"
                      placeholder="Message"
                      defaultValue={""}
                      onChange={handleChange}
                    />{" "}
                    <i className="fal fa-comment" />
                  </div>
                  <div className="form-btn col-12 mt-10">
                    <button onClick={handleSubmit} className="as-btn">
                      Make An Appointment
                    </button>
                  </div>
                </div>
                <p className="form-messages mb-0 mt-3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const about: AboutType[] = await fetchAbout();
  
  return {
    props: {
      about,
    },
  };
};
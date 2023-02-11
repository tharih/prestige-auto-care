import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

type Props = {};

const Gallery = (props: Props) => {
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
            <h1 className="breadcumb-title">Work Gallery</h1>
            <div className="breadcumb-menu-wrap">
              <ul className="breadcumb-menu">
                <li>
                  <a href="index">Home</a>
                </li>
                <li>Work Gallery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white space">
        <div className="container">
          <div className="row gy-40">
            <div className="col-md-6 col-lg-4">
              <div className="team-box">
                <div className="team-img">
                  <img src="assets/img/prestige/4.jpg" alt="Gallery" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="team-box">
                <div className="team-img">
                  <img src="assets/img/prestige/5.jpg" alt="Gallery" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="team-box">
                <div className="team-img">
                  <img src="assets/img/prestige/2.jpg" alt="Gallery" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="team-box">
                <div className="team-img">
                  <img src="assets/img/prestige/1.jpg" alt="Gallery" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="team-box">
                <div className="team-img">
                  <img src="assets/img/prestige/10.jpg" alt="Gallery" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="team-box">
                <div className="team-img">
                  <img src="assets/img/prestige/13.jpg" alt="Gallery" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;

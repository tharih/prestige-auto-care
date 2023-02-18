import Link from "next/link";
import React from "react";
import { Helmet } from "react-helmet";
import { client, urlFor } from "../client";
import Layout from "../components/Layout";

type Props = {};

const Services = ({ services }: any) => {
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
        data-bg-src="assets/img/breadcumb/breadcumb-bg.jpg"
        style={{
          backgroundImage: `url('assets/img/breadcumb/breadcumb-bg.jpg')`,
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Our Services</h1>
            <div className="breadcumb-menu-wrap">
              <ul className="breadcumb-menu">
                <li>
                  <Link href="index.html">Home</Link>
                </li>
                <li>Our Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-smoke space">
        <div className="container">
          <div className="row gy-30">
            {services.map((service: any, index: any) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="service-grid">
                  <div className="service-grid_img">
                    <img
                      src={urlFor(service.image[0]).url()}
                      alt="Service Image"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>

                  <div className="service-grid_content">
                    <h3 className="service-grid_title">
                      <Link href="Servicedetails">{service.name}</Link>
                    </h3>
                    <p className="service-grid_text">{service.details}</p>
                    <Link href="Servicedetails" className="as-btn">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="space-top"
        data-bg-src="assets/img/bg/service_bg_1.jpg"
        style={{ backgroundImage: `url('assets/img/bg/service_bg_1.jpg')` }}
      >
        <div className="container">
          <div
            className="quality-card"
            data-pos-space=".blog-sec"
            data-sec-space="margin-bottom"
            data-margin-bottom="155px"
          >
            <div className="title-area mb-40 text-center text-lg-start">
              <span className="sub-title">Top News Updates</span>
              <h2 className="sec-title">We Provide Best Service And Repair</h2>
            </div>
            <div className="quality-feature-wrap">
              <div className="quality-feature">
                <div className="quality-feature_icon">
                  <img src="assets/img/icon/quality-feature_1.svg" alt="icon" />
                </div>
                <h3 className="quality-feature_title">Quality Services</h3>
                <p className="quality-feature_text">
                  Purpose quality vectors with highly efficient incubate
                </p>
              </div>
              <div className="quality-feature">
                <div className="quality-feature_icon">
                  <img src="assets/img/icon/quality-feature_2.svg" alt="icon" />
                </div>
                <h3 className="quality-feature_title">Fast Delivery</h3>
                <p className="quality-feature_text">
                  Purpose quality vectors with highly efficient incubate
                </p>
              </div>
            </div>
            <div className="skill-feature">
              <h3 className="skill-feature_title">Product Design</h3>
              <div className="progress">
                <div className="progress-bar" style={{ width: "70%" }}>
                  <div className="progress-value">70%</div>
                </div>
              </div>
            </div>
            <div className="skill-feature">
              <h3 className="skill-feature_title">Car Mechanic Service</h3>
              <div className="progress">
                <div className="progress-bar" style={{ width: "93%" }}>
                  <div className="progress-value">93%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "service"]';
  const services = await client.fetch(query);

  return {
    props: { services },
  };
};

export default Services;

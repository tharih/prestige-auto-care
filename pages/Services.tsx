import Link from "next/link";
import React from "react";
import { Helmet } from "react-helmet";
import { client, urlFor } from "../client";
import Layout from "../components/Layout";
import { fetchAbout } from "../utils/fetchAbout";
import { fetchService } from "../utils/fetchService";
import { AboutType, ServiceType } from "../utils/type";

type Props = {
  service: ServiceType[];
  about: AboutType[],
  
};

export default function Services ({ service, about }: Props) {
  console.log(service);
  
  return (
    <Layout>
     
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
                  <Link href="/">Home</Link>
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
            {service.map((service: any, index: any) => (
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
                      <Link href={`/${service.slug?.current}`}>{service.name}</Link>
                    </h3>
                    <p className="service-grid_text">{service.details}</p>
                    <Link href={`/${service.slug?.current}`} className="as-btn">
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
              <span className="sub-title">Best Service</span>
              <h2 className="sec-title">We Provide Best Service And Repair</h2>
            </div>
            <div className="quality-feature-wrap">
              <div className="quality-feature">
                <div className="quality-feature_icon">
                  <img src="assets/img/icon/quality-feature_1.svg" alt="icon" />
                </div>
                <h3 className="quality-feature_title">{about[0]?.service_title1}</h3>
                <p className="quality-feature_text">
                  {about[0]?.service_description1}
                </p>
              </div>
              <div className="quality-feature">
                <div className="quality-feature_icon">
                  <img src="assets/img/icon/quality-feature_2.svg" alt="icon" />
                </div>
                <h3 className="quality-feature_title">{about[0]?.service_title2}</h3>
                <p className="quality-feature_text">
                  {about[0]?.service_description2}
                </p>
              </div>
            </div>
            <div className="quality-feature-wrap">
              <div className="quality-feature">
                <div className="quality-feature_icon">
                  <img src="assets/img/icon/service_feature_1_3.svg" alt="icon" />
                </div>
                <h3 className="quality-feature_title">{about[0]?.service_title3}</h3>
                <p className="quality-feature_text">
                  {about[0]?.service_description3}
                </p>
              </div>
              <div className="quality-feature">
                <div className="quality-feature_icon">
                  <img src="assets/img/icon/service_feature_1_2.svg" alt="icon" />
                </div>
                <h3 className="quality-feature_title">{about[0]?.service_title4}</h3>
                <p className="quality-feature_text">
                 {about[0]?.service_description4}
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const service: ServiceType[] = await fetchService();
  const about: AboutType[] = await fetchAbout();

  return {
    props: { service, about },
  };
};



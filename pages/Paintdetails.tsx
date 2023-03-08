import Link from 'next/link'
import React from 'react'
import { Helmet } from 'react-helmet'
import { urlFor } from '../client'
import Logo from "../public/assets/img/logo1.png"
import { fetchPaint } from '../utils/fetchPaint'
import { PaintType } from '../utils/type'

type Props = {
  paint: PaintType[];
  
};

export default function Paintdetails({ paint }: Props) {
  return (
    <>
     
  <div
    className="breadcumb-wrapper"
    data-bg-src="assets/img/breadcumb/breadcumb-bg.jpg"
    style={{backgroundImage: `url('assets/img/breadcumb/breadcumb-bg.jpg')`}}
  >
    <div className="container z-index-common">
      <div className="breadcumb-content">
        <h1 className="breadcumb-title">Paint Details</h1>
        <div className="breadcumb-menu-wrap">
          <ul className="breadcumb-menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Paint Details</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <section className="space-top space-extra-bottom" style={{backgroundColor:"white"}}>
    <div className="container">
      <div className="row flex-row-reverse">
        <div className="col-lg-8">
          <div className="mb-40">
          <img
              
              style={{width:"803px", height:"343px"}}
              src={urlFor(paint[0]?.service_image1.asset._ref).url()}
              alt="Service Image"
            />
          </div>
          <h3 className="single-title">{paint[0]?.title}</h3>
          <div className="service-content">
            
            <p className="mb-30">
            {paint[0]?.description}</p>
            <div className="service-feature-wrap">
              <div className="service-feature">
                <div className="service-feature_icon">
                  <img
                    src="assets/img/icon/service_feature_1_1.svg"
                    alt="Icon"
                  />
                </div>
                <div className="service-feature_content">
                  <h4 className="service-feature_title">
                  {paint[0]?.service_title1}
                   
                  </h4>
                  <p className="service-feature_text">
                  {paint[0]?.service_description1}
                  </p>
                </div>
              </div>
              <div className="service-feature">
                <div className="service-feature_icon">
                  <img
                    src="assets/img/icon/service_feature_1_2.svg"
                    alt="Icon"
                  />
                </div>
                <div className="service-feature_content">
                  <h4 className="service-feature_title">
                  {paint[0]?.service_title2}
                  </h4>
                  <p className="service-feature_text">
                  {paint[0]?.service_description2}
                  </p>
                </div>
              </div>
              <div className="service-feature">
                <div className="service-feature_icon">
                  <img
                    src="assets/img/icon/service_feature_1_3.svg"
                    alt="Icon"
                  />
                </div>
                <div className="service-feature_content">
                  <h4 className="service-feature_title">
                  {paint[0]?.service_title3}
                  </h4>
                  <p className="service-feature_text">
                  {paint[0]?.service_description3}
                    
                  </p>
                </div>
              </div>
              <div className="service-feature">
                <div className="service-feature_icon">
                  <img
                    src="assets/img/icon/service_feature_1_4.svg"
                    alt="Icon"
                  />
                </div>
                <div className="service-feature_content">
                  <h4 className="service-feature_title">
                  {paint[0]?.service_title4}
                  </h4>
                  <p className="service-feature_text">
                  {paint[0]?.service_description4}
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-20 mb-40">
            {paint[0]?.description2}
            </p>
            <h4 className="service-subtitle mb-20">
            {paint[0]?.title2}
            </h4>
            <p className="mb-30">
            {paint[0]?.process_description}
            </p>
            
            <div className="service-process-wrap">
              <div className="service-process">
                <div className="service-process_num">01</div>
                <h5 className="service-process_title">{paint[0]?.process_title1}</h5>
                <p className="service-process_text">
                {paint[0]?.process_description1}
                </p>
              </div>
              <div className="service-process">
                <div className="service-process_num">02</div>
                <h5 className="service-process_title">{paint[0]?.process_title2}</h5>
                <p className="service-process_text">
                {paint[0]?.process_description2}
                </p>
              </div>
              <div className="service-process">
                <div className="service-process_num">03</div>
                <h5 className="service-process_title">{paint[0]?.process_title3}</h5>
                <p className="service-process_text">
                {paint[0]?.process_description3}
                </p>
              </div>
            </div>
           
            <div className="row gy-30 mb-30">
              <div className="col-xl-6">
                <div>
                <img
              style={{width:"387px", height:"260px"}}
              src={urlFor(paint[0]?.service_image2.asset._ref).url()}
              alt="Service Image"
            />
                </div>
              </div>
              <div className="col-xl-6">
                <h4 className="h4">Customer Benefits</h4>
                <p className="mb-30">
                {paint[0]?.customer_description}
                </p>
                <div className="checklist style3">
                  <ul>
                    {paint[0].benefits?.map((data: any, index: any) => (
                    <li key={index}>{data}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <aside className="sidebar-area">
            <div className="widget widget_categories">
              <h3 className="widget_title">Visit Us</h3>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="about">About</Link>
                </li>
                <li>
                  <Link href="services">Service</Link>
                </li>
                <li>
                  <Link href="shop">Shop</Link>
                </li>
                <li>
                  <Link href="contact">Contact</Link>
                </li>
              </ul>
            </div>
            {/* <div className="widget widget_download">
              <h4 className="widget_title">Download</h4>
              <div className="donwload-media-wrap">
                <div className="download-media">
                  <div className="download-media_icon">
                    <i className="fal fa-file-pdf" />
                  </div>
                  <div className="download-media_info">
                    <h5 className="download-media_title">Our Brochures</h5>
                    <span className="download-media_text">Download</span>
                  </div>
                  <Link href="about.html" className="download-media_btn">
                    <i className="fa fa-arrow-right" />
                  </Link>
                </div>
                <div className="download-media">
                  <div className="download-media_icon">
                    <i className="fal fa-file-lines" />
                  </div>
                  <div className="download-media_info">
                    <h5 className="download-media_title">Company Details</h5>
                    <span className="download-media_text">Download</span>
                  </div>
                  <Link href="about.html" className="download-media_btn">
                    <i className="fa fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div> */}
            <div
              className="widget widget_offer"
              data-bg-src="assets/img/widget_bg_1.jpg"
            >
              <div className="offer-banner">
                <div className="banner-logo">
                  <img src="assets/img/logo-white1.png" alt="Mechon" />
                </div>
                <h5 className="banner-title" style={{color:"black"}}>
                  Need Help? We Are Here To Help You
                </h5>
                <div className="offer">
                  <h6 className="offer-title">
                    <span className="text-theme">Prestige </span>Auto Care
                  </h6>
                  {/* <p className="offer-text">
                    Save up to <span className="text-theme">60% off</span>
                  </p> */}
                </div>
                <Link href="Appointment" className="as-btn">
                  Get A Quote
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export const getServerSideProps = async () => {
  const paint: PaintType[] = await fetchPaint();
 
  return {
    props: {
      paint,
     
    },
  };
};
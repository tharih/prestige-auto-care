import Link from 'next/link'
import React from 'react'
import { Helmet } from 'react-helmet'

type Props = {}

const Servicedetails = (props: Props) => {
  return (
    <>
     <Helmet>
                        
        <meta charSet="utf-8" />
                        <title>Home</title>
        <meta name="description" content="Get your amazing Car Solutions Prestige Auto care" />
                        
                    
      </Helmet>
  <div
    className="breadcumb-wrapper"
    data-bg-src="assets/img/breadcumb/breadcumb-bg.jpg"
    style={{backgroundImage: `url('assets/img/breadcumb/breadcumb-bg.jpg')`}}
  >
    <div className="container z-index-common">
      <div className="breadcumb-content">
        <h1 className="breadcumb-title">Service Details</h1>
        <div className="breadcumb-menu-wrap">
          <ul className="breadcumb-menu">
            <li>
              <Link href="index.html">Home</Link>
            </li>
            <li>Service Details</li>
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
              className="w-100"
              src="assets/img/service/service_details_1.jpg"
              alt="Service Image"
            />
          </div>
          <h3 className="single-title">Unique Car Engine Service</h3>
          <div className="service-content">
            {/* <p calssName="mb-30">
              Continually myocardinate holistic mindshare with client-based web
              services. Assertively e-enable catalysts for change before fully
              tested markets. Phosfluorescently maintain wireless scenarios
              after intermandated applications. Conveniently predominate
              revolutionary quality vectors through future-proof manufactured
              products. Enthusiastically transform distinctive collaboration.
            </p> */}
            <p className="mb-30">
              Intrinsicly coordinate multifunctional functionalities reliable
              potentialities. Objectively envisioneer high in convergence
              through collaborative networks. Interactively generate B2C
              e-tailers for business data restore fully researched relationships
              through resource maximizing results.
            </p>
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
                    Instant Car Services
                  </h4>
                  <p className="service-feature_text">
                    Maintain wireless scerios after sure quality vectors future
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
                    24/7 Quality Service
                  </h4>
                  <p className="service-feature_text">
                    Maintain wireless scerios after sure quality vectors future
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
                    Easy Customer Service
                  </h4>
                  <p className="service-feature_text">
                    Maintain wireless scerios after sure quality vectors future
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
                    Quality Cost Service
                  </h4>
                  <p className="service-feature_text">
                    Maintain wireless scerios after sure quality vectors future
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-20 mb-40">
              Phosfluorescently maintain wireless scenarios after intermandated
              applications. Conveniently predominate revolutionary quality
              vectors through future-proof manufactured products. Objectively
              envisioneer high in convergence through collaborative networks.
              Interactively generate B2C e-tailers for business data restore
              fully researched relationships through resource maximizing
              results.
            </p>
            <h4 className="service-subtitle mb-20">
              3 Simple Steps to Process
            </h4>
            <p className="mb-30">
              Assertively e-enable catalysts for change before fully tested
              markets. Phosfluorescently maintain wireless scenarios after
              intermandated applications. Conveniently predominate revolutionary
              quality vectors through future-proof manufactured products.
              Enthusiastically transform distinctive collaboration.
            </p>
            <p className="mb-30">
              Phosfluorescently maintain wireless scenarios after intermandated
              applications. Conveniently predominate revolutionary quality
              vectors through future-proof manufactured products.
            </p>
            <div className="service-process-wrap">
              <div className="service-process">
                <div className="service-process_num">01</div>
                <h5 className="service-process_title">Receive Car</h5>
                <p className="service-process_text">
                  Tactical services through market web services
                </p>
              </div>
              <div className="service-process">
                <div className="service-process_num">02</div>
                <h5 className="service-process_title">Process Work</h5>
                <p className="service-process_text">
                  Tactical services through market web services
                </p>
              </div>
              <div className="service-process">
                <div className="service-process_num">03</div>
                <h5 className="service-process_title">Deliver You</h5>
                <p className="service-process_text">
                  Tactical services through market web services
                </p>
              </div>
            </div>
            <p className="mt-30 mb-45">
              Conveniently predominate revolutionary quality vectors through
              future-proof manufactured products. Objectively envisioneer high
              in convergence through collaborative networks. Interactively
              generate B2C tailers for business data restore fully researched
              relationships through.
            </p>
            <div className="row gy-30 mb-30">
              <div className="col-xl-6">
                <div>
                  <img
                    className="w-100"
                    src="assets/img/service/service_inner_1.jpg"
                    alt="Service Image"
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <h4 className="h4">Customer Benefits</h4>
                <p className="mb-30">
                  Catalysts for change before fully tested markets are maintain
                  wireless scenarios after intermandated applications
                  predominate revolutionary.
                </p>
                <div className="checklist style3">
                  <ul>
                    <li>We use the latest diagnostic equipment</li>
                    <li>We are a member of Professional Service</li>
                    <li>Automotive service our clients receive</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <aside className="sidebar-area">
            <div className="widget widget_categories">
              <h3 className="widget_title">Categories</h3>
              <ul>
                <li>
                  <Link href="blog.html">Car Repair</Link>
                </li>
                <li>
                  <Link href="blog.html">Engine Repair</Link>
                </li>
                <li>
                  <Link href="blog.html">Tyer Change</Link>
                </li>
                <li>
                  <Link href="blog.html">Oil Change</Link>
                </li>
                <li>
                  <Link href="blog.html">Battery Charge</Link>
                </li>
              </ul>
            </div>
            <div className="widget widget_download">
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
            </div>
            {/* <div
              className="widget widget_offer"
              data-bg-src="assets/img/bg/widget_bg_1.jpg"
            >
              <div className="offer-banner">
                <div className="banner-logo">
                  <img src="assets/img/logo-white.png" alt="Mechon" />
                </div>
                <h5 className="banner-title">
                  Need Help? We Are Here To Help You
                </h5>
                <div className="offer">
                  <h6 className="offer-title">
                    <span className="text-theme">Mechon</span> Special
                  </h6>
                  <p className="offer-text">
                    Save up to <span className="text-theme">60% off</span>
                  </p>
                </div>
                <Link href="contact.html" className="as-btn">
                  Get A Quote
                </Link>
              </div>
            </div> */}
          </aside>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default Servicedetails
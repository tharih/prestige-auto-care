import Link from "next/link";
import React from "react";
import { urlFor } from "../../client";

type Props = {
  services: [];
};

const BestServiceComponent = ({ services }: Props) => {
  return (
    <section
      className="space"
      style={{ backgroundColor: "white", marginTop: "25px" }}
    >
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Our Best Service</span>
          <h2 className="sec-title">Quality Servicing Opportunity</h2>
        </div>
        <div
          className="row as-carousel"
          data-slide-show={3}
          data-md-slide-show={2}
          data-arrows="true"
        >
          {services.map((service: any, index: any) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="service-block">
                <div className="service-block_img">
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
                <div
                  className="service-block_content"
                  data-bg-src="assets/img/bg/pattern_bg_7.png"
                  style={{
                    backgroundImage: `url('assets/img/bg/pattern_bg_7.png')`,
                  }}
                >
                  {/* <span className="service-block_number">Service 01</span> */}
                  <h3 className="service-block_title">
                    <Link href="Shop">{service.name}</Link>
                  </h3>
                  <Link href="Shop" className="as-btn">
                    View Shop
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestServiceComponent;

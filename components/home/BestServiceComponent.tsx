import Link from "next/link";
import React from "react";
import { urlFor } from "../../client";
import { fetchService } from "../../utils/fetchService";
import { ServiceType } from "../../utils/type";

type Props = {
  service: ServiceType[];
  
};

export default function BestServiceComponent({ service }: Props) {
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
          {service.map((service: any, index: any) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="service-block">
                <div className="service-block_img">
                  <img
                    src={urlFor(service.image[0]).url()}
                    alt="Service Image"
                    style={{
                      objectFit: "cover",
                      width: "307px",
                      height: "307px",
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
                    <Link href={`/${service.slug?.current}`}>{service.name}</Link>
                  </h3>
                  <Link href={`/${service.slug?.current}`} className="as-btn">
                    View More
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

export const getServerSideProps = async () => {
  const service: ServiceType[] = await fetchService();

  return {
    props: { service },
  };
};

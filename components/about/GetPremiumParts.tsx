import Link from "next/link";
import React from "react";
import { fetchBanner } from "../../utils/fetchBanner";
import { BannerType } from "../../utils/type";

type Props = {
  banner: BannerType[]
};

export default function GetPremiumParts ({banner}: Props) {
  return (
    <section
      className="space"
      data-overlay="title"
      data-opacity={7}
      // data-bg-src="assets/img/bg/cta_bg_1.jpg"
      style={{ backgroundImage: `url('assets/img/bg/cta_bg_1.jpg')` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-6 mb-5 mb-lg-0">
            <div className="title-area mb-0 text-lg-start text-center">
              <span className="sub-title text-white">Get Our Service</span>
              <h2 className="sec-title text-white">
                {banner[0]?.home_title}
              </h2>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="btn-group justify-content-lg-end justify-content-center">
              <Link href="service.html" className="as-btn style3">
                Get Our Service
              </Link>{" "}
              <Link href="contact.html" className="as-btn style2">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const getServerSideProps = async () => {
  const banner: BannerType[] = await fetchBanner();

  return {
    props: {
      banner,
    },
  };
};

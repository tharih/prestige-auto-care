import React from "react";
import { Helmet } from "react-helmet";
import { urlFor } from "../client";
import Layout from "../components/Layout";
import { fetchGallery } from "../utils/fetchGallery";
import { GalleryType } from "../utils/type";

type Props = {
  gallery: GalleryType[];
  
};

export default function Gallery ({ gallery }: Props) {
  console.log(gallery);
  
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
          {gallery.map((data: any, index: any) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="team-box">
                <div className="team-img">
                <img src={urlFor(data.asset._ref).url()} alt="Gallery" />
                </div>
              </div>
            </div>
             ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const gallery: GalleryType[] = await fetchGallery();

  return {
    props: {
      gallery:gallery[0].images,
    },
    
  };
};

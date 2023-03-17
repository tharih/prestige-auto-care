import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { urlFor } from "../client";
import Layout from "../components/Layout";
import { fetchGallery } from "../utils/fetchGallery";
import { GalleryType } from "../utils/type";

type Props = {
  gallery: GalleryType[];
  
};

export default function Gallery () {
  const [gallery, setGallery] = useState<any>([])
  const [loading, setLoading] = useState(false);

  console.log(gallery);

  const getGallery = async () => {
    const gallery = await fetchGallery();
    setGallery(gallery[0])
    console.log(gallery);
  }

  useEffect(() => {
    setLoading(true);
    getGallery();
   
    setLoading(false);
    return () => {

      getGallery();

    };
  }, []);

  if (loading) return <div>Loading...</div>;
  
  return (
    <Layout>
      
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
                  <Link href="/">Home</Link>
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
          {gallery.images?.map((data: any, index: any) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="team-box">
                {gallery && (

                <div className="team-img">
                <img src={urlFor(data.asset._ref).url()} alt="Gallery" />
                </div>
                )}
              </div>
            </div>
             ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};



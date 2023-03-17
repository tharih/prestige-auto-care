"use client";
import React, { useState } from "react";
import { fetchAbout } from "../../utils/fetchAbout";
import { AboutType } from "../../utils/type";
import stylesIndex from "./WhyChooseUs.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { urlFor } from "../../client";

type Props = {
  about: AboutType[];
};

const WhyChooseUs = ({ about }: Props) => {
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleShowVideoPlayer = () => {
    setShowVideoPlayer(true);
  };
  const handleCloseVideoPlayer = () => {
    setShowVideoPlayer(false);
  };

  return (
    <div className="bg-title position-relative overflow-hidden">
      <div className="row">
        <div className="col-xl-6">
          <div className="as-video style1">
            {showVideoPlayer && (
              <div
                className={`${stylesIndex.videoPlayerBG} ${
                  showVideoPlayer ? stylesIndex.videPlayerShow : ""
                }`}
              >
                <div className={stylesIndex.CloseIcon}>
                  <AiOutlineClose onClick={handleCloseVideoPlayer} />
                </div>
                <div className={stylesIndex.videoPlayer}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/vlDOjTaaEdA"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
            )}
            {about && (

            <img src={urlFor(about[0].choose_image).url()} alt="Video Image" />
            )}
            <div
              className="play-btn popup-video"
              onClick={handleShowVideoPlayer}
            >
              <i className="fas fa-play" />
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="feature-media-wrap space">
            <div className="title-area text-md-start text-center">
              <span className="sub-title">About Our Company</span>
              <h2 className="sec-title text-white">Why Choose Us?</h2>
            </div>

            {about.map((data: any, index: any) =>
              data.whyChooseUs.map((item: any, key: any) => (
                <div key={key} className="feature-media">
                  <div className="feature-media_num">{Number(key) + 1}</div>
                  <div className="feature-media_content">
                    <h3 className="feature-media_title">{item?.mainTitle}</h3>
                    <p className="feature-media_text">{item?.description}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      {about && (

      <div className="body-shape4">
        <img src="assets/img/shape/shape_2.png" alt="shape" />
      </div>
      )}
    </div>
  );
};

export default WhyChooseUs;

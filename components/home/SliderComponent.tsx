import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { urlFor } from "../../client";
import { fetchAbout } from "../../utils/fetchAbout";
import { fetchSlider } from "../../utils/fetchSlider";
import { AboutType, MechanicalType, SliderType } from "../../utils/type";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { motion } from "framer-motion";
// import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";
import "./SliderComponent.module.css";
// import Link from "next/link";



type Props = {

  slider: SliderType[];

};

export default function SliderComponent({ slider }: Props) {
  // console.log(slider);

  const [currentState, setCurrentState] = useState(0)
  const [data, setData] = useState<[] | any>([])
  const [count, setCount] = useState(slider.length - 1)

  useEffect(() => {

    setData(slider.map((value: any) => {

      return {
        url: urlFor(value?.mainImage.asset._ref)?.url(),
        title: (value?.title),
        tagline: (value?.tagline),
        description: (value?.description)
      }
    }))
  }, [])
  console.log(data);




  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === count) {
        setCurrentState(0)
      } else {
        setCurrentState(currentState + 1)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [currentState])


  const goToNext = (currentState: any) => {
    setCurrentState(currentState)
  }
  // const [text, count] = useTypewriter({
  //   words: [""],
  //   delaySpeed: 2000,
  //   loop: true,
  // });

  // const [CarSolution, count1] = useTypewriter({
  //   words: [""],
  //   delaySpeed: 2000,
  //   loop: false,
  // });
  // carousal settings Start
  // const settings = {
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   autoplay: true,
  // };
  // const settings_001 = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   speed: 5000,
  //   arrows: false,
  //   swipeToSlide: true,
  //   centerPadding: "60px",
  //   autoPlay: true,
  // };
  // const settings_003 = {
  //   dots: false,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   speed: 500,
  //   arrows: false,
  // };
  // const settings_004 = {
  //   dots: false,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   speed: 500,
  //   arrows: false,
  //   autoPlay: true,
  //   responsive: [
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  // const settings_005 = {
  //   dots: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   speed: 500,
  //   arrows: false,
  // };
  return (


    <div className="container-style" style={{ height: "100%", position: 'relative' }}>
      <div style={{ backgroundPosition: 'center', backgroundSize: 'cover', height: '100%' }}>
        <img src={data[currentState]?.url} alt="Service Image" />
      </div>
      <motion.div initial={{
          opacity: 0,
          scale: 0,
        }}
          whileInView={{
            opacity: 1,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }} className="description" style={{ width: '600px', position: 'absolute', zIndex: 999, color: 'white', top: '20%', left: '20%' }}>

        <div >
          <p style={{ color: "white" }}>{data[currentState]?.tagline}</p>
          <h1 style={{ color: "white" }}>{data[currentState]?.title}</h1>
          <p style={{ color: "white" }}>{data[currentState]?.description}</p>

          <Link
            href="Appointment"
            className="as-btn style3"
            data-ani="slideindown"
            data-ani-delay="0.6s"
          >
            Make An Appointment
          </Link>

        </div>
      </motion.div>
      {/* <div className="carousel-boullt" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        {
          slider.map((slider, currentState) => (
            <span style={{ width: '45px', height: '12px', backgroundColor: 'rgb(179, 178, 176)', marginLeft: '10px', borderRadius: '10px', cursor: 'pointer', boxShadow: '3px 3px 3px rgba(73, 72, 72, 0.338)' }} key={currentState} onClick={() => goToNext(currentState)} ></span>
            // 
          ))
        }
      </div> */}
    </div>
    // <div
    //   className="as-hero-wrapper hero-slider-3 as-carousel number-dots"
    //   style={{ maxHeight: "80vh" }}
    // >
    //   <Slider {...settings}>
    //     <div className={stylesIndex.imageBG_01}>
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-lg-12">
    //             <motion.div
    //               initial={{
    //                 opacity: 0,
    //                 translateY: -300,
    //               }}
    //               whileInView={{
    //                 opacity: 1,
    //                 translateY: 0,
    //               }}
    //               transition={{
    //                 duration: 1,
    //               }}
    //               className={stylesIndex.bannerContent}
    //               // style={{ marginTop: "-620px" }}
    //             >
    //               <span
    //                 className={stylesIndex.heroSubtitle}
    //                 data-ani="slideindown"
    //                 data-ani-delay="0.2s"
    //               >
    //                 Non Stop Car Servicing Center
    //               </span>
    //               <h1
    //                 className={stylesIndex.heroTitle}
    //                 data-ani="slideindown"
    //                 data-ani-delay="0.3s"
    //               >
    //                 {text}
    //               </h1>
    //               <h1
    //                 className={stylesIndex.heroTitle}
    //                 data-ani="slideindown"
    //                 data-ani-delay="0.4s"
    //               >
    //                 {CarSolution}
    //               </h1>
    //               <p
    //                 className="hero-text"
    //                 data-ani="slideindown"
    //                 data-ani-delay="0.5s"
    //                 style={{ marginBottom: "50px" }}
    //               >
    //                 Take payments online with a scalable platform that grows
    //                 with your perfect business.
    //               </p>
    //               <motion.a
    //                 initial={{
    //                   opacity: 0,
    //                   translateY: 300,
    //                 }}
    //                 whileInView={{
    //                   opacity: 1,
    //                   translateY: -20,
    //                 }}
    //                 transition={{
    //                   duration: 1,
    //                 }}
    //                 href="Appointment"
    //                 className="as-btn style3"
    //                 data-ani="slideindown"
    //                 data-ani-delay="0.6s"
    //               >
    //                 Make An Appointment
    //               </motion.a>
    //               <img
    //                 className="banner-arrow"
    //                 data-animation="fadeInRight"
    //                 data-delay=".9s"
    //                 src="/assets/images/banner-arrow.png"
    //                 alt=""
    //               />
    //             </motion.div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={stylesIndex.imageBG_02}>
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-lg-12">
    //             <motion.div
    //               initial={{
    //                 opacity: 0,
    //                 scale: 0,
    //               }}
    //               whileInView={{
    //                 opacity: 1,
    //                 scale: [1, 1.1, 1],
    //               }}
    //               transition={{
    //                 duration: 1,
    //                 ease: "easeInOut",
    //               }}
    //               className={stylesIndex.bannerContent}
    //             >
    //               <span
    //                 className={stylesIndex.heroSubtitle}
    //                 data-ani="slideindown"
    //                 data-ani-delay="0.2s"
    //               >
    //                 Non Stop Car Servicing Center
    //               </span>
    //               <h1
    //                 className={stylesIndex.heroTitle}
    //                 data-ani="slideindown"
    //                 data-ani-delay="0.3s"
    //               >
    //                 Get Your Amazing 02
    //               </h1>
    //               <h1
    //                 className={stylesIndex.heroTitle}
    //                 data-ani="slideindown"
    //                 data-ani-delay="0.4s"
    //               >
    //                 Car Solution
    //               </h1>
    //               <p
    //                 className="hero-text"
    //                 data-ani="slideindown"
    //                 data-ani-delay="0.5s"
    //                 style={{ marginBottom: "50px" }}
    //               >
    //                 Take payments online with a scalable platform that grows
    //                 with your perfect business.
    //               </p>
    //               <Link
    //                 href="Appointment"
    //                 className="as-btn style3"
    //                 data-ani="slideindown"
    //                 data-ani-delay="0.6s"
    //               >
    //                 Make An Appointment
    //               </Link>
    //               <img
    //                 className="banner-arrow"
    //                 data-animation="fadeInRight"
    //                 data-delay=".9s"
    //                 // src="/assets/images/banner-arrow.png"
    //                 alt=""
    //               />
    //             </motion.div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={stylesIndex.imageBG_03}>
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-lg-12 ">
    //             <motion.div
    //               initial={{
    //                 opacity: 0,
    //                 translateY: -300,
    //               }}
    //               whileInView={{
    //                 opacity: 1,
    //                 translateY: 0,
    //               }}
    //               transition={{
    //                 duration: 1,
    //               }}
    //               className={stylesIndex.bannerContent}
    //               // style={{ marginTop: "-620px" }}
    //             >
    //               <span
    //                 className={stylesIndex.heroSubtitle}
    //                 data-ani="slideindown"
    //                 data-ani-delay="0.2s"
    //               >
    //                 Non Stop Car Servicing Center
    //               </span>
    //               <h1
    //                 className={stylesIndex.heroTitle}
    //                 data-ani="slideindown"
    //                 data-ani-delay="0.3s"
    //               >
    //                 Get Your Amazing 03
    //               </h1>
    //               <h1
    //                 className={stylesIndex.heroTitle}
    //                 data-ani="slideindown"
    //                 data-ani-delay="0.4s"
    //               >
    //                 Car Solution
    //               </h1>
    //               <p
    //                 className={stylesIndex.heroText}
    //                 data-ani="slideindown"
    //                 data-ani-delay="0.5s"
    //                 style={{ marginBottom: "50px" }}
    //               >
    //                 Take payments online with a scalable platform that grows
    //                 with your perfect business.
    //               </p>
    //               <motion.a
    //                 initial={{
    //                   opacity: 0,
    //                   translateY: 300,
    //                 }}
    //                 whileInView={{
    //                   opacity: 1,
    //                   translateY: -20,
    //                 }}
    //                 transition={{
    //                   duration: 1,
    //                 }}
    //                 href="Appointment"
    //                 className="as-btn style3"
    //                 data-ani="slideindown"
    //                 data-ani-delay="0.6s"
    //               >
    //                 Make An Appointment
    //               </motion.a>
    //               <img
    //                 className="banner-arrow"
    //                 data-animation="fadeInRight"
    //                 data-delay=".9s"
    //                 // src="/assets/images/banner-arrow.png"
    //                 alt=""
    //               />
    //             </motion.div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </Slider>
    // </div>

  );
};

export const getServerSideProps = async () => {
  const slider: SliderType[] = await fetchSlider();
  const about: AboutType[] = await fetchAbout();

  return {
    props: { slider, about },
  };
};
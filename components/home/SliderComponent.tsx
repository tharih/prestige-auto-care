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
import styles_1 from "./SliderComponent.module.css";
// import Link from "next/link";



type Props = {

  slider: any[];

};

export default function SliderComponent({ slider }: Props) {
  // console.log(slider);

  const [currentState, setCurrentState] = useState(0)
  const [data, setData] = useState<[] | any>([])
  const [count, setCount] = useState(slider?.length - 1)

  useEffect(() => {

    setData(slider?.map((value: any) => {

      return {
        url: urlFor(value?.mainImage.asset._ref)?.url(),
        title: (value?.title),
        tagline: (value?.tagline),
        description: (value?.description)
      }
    }))
  }, [])
  // console.log(data);




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

  return (


    <div className={styles_1.container_style} >
        {data && (
      <div style={{ backgroundPosition: 'center', backgroundSize: 'cover', height: '100%' }}>

        <img src={data[currentState]?.url} alt="Service Image" />
      </div>
        )}
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
          }} 
          className={styles_1.description}>

{data && (

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
            GET A QUOTE
          </Link>

        </div>
)}
      </motion.div>
      
    </div>
  

  );
};


import { Inter } from "@next/font/google";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";
import {
  AboutType,
  BannerType,
  MechanicalType,
  ProductType,
  ServiceType,
  SliderType,
  WorkProcessType,
} from "../utils/type";
import { fetchAbout } from "../utils/fetchAbout";
import { fetchService } from "../utils/fetchService";
import Layout from "../components/Layout";
import { fetchBanner } from "../utils/fetchBanner";
import { fetchProcess } from "../utils/fetchProcess";
import { fetchProducts } from "../utils/fetchProduct";
import Cookie from "js-cookie";
import { fetchSlider } from "../utils/fetchSlider";
import { fetchMechanical } from "../utils/fetchMechanical";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
type Props = {
  service: ServiceType[];
  about: AboutType[];
  banner: BannerType[];
  workProcess: WorkProcessType[];
  products: ProductType[];
  slider: SliderType[];
};
const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [slider, setSlider] = useState<any>([])
  const [service, setService] = useState<any>([])
  const [about, setAbout] = useState<any>(null)
  const [loading, setLoading] = useState(false);

  const GetPremiumParts = dynamic(
    () => import("../components/about/GetPremiumParts")
  );

  const LatestProducts = dynamic(
    () => import("../components/home/LatestProducts")
  );

  const SliderComponent = dynamic(
    () => import("../components/home/SliderComponent")
  );
  const BestServiceComponent = dynamic(
    () => import("../components/home/BestServiceComponent")
  );
  const AboutCompanyComponent = dynamic(
    () => import("../components/home/AboutCompanyComponent")
  );
  const WhyChooseUs = dynamic(() => import("../components/about/WhyChooseUs"));

  const WorkProcess = dynamic(() => import("../components/home/WorkProcess"));

  const Testimonials = dynamic(() => import("../components/home/Testimonials"));

  const settings_003 = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const settings_004 = {
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings_005 = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
  };
  // carousal settings End

  const getSlider = async () => {
    const slider = await fetchSlider();
    setSlider(slider)
  }

  const getService = async () => {
    const service = await fetchService();
    setService(service)
  }

  const getAbout = async () => {
    const about = await fetchAbout();
    setAbout(about)
  }

  

  

  useEffect(() => {
    setLoading(true);

    getSlider();
    getService();
    getAbout();
   
    setLoading(false);
    return () => {
      getSlider();
    getService();
    getAbout();

    
    };
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Layout>
      <SliderComponent slider={slider} />
      <BestServiceComponent service={service} />
      {/* <AboutCompanyComponent about={about} /> */}
      {/* <WhyChooseUs about={about} /> */}
      {/* <LatestProducts
        settings_003={settings_003}
        settings_005={settings_005}
        products={products}
      /> */}
      {/* <GetPremiumParts banner={banner} /> */}
      {/* <WorkProcess workProcess={workProcess} /> */}
      {/* <Testimonials settings_004={settings_004} /> */}
    </Layout>
  );
};

// export const getServerSideProps = async () => {
//   const service: any[] = await fetchService();
//   const about: AboutType[] = await fetchAbout();
//   const banner: any[] = await fetchBanner();
//   const workProcess: any[] = await fetchProcess();
//   const products: ProductType[] = await fetchProducts();
  

//   return {
//     props: { service, about, banner, workProcess, products,  },
//   };
// };

export default Home;

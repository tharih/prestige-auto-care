import { Inter } from "@next/font/google";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";
import { AboutType, BannerType, WorkProcessType } from "../utils/type";
import { fetchAbout } from "../utils/fetchAbout";
import { fetchService } from "../utils/fetchService";
import WhyChooseUs from "../components/about/WhyChooseUs";
import GetPremiumParts from "../components/about/GetPremiumParts";
import SliderComponent from "../components/home/SliderComponent";
import BestServiceComponent from "../components/home/BestServiceComponent";
import AboutCompanyComponent from "../components/home/AboutCompanyComponent";
import LatestProducts from "../components/home/LatestProducts";
import WorkProcess from "../components/home/WorkProcess";
import Testimonials from "../components/home/Testimonials";
import Layout from "../components/Layout";
import { fetchBanner } from "../utils/fetchBanner";
import { fetchProcess } from "../utils/fetchProcess";

type Props = {
  services: [];
  about: AboutType[];
  banner: BannerType[];
  workProcess: WorkProcessType[];

};
const inter = Inter({ subsets: ["latin"] });

const Home = ({ services, about, banner, workProcess }: Props) => {
  const settings_003 = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    arrows: false,
  };
  const settings_004 = {
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 500,
    arrows: false,
    autoPlay: true,
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
  return (
    <Layout>
      <SliderComponent />
      <BestServiceComponent services={services} />
      <AboutCompanyComponent about={about}/>
      <WhyChooseUs about={about} />
      <LatestProducts settings_003={settings_003} settings_005={settings_005} />
      <GetPremiumParts  banner={banner}/>
      <WorkProcess workProcess={workProcess}/>
      <Testimonials settings_004={settings_004} />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const services: any[] = await fetchService();
  const about: AboutType[] = await fetchAbout();
  const banner: any[] = await fetchBanner();
  const workProcess: any[] = await fetchProcess();
  return {
    props: { services, about, banner, workProcess },
  };
};

export default Home;

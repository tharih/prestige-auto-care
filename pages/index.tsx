import { Inter } from "@next/font/google";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";
import { AboutType } from "../utils/type";
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

type Props = {
  services: [];
  about: AboutType[];
};
const inter = Inter({ subsets: ["latin"] });

const Home = ({ services, about }: Props) => {
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
      <Helmet>
                        
        <meta charSet="utf-8" />
                        <title>Prestige Auto Care - Home</title>
        <meta
          name="description"
          content="Get your amazing Car Solutions Prestige Auto care"
        />
                                     
      </Helmet>
      <SliderComponent />
      <BestServiceComponent services={services} />
      <AboutCompanyComponent />
      <WhyChooseUs about={about} />
      <LatestProducts settings_003={settings_003} settings_005={settings_005} />
      <GetPremiumParts />
      <WorkProcess />
      <Testimonials settings_004={settings_004} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const services: any[] = await fetchService();
  const about: AboutType[] = await fetchAbout();
  return {
    props: { services, about },
    revalidate: 10,
  };
};

export default Home;

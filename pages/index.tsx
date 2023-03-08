import { Inter } from "@next/font/google";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";
import {
  AboutType,
  BannerType,
  ProductType,
  ServiceType,
  WorkProcessType,
} from "../utils/type";
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
import { fetchProducts } from "../utils/fetchProduct";
import Cookie from "js-cookie";
type Props = {
  service: ServiceType[];
  about: AboutType[];
  banner: BannerType[];
  workProcess: WorkProcessType[];
  products: ProductType[];
};
const inter = Inter({ subsets: ["latin"] });

const Home = ({ service, about, banner, workProcess, products }: Props) => {
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
    arrows: false,
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
  return (
    <Layout>
      <SliderComponent />
      <BestServiceComponent service={service} />
      <AboutCompanyComponent about={about} />
      <WhyChooseUs about={about} />
      <LatestProducts
        settings_003={settings_003}
        settings_005={settings_005}
        products={products}
      />
      <GetPremiumParts banner={banner} />
      <WorkProcess workProcess={workProcess} />
      <Testimonials settings_004={settings_004} />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const service: any[] = await fetchService();
  const about: AboutType[] = await fetchAbout();
  const banner: any[] = await fetchBanner();
  const workProcess: any[] = await fetchProcess();
  const products: ProductType[] = await fetchProducts();
  return {
    props: { service, about, banner, workProcess, products },
  };
};

export default Home;

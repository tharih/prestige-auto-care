import Link from "next/link";
import React, { useEffect, useState } from "react";
import About from "../pages/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import stylesLayout from "./Layout.module.css";
type Props = {
  children: any;
};

const Layout = ({ children }: Props) => {
  const [showScrollBtn, setShowScrollBtn] = useState<boolean>(false);
  const scrollTop = () => {
    if (window.scrollY > 100) {
      setShowScrollBtn(true);
    } else {
      setShowScrollBtn(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollTop);
  }, []);

  return (
    <div>
      <Header />
      {children}
      <Footer />
      <Link
        href="#"
        className={`${stylesLayout.scrollToTop} active  scroll-btn ${
          showScrollBtn ? stylesLayout.show : ""
        }`}
      >
        <i className="fa fa-angle-up" />
      </Link>
    </div>
  );
};

export default Layout;

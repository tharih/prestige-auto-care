import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
// import About from "../pages/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import stylesLayout from "./Layout.module.css";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addUser } from "../store/reducers/userReducer";
type Props = {
  children: any;
};

const Layout = ({ children }: Props) => {
  const dispatch = useDispatch();
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
    <Fragment>
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
    </Fragment>
  );
};

export default Layout;

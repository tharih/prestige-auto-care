import React from "react";
import About from "../pages/About";
import Footer from "./components/Footer";
import Header from "./components/Header";

type Props = {
  children: any;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <a href="#" className="backtotop active">
        <i className="fa fa-angle-up" />
      </a>
    </>
  );
};

export default Layout;

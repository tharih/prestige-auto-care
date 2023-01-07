import React, { useEffect, useState } from "react";
import $ from "jquery";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import styles from "./Header.module.css";
import { menuItems } from "../../data/menuItems";
import SideBarItems from "./SideBarItems";
import { FaMapMarkerAlt } from "react-icons/fa";

type Props = {};

const Header = (props: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const handleShowCart = () => {
    setShow(true);
  };
  const handleCloseCart = () => {
    setShow(false);
  };

  const handleShowMobileMenu = () => {
    setShowMobileMenu(true);
  };
  const handleCloseMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <>
      <div
        className={`sidemenu-wrapper d-none d-lg-block ${show ? "show" : ""}`}
      >
        <div className="sidemenu-content">
          <button onClick={handleCloseCart} className="closeButton sideMenuCls">
            <i className="far fa-times" />
          </button>
          <div className="widget woocommerce widget_shopping_cart">
            <h3 className="widget_title">Shopping cart</h3>
            <div className="widget_shopping_cart_content">
              <ul className="woocommerce-mini-cart cart_list product_list_widget">
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </a>{" "}
                  <a href="#">
                    <img src="assets/img/cart/cart_1_1.jpg" alt="Cart Image" />
                    Adderall
                  </a>{" "}
                  <span className="quantity">
                    1 ×{" "}
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      40.00
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </a>{" "}
                  <a href="#">
                    <img src="assets/img/cart/cart_1_2.jpg" alt="Cart Image" />
                    Januvia
                  </a>{" "}
                  <span className="quantity">
                    1 ×{" "}
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      99.00
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </a>{" "}
                  <a href="#">
                    <img src="assets/img/cart/cart_1_3.jpg" alt="Cart Image" />
                    Zubsolv
                  </a>{" "}
                  <span className="quantity">
                    1 ×{" "}
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      56.00
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </a>{" "}
                  <a href="#">
                    <img src="assets/img/cart/cart_1_4.jpg" alt="Cart Image" />
                    Invokana
                  </a>{" "}
                  <span className="quantity">
                    1 ×{" "}
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      23.00
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </a>{" "}
                  <a href="#">
                    <img src="assets/img/cart/cart_1_5.jpg" alt="Cart Image" />
                    Sublocade
                  </a>{" "}
                  <span className="quantity">
                    1 ×{" "}
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      100.00
                    </span>
                  </span>
                </li>
              </ul>
              <p className="woocommerce-mini-cart__total total">
                <strong>Subtotal:</strong>{" "}
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">$</span>
                  318.00
                </span>
              </p>
              <p className="woocommerce-mini-cart__buttons buttons">
                <a href="cart.html" className="as-btn wc-forward">
                  View cart
                </a>{" "}
                <a href="checkout.html" className="as-btn checkout wc-forward">
                  Checkout
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="popup-search-box d-none d-lg-block">
        <button className="searchClose">
          <i className="fal fa-times" />
        </button>
        <form action="#">
          <input type="text" placeholder="What are you looking for" />{" "}
          <button type="submit">
            <i className="fal fa-search" />
          </button>
        </form>
      </div>
      <div
        className={`as-menu-wrapper ${
          showMobileMenu ? "as-body-visible as-menu-area" : ""
        }`}
      >
        <div className="as-menu-area text-center">
          <button onClick={handleCloseMobileMenu} className="as-menu-toggle">
            <i className="fal fa-times" />
          </button>
          <div className="mobile-logo">
            <a href="index.html">
              <img src="assets/img/logo1.png" alt="Prestige Auto Care" />
            </a>
          </div>
          <div className="as-mobile-menu">
            <ul>
              {menuItems.map((item, index) => (
                <SideBarItems item={item} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <header className="as-header header-layout3">
        <div className="header-top-area">
          <div className="header-top">
            <div className="container">
              <div className="row justify-content-center justify-content-md-between align-items-center">
                <div className="col-auto">
                  <p className="header-notice d-none d-lg-block">
                    Welcome To Prestige Auto Care
                  </p>
                </div>
                <div className="col-auto">
                  <div className="header-social">
                    <span className="social-title">Follow Us:</span>{" "}
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>{" "}
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>{" "}
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>{" "}
                    <a href="#">
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-top">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-auto">
                  <div className="logo-style2">
                    <a href="index.html">
                      <img src="assets/img/logo1.png" alt="PrestigeAutoCare" />
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <div className="row align-items-center justify-content-center justify-content-md-end justify-content-lg-between">
                        <div className="col-auto d-none d-lg-block">
                          <div className="header-info">
                            <div className="header-info_icon">
                              <i className="fal fa-envelope-open-text" />
                            </div>
                            <div className="media-body">
                              <span className="header-info_label">
                                Make An Email
                              </span>
                              <div className="header-info_link">
                                <a href="mailto:prestigeautocare@gmail.com">
                                  prestige@gmail.com
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                          <div className="header-info">
                            <div className="header-info_icon">
                              <i className="fal fa-headset" />
                            </div>
                            <div className="media-body">
                              <span className="header-info_label">
                                Call us 24/7
                              </span>
                              <div className="header-info_link">
                                <a href="tel:+61478033023">+61 478 033 023</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto d-none d-xl-block">
                          <div className="header-info">
                            <div className="header-info_icon">
                              <i className="fal fa-clock" />
                            </div>
                            <div className="media-body">
                              <span className="header-info_label">
                                Office Hours
                              </span>
                              <div className="header-info_link">
                                <span>Mon-Sat 8am -6pm</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="header-button">
                        <button
                          type="button"
                          className="icon-btn searchBoxToggler"
                        >
                          <i className="fal fa-search" />
                        </button>{" "}
                        <a
                          className="icon-btn d-none d-md-inline-block"
                          href="https://www.google.com/maps/@24.7758848,90.4527872,14z"
                        >
                          <i className="fal fa-map-marker-alt" />
                        </a>{" "}
                        <button
                          onClick={handleShowMobileMenu}
                          className="as-menu-toggle d-inline-block d-lg-none"
                        >
                          <i className="fal fa-bars" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          <div className="sticky-active">
            <div className="menu-area">
              <div className="container">
                <div className="row justify-content-between align-items-center">
                  <div className="col-auto">
                    <nav className="main-menu menu-style1 d-none d-lg-block">
                      <ul>
                        <li className="">
                          <a href="index.html">Home</a>
                          {/* <ul className="sub-menu">
                        <li>
                          <a href="index.html">
                            Home One <span className="new-label">New</span>
                          </a>
                        </li>
                        <li>
                          <a href="index-2.html">Home Two</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home Three</a>
                        </li>
                        <li>
                          <a href="index-4.html">
                            Home Four <span className="new-label">New</span>
                          </a>
                        </li>
                      </ul> */}
                        </li>
                        <li>
                          <a href="About">About</a>
                        </li>
                        <li className="">
                          <a href="Services">Service</a>
                          {/* <ul className="sub-menu">
                        <li>
                          <a href="Service">Service</a>
                        </li>
                        <li>
                          <a href="service-details.html">Service Details</a>
                        </li>
                      </ul> */}
                        </li>
                        <li className="">
                          <a href="Shop">Shop</a>
                          {/* <ul className="sub-menu">
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul> */}
                        </li>
                        <li className=" mega-menu-wrap">
                          <a href="Price">Price</a>
                          {/* <ul className="mega-menu">
                        <li>
                          <a href="shop.html">Pagelist 1</a>
                          <ul>
                            <li>
                              <a href="index.html">Home One</a>
                            </li>
                            <li>
                              <a href="index-2.html">Home Two</a>
                            </li>
                            <li>
                              <a href="index-3.html">Home Three</a>
                            </li>
                            <li>
                              <a href="index-4.html">Home Four</a>
                            </li>
                            <li>
                              <a href="about.html">About Us</a>
                            </li>
                            <li>
                              <a href="team.html">Team</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Pagelist 2</a>
                          <ul>
                            <li>
                              <a href="team-details.html">Team Details</a>
                            </li>
                            <li>
                              <a href="appointment.html">Appointment</a>
                            </li>
                            <li>
                              <a href="service.html">Service</a>
                            </li>
                            <li>
                              <a href="service-details.html">Service Details</a>
                            </li>
                            <li>
                              <a href="blog.html">Blog</a>
                            </li>
                            <li>
                              <a href="blog-details.html">Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Pagelist 3</a>
                          <ul>
                            <li>
                              <a href="shop.html">Shop</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Shop Details</a>
                            </li>
                            <li>
                              <a href="cart.html">Shopping Cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="wishlist.html">Wishlist</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Pagelist 4</a>
                          <ul>
                            <li>
                              <a href="pricing.html">Price</a>
                            </li>
                            <li>
                              <a href="faq.html">Faq</a>
                            </li>
                            <li>
                              <a href="project.html">Project</a>
                            </li>
                            <li>
                              <a href="project-details.html">Project Details</a>
                            </li>
                            <li>
                              <a href="contact.html">Contact Us</a>
                            </li>
                          </ul>
                        </li>
                      </ul> */}
                        </li>
                        <li>
                          <a href="Contact">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-auto">
                    <div className="d-flex align-items-center">
                      <a href="Contact" className="header-link-btn">
                        <FaMapMarkerAlt
                          color="#fefefe"
                          size={24}
                          style={{ marginRight: 10 }}
                        />
                        Office Location
                      </a>{" "}
                      <button
                        onClick={handleShowCart}
                        className="simple-icon ms-4 sideMenuToggler"
                      >
                        <i className="fal fa-bars" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
